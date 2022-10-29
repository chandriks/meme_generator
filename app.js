
let button = document.getElementById('btn');
const topTextUserInput = document.getElementById('topText');
const bottomTextUserInput = document.getElementById('bottomText');
const canvas = document.getElementById('memeCanvas');
const ctx = canvas.getContext("2d");

let image = new Image();
let delButton = document.createElement("button");
delButton.innerHTML = 'Delete Meme';
delButton.setAttribute('id', "b");
delButton.style.backgroundColor = 'Red';

button.addEventListener("click", function (e) {
  const imageUrl = document.getElementById('imgUrl').value;
  image.src = imageUrl;

  image.addEventListener(
    "load", function(e) {
      drawMemeCanvas(canvas, ctx, image, topTextUserInput.value, bottomTextUserInput.value);

      let divElement = document.createElement("Div");

// Styling it
      divElement.style.textAlign = "center";
      divElement.style.fontWeight = "bold";
      divElement.style.fontSize = "smaller";
      divElement.style.paddingTop = "15px";

      divElement.appendChild(delButton);
      document.body.appendChild(divElement);
    },
  { once: true }
  );
});

//adding top text
topTextUserInput.addEventListener("change", function (e) {
  drawMemeCanvas(canvas, ctx, image, topTextUserInput.value, bottomTextUserInput.value);
});

//adding bottom text
bottomTextUserInput.addEventListener("change", function (e) {
  drawMemeCanvas(canvas, ctx, image, topTextUserInput.value, bottomTextUserInput.value);
});

//delete button onclick
delButton.addEventListener("click", function(e){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const btn = document.getElementById("b");
  delButton.parentNode.removeChild(btn);
});

// drawing the meme
function drawMemeCanvas(canvas, ctx, image, topText, bottomText) {
  //const ctx = canvas.getContext("2d");
  const w = image.width;
  const h = image.height;
  const fontSize = Math.floor(w / 10);
  
  // Update canvas background
  canvas.width = w;
  canvas.height = h;
 ctx.drawImage(image, 0, 0);

  // Prepare text
  ctx.strokeStyle = "black";
  ctx.lineWidth = Math.floor(fontSize / 4);
  ctx.fillStyle = "green";
  ctx.textAlign = "center";
  //ctx.lineJoin = "round";
  ctx.font = `${fontSize}px Verdana`;

  const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
  gradient.addColorStop("0", "magenta");
  ctx.strokeStyle = gradient;

  // Add top text
  ctx.textBaseline = "top";
  ctx.strokeText(topText, w/2, h/25);
  ctx.fillText(topText, w/2, h/25);

  // Add bottom text
  ctx.textBaseline = "bottom";
  ctx.strokeText(bottomText, w/2, h-h/25);
  ctx.fillText(bottomText, w/2, h-h/25);
}
