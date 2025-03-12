// 🎉 Function to start all birthday surprises
function startCelebration() {
    document.getElementById("surpriseMessage").classList.remove("hidden");
    startConfetti(); // Confetti effect
    startFireworks(); // Fireworks animation
    document.getElementById("birthdayMusic").play(); // Play background music
}

// 🎁 Function to generate and download a birthday card
function downloadCard() {
    let canvas = document.getElementById("birthdayCard");
    let ctx = canvas.getContext("2d");
    canvas.width = 500;
    canvas.height = 300;

    let img = new Image();
    img.crossOrigin = "anonymous"; // Fix CORS issue on GitHub Pages
    img.src = "birthday-card-bg.jpeg"; // Make sure this filename matches your uploaded file

    img.onload = function () {
        ctx.drawImage(img, 0, 0, 500, 300);

        // Add Birthday Message
        ctx.fillStyle = "white";
        ctx.font = "24px Arial";
        ctx.fillText("Happy Birthday Arya! 🎉", 120, 150);

        // Convert Canvas to Image and Download
        let link = document.createElement("a");
        link.download = "Happy_Birthday_Arya.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    };

    img.onerror = function () {
        alert("Error loading the birthday card background. Check the file name and format.");
    };
}

// 🎊 Confetti Effect
function startConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.classList.add('confetti-container');
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confettiContainer.appendChild(confetti);
    }

    setTimeout(() => {
        confettiContainer.remove();
    }, 5000); // Remove confetti after 5 seconds
}

// 🎇 Fireworks Effect
function startFireworks() {
    const fireworksContainer = document.createElement("div");
    fireworksContainer.classList.add("fireworks-container");
    document.body.appendChild(fireworksContainer);

    for (let i = 0; i < 10; i++) {
        const firework = document.createElement("div");
        firework.classList.add("firework");
        firework.style.left = `${Math.random() * 100}vw`;
        firework.style.animationDuration = `${Math.random() * 3 + 2}s`;
        fireworksContainer.appendChild(firework);
    }

    setTimeout(() => {
        fireworksContainer.remove();
    }, 5000); // Remove fireworks after 5 seconds
}
