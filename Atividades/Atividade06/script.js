const input = document.querySelector("#inputTarefa")
const lista = document.querySelector("#listaTarefas")
const botao = document.querySelector("#botaoAdicionar")

botao.addEventListener("click", function(){
    console.log(input.value)
    
    const item = document.createElement("li")
    item.textContent = input.value
    lista.appendChild(item)
    input.value = ""
})