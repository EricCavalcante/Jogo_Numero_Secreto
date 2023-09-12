function verifyIfGuessHaveAValidValue(guess){
    const number = +guess

    if(invalidGuess(number)){
        guessElement.innerHTML += `<div>Valor inválido</div>`
        return
    }

    if(guessIsBiggerOrSmallerThanTheValue(number)){
        guessElement.innerHTML += `<div>Valor inválido: o número secreto precisa estar entre ${smallerValue} e ${biggerValue}`
        return
    }

    if (number === randomNumber){
        document.body.innerHTML = `
        <h1>Você Acertou!</h1>
        <h3>O número secreto era ${randomNumber}</h3>

        <button id="play-again" class="btn-play">Jogar Novamente</button>

        `
    } else if(number > randomNumber){
        guessElement.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        guessElement.innerHTML +=
        `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
}

function invalidGuess(number) {
    return Number.isNaN(number)
}

function guessIsBiggerOrSmallerThanTheValue(number){
    return number > biggerValue || number < smallerValue
}

document.body.addEventListener('click', e =>{
    if(e.target.id =='play-again') {
        window.location.reload()
    }
})
