document.addEventListener('DOMContentLoaded', function () {
    const header = [
        { name: 'Home', link: '/home' },
        { name: 'Projects', link: '/projects' },
        { name: 'Skills', link: '/skills' },
        { name: 'Experience', link: '/experience' },
        { name: 'Education', link: '/education' },
        { name: 'Contact', link: '/contact' }
    ];

    const navbar = document.getElementById('navbar');

    header.forEach(item => {
        const h4 = document.createElement('h4');
        const a = document.createElement('a');

        a.href = item.link;
        a.textContent = item.name;

        h4.appendChild(a);
        navbar.appendChild(h4);
    });
});
