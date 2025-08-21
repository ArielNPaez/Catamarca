        document.addEventListener('DOMContentLoaded', function() {
            // Smooth scrolling
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });

            // WhatsApp link interactions
            document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
                link.addEventListener('click', function() {
                    // Add click effect
                    this.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        this.style.transform = 'scale(1.05)';
                    }, 100);
                    setTimeout(() => {
                        this.style.transform = 'scale(1)';
                    }, 200);
                    
                    // Show WhatsApp notification
                    setTimeout(() => {
                        const alertDiv = document.createElement('div');
                        alertDiv.className = 'fixed top-4 right-4 bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl shadow-2xl z-50 transform translate-x-full transition-transform duration-500';
                        alertDiv.innerHTML = `
                            <div class="flex items-center">
                                <div class="text-2xl mr-3">📱</div>
                                <div>
                                    <div class="font-bold text-lg">¡Abriendo WhatsApp!</div>
                                    <div class="text-sm opacity-90">Te redirigimos para contactarnos</div>
                                </div>
                            </div>
                        `;
                        document.body.appendChild(alertDiv);
                        
                        setTimeout(() => {
                            alertDiv.style.transform = 'translateX(0)';
                        }, 100);
                        
                        setTimeout(() => {
                            alertDiv.style.transform = 'translateX(100%)';
                            setTimeout(() => {
                                document.body.removeChild(alertDiv);
                            }, 500);
                        }, 3000);
                    }, 200);
                });
            });

            // Intersection Observer for animations
            const observerOptions = {
                threshold: 0.15,
                rootMargin: '0px 0px -100px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    }
                });
            }, observerOptions);

            // Observe all fade-in elements
            document.querySelectorAll('.fade-in-up').forEach(element => {
                observer.observe(element);
            });

            // Observe all cards
            document.querySelectorAll('.card-hover').forEach(card => {
                observer.observe(card);
            });

            // Video fallback
            const video = document.querySelector('video');
            if (video) {
                video.addEventListener('error', function() {
                    const fallback = document.createElement('div');
                    fallback.className = 'absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900';
                    fallback.innerHTML = `
                        <div class="absolute inset-0 flex items-center justify-center">
                            <div class="text-center text-white">
                                <div class="text-6xl mb-4">🏔️</div>
                                <h3 class="text-2xl font-bold">Paisajes de Catamarca</h3>
                                <p class="text-lg opacity-80">Belleza natural incomparable</p>
                            </div>
                        </div>
                    `;
                    this.parentNode.appendChild(fallback);
                    this.style.display = 'none';
                });
            }
        });
      (function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'972aba2e81463012',t:'MTc1NTc4NTU2Ni4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();