// Denna modal har jag gjort själv
const myBtn = document.getElementById("myBtn");
const myModal = document.getElementById("myModal");
const closeModal = document.getElementById("closeModal");

// Öppna modalen vid knapptryck.
myBtn.addEventListener("click", function () {
  myModal.style.display = "block";
});

// När användaren klickar på krysset, stäng modalen.
closeModal.addEventListener("click", function () {
  myModal.style.display = "none";
});
