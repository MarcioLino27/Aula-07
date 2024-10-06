const autenticarUsuario = (usuario, senha, onSucesso, onFalha) => {
    const usuarioValido = "usuario123";
    const senhaValida = "teste";

    if (usuario === usuarioValido && senha === senhaValida) {
        onSucesso(usuario);
    } else {
        onFalha();
    }
};

const loginSucesso = (usuario) => {
    document.getElementById('resultado').innerText = `Bem-vindo, ${usuario.toLowerCase()}!`;
};

const loginFalha = () => {
    document.getElementById('resultado').innerText = "Falha na autenticação. Usuário ou senha incorretos.";
};

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    autenticarUsuario(usuario, senha, loginSucesso, loginFalha);
});
