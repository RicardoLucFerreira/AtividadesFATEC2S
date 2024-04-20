/* Crie funções que devem ter como parâmetro uma propriedade “lista” que vai receber um array com vários números, as funções devem ser criadas para devolver os dados conforme solicitado:
[ X ]Uma função que devolve os valores que são maiores que a média
[ X ]Uma função que devolva o menor valor da lista
[ X ]Uma função que devolva o valor da soma dos itens da lista
[ X ]Uma função que devolva todos os valores que são menores que 20
[ X ]Uma função que vai devolver o primeiro e o último valor da lista
*/
function valoresMaioresQueMedia(valores) {
  return valores.filter(num => num > valores.reduce((accumulator, current) => accumulator + current, 0)/valores.length)
}


function menorValor(valores) {  
  return Math.min(...valores)
}

function somaDosItens(valores) {
  return valores.reduce((accumulator, current) => accumulator + current, 0)
}

function valoresMenoresQue20(valores) {
  return valores.filter(num => num < 20)
}


function primeiroEUltimo(valores) {
  
  return [valores[0], valores[valores.length-1]]
}

/* ==== Não apagar ==== */
module.exports = {
  valoresMaioresQueMedia,
  menorValor,
  somaDosItens,
  valoresMenoresQue20,
  primeiroEUltimo
}
