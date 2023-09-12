const biggerValue = 100
const smallerValue = 1
const randomNumber = generateRandomNumber()

function generateRandomNumber(){
    return parseInt(Math.random() * biggerValue + 1)
}

console.log("Numero secreto:", randomNumber)

const smallerValueValueElement = document.getElementById('menor-valor')
smallerValueValueElement.innerHTML = smallerValue

const biggerValueElement = document.getElementById('maior-valor')
biggerValueElement.innerHTML = biggerValue