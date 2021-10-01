const notas = []

function adicionarNota () {
  var inputNotas = parseInt(document.getElementById("notas").value)
  notas.push (inputNotas)
  console.log(notas)
  if (inputNotas > 10 || inputNotas < 0){
    alert ("Nota inválida!! Digite um valor de 0 à 10")
  }
  document.getElementById("notas").value = ""
  texto.innerHTML = ""
  texto.innerHTML += "As notas digitadas foram: " + notas + ", " + "<br>" + "<br>"
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

