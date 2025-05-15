fetch('/templates/header.txt')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;

        const links = document.querySelectorAll('.nav');
        const path = window.location.pathname.split("/").pop() || "index.html";

        links.forEach(link => {
            if (link.getAttribute('href') === path) {
                link.classList.add('active');
            }
        });
    }).catch(err => console.error('Kunde inte ladda header.html:', err));