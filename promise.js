function funcao() {
    var promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve();
        }, 5000);// espera cinco segundos para resolver a promise
    });
    console.log(new Date(), 'antes de executar a promise');
    promise
        .then(function (result) {
            console.log(new Date(), 'resposta da promise');
        })
        .catch(function (error) {
            console.log(new Date(), 'Erro na promise');
        });
    console.log(new Date(), 'após iniciar a promise');
};
funcao();
