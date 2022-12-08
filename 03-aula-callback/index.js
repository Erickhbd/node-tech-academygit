function mensagemGabriel(callback) {
    setTimeout(() => {
        console.log('Bebam Água!');
        callback();
    }, 0);
}

function mensagemRafael() {
    console.log('Hidratado? Bora pra cima!');
}

mensagemGabriel(mensagemRafael);
// mensagemRafael();