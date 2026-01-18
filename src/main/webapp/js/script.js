document.getElementById('mainBtn').addEventListener('click', function() {
    const status = document.getElementById('status');
    status.innerText = "System Live";
    status.style.color = "#00ffcc";
    console.log("Nexus System Initialized...");
}); 
