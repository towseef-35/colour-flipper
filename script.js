const btn = document.getElementById("btn");
const colorText = document.getElementById("color");

btn.addEventListener("click", () => {
  const newColor = getRandomRGB();
  document.body.style.backgroundColor = newColor;
  colorText.textContent = newColor;
});

function getRandomRGB() {
  const r = Math.floor(Math.random() * 256); // 0-255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
