document.addEventListener('DOMContentLoaded', () => {
    // ===== MENU HAMBURGUER =====
    const menuToggle = document.getElementById('menu-toggle');
    const menuLinks = document.getElementById('menu-links');

    menuToggle.addEventListener('click', () => {
        menuLinks.classList.toggle('show');
    });

    // Fecha o menu ao clicar em um link (opcional)
    document.querySelectorAll('#menu-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuLinks.classList.remove('show');
        });
    });

    // ===== TYPEWRITER EFFECT =====
    const title = document.getElementById('typewriter');
    const name = "Octávio Augusto";
    let i = 0;
    let isDeleting = false;
    let endDelay = 0;

    function typeWriter() {
        if (!isDeleting) {
            title.textContent = name.substring(0, i + 1);
            i++;
        } else {
            title.textContent = name.substring(0, i - 1);
            i--;
        }

        if (!isDeleting && i === name.length) {
            endDelay = 500;
            isDeleting = true;
        } else if (isDeleting && i === 1) {
            endDelay = 500;
            isDeleting = false;
        }

        const speed = isDeleting ? 100 : 125;
        setTimeout(typeWriter, endDelay || speed);
    }
    typeWriter();

    // ===== INICIALIZA AOS (ANIMAÇÕES) =====
    AOS.init({
        disable: window.innerWidth < 768,
        duration: 800,
        offset: 100
    });

    // ===== SCROLL SUAVE PARA LINKS ÂNCORA =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Seleciona TODOS os botões com a classe botaoDesativado
    const botoesDesativados = document.querySelectorAll(".botaoDesativado");
    // Adiciona o evento a cada botão
    botoesDesativados.forEach(botao => {
        botao.addEventListener("click", () => {
            alert("Essa função encontra-se indisponível no momento. Tente mais tarde!");
        });
    });

});