// const options = [
//   { label: "red", color: "#FF0000" },
//   { label: "green", color: "#00FF00" },
//   { label: "blue", color: "#0000FF" },
//   { label: "white", color: "#eeeeeeee"},
//   {label: "pink", color:"#E91E63"},
// ];
// const pickerContainerEL = document.querySelector(".color-picker");
// const elements = options.map((item)=>{
//   const btnEl = document.createElement("button");
//   btnEl.classList.add("color-picker__option");
//   btnEl.textContent = item.label;
//   btnEl.style.backgroundColor = item.color;
//   return btnEl;
// })
// pickerContainerEL.append(...elements); 


// const makePickerOption = (arr) => {
//     return arr.map((item) => {
//         const btnEl = document.createElement("button");
//         btnEl.classList.add("color-picker__option");
//         btnEl.textContent = item.label;
//         btnEl.style.backgroundColor = item.color;

//         return btnEl;
//     })
// }


// colorPickerContainerEl.append(...makePickerOption(options))