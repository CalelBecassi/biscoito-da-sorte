//variaveis
const messages = [
  'A vida trará coisas boas se tiveres paciência.',
  'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.',
  'Não compense na ira o que lhe falta na razão.',
  'Defeitos e virtudes são apenas dois lados da mesma moeda.',
  'A maior de todas as torres começa no solo.',
  'Não há que ser forte. Há que ser flexível.',
  'Gente todo dia arruma os cabelos, por que não o coração?',
  'Há três coisas que jamais voltam: a flecha lançada, a palavra dita e a oportunidade perdida.',
  'A juventude não é uma época da vida, é um estado de espírito.',
  'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
  'Dê toda a atenção para a formação dos teus filhos, sobretudo por exemplos de tua própria vida.',
  'Siga os bons e aprenda com eles.',
  'Não importa o tamanho da montanha, ela não pode tapar o sol.',
  'O bom-senso vai mais longe do que muito conhecimento.',
  'Quem quer colher rosas deve suportar os espinhos.',
  'São os nossos amigos que nos ensinam as mais valiosas lições.',
  'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.'
]

const openCookie = document.querySelector('#open-cookie')
const openCookieAgain = document.querySelector('#open-again')
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let randomNumber = Math.round(Math.random() * (messages.length-1))

//eventos
openCookie.addEventListener('click', raffleCookie)
openCookieAgain.addEventListener('click', raffleCookieAgain)
document.addEventListener('keypress', pressEnter)

//funcoes
function raffleCookie() {
  screen2
  .querySelector('#luck-message p')
  .innerText = messages[randomNumber]

  toggleScreen()
}

function raffleCookieAgain() {
  randomNumber = Math.round(Math.random() * (messages.length-1))

  toggleScreen()
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function pressEnter(e) {
  if (e.key === 'Enter' && screen2.classList.contains("hide")){
    raffleCookie()
  }

  else if (e.key === 'Enter' && screen1.classList.contains("hide")){
    raffleCookieAgain()
  }
}