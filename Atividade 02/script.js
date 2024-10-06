const contarVogais = (str) => {
    const vogais = 'aeiouAEIOU';
    let contador = 0;

    for (let letra of str) {
        if (vogais.includes(letra)) {
            contador++;
        }
    }

    return contador;
};

const resultado = contarVogais("teste");
console.log(resultado);
