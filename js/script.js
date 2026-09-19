const modal = document.querySelector('.modal')
const botoes = document.querySelectorAll('#trabalhos .btn')
const fechar = document.querySelector('.fechar')

console.log(botoes)

function abrirModal(trabalhoNum) {
    console.log("Trabalho Número " + trabalhoNum)
    modal.style.display = 'flex'
    document.body.style.overflow = 'hidden'
}
function fecharModal() {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}
botoes.forEach(function (botao, i) {
    botao.addEventListener('click', function (evento) {
        evento.preventDefault()
        abrirModal(i)
    })
})
fechar.addEventListener('click', fecharModal)
const btnMenu = document.getElementById('btnMenu')
const menu = document.getElementById('menu')
const main = document.querySelector('main')
btnMenu.addEventListener('click', () => {
    menu.classList.toggle('show')
})
main.addEventListener('click', () => {
    menu.classList.remove('show')
})
const enviar = document.getElementById('enviar')

enviar.addEventListener('click', () => {

    const nome = document.getElementById('nome').value.trim()
    const email = document.getElementById('email').value.trim()
    const telefone = document.getElementById('telefone').value.trim()
    const msg = document.getElementById('msg').value.trim()
    if (nome != '' && email != '' && telefone != '' && msg != '') {
        const meuNumero = '5511939593027'

        const textMsg =
            `*Nova mensagem recebida pelo site*
*Nome:* ${nome}
*E-mail:* ${email}
*Telefone:* ${telefone}
*Mensagem:*
${msg}`

        const codText = encodeURIComponent(textMsg)
        const waweb = `https://web.whatsapp.com/send?phone=${meuNumero}&text=${codText}`
        window.open(waweb, '_blank')
    } else {
        window.alert('Por favor, preencha o formulário para enviar uma mensagem!')
    }
})
//Mostra ano//
const ano = document.getElementById('year')
let anoAtual = new Date().getFullYear()
ano.innerHTML = anoAtual