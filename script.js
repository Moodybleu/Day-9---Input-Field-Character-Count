// let color = Math.random();
// color = Math.random().toString(16);
// color = Math.random().toString(16).substring(2, 8);

// console.log(color);

const hex = document.querySelector(".hex")
const btn = document.querySelector(".generate")

const generateColor = () => {
    const colorRandom = Math.random().toString(16).substring(2, 8);
    document.body.style.backgroundColor = "#" + colorRandom;
    hex.innerHTML = "#" + colorRandom;
};

btn.addEventListener("click", generateColor);