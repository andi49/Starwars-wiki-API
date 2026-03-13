const popup = document.getElementById("popup");

setInterval(() => {

  // visa popup
  popup.style.display = "block";

  // stäng efter 10 sek
  setTimeout(() => {
    popup.style.display = "none";
  }, 20000);

}, 10000); // kör var 20 sek