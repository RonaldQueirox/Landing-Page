const members = [
  { name: 'Peter Quill', id: 'peter' },
  { name: 'Gamora Titan', id: 'gamora' },
  { name: 'Drax o Destruidor', id: 'drax' },
  { name: 'Mantis', id: 'mantis' },
  { name: 'Rocket Raccoon', id: 'rocket' },
  { name: 'I am Groot', id: 'groot' },
];

let ativar__member = 0
const images = document.getElementById('images')
const menu = document.getElementById('menu')
const navigation = document.getElementById('navigation')
const nomeTexto = document.getElementById('member__name')

function muda_button() {
  const prev = document.getElementById('button__prev')
  const pri = ativar__member == 0

  prev.disabled = pri

  const next = document.getElementById('button__next')
  const ult = ativar__member + members.length(-1)
  next.disabled = ult
}

function mudar_membro(memberId) {
  ativar__member = memberId
  const membro = members[ativar__member]
  console.log(ativar__member, membro)

  images.style.transform = `translateY(${-100*ativar__member}vh)`
  nomeTexto.classList = membro.id
  changeName(membro.name)
  muda_button()
}

function nav__member(direcao) {
  mudar_membro(ativar__member + direcao)
  ativar__member = ativar__member + direcao
 
}

function mudar_menu() {
  menu.classList.toggle('active')
  navigation.classList.toggle('active')
}

function setMember(membroId) {
  mudar_membro((membroId))
  mudar_menu()
}