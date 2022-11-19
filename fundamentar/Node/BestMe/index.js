const questions = [
    "O que aprendi hoje?",
    "O que me deixou chateado? E o que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?"
]

const ask = (index = 0) => {
    process.stdout.write(questions[index] + '\n')
}

ask()

const answers = []

process.stdin.on("data", data => {
    console.clear()
    answers.push(data.toString().trim())
    if (answers.length < questions.length){
        ask(answers.length)
    }
    else{
        process.exit()
    }
})

process.on('exit', () => {
    console.clear()
    console.log(`
                O que você aprendeu hoje foi: 
                ${answers[0]}
                
                O que te deixou chateado e que você poderia melhorar foi:
                ${answers[1]}
                
                O que te deixou feliz hoje foi:
                ${answers[2]}
                                
                Você ajudou ${answers[3]} pessoas hoje!`
    )
})