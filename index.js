const notas = []

function adicionarNota () {
  var inputNotas = parseInt(document.getElementById("notas").value)
  notas.push (inputNotas)
  console.log(notas)
  if (inputNotas > 10 || inputNotas < 0){
    alert ("Nota inválida!! Digite um valor de 0 à 10")
  }
  document.getElementById("notas").value = ""
}

function calcularMedia() {
  var texto = document.getElementById("texto")
  texto.innerHTML = ""
  var soma = notas.reduce(function(soma, i){
    return soma + i
  })
  var media = soma / 4
  var mediaFixada = media.toFixed(1)

  texto.innerHTML += "Caro aluno, sua média foi: " + mediaFixada + "<br>"   

  if (mediaFixada >= 5) {
    texto.innerHTML += "Parabéns!! Você foi aprovado!!!" + "<br>"
  } else if (notaFixada < 5) {
    texto.innetHTML += "Sinto muito, mas você foi Reprovado!" + "<br>"
  }
  
}






// array vazio
// ao clicar no adicionar nota vai add no array
//criar outro botão para cálculo de média