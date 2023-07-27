document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      fetch(event.target.href)
        .then(response => response.text())
        .then(html => document.querySelector('#content').innerHTML = html)
        .catch(error => console.log('An error occurred:', error));
    });
  });
  