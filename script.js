function startCelebration() {
    document.getElementById("surpriseMessage").classList.remove("hidden");
    startConfetti(); // Confetti effect
    startFireworks(); // Fireworks animation
    document.getElementById("birthdayMusic").play(); // Play music
}

function downloadCard() {
    let canvas = document.getElementById("birthdayCard");
    let ctx = canvas.getContext("2d");
    canvas.width = 500;
    canvas.height = 300;

    // Draw background
    let img = new Image();
    img.src = "birthday-card-bg.jpg"; // Upload a background image for the card
    img.onload = function () {
        ctx.drawImage(img, 0, 0, 500, 300);

        // Add Text
        ctx.fillStyle = "white";
        ctx.font = "24px Arial";
        ctx.fillText("Happy Birthday Arya! 🎉", 120, 150);

        // Download the card
        let link = document.createElement("a");
        link.download = "Happy_Birthday_Arya.png";
        link.href = canvas.toDataURL();
        link.click();
    };
}
