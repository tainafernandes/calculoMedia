const notas = []

function adicionarNota () {
  var inputNotas = parseInt(document.getElementById("notas").value)
  document.getElementById("notas").value = ""
  if (inputNotas > 10 || inputNotas < 0){
    return alert ("Nota inválida!! Digite um valor de 0 à 10")
  } 
  if (isNaN(inputNotas)) { 
    return alert ("Por favor, insira um número!")
  }
  notas.push (inputNotas)
  texto.innerHTML = "As notas digitadas foram: " + notas.join(", ") + "<br><br>"
}

function calcularMedia() {
  var texto = document.getElementById("texto")

  var soma = notas.reduce(function(soma, i){
    return soma + i
  })
  var media = soma / notas.length
  var mediaFixada = media.toFixed(1)

  texto.innerHTML += "Caro aluno, sua média foi: " + mediaFixada + "<br>"   

  if (mediaFixada >= 5) {
    texto.innerHTML += "Parabéns!! Você foi aprovado!!!" + "<br>"
  } else if (notaFixada < 5) {
    texto.innetHTML += "Sinto muito, mas você foi Reprovado!" + "<br>"
  }
  notas.splice(0, notas.length)
}

