const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formData = new FormData(this);
  
  fetch('/upload', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    // handle the response from the server
  })
  .catch(error => {
    console.error(error);
  });
});