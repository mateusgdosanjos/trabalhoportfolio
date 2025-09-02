// Espera o DOM carregar antes de ativar o script
document.addEventListener('DOMContentLoaded', () => {
  
  // ==============================
  // ROLAGEM SUAVE PARA LINKS DO MENU
  // ==============================
  const links = document.querySelectorAll('.menu-fixo a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const destino = document.querySelector(targetId);

      if (destino) {
        const topOffset = document.querySelector('.menu-fixo').offsetHeight;
        const posicao = destino.offsetTop - topOffset;

        window.scrollTo({
          top: posicao,
          behavior: 'smooth'
        });
      }
    });
  });

  // ==============================
  // ANIMAÇÃO AO ROLAR A PÁGINA
  // ==============================
  function revelarAoScroll() {
    const elementos = document.querySelectorAll('.animar');

    elementos.forEach(el => {
      const posicao = el.getBoundingClientRect().top;
      const alturaTela = window.innerHeight * 0.85;

      if (posicao < alturaTela) {
        el.classList.add('animado');
      }
    });
  }

  window.addEventListener('scroll', revelarAoScroll);
  revelarAoScroll(); // Chama ao carregar também

  // ==============================
  // BOTÃO DE CONTATO
  // ==============================
  const botaoContato = document.querySelector('.contato button');
  if (botaoContato) {
    botaoContato.addEventListener('click', () => {
      alert('Mensagem enviada com sucesso!');
    });
  }
});
