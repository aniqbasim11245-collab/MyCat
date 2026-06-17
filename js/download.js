const downloadButtons = document.querySelectorAll(".download-btn");

downloadButtons.forEach(button => {
  button.addEventListener("click", () => {
    console.log("MyCAT APK download clicked");
  });
});