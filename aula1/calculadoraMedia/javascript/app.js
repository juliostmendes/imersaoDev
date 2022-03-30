var nome = "Julio";
var notaPrimeiroBimestre = 9;
var notaSegundoBimestre = 7;
var notaTerceiroBimestre = 4;
var notaQuartoBimestre = 5;

var notaFinal = (
  (notaPrimeiroBimestre +
    notaSegundoBimestre +
    notaTerceiroBimestre +
    notaQuartoBimestre) /
  4
).toFixed(1);

console.log("Bem vindo " + nome);
console.log(notaFinal);

//Comentários
