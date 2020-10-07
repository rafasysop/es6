class listaConvidados {
    constructor(){
        this.convidados = [];
    }

    adicionar(nome, idade, cpf){
       this.convidados.push({nome: nome, idade: idade, cpf: cpf});
       
    }

    listarConvidados() {
        console.log(this.convidados);
    }
}



var listaConv = new listaConvidados();

document.getElementById("novoConvidado").onclick = function(){
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var cpf = document.getElementById("cpf").value;

    listaConv.adicionar(nome, idade, cpf);
};

document.getElementById("listarConvidado").onclick = function() {
    listaConv.listarConvidados();
}