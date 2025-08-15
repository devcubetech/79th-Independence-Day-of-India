document.addEventListener('DOMContentLoaded', function() {
    // Animate sections as they come into view
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Quote carousel
    const quotes = document.querySelectorAll('.quote');
    const prevBtn = document.querySelector('.quote-prev');
    const nextBtn = document.querySelector('.quote-next');
    let currentQuote = 0;
    
    function showQuote(index) {
        quotes.forEach(quote => quote.classList.remove('active'));
        quotes[index].classList.add('active');
        currentQuote = index;
    }
    
    nextBtn.addEventListener('click', () => {
        let nextIndex = (currentQuote + 1) % quotes.length;
        showQuote(nextIndex);
    });
    
    prevBtn.addEventListener('click', () => {
        let prevIndex = (currentQuote - 1 + quotes.length) % quotes.length;
        showQuote(prevIndex);
    });
    
    // Auto-rotate quotes
    setInterval(() => {
        let nextIndex = (currentQuote + 1) % quotes.length;
        showQuote(nextIndex);
    }, 5000);
    
    // Create spokes for Ashoka Chakra
    const spokes = document.querySelector('.spokes');
    for (let i = 0; i < 11; i++) {
        const spoke = document.createElement('span');
        spokes.appendChild(spoke);
    }
    
    // Create fireworks
    function createFirework() {
        const celebrationSection = document.querySelector('.celebration');
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = Math.random() * 100 + '%';
        firework.style.top = Math.random() * 100 + '%';
        celebrationSection.appendChild(firework);
        
        setTimeout(() => {
            firework.remove();
        }, 2000);
    }
    
    // Generate fireworks periodically
    setInterval(createFirework, 300);
    
    // Pledge button effect
    const pledgeBtn = document.querySelector('.cta-button');
    pledgeBtn.addEventListener('click', () => {
        pledgeBtn.textContent = 'Jai Hind!';
        pledgeBtn.style.backgroundColor = 'var(--saffron)';
        
        setTimeout(() => {
            pledgeBtn.textContent = 'Pledge to the Nation';
            pledgeBtn.style.backgroundColor = 'var(--green)';
        }, 2000);
    });
    
    // Dynamic year update (in case the page is used in future years)
    const currentYearEl = document.querySelector('.current-year');
    const currentYear = new Date().getFullYear();
    currentYearEl.textContent = currentYear;
});