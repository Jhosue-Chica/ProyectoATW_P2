function openNav() {
  document.querySelector(".sidebar").style.width = "250px";
}

function closeNav() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.width = "0";

  // Oculta el contenido al cerrar la barra lateral
  const contentElements = sidebar.querySelectorAll('.sidebar-content');
  contentElements.forEach(element => {
    element.style.display = "none";
  });
}

function getWeather() {
  const apiKey = '88d084bd732f356c33352b4d4e954ab0';
  const city = 'Santo Domingo de los Colorados';  // Reemplazar con el nombre de la ciudad deseada
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      document.getElementById('ciudad').innerHTML = `Ciudad: ${data.name}`;
      document.getElementById('pais').innerHTML = `País: ${data.sys.country}`;
      document.getElementById('humedad').innerHTML = `Humedad: ${data.main.humidity}%`;
      document.getElementById('temperatura').innerHTML = `Temperatura: ${data.main.temp - 273.15} °C`; // Convertir de Kelvin a Celsius
      document.getElementById('nivel_mar').innerHTML = `Nivel del mar: ${data.main.sea_level} m`;
      openNav();
    })
    .catch(error => {
      console.error('Error al obtener datos del clima:', error);
    });
}
// Mover el botón "Ver Clima" al desplazarse
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const btnClima = document.querySelector('.btn-ver-clima');

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnClima.classList.add('scrolled');
  } else {
    btnClima.classList.remove('scrolled');
  }
}