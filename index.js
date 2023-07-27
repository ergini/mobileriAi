const question = document.getElementById('question');
const submit = document.getElementById('submit');

submit.addEventListener('click', () => {
    const questionValue = question.value;
    if (questionValue == "How are you") {
        // Create a div element with a paragraph inside
        const div = document.createElement('div');
        div.classList.add('answer');
        const p = document.createElement('p');
        p.innerText = "I am fine";
        div.appendChild(p);
        document.body.appendChild(div);
    } else if (questionValue === "Where are you") {
        const div = document.createElement('div');
        div.classList.add('answer');
        const p = document.createElement('p');
        p.innerText = "I am at home";
        div.appendChild(p);
        document.body.appendChild(div);
    }

})