/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header div')
const toggle = document.querySelectorAll('#toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show-menu')
  })
}