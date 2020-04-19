
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
   //console.log(document.getElementById("agradecimento"))
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("http://wobben.com.br");
    window.location.href = "http://wobben.com.br";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Qualquer coisa";
    elemento.innerHTML = "Qualquer coisa";
    //alert("trocar texto")
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
    
}

/*
function soma (n1, n2){
    return n1 + n2;
}


function validadeIdade (idade) {
    var validar;
    if(idade >= 18){
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

alert(soma(6,8));
var idade = prompt("Qual é a idade: ");
console.log(validadeIdade(idade));
*/
/*
var d = new Date();
alert(d.getDate());
alert(d.getMinutes());
alert(d.getDay());
alert(d.getMonth()+1);
*/
/*
var count;
for(count=0; count <=5; count++) {
    console.log(count);
};
*/

/*
var count = 0;

while(count <= 5){
    console.log(count);
    alert(count);
    count++;
}
*/


/*
var idade = prompt("Qual é a sua idade: ");
//var idade = 17.99;

if (idade >= 18){
    alert("Maior de idade");
} else {
    alert("Menor de idade");
}
*/


/*
var frutas = [{nome: "Maça", cor: "vermelha"}, {nome: "Uva", cor: "roxa"}];
console.log(frutas)
console.log(frutas[1]);
*/

//var fruta = {nome: "Maça", cor: "vermelha"}
//console.log(fruta.nome)
//console.log(fruta)




//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");
//lista.pop()

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" / "));
//console.log(lista);
//console.log(lista.length);
//console.log(lista.reverse());


/*
var nome = "Esdras Costa";
var idade = 30;
var frase = "Curintia é o melhor time do mundo";
//alert(nome + " tem " + idade+" anos!");

console.log(nome);
console.log(idade + 3);
//console.log(frase)
//console.log(frase.replace("Curintia", "Corinthians"));
console.log(frase.toUpperCase());*/

