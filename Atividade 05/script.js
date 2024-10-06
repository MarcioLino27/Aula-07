const somar = (num1) => {
    return (num2) => {
        return num1 + num2;
    };
};

const somaComCinco = somar(5);
const resultado = somaComCinco(3);
console.log(`A soma é: ${resultado}`);
