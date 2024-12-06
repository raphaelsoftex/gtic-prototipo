function redirectToPage(page) {
    let url;
    switch (page) {
        case 'loading':
            url = 'loading.html';
            break;
        case 'cadastro':
            url = 'cadastro.html'; // Certifique-se de que esse arquivo está na mesma pasta
            break;
        case 'dashboard':
            url = 'dashboard.html';
            break;
        default:
            url = 'index.html';
    }
    console.log(`Redirecionando para: ${url}`); // Debug
    window.location.href = url;
}

function login() {
    // Aqui você pode implementar a lógica de login
    // Por enquanto, vamos redirecionar para a tela de carregamento
    setTimeout(() => {
        window.location.href = "dashboard.html";
    }, 2000); // Redireciona para a tela de carregamento
}
