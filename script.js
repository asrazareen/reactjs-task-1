const box = document.getElementById("box")
const colorChange = document.getElementById("color")
const counter = document.getElementById("counter")

let count = 0

box.addEventListener("click" , () => {
    count++
    counter.innerHTML = count
})

colorChange.addEventListener("click", () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    // console.log(randomColor)
    box.style.backgroundColor = "#" + randomColor;
  });
