const operacoesMatematicas = (num1, num2, callback) => {
    return callback(num1, num2);
};

const somar = (a, b) => a + b;

const subtrair = (a, b) => a - b;

const multiplicar = (a, b) => a * b;

const dividir = (a, b) => a / b;

const numero1 = 10;
const numero2 = 5;

const resultadoSoma = operacoesMatematicas(numero1, numero2, somar);
console.log(`A soma é: ${resultadoSoma}`);

const resultadoSubtracao = operacoesMatematicas(numero1, numero2, subtrair);
console.log(`A subtração é: ${resultadoSubtracao}`);
const resultadoMultiplicacao = operacoesMatematicas(numero1, numero2, multiplicar);
console.log(`A multiplicação é: ${resultadoMultiplicacao}`);

const resultadoDivisao = operacoesMatematicas(numero1, numero2, dividir);
console.log(`A divisão é: ${resultadoDivisao}`);