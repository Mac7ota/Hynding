
window.Percorrer = function() {

fetch('https://api-hynding.herokuapp.com/Programacao')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.error(error));
}
