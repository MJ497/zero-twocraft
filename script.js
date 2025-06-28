  tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        primary: {
                            50: '#2151F8',
                            100: '#2151F8',
                            200: '#2151F8',
                            300: '#2151F8',
                            400: '#2151F8',
                            500: '#2151F8',
                            600: '#2151F8',
                            700: '#2151F8',
                            800: '#2151F8',
                            900: '#2151F8',
                        },
                        futuristic: {
                            glow: '#2151F8',
                            dark: '#1a1a1a',
                            metal: '#333333',
                            accent: '#2151F8'
                        }
                    },
                    animation: {
                        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'float': 'float 6s ease-in-out infinite',
                        'neon-glow': 'neon-glow 1.5s ease-in-out infinite alternate',
                        'hue-rotate': 'hue-rotate 10s linear infinite'
                    },
                    keyframes: {
                        'neon-glow': {
                            '0%': { 'text-shadow': '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #2151F8, 0 0 20px #2151F8' },
                            '100%': { 'text-shadow': '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #2151F8, 0 0 40px #2151F8' }
                        },
                        'hue-rotate': {
                            '0%': { 'filter': 'hue-rotate(0deg)' },
                            '100%': { 'filter': 'hue-rotate(360deg)' }
                        },
                        'float': {
                            '0%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-20px)' },
                            '100%': { transform: 'translateY(0px)' }
                        }
                    }
                }
            }
        }


           // Initialize Vanta.js animated background
        VANTA.NET({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x2151F8,
            backgroundColor: 0x101010,
            points: 12.00,
            maxDistance: 22.00,
            spacing: 18.00
        });
        
        // Navigation handling
        function navigate(event, sectionId) {
            event.preventDefault();
            document.querySelectorAll('section').forEach(section => {
                section.classList.add('hidden');
            });
            document.getElementById(sectionId).classList.remove('hidden');
            window.scrollTo(0, 0);
            
            // Update active nav link
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('text-primary-400', 'bg-gray-800');
            });
            event.target.classList.add('text-primary-400');
            
            // Close mobile menu if open
            document.getElementById('mobile-menu').classList.add('hidden');
        }
        
        // Mobile menu toggle
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }
        
        // Initialize - show home section
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('home').classList.remove('hidden');
            
            // Animate elements when they come into view
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fadeIn');
                    }
                });
            }, { threshold: 0.1 });
            
            document.querySelectorAll('section').forEach(section => {
                observer.observe(section);
            });
        });