fetch('/Portfolio/templates/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;

    const currentPath = window.location.pathname;
    
    document.querySelectorAll("a").forEach(link => {
      const href = link.getAttribute("href");

      if (
        currentPath === href ||
        (currentPath.endsWith("/") && currentPath === href + "/")
      ) {
        const icon = link.querySelector("i");
        if (icon) {
          icon.classList.add("active");
        }
      }
    });
  });