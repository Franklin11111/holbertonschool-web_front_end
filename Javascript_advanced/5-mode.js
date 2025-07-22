function changeMode(size, weight, transform, background, color) {
    return function () {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main() {
    const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    const textEl = document.createElement('p');
    const text = document.createTextNode("Welcome Holberton!");
    textEl.appendChild(text);
    document.body.append(textEl);

    const btnSpooky = document.createElement("button");
    btnSpooky.innerHTML = "Spooky";
    document.body.append(btnSpooky);

    const btnDark = document.createElement("button");
    btnDark.innerHTML = "Dark mode";
    document.body.append(btnDark);

    const btnScream = document.createElement("button");
    btnScream.innerHTML = "Scream mode";
    document.body.append(btnScream);

    btnSpooky.addEventListener("click", () => {
        spooky();
    })

    btnDark.addEventListener("click", () => {
        darkMode();
    })

    btnScream.addEventListener("click", () => {
        screamMode();
    })
}
main();