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


