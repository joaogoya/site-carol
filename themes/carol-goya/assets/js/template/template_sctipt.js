



// Efeito de sombra na Navbar ao rolar a página (UX)
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.main-nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
    } else {
        nav.style.boxShadow = 'none';
    }
});

// // Inicializa os ícones do Lucide
// lucide.createIcons();

// //spinner
// window.addEventListener("load", function() {
//     const preloader = document.getElementById("preloader");
//     // Adiciona a classe que faz o fade-out
//     preloader.classList.add("loader-hidden");
    
//     // Opcional: inicializa os ícones do Lucide aqui também
//     if (typeof lucide !== 'undefined') {
//         lucide.createIcons();  
//     }
// });




window.addEventListener("load", function() {
    const preloader = document.getElementById("preloader");
    const videoHero = document.querySelector(".hero-video");

    // Função interna para esconder o loader com elegância
    const hideLoader = () => {
        if (!preloader.classList.contains("loader-hidden")) {
            preloader.classList.add("loader-hidden");
        }
    };

    if (videoHero) {
        // 1. Se o vídeo já estiver rodando (cache), some o loader
        if (videoHero.readyState >= 3) { 
            hideLoader();
        }

        // 2. Espera o vídeo estar pronto para rodar sem travar
        videoHero.addEventListener("canplaythrough", hideLoader);

        // 3. Garantia: se o vídeo começar a tocar por qualquer motivo
        videoHero.addEventListener("playing", hideLoader);
    }

    // 4. Segurança (Fallback): Se o vídeo der erro ou demorar mais de 5s,
    // libera o site para o usuário não ficar preso no spinner.
    setTimeout(hideLoader, 5000);

    // Inicializa os ícones do Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});