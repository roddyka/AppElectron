var loki = require('lokijs');
var db = new loki('db.json');
var clientes = db.addCollection('clientes');


//clientes.insert({
//  nome: "Rodrigo",
//  email:"contato@antunesweb.com.br",
//  telefone: "36140713"
//});
//db.save();

function ready(fn){
  if(document.readyState != 'loading'){
    fn();
  }else{
    document.addEventListener('DOMContentLoaded', fn);
  }
}
ready(function(){
  document.querySelector("#salvar").addEventListener("click",function(e){
    e.preventDefault();
    let data = {
      nome: document.querySelector("#nome").value,
      cpf: document.querySelector("#cpf").value,
      telefone: document.querySelector("#telefone").value
    }
    clientes.insert(data);
    db.save();
    alert('Salvo com sucesso!');
    document.querySelector("#cadastro-cliente").reset();
  });
});
