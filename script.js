// Vibe information

const vibes = {

    happy: {
        music: "Feel-good pop 🎵",
        activity: "Go somewhere you've never been",
        drink: "Iced strawberry soda 🍓",
        quote: "Collect moments, not perfect days."
    },

    chill: {
        music: "Lo-fi & acoustic 🌿",
        activity: "Read a book or watch something cozy",
        drink: "Vanilla iced coffee ☕",
        quote: "You don't have to rush everything."
    },

    energy: {
        music: "Upbeat dance mix ⚡",
        activity: "Go for a walk or try something new",
        drink: "Cold brew coffee 🧊",
        quote: "Do something today your future self will thank you for."
    },

    night: {
        music: "Late night R&B 🌙",
        activity: "Take a walk and look at the sky",
        drink: "Hot chocolate ☕",
        quote: "Some thoughts are better written at 2am."
    }

};


// Show selected vibe

function showVibe(vibe) {

    let selected = vibes[vibe];

    document.getElementById("music").textContent =
        selected.music;

    document.getElementById("activity").textContent =
        selected.activity;

    document.getElementById("drink").textContent =
        selected.drink;

    document.getElementById("quote").textContent =
        selected.quote;

    document.getElementById("vibeResult").innerHTML =
        "Your " + vibe + " vibe is ready ↓";

    document.getElementById("playlist").scrollIntoView({
        behavior: "smooth"
    });
}


// Random thought

function randomThought() {

    const thoughts = [
        "You are allowed to have an ordinary day.",
        "Put your phone down and look at the sky.",
        "Make something just because you can.",
        "A tiny step still counts.",
        "Your playlist knows you better than you think.",
        "Go get yourself that coffee."
    ];

    let random =
        thoughts[Math.floor(Math.random() * thoughts.length)];

    document.getElementById("thought").textContent =
        "“" + random + "”";
}


// Dark / light theme

function changeTheme() {

    document.body.classList.toggle("light");

    let button = document.getElementById("themeBtn");

    if (document.body.classList.contains("light")) {
        button.textContent = "☀";
    } else {
        button.textContent = "☾";
    }
}