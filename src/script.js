document.getElementById("welcomeBtn").addEventListener("click", function() {
    const welcomeMessage = document.getElementById("welcomeMessage");
    welcomeMessage.textContent = "Hello, DevOps Engineer! Java Script is now live.";
    welcomeMessage.classList.remove("hidden");
});
