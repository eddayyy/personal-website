document.addEventListener('DOMContentLoaded', function () {
    const header = [
        { name: 'Home', link: '#home' },
        { name: 'Projects', link: '#projects' },
        { name: 'Skills', link: '#skills' },
        { name: 'Experience', link: '#experience' },
        { name: 'Education', link: '#education' },
        { name: 'Contact', link: '#contact' }
    ];

    const navbar = document.getElementById('navbar');

    header.forEach(item => {
        const h4 = document.createElement('h4');
        const a = document.createElement('a');

        a.href = item.link;
        a.textContent = item.name;
        if (item.name === 'Home') {
            a.classList.add('active-link');
        }
        h4.appendChild(a);
        navbar.appendChild(h4);
    });
});

document.addEventListener('scroll', function () {
    // Threshold for considering an element as 'in view'
    const threshold = window.innerHeight / 2;

    // Array of all sections
    const sections = Array.from(document.querySelectorAll('section, header'));

    // Find the section that's currently in view
    let currentSection = null;
    for (const section of sections) {
        const box = section.getBoundingClientRect();
        if (box.top <= threshold && box.top + box.height > threshold) {
            currentSection = section;
            break;
        }
    }
    // If we found a section, highlight the corresponding navbar item
    if (currentSection) {
        // Remove previous active class
        const previousActive = document.querySelector('.active-link');
        if (previousActive) {
            previousActive.classList.remove('active-link');
        }

        // Add active class to current item
        const link = document.querySelector(`nav a[href="#${currentSection.id}"]`);
        if (link) {
            link.classList.add('active-link');
        }
    }
});


function adjustParticlesHeight() {
    const headerHeight = document.querySelector('header').offsetHeight;
    const particlesContainer = document.getElementById('particles-js');
    particlesContainer.style.height = `${headerHeight}px`;
}

document.addEventListener('DOMContentLoaded', function () {
    adjustParticlesHeight();
});

window.addEventListener('resize', function () {
    adjustParticlesHeight();
});