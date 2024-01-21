const elementosDuvida =  document.querySelectorAll('.duvida')
const botaoMenu = document.querySelector('.ph-list')
const header = document.querySelector('header')
const headerDiv = document.querySelector('header div')

elementosDuvida.forEach(function (duvida){
  duvida.addEventListener('click', function (){
    duvida.classList.toggle("ativa")
  })
})

botaoMenu.addEventListener('click', () => {
  header.classList.toggle('menu')
  headerDiv.classList.toggle('active')
})
