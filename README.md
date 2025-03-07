# Color Generator 🎨✨

This is a simple color generator application built as the 7th solo project for the Scrimba Front-End Certification. The app allows users to choose a base color and generate color schemes based on different color modes. 🌈

## Features 🚀

- **Seed Color** 🎨: Choose a color from the color input picker.
- **Color Modes** 🎭: Select a color mode to generate different color schemes:
  - Monochrome 🖤
  - Monochrome-Dark 🌑
  - Monochrome-Light 🌟
  - Analogic 🎨
  - Analogic-Complement 🔵🟠
  - Triad 🟢🔵🔴
  - Quad 🟡🟢🔵🟣
- **Color Display** 🖌️: The app displays a set of colors in a visually appealing manner based on the selected mode.

## How It Works 🛠️🔧

The app works by using the **Color API** to fetch color schemes based on the user-selected seed color and color mode. 🔍

### HTML Structure 🏗️

- **Input for Seed Color** 🖍️: An `<input>` field of type `color` allows the user to pick a color to serve as the base (seed) for the generated scheme.
  - This seed is later used to calculate the color scheme. 🎨
  
- **Select Dropdown for Color Modes** 📥: A `<select>` dropdown allows the user to choose one of the available color modes to generate the color scheme.
  - Modes include:
    - Monochrome 🖤
    - Monochrome-Dark 🌑
    - Monochrome-Light 🌟
    - Analogic 🎨
    - Analogic-Complement 🔵🟠
    - Triad 🟢🔵🔴
    - Quad 🟡🟢🔵🟣
  
- **Generate Button** 🟢: A button labeled "Generate" triggers the process of fetching and displaying the color scheme based on the seed and mode chosen.

- **Color Display Area** 🌈: A `<div>` element with the ID `colors` where the generated color scheme will be displayed.

### JavaScript Functionality 📜

- **Getting User Input** 🤔:
  - The seed color is retrieved from the color input. 🌈
  - The selected color mode is retrieved from the dropdown. 💡

- **Fetch Color Scheme** 🌐:
  - A request is sent to the [Color API](https://www.thecolorapi.com/) to fetch a color scheme based on the seed color and the selected mode. 🚀
  
- **Display Colors** 🎨:
  - The color scheme is returned in JSON format.
  - The application then loops through the colors and creates a visual display by setting the background color for each color block. The hex value of each color is shown on the block as text. 🖌️✨

- **Event Listener** 🎧:
  - When the "Generate" button is clicked, the entire process (fetching the color scheme and displaying it) is triggered. 🖱️

### Technologies Used 🧑‍💻

- **HTML** 📄: To structure the web page.
- **CSS** 🎨: For styling the page.
- **JavaScript** ⚙️: To handle user interaction and fetch the color scheme from the API.
