header = `
<html lang="se">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Header</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />
    <link rel="stylesheet" href="/stylesheet.css">
</head>
<body>
    <div class="header">
        <nav>
            <ul>
                <li><a href="/index.html" class="nav"><i class="fa-solid fa-house"></i></a></li>
                <li><a href="/about/" class="nav"><i class="fa-solid fa-circle-info"></i></a></li>
                <li><a href="/work/" class="nav"><i class="fa-solid fa-briefcase"></i></a></li>
                <li><a href="/contact/" class="nav"><i class="fa-solid fa-envelope"></i></a></li>
                <li><a href="https://github.com/4lbinP" target="_blank" class="nav"><i class="fa-brands fa-github"></i></a></li>
            </ul>
        </nav>
    </div>
</body>
</html>
`


document.getElementById('header').innerHTML = header;

const links = document.querySelectorAll('.nav');
const path = window.location.pathname.split("/").pop() || "index.html";

links.forEach(link => {
    if (link.getAttribute('href') === path) {
        link.classList.add('active');
    }
});
