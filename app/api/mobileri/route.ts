import { auth } from '@clerk/nextjs'
import fs from 'fs'
import { NextResponse } from 'next/server'
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from 'openai'

import { increaseApiLimit, checkApiLimit } from '@/lib/apiLimit'
import { checkSubscription } from '@/lib/subscription'

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

const instructionMessage: ChatCompletionRequestMessage = {
    role: 'system',
    content: `
    Your name is Enisi and work at Mobileria Toni.
    You speak only albanian, not any other language. 
    You are a furniture salesman. 
    After u ask the needed information, you should give them a suggestion and tell them the price based on Kosovo markets.
    You should ask the customer what they are looking for. 
    Request the phone number from them and when they give the phone number say goodbye.  
    Currency is euro. 
    Location of our store is at Ferizaj, Kosovë and the number of the owner is +383 46 135 392.
    Try hard to sell the product.
    `,

}

export async function POST(
    req: Request
) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { messages } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 })
        }

        if (!configuration.apiKey) {
            return new NextResponse("OpenAI API Key not configured", { status: 500 })
        }

        if (!messages) {
            return new NextResponse("Messages not provided", { status: 400 })
        }

        const freeTrial = await checkApiLimit();
        const isPro = await checkSubscription();

        if (!freeTrial && !isPro) {
            return new NextResponse("Free trial limit reached", { status: 403 })
        }

        const response = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [instructionMessage, ...messages],

        })

        // Save response in a file called conversation.txt
        fs.appendFile('mobileria.json', JSON.stringify(response.data.choices), function (err) {
            if (err) throw err;
            console.log('Saved!');
        });

        if (!isPro) {
            await increaseApiLimit();
        }


        return NextResponse.json(response.data.choices[0].message)


    } catch (error) {
        console.log("Conversation error", error)
        return new NextResponse("iNTERNAL ERROR", { status: 500 })
    }
}