//Variaveis Global
let res = document.getElementById('res')
let exibir = document.getElementById('exibir')

let calculo = document.getElementById('calculadora')
let tabuada = document.getElementById('tabuada')
let cal = document.getElementById('cal')
let tab = document.getElementById('tab')

calculo.style.display = 'none'
tabuada.style.display = 'none'

function opcao() {
    if(cal.checked) {
        //calculo.style.display = 'block'
        exibir = calculo.style.display = 'block'
        tabuada.style.display = 'none'
    }else if(tab.checked){
        //tabuada.style.display = 'block'
        exibir = tabuada.style.display = 'block'
        calculo.style.display = 'none'
    }else if(cal.checked && tab.checked){
        exibir = calculo.style.display = 'none'
        exibir += tabuada.style.display = 'none'
    }else{
        window.alert("Selecione uma opção!")
        calculo.style.display = 'none'
        tabuada.style.display = 'none'
    }

    
}


//Calculadora
let mult = document.getElementById('mu')
let div = document.getElementById('di')
let som = document.getElementById('so')
let sub = document.getElementById('su')
let tx1 = document.getElementById('txt1')
let tx2 = document.getElementById('txt2')
function calcular() {
    let t1 = Number(tx1.value)
    let t2 = Number(tx2.value)

    if(mult.checked) {
        res.innerHTML = `R:<strong> ${t1*t2}</strong>`
    }else if(div.checked) {
        res.innerHTML = `R:<strong>  ${t1/t2}</strong>`
    }else if(som.checked){
        res.innerHTML = `R:<strong>  ${t1+t2}</strong>`
    }else if(sub.checked){
        res.innerHTML = `R:<strong>  ${t1-t2}</strong>`
    }else {
        window.alert("Selecione uma Opção !")
    }

    
}

//Tabuada
let valor = document.getElementById('txtn')
let ti = document.getElementById('txti')
let tf = document.getElementById('txtf')

function tabu() {
    if(valor.value.length == 0){
        window.alert("Informe o Número !")
    }else if (ti.value.length == 0){
        window.alert('Informe o valor de Inicio !')
    }else if (tf.value.length == 0){
        window.alert('Informe o valor de Fim !')
    }else{
        //window.alert('OK')
        //conversão
        let v = Number(valor.value)
        let i = Number(ti.value)
        let f = Number(tf.value)
        let c = 0
        
        res.innerHTML = `Tabuada Do<strong> ${v}</strong> com Inicio em <strong>${i}</strong> e Finalizando em<strong> ${f}</strong>!<br>`
        for(c = i; c <= f; c++){
            res.innerHTML += `<p>${v} X ${c} = ${v*c}</p>`
        }
        
        /*while(i <=f ){
            res.innerHTML += `<p>${v} X ${i} = ${v*i}</p>`
            i++
        }*/
    }
}




    