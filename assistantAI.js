

const question = document.getElementById("question"),
    submit = document.getElementById("submit");
submit.addEventListener("click", () => {
});

export function getAnswer(e) {
    var t, n, o = question.value;
    "How are you" == o ? ((n = document.createElement("div")).classList.add("answer"), (t = document.createElement("p")).innerText = "I am fine", n.appendChild(t), document.body.appendChild(n)) : "Where are you" === o && ((t = document.createElement("div")).classList.add("answer"), (n = document.createElement("p")).innerText = "I am at home", t.appendChild(n), document.body.appendChild(t))
}