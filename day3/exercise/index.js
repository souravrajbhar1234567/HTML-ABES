const bulb = document.getElementById("bulb");
const btn = document.getElementById("btn");

// Different bulb colors
const colors = ["yellow", "red", "green", "blue", "purple", "orange"];
let index = 0;

btn.addEventListener("click", () => {
  bulb.style.background = colors[index];
  bulb.style.boxShadow = `0 0 40px ${colors[index]}`;
  
  index++;
  if (index >= colors.length) {
    index = 0;
  }
});
