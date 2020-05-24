
function sendBtn() {
    inputElementNomeEscola1 = document.getElementById('escola1').value
    inputElementNomeEscola2 = document.getElementById('escola2').value
    inputElementNotaAluno1 = parseInt(document.getElementById('nota1-escola1').value)
    inputElementNotaAluno2 = parseInt(document.getElementById('nota2-escola1').value)
    inputElementNotaAluno3 = parseInt(document.getElementById('nota3-escola1').value)
    inputElementNotaAluno01 = parseInt(document.getElementById('nota1-escola2').value)
    inputElementNotaAluno02 = parseInt(document.getElementById('nota2-escola2').value)
    inputElementNotaAluno03 = parseInt(document.getElementById('nota3-escola2').value)
    soma1 = inputElementNotaAluno1 + inputElementNotaAluno2 + inputElementNotaAluno3
    soma2 = inputElementNotaAluno01 + inputElementNotaAluno02 + inputElementNotaAluno03
    maxnota1 = Math.max(inputElementNotaAluno1, inputElementNotaAluno2, inputElementNotaAluno3)
    maxnota2 = Math.max(inputElementNotaAluno01, inputElementNotaAluno02, inputElementNotaAluno03)
    if (soma1 > soma2) {
        document.getElementById('textE').innerHTML =
            `Escola ${inputElementNomeEscola1} tem as melhores notas<br><br>
        nota 1° aluno:${inputElementNotaAluno1}<br>
        nota 2° aluno:${inputElementNotaAluno2}<br>
        nota 3° aluno:${inputElementNotaAluno3}<br><br>
        nota total:${soma1}<br>
        melhor nota: ${maxnota1}`
    }
    else {
        document.getElementById('textE').innerHTML =
            `Escola ${inputElementNomeEscola2} tem as melhores notas <br>
        nota 1°:${inputElementNotaAluno01}<br>
        nota 2° aluno:${inputElementNotaAluno02}<br>
        nota 3° aluno:${inputElementNotaAluno03}<br><br>
        nota total:${soma2}<br>
        melhor nota: ${maxnota2} 
        
    `
    }
}



