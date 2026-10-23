/**
 * ==========================================================================
 * PORTFÓLIO PESSOAL — GABRIEL SIMIONI
 * Script Principal — Etapa 1: Hero
 * ==========================================================================
 */

(function () {
  'use strict';

  // 1. Verificação defensiva de suporte a movimento reduzido
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 2. Verificação de disponibilidade da biblioteca GSAP
  if (typeof window.gsap === 'undefined') {
    console.info('[Simioni Portfolio] GSAP não detectado. Executando em modo de fallback visual nativo.');
    return;
  }

  // Registrar ScrollTrigger se disponível
  if (typeof window.ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  // Se o usuário solicitou redução de movimento, encerramos garantindo visibilidade instantânea
  if (prefersReducedMotion) {
    console.info('[Simioni Portfolio] Modo de movimento reduzido ativo.');
    return;
  }

  /**
   * Inicialização da Coreografia de Entrada do Hero
   * Inspiração: Big Dreams Group — Impacto tipográfico, ritmo e elegância cinematográfica.
   */
  function initHeroEntrance() {
    const chars = document.querySelectorAll('.char');
    const meta = document.querySelector('.hero__meta');
    const statement = document.querySelector('.hero__statement');
    const header = document.querySelector('.site-header__container');
    const footer = document.querySelector('.hero__footer');
    const ambientGlow = document.querySelector('.hero__glow--ambient');
    const spotGlow = document.querySelector('.hero__glow--spot');

    const heroTimeline = gsap.timeline({
      defaults: {
        ease: 'power4.out',
      },
    });

    // Revelação atmosférica sutil de fundo
    if (ambientGlow && spotGlow) {
      heroTimeline.fromTo(
        [ambientGlow, spotGlow],
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 2.2, ease: 'power2.out' },
        0
      );
    }

    // Aparição do cabeçalho editorial
    if (header) {
      heroTimeline.fromTo(
        header,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' },
        0.2
      );
    }

    // Entrada da identificação de cargo / badge
    if (meta) {
      heroTimeline.fromTo(
        meta,
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out' },
        0.3
      );
    }

    // Revelação tipográfica escalonada do nome SIMIONI com máscara
    if (chars.length > 0) {
      heroTimeline.fromTo(
        chars,
        {
          yPercent: 125,
          opacity: 0,
          rotateZ: (index) => (index % 2 === 0 ? 3 : -3),
          scale: 0.92,
        },
        {
          yPercent: 0,
          opacity: 1,
          rotateZ: 0,
          scale: 1,
          duration: 1.45,
          stagger: 0.055,
          ease: 'power4.out',
        },
        0.45
      );
    }

    // Revelação da declaração pessoal / frase autoral
    if (statement) {
      heroTimeline.fromTo(
        statement,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 1.3, ease: 'power3.out' },
        '-=0.75'
      );
    }

    // Entrada do indicador de continuidade / scroll
    if (footer) {
      heroTimeline.fromTo(
        footer,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.0, ease: 'power2.out' },
        '-=0.6'
      );
    }
  }

  /**
   * Profundidade Sutil e Parallax com o Mouse
   * Ativo exclusivamente em dispositivos desktop com cursor fino
   */
  function initMouseDepth() {
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isFinePointer) return;

    const heroSection = document.querySelector('.hero');
    const spotGlow = document.querySelector('.hero__glow--spot');
    const heroTitle = document.querySelector('.hero__title');

    if (!heroSection || !spotGlow) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId = null;

    heroSection.addEventListener(
      'mousemove',
      (event) => {
        const { clientX, clientY } = event;
        const { innerWidth, innerHeight } = window;

        // Normalização de -1 a 1
        const normX = (clientX / innerWidth - 0.5) * 2;
        const normY = (clientY / innerHeight - 0.5) * 2;

        targetX = normX;
        targetY = normY;

        if (!rafId) {
          rafId = requestAnimationFrame(updateParallax);
        }
      },
      { passive: true }
    );

    function updateParallax() {
      // Interpolação suave (LERP)
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      gsap.set(spotGlow, {
        x: currentX * 35,
        y: currentY * 25,
      });

      if (heroTitle) {
        gsap.set(heroTitle, {
          x: currentX * 8,
          y: currentY * 5,
        });
      }

      if (Math.abs(targetX - currentX) > 0.001 || Math.abs(targetY - currentY) > 0.001) {
        rafId = requestAnimationFrame(updateParallax);
      } else {
        rafId = null;
      }
    }
  }

  /**
   * Narrativa Tipográfica Conduzida pelo Scroll (Etapa 2)
   * Inspiração: Kinoria Studio — Tipografia cinética, transições graduais e sincronia com scroll.
   */
  function initNarrativeScroll() {
    const narrativeSection = document.querySelector('.narrative');
    if (!narrativeSection || typeof window.ScrollTrigger === 'undefined') return;

    const items = gsap.utils.toArray('.narrative__item');
    const counter = document.getElementById('narrative-counter');
    const progressFill = document.getElementById('narrative-progress-fill');

    if (items.length === 0) return;

    // Uso obrigatório de gsap.matchMedia para adaptação entre desktop, mobile e acessibilidade
    const mm = gsap.matchMedia();

    // 1. Desktop (> 768px): Experiência cinética fixada (pin + scrub controlado)
    mm.add('(min-width: 769px) and (prefers-reduced-motion: no-preference)', () => {
      narrativeSection.classList.add('js-pinned');

      // Estado inicial: primeiro item ativo, os demais posicionados abaixo
      gsap.set(items[0], { opacity: 1, y: 0, scale: 1 });
      gsap.set(items.slice(1), { opacity: 0, y: 40, scale: 0.94 });

      const narrativeTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: narrativeSection,
          start: 'top top',
          end: '+=220%', // Duração controlada que não bloqueia o fluxo nativo
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          onUpdate: (self) => {
            const p = self.progress;

            // Barra de progresso visual sutil
            if (progressFill) {
              gsap.set(progressFill, { scaleX: Math.max(0.2, p) });
            }

            // Atualização contínua do contador de etapas (01 a 04)
            if (counter) {
              let currentStep = '01';
              if (p >= 0.72) {
                currentStep = '04';
              } else if (p >= 0.44) {
                currentStep = '03';
              } else if (p >= 0.18) {
                currentStep = '02';
              }
              counter.textContent = currentStep;
            }
          },
        },
      });

      // Transição fluida entre as 4 palavras: OBSERVO -> APRENDO -> CRIO -> EVOLUO
      // Transição 1 -> 2
      narrativeTimeline
        .to(items[0], {
          opacity: 0,
          y: -35,
          scale: 1.05,
          duration: 1,
          ease: 'power2.inOut',
        }, 0.8)
        .fromTo(items[1], {
          opacity: 0,
          y: 40,
          scale: 0.94,
        }, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power2.inOut',
        }, 0.8);

      // Transição 2 -> 3
      narrativeTimeline
        .to(items[1], {
          opacity: 0,
          y: -35,
          scale: 1.05,
          duration: 1,
          ease: 'power2.inOut',
        }, 2.2)
        .fromTo(items[2], {
          opacity: 0,
          y: 40,
          scale: 0.94,
        }, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power2.inOut',
        }, 2.2);

      // Transição 3 -> 4
      narrativeTimeline
        .to(items[2], {
          opacity: 0,
          y: -35,
          scale: 1.05,
          duration: 1,
          ease: 'power2.inOut',
        }, 3.6)
        .fromTo(items[3], {
          opacity: 0,
          y: 40,
          scale: 0.94,
        }, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power2.inOut',
        }, 3.6);

      // Pausa final de leitura para a etapa EVOLUO antes de desfixar
      narrativeTimeline.to({}, { duration: 0.8 });

      return () => {
        narrativeSection.classList.remove('js-pinned');
      };
    });

    // 2. Mobile (<= 768px): Revelação progressiva sem pin longo (respeita toque nativo)
    mm.add('(max-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
      narrativeSection.classList.remove('js-pinned');

      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0.2, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              end: 'bottom 60%',
              toggleActions: 'play none none reverse',
              onEnter: () => {
                if (counter) counter.textContent = `0${index + 1}`;
              },
              onEnterBack: () => {
                if (counter) counter.textContent = `0${index + 1}`;
              },
            },
          }
        );
      });
    });
  }

  /**
   * Seção Coisas sobre mim (Etapa 3)
   * Inspiração: Replika — Cartões temáticos, memórias organizadas e galeria de projetos.
   */
  function initAboutSection() {
    const aboutSection = document.querySelector('.about');
    if (!aboutSection || typeof window.ScrollTrigger === 'undefined') return;

    const cards = gsap.utils.toArray('.about-card');
    const projectCards = gsap.utils.toArray('.project-card');

    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // Cabeçalho da seção
      gsap.from('.about__header', {
        opacity: 0,
        y: 35,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about__header',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      // Cartões de memória e interesses com entrada escalonada
      if (cards.length > 0) {
        gsap.from(cards, {
          opacity: 0,
          y: 40,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about__cards-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      }

      // Galeria de Projetos
      if (projectCards.length > 0) {
        gsap.from(projectCards, {
          opacity: 0,
          y: 40,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about__projects-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      }
    });
  }

  /**
   * Configuração Central de Canais de Contato
   * Preencha com os destinos reais quando disponíveis.
   * Não são utilizados links fictícios.
   */
  const CONTACT_CONFIG = {
    instagram: '', // Ex: 'https://instagram.com/seu_usuario'
    tiktok: '',    // Ex: 'https://tiktok.com/@seu_usuario'
    email: '',     // Ex: 'contato@simioni.dev'
  };

  /**
   * Seção de Contato & Encerramento Manuscrito (Etapa 4)
   * Inspiração: Botões do aluno (gradiente rotativo/vidro) & Café com Pai (assinatura manuscrita).
   */
  function initContactAndSignature() {
    const contactSection = document.querySelector('.contact');
    if (!contactSection) return;

    // 1. Controle dos 3 botões de contato (Instagram, TikTok, E-mail)
    const socialButtons = document.querySelectorAll('.social-button');
    const channelsFeedback = document.getElementById('channels-feedback');
    let feedbackTimeout = null;

    socialButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const platform = button.getAttribute('data-platform');
        const targetUrl = CONTACT_CONFIG[platform];

        if (targetUrl && targetUrl.trim() !== '') {
          if (platform === 'email') {
            window.location.href = `mailto:${targetUrl.trim()}`;
          } else {
            window.open(targetUrl.trim(), '_blank', 'noopener,noreferrer');
          }
        } else {
          // Destino pendente: feedback transparente sem navegação falsa
          const platformNames = {
            instagram: 'Instagram',
            tiktok: 'TikTok',
            email: 'E-mail',
          };
          const name = platformNames[platform] || 'Canal';

          if (channelsFeedback) {
            channelsFeedback.textContent = `Aviso: O destino de ${name} está aguardando configuração real em identidade.md.`;
            channelsFeedback.style.opacity = '1';

            if (feedbackTimeout) clearTimeout(feedbackTimeout);
            feedbackTimeout = setTimeout(() => {
              channelsFeedback.style.opacity = '0';
            }, 4500);
          }
        }
      });
    });

    // 2. Validação Front-end do Formulário de Contato
    const contactForm = document.getElementById('contact-form');
    const inputName = document.getElementById('contact-name');
    const inputEmail = document.getElementById('contact-email');
    const inputMessage = document.getElementById('contact-message');
    const errorName = document.getElementById('error-name');
    const errorEmail = document.getElementById('error-email');
    const errorMessage = document.getElementById('error-message');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
      contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let isValid = true;

        // Limpar estados anteriores
        [inputName, inputEmail, inputMessage].forEach((input) => {
          if (input) input.classList.remove('is-invalid');
        });
        if (errorName) errorName.textContent = '';
        if (errorEmail) errorEmail.textContent = '';
        if (errorMessage) errorMessage.textContent = '';
        if (formStatus) {
          formStatus.className = 'form-status';
          formStatus.style.display = 'none';
        }

        // Validação do Nome
        if (!inputName || inputName.value.trim().length < 2) {
          isValid = false;
          if (inputName) inputName.classList.add('is-invalid');
          if (errorName) errorName.textContent = 'Por favor, informe seu nome completo.';
        }

        // Validação do E-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!inputEmail || !emailRegex.test(inputEmail.value.trim())) {
          isValid = false;
          if (inputEmail) inputEmail.classList.add('is-invalid');
          if (errorEmail) errorEmail.textContent = 'Informe um endereço de e-mail válido.';
        }

        // Validação da Mensagem
        if (!inputMessage || inputMessage.value.trim().length < 8) {
          isValid = false;
          if (inputMessage) inputMessage.classList.add('is-invalid');
          if (errorMessage) errorMessage.textContent = 'A mensagem deve conter ao menos 8 caracteres.';
        }

        if (isValid) {
          // Sucesso na validação (Sem backend por padrão, conforme AGENTS.md)
          if (formStatus) {
            formStatus.textContent = '✓ Mensagem validada com sucesso no navegador! Em ambiente de produção, este evento será conectado ao serviço real de envio.';
            formStatus.classList.add('is-success');
            formStatus.style.display = 'block';
          }
          contactForm.reset();
        } else {
          if (formStatus) {
            formStatus.textContent = 'Por favor, corrija os campos assinalados acima.';
            formStatus.classList.add('is-error');
            formStatus.style.display = 'block';
          }
        }
      });
    }

    // 3. Assinatura Manuscrita com a fonte Brittany Signature ("escrevendo com o scroll")
    const signatureBlock = document.getElementById('signature-block');
    const signatureText = document.getElementById('signature-text');
    const penNib = document.getElementById('signature-pen-nib');
    const flourishPath = document.getElementById('signature-flourish-path');

    if (signatureBlock && signatureText && typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        let flourishLength = 0;
        if (flourishPath) {
          try {
            flourishLength = flourishPath.getTotalLength();
            flourishPath.style.strokeDasharray = `${flourishLength}`;
            flourishPath.style.strokeDashoffset = `${flourishLength}`;
          } catch (e) {
            flourishLength = 0;
          }
        }

        // Timeline de escrita sincronizada ao scroll (scrub contínuo)
        const writingTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: signatureBlock,
            start: 'top 85%',
            end: 'bottom 85%',
            scrub: 1.2, // Conecta diretamente a revelação da escrita ao progresso do scroll
            onUpdate: (self) => {
              const p = self.progress;

              // Move a ponta luminosa da pena acompanhando o avanço da escrita
              if (penNib) {
                if (p > 0.03 && p < 0.94) {
                  const leftPercentage = Math.min(100, (p / 0.82) * 100);
                  gsap.set(penNib, {
                    opacity: 1,
                    left: `${leftPercentage}%`,
                  });
                } else {
                  gsap.set(penNib, { opacity: 0 });
                }
              }
            },
          },
        });

        // Revela a assinatura da esquerda para a direita simulando a escrita à mão
        writingTimeline.fromTo(
          signatureText,
          { clipPath: 'inset(-25% 100% -25% 0%)' },
          { clipPath: 'inset(-25% 0% -25% 0%)', duration: 1.6, ease: 'none' },
          0
        );

        // Ao completar as letras, desenha o traço de floreio inferior
        if (flourishPath && flourishLength > 0) {
          writingTimeline.to(
            flourishPath,
            {
              strokeDashoffset: 0,
              duration: 0.6,
              ease: 'none',
            },
            1.4
          );
        }
      });
    }
  }

  // Executar após carregamento do DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initHeroEntrance();
      initMouseDepth();
      initNarrativeScroll();
      initAboutSection();
      initContactAndSignature();
    });
  } else {
    initHeroEntrance();
    initMouseDepth();
    initNarrativeScroll();
    initAboutSection();
    initContactAndSignature();
  }
})();
