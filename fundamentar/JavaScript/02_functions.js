
function hello(){
    console.log("Olá")
    console.log("Hello")
    console.log("Dia Duit")
    console.log("Hallo")
    document.write(
        "Olá <br> Hello <br> Dia Duit <br> Hallo"
    )
}

const sum = function(number1, number2){
    var num1 = document.getElementById(number1).value;
	var num2 = document.getElementById(number2).value;
    let soma = parseInt(num1) + parseInt(num2)
    console.log(soma)
    document.write(
        soma
    )
}

let subject = 'create video'

function createThink(subject){
    subject = 'study'
    return subject
}

console.log(createThink(subject))
console.log(subject)

const sayMyName = () => {
    var name = "Guilherme Araujo"
    console.log(name)
    document.write(name)

}

function Person(name) {
    this.name = name
    this.remando = function(){
        return this.name + " está remando"
    }
    this.mapa = function(){
        return this.name + " está lendo o mapa"
    }
    this.vela = function(){
        return this.name + " está içando as velas"
    }
}

const marujo = new Person("Guilherme")
const capitao = new Person("Mateus")
const imediato = new Person("Rogério")


console.log(marujo.remando())
console.log(capitao.mapa())
console.log(imediato.vela())

function estadoNavio(){
    document.write(marujo.remando()+"<br>"+imediato.vela()+"<br>"+capitao.mapa())
}



