const articles = [
    {
        id: 1,
        title: 'Se cuida Quinto Andar! Airbnb agora oferece serviço de aluguéis para inquilinos',
        description: 'Imagine a possibilidade de morar em uma casa diferente a cada temporada, todas mobiliadas, perfeitas para levar somente uma mala de roupas e morar.'
    },
    {
        id: 2,
        title: 'Você é um influenciador no trabalho? Faça o teste e descubra',
        description: 'Profissionais que querem subir na carreira precisam saber influenciar',
    }
];

function getArticles() {
    return articles;
}

function getArticleById(articleId) {
    return articles.find(article => {
        return article.id === Number(articleId)
    });
}

export { getArticles, getArticleById }