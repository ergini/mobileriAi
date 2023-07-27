"use client"

import axios from "axios";
import * as z from "zod";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import Heading from "@/components/Heading";
import Empty from "@/components/Empty";
import Loader from "@/components/Loader";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { formSchema } from "./constants";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChatCompletionRequestMessage } from "openai";
import { cn } from "@/lib/utils";
import UserAvatar from "@/components/UserAvatar";
import BotAvatar from "@/components/BotAvatar";
import { useProModal } from "@/hooks/useProModal";
import { toast } from "react-hot-toast";
import { Analytics } from '@vercel/analytics/react';

export default function Conversation() {
    const proModal = useProModal()
    const router = useRouter();
    const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: "",
        }
    })

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const userMessage: ChatCompletionRequestMessage = {
                role: 'user',
                content: values.prompt,
            }
            const newMessages = [...messages, userMessage];

            const response = await axios.post('/api/mobileri', {
                messages: newMessages,
            })

            setMessages((current) => [...current, userMessage, response.data])

            form.reset()

        } catch (error: any) {
            if (error?.response?.status === 403) {
                proModal.onOpen()
            } else {
                toast.error("Something went wrong!")
            }
            
        } finally {
            router.refresh();
        }
    }

    return (
        <div>
            <Heading
                title="Mobileria AI"
                description="Une jam asistenti juaj virtual dhe do te iu ndihmoj te gjeni produktin qe po kerkoni"
                icon={MessageSquare}
                iconColor="text-yellow-500"
                bgColor="bg-yellow-500/10"
            />
            <div className="px-4 lg:px-8">
                <div>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className='rounded-lg border w-full p-2 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2'
                        >
                            <FormField
                                name="prompt"
                                render={({ field }) => (
                                    <FormItem className='col-span-12 lg:col-span-10'>
                                        <FormControl className="m-0 p-0">
                                            <Input
                                                className='border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent'
                                                disabled={isLoading}
                                                placeholder="Fillo biseden ketu..."
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <Button className='col-span-12 lg:col-span-2 w-full' disabled={isLoading}>
                                Generate
                            </Button>
                        </form>
                    </Form>
                </div>
                <div className='space-y-4 mt-4'>
                    {isLoading && (
                        <div className='p-8 rounded-lg w-full flex items-center justify-center bg-muted'>
                            <Loader />
                        </div>
                    )}
                    {messages.length === 0 && !isLoading && (
                        <Empty label='Si mund te iu ndihmojme?' />
                    )}
                    <div className='flex flex-col gap-y-4'>
                        {messages.map((message) => (
                            <div
                                key={message.content}
                                className={cn(
                                    'p-8 w-full flex items-start gap-x-8 rounded-lg', message.role === 'user' ? 'bg-white border border-black/10' : 'bg-muted'
                                )}
                            >
                                {message.role === 'user' ? <UserAvatar /> : <BotAvatar />}
                                <p className='text-sm'>
                                    {message.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Analytics />
        </div>
    )
}