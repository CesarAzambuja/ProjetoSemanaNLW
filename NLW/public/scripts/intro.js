// comentarios
// document.write("Hello")


//variaveis, tipos de dados
let myvar = "Hello"
const myconst = "he"
document.write(myconst+myvar)


//string
 const s1 = "Isso é uma String"
const s2 = 'Isso tambem é um string'
document.write(s2)


//number
const n1 = 1
const n2 = 10
document.write(n1+n2)


//boolean - true ou false
const bTrue = true
const bFalse = false
document.write(bTrue)


//objeto todos objetos de propriedades e funcionalidades
const pessoa = {
altura: "1,80m",
idade: 24,
solteiro: true,
correr(){
return "run Forest"
    }
}
document.write(pessoa.correr())



//Array (Vetores)
[ ... ]
 const colecaodebolinhas = ["blue", "green", 1, {name:"My Name"}]
 document.write(colecaodebolinhas[3].name)




//funções - -Funcionalidade - atalhos - reuso de codigos
//Registra função
function sayMyName(name){
document.write(name)
}

// // Executar função
sayMyName("Douglas")
sayMyName("César")
sayMyName("Pedro")
sayMyName("Augusto")



//condicionais
const notafinal = 3
if(notafinal < 5 ) { 
    document.write("Reprovado")
  } else {
    document.write("Aprovado") 
}


//loop ou repetições 
for (i = 0; i < 20; i = i+2) {
document.write(`<p>${i}</p>`)
}
