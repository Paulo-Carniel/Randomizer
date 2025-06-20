const num1 = Math.floor(Math.random() * 100) + 1

function outcome() {

    let tentativa = Number(document.getElementById('num-one').value)
    if (num1 > tentativa){
        document.getElementById('resultArea').innerHTML = 'Voce digitou um numero MENOR, tente novamente'
    }
    else if (num1 === tentativa){
        document.getElementById('resultArea').innerHTML = 'Voce digitou o numero correto, PARABENS'
    }
    else {
        document.getElementById('resultArea').innerHTML = 'Voce digitou um numero MAIOR, tente novamente'
    }    
}