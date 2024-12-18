//Cookie Banner
document.addEventListener('DOMContentLoaded', function () {
    let cookieBanner = document.getElementById('cookie-banner');
    let acceptButton = document.getElementById('accept-cookie');

    acceptButton.onclick = function () {
        cookieBanner.style.display = 'none'; 
        console.log("Cookies closed"); 
    };
});

// Dark mode
const darkModeButton = document.getElementById('dark-mode');
     let isDarkMode = false;

     function myFunction() {
        isDarkMode = !isDarkMode;
         if (isDarkMode) {
             document.body.classList.add('dark-mode');
             darkModeButton.innerHTML = '<i class="fas fa-sun"></i>';
             isDarkMode = true;
         } else {
             document.body.classList.remove('dark-mode');
             darkModeButton.innerHTML = '<i class="fas fa-moon"></i>';
             isDarkMode = false;
         }
     }

// Greeting
let greeting = new Date();
let hour = greeting.getHours();
let messageElement = document.getElementById("sayhallo");

if (hour >= 6 && hour < 12) {
    messageElement.innerHTML = "Good Morning";
} else if (hour >= 12 && hour < 18) {
    messageElement.innerHTML = "Good Afternoon";
} else if (hour >= 18 && hour < 24) {
    messageElement.innerHTML = "Good Evening";
} else {
    messageElement.innerHTML = "Good Night";
} 
function timeout(){
    messageElement.innerHTML = "";
}
setTimeout(timeout, 5000);


//Hamburgermenu
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click',function() {
  menu.classList.toggle('open');
});


//counter
let countDownDate = new Date("Jan 1, 2025 00:00:00").getTime();
let x = setInterval(function() {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);