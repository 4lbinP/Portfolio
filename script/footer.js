fetch('/Portfolio/templates/footer.html')
  .then(response => response.text())
  .then(data => {
    document.querySelector('footer').innerHTML = data;
  });