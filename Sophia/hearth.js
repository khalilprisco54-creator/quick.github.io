
function spawnMovingHeart() {
    const heart = document.createElement("div");
    heart.classList.add("moving-heart");

    const size = Math.random() * 20 + 10; 
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 5 + 5 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(spawnMovingHeart, 300);
