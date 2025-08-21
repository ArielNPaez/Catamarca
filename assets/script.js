        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'primary': '#2c3e50',   // Azul/gris oscuro
                        'secondary': '#f39c12', // Naranja vibrante
                        'accent': '#3498db',    // Azul eléctrico
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                }
            }
        }

                document.addEventListener('DOMContentLoaded', () => {
            const introScreen = document.getElementById('intro-screen');
            const mainContent = document.getElementById('main-content');
            const enterButton = document.getElementById('enter-button');
            const videoBackground = document.getElementById('video-background');
            const videoOverlay = document.getElementById('video-overlay');

            // JavaScript para manejar la transición de la pantalla de inicio
            enterButton.addEventListener('click', () => {
                // Oculta la pantalla de introducción con un efecto de desvanecimiento
                introScreen.style.opacity = '0';
                
                // Hace visible el contenido principal después de un pequeño retraso
                setTimeout(() => {
                    introScreen.classList.add('hidden');
                    mainContent.classList.remove('hidden');
                    
                    // Asegura que el contenido principal aparezca con una animación
                    setTimeout(() => {
                        mainContent.querySelectorAll('.fade-in').forEach(el => el.classList.add('is-visible'));
                        videoBackground.style.position = 'absolute';
                        videoOverlay.style.position = 'absolute';
                    }, 50);

                    // Inicializa los contadores cuando el contenido principal es visible
                    initCounters();
                }, 800);
            });

            // JavaScript para los contadores animados
            const initCounters = () => {
                const counters = document.querySelectorAll('.counter-number');

                const runCounters = (entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const counter = entry.target;
                            const target = +counter.getAttribute('data-target');
                            const speed = 200; // Velocidad del contador
                            const increment = target / speed;
                            let currentCount = 0;

                            const updateCounter = () => {
                                if (currentCount < target) {
                                    currentCount += increment;
                                    counter.innerText = Math.ceil(currentCount);
                                    setTimeout(updateCounter, 1);
                                } else {
                                    counter.innerText = target;
                                }
                            };
                            updateCounter();
                            observer.unobserve(entry.target);
                        }
                    });
                };

                const counterObserver = new IntersectionObserver(runCounters, { threshold: 0.8 });
                counters.forEach(counter => counterObserver.observe(counter));
            };
        });