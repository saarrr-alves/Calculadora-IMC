function calculadora() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    if(peso == "") {
        alert("Digite um peso válido!");
    } else if(altura == "") {
        alert("Digite uma altura válida!");
    } else {
        let IMC = Number(peso) / Number(altura*altura);

        document.getElementById("resultado").textContent = "O seu IMC é: " + IMC.toFixed(2);
    }
}