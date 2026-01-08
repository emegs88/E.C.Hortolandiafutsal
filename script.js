// Mobile Navigation
const navMobileBtn = document.getElementById('navMobileBtn');
const navDrawer = document.getElementById('navDrawer');

if (navMobileBtn && navDrawer) {
  navMobileBtn.addEventListener('click', () => {
    navDrawer.classList.toggle('active');
    navMobileBtn.classList.toggle('active');
  });

  // Close drawer when clicking a link
  const drawerLinks = navDrawer.querySelectorAll('a');
  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      navDrawer.classList.remove('active');
      navMobileBtn.classList.remove('active');
    });
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Counter Animation
function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-count'));
  const duration = 2000;
  const increment = target / (duration / 16);
  let current = 0;

  const updateCounter = () => {
    current += increment;
    if (current < target) {
      element.textContent = Math.floor(current).toLocaleString('pt-BR');
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target.toLocaleString('pt-BR');
    }
  };

  updateCounter();
}

// Intersection Observer for counters
const observerOptions = {
  threshold: 0.5,
  rootMargin: '0px'
};

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
      entry.target.classList.add('counted');
      animateCounter(entry.target);
    }
  });
}, observerOptions);

// Observe all KPI counters
document.querySelectorAll('.kpi__v[data-count]').forEach(counter => {
  counterObserver.observe(counter);
});

// Simulator
function updateSimulator() {
  const inv = parseFloat(document.getElementById('inv').value) || 0;
  const camp = parseFloat(document.getElementById('camp').value) || 0;
  const conteudos = parseFloat(document.getElementById('conteudos').value) || 0;

  // Simple calculation model (you can adjust these formulas)
  // Índice de presença: based on investment and content frequency
  const indice = Math.min(100, Math.round((inv / 1000) * 0.5 + (camp * 5) + (conteudos * 2)));
  
  // Projeção de alcance: based on followers, content, and campaigns
  const baseAlcance = 18000; // base followers
  const alcance = Math.round(baseAlcance * (1 + (camp * 0.3) + (conteudos * 0.1)));

  document.getElementById('indice').textContent = indice + '%';
  document.getElementById('alcance').textContent = alcance.toLocaleString('pt-BR');
}

// Add event listeners to simulator inputs
const simInputs = ['inv', 'camp', 'conteudos'];
simInputs.forEach(id => {
  const input = document.getElementById(id);
  if (input) {
    input.addEventListener('input', updateSimulator);
    input.addEventListener('change', updateSimulator);
  }
});

// Initialize simulator
updateSimulator();

// Header scroll effect
let lastScroll = 0;
const topbar = document.querySelector('.topbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    topbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.08)';
  } else {
    topbar.style.boxShadow = 'none';
  }
  
  lastScroll = currentScroll;
});

// Add active state to navigation links based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Timeline Animation
const timelineItems = document.querySelectorAll('.timeline__item');
const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, index * 150);
    }
  });
}, {
  threshold: 0.2,
  rootMargin: '0px 0px -100px 0px'
});

timelineItems.forEach(item => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(30px)';
  item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  timelineObserver.observe(item);
});

// Comissão Técnica Animation
const comissaoCards = document.querySelectorAll('.comissao__card');
const comissaoObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, index * 200);
    }
  });
}, {
  threshold: 0.2,
  rootMargin: '0px 0px -50px 0px'
});

comissaoCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(40px)';
  card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  comissaoObserver.observe(card);
});

// Visibilidade Animation
const visibilidadeSections = document.querySelectorAll('.visibilidade__section');
const visibilidadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
});

visibilidadeSections.forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  visibilidadeObserver.observe(section);
});

// Clubes e Redes Animation
const logoItems = document.querySelectorAll('.clube__logo, .rede__card, .competicao__card');
const logoObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'scale(1)';
      }, index * 100);
    }
  });
}, {
  threshold: 0.2,
  rootMargin: '0px 0px -50px 0px'
});

logoItems.forEach(item => {
  item.style.opacity = '0';
  item.style.transform = 'scale(0.8)';
  item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  logoObserver.observe(item);
});

// ESG Diagram Animation
const esgCircles = document.querySelectorAll('.esg-circle');
const esgObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = entry.target.classList.contains('esg-circle--sustentabilidade') 
          ? 'translateX(-50%) scale(1)' 
          : entry.target.classList.contains('esg-circle--governanca')
          ? 'scale(1)'
          : 'scale(1)';
      }, index * 200);
    }
  });
}, {
  threshold: 0.3,
  rootMargin: '0px 0px -100px 0px'
});

esgCircles.forEach(circle => {
  circle.style.opacity = '0';
  if (circle.classList.contains('esg-circle--sustentabilidade')) {
    circle.style.transform = 'translateX(-50%) scale(0.5)';
  } else {
    circle.style.transform = 'scale(0.5)';
  }
  circle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  esgObserver.observe(circle);
});

// ESG Center Animation
const esgCenter = document.querySelector('.esg-center');
if (esgCenter) {
  const esgCenterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 600);
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
  });

  esgCenter.style.opacity = '0';
  esgCenter.style.transform = 'translate(-50%, -50%) scale(0)';
  esgCenter.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  esgCenterObserver.observe(esgCenter);
}

// Pillars Animation
const pillarCards = document.querySelectorAll('.pillar__card');
const pillarObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateX(0)';
      }, index * 150);
    }
  });
}, {
  threshold: 0.2,
  rootMargin: '0px 0px -50px 0px'
});

pillarCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateX(-30px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  pillarObserver.observe(card);
});

// Uniformes: Verificar se imagens estão disponíveis
document.addEventListener('DOMContentLoaded', () => {
  const uniformeImgs = document.querySelectorAll('.uniforme__img');
  uniformeImgs.forEach(img => {
    img.addEventListener('error', function() {
      // Se a imagem não carregar, esconde a imagem e mostra o SVG
      this.style.display = 'none';
      const svg = this.nextElementSibling;
      if (svg && svg.tagName === 'svg') {
        svg.style.display = 'block';
      }
    });
    img.addEventListener('load', function() {
      // Se a imagem carregar, mostra a imagem e esconde o SVG
      this.style.display = 'block';
      const svg = this.nextElementSibling;
      if (svg && svg.tagName === 'svg') {
        svg.style.display = 'none';
      }
    });
  });
});

// Uniformes Animation
const uniformeViews = document.querySelectorAll('.uniforme__view');
const uniformeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, index * 200);
    }
  });
}, {
  threshold: 0.3,
  rootMargin: '0px 0px -50px 0px'
});

uniformeViews.forEach(view => {
  view.style.opacity = '0';
  view.style.transform = 'translateY(30px)';
  view.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  uniformeObserver.observe(view);
});

// Highlight sponsorship areas on hover
const sponsorshipAreas = document.querySelectorAll('.uniforme__svg rect[fill*="rgba"]');
sponsorshipAreas.forEach(area => {
  area.addEventListener('mouseenter', function() {
    this.style.opacity = '0.9';
    this.style.transform = 'scale(1.05)';
    this.style.transition = 'all 0.3s ease';
  });
  area.addEventListener('mouseleave', function() {
    this.style.opacity = '';
    this.style.transform = '';
  });
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq__item');
faqItems.forEach(item => {
  const question = item.querySelector('.faq__question');
  question.addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    
    // Close all items
    faqItems.forEach(faqItem => {
      faqItem.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// Vídeos Animation
const videoItems = document.querySelectorAll('.video__item');
const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'scale(1)';
      }, index * 150);
    }
  });
}, {
  threshold: 0.2,
  rootMargin: '0px 0px -50px 0px'
});

videoItems.forEach(item => {
  item.style.opacity = '0';
  item.style.transform = 'scale(0.9)';
  item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  videoObserver.observe(item);
});

// Parceiros Animation
const parceiroCards = document.querySelectorAll('.parceiro__card');
const parceiroObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, index * 100);
    }
  });
}, {
  threshold: 0.2,
  rootMargin: '0px 0px -50px 0px'
});

parceiroCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  parceiroObserver.observe(card);
});

// Comparativo Animation
const comparativoRows = document.querySelectorAll('.comparativo__row');
const comparativoObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateX(0)';
      }, index * 100);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

comparativoRows.forEach(row => {
  row.style.opacity = '0';
  row.style.transform = 'translateX(-20px)';
  row.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  comparativoObserver.observe(row);
});

// FAQ Animation
const faqObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, index * 100);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

faqItems.forEach(item => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(20px)';
  item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  faqObserver.observe(item);
});
