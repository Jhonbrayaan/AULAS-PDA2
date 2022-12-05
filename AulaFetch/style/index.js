document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:3000/usuario")
        .then(res => res.json())
        .then(res => {
            const usuarios = res.usuarios;
            const getId = document.querySelector("#users");
            usuarios.map(usuario => {
                const li = document.createElement("li")
                li.innerHTML = usuario.nome
                getId.appendChild(li)
            })
        }).catch(error => {
            console.log(error)
        })
})

async function enviar() {
    const cep = document.getElementById("input-cep");
    const valorCep = cep.value
    const adress = await fetch(`https://viacep.com.br/ws/${valorCep}/json/`)
    const jsonAdress = await adress.json()
    console.log(jsonAdress)
    const tableCep = document.getElementById("table-cep");
    const tr = document.createElement("tr");
    for (var atributo in jsonAdress) {
        const td = document.createElement("td");
        td.innerHTML = jsonAdress[atributo];
        tr.appendChild(td);
        
    }
    tableCep.appendChild(tr);
}
