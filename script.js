function contar() {
    let inicio = document.getElementById('inicio').value
    let fim = document.getElementById('fim').value
    let passo = document.getElementById('passo').value
    let res = document.getElementById('resultado')

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        alert('ERRO! Digite um número')
    } else {
        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)
        res.innerHTML = 'Contando: '

        // Contagem Regressiva
        if (i < f) {
            for (let contando = i; contando <= f; contando += p){
                res.innerHTML += `${contando} \u{27A1}` 
            }
            res.innerHTML += `\u{2714}`
        // Contagem Progressiva
        } else {
            for (let contando = i; contando >= f; contando -= p){
                res.innerHTML += `${contando} \u{27A1}` 
            }
            res.innerHTML += `\u{2714}`
        } 
        
    }
}