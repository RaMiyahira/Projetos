const input = document.querySelector("#inputTarefa")
const lista = document.querySelector("#listaTarefas")
const botao = document.querySelector("#botaoAdicionar")

botao.addEventListener("click", function () {
    const textoTarefa = input.value.trim()

    if (textoTarefa === "") {
        return
    }

    const item = document.createElement("li")
    item.textContent = textoTarefa
    lista.appendChild(item)

    input.value = ""
})

lista.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.classList.add("concluida")

        setTimeout(function () {
            event.target.remove()
        }, 500)
    }
})