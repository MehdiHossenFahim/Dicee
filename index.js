function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomImage1 = "./images/dice" + randomNumber1 + ".png";
    var randomImage2 = "./images/dice" + randomNumber2 + ".png";

    document.querySelector(".img1").setAttribute("src", randomImage1);
    document.querySelector(".img2").setAttribute("src", randomImage2);

    // Show winner
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
    } else {
        document.querySelector("h1").textContent = "🏳️ Draw! 🏳️";
    }
}

// Initial roll when page loads
rollDice();

// Show button
document.querySelector("button").classList.remove("invisible");

// Button click event
document.querySelector("button").addEventListener("click", function () {
    var audio = new Audio("./sounds/diceRollFx.mp3");
    audio.play();

    // Add rolling animation class
    document.querySelectorAll("img").forEach(function (img) {
        img.classList.add("rolling");
    });

    // Shuffle dice faces every 100ms
    var shuffle = setInterval(function () {
        rollDice();
    }, 50);

    // Stop after 900ms
    setTimeout(function () {
        clearInterval(shuffle);

        // Remove rolling animation
        document.querySelectorAll("img").forEach(function (img) {
            img.classList.remove("rolling");
        });

        rollDice(); // Final dice result
    }, 900);
});
