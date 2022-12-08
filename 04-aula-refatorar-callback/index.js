function mensagemGabriel() {
    const promiseMensagemGabriel = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bebam Água!');
            resolve()
        }, 0);
    });
    return promiseMensagemGabriel;
}

function mensagemRafael() {
    console.log('Hidratado? Bora pra cima!');
}

mensagemGabriel().then(mensagemRafael);
// mensagemRafael();

//acessar o arquivo: cd nome da pasta
// node . || node index.js 