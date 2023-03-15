let currMode = "dark"
let html = document.querySelector("html");
let button = document.querySelector("#button");
let img = button.querySelector("img");
console.log(img);

const changeMode = () => {
    if(currMode === "dark"){
        console.log("Currently dark mode");
        currMode = "light";

        html.style.backgroundColor = "#FFFDD0";
        html.style.color = "#151820";

        img.src = "images/darkMode.png"

    } else if (currMode === "light") {
        console.log("Currently light mode");
        currMode = "dark";
        
        html.style.backgroundColor = "#151820";
        html.style.color = "#c6c5fc";

        img.src = "images/lightMode.webp"
    }
}

button.onclick = changeMode