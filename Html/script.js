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
