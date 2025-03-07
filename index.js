// Getting the Button
const generate = document.getElementById("generate");
// Adding Event Listener to the Button
generate.addEventListener("click", () => {
  // Get the seed of the color
  let seed = document.getElementById("seed").value;
  seed = seed.replace("#", "");
  // console.log(seed);
  // Get the mode of the color
  let mode = document.getElementById("type").value;
  // console.log(mode);
  fetch(`https://www.thecolorapi.com/scheme?hex=${seed}&mode=${mode}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Getting the colors
      let colors = data.colors;
      // Getting the container  where the colors will be displayed
      let container = document.getElementById("colors");
      container.innerHTML = "";
      // Looping through the colors and displaying them
      colors.forEach((color) => {
        container.innerHTML += `<div class="color" style="background-color: ${color.hex.value}; color: ${color.hex.clean}">${color.hex.value}</div>`;
      });
    });
});
