

let button = document.getElementById('btn');
const topTextUserInput = document.getElementById('topText');
const bottomTextUserInput = document.getElementById('bottomText');
const canvas = document.getElementById('memeCanvas');
/*button.addEventListener('click', function(event) {
    event.preventDefault();
    const imgURL = document.getElementById('imgUrl').value;
    img = new Image();
    console.log(imgURL);
    img.src = imgURL;

    const canvas = document.getElementById('memeCanvas');
    const ctx =canvas.getContext("2D");

    const topTextuserInput = document.getElementById('topText').value;
    const bottomTextuserInput = document.getElementById('bottomText').value;
    
    const img = document.createElement("img");
    

    img.addEventListener('load', function (){
 
        ctx.drawImage(img, 0, 0);
        context.textAlign = 'center';
        adding top text to canvas
       context.strokeText(topTextuserInput, )

    });
});
 


   https://upload.wikimedia.org/wikipedia/commons/5/5e/Deepawali-festival.jpg
    document.img.appendChild(topTextuserInput);
    document.img.appendChild(bottomTextuserInput);
    document.body.appendChild(img);*/

    let image;

button.addEventListener("click", (e) => {
  //const imageDataUrl = URL.createObjectURL(e.target.files[0]);
  const imageDataUrl = document.getElementById('imgUrl').value;
  image = new Image();
  image.src = imageDataUrl;

  image.addEventListener(
    "load",
    () => {
      updateMemeCanvas(
        canvas,
        image,
        topTextUserInput.value,
        bottomTextUserInput.value
      );
    },
    { once: true }
  );
});

topTextUserInput.addEventListener("change", () => {
  updateMemeCanvas(canvas, image, topTextUserInput.value, bottomTextUserInput.value);
});

bottomTextUserInput.addEventListener("change", () => {
  updateMemeCanvas(canvas, image, topTextUserInput.value, bottomTextUserInput.value);
});

function updateMemeCanvas(canvas, image, topText, bottomText) {
  const ctx = canvas.getContext("2d");
  const width = image.width;
  const height = image.height;
  const fontSize = Math.floor(width / 10);
  const yOffset = height / 25;

  // Update canvas background
  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0);

  // Prepare text
  ctx.strokeStyle = "black";
  ctx.lineWidth = Math.floor(fontSize / 4);
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.lineJoin = "round";
  ctx.font = `${fontSize}px sans-serif`;

  // Add top text
  ctx.textBaseline = "top";
  ctx.strokeText(topText, width / 2, yOffset);
  ctx.fillText(topText, width / 2, yOffset);

  // Add bottom text
  ctx.textBaseline = "bottom";
  ctx.strokeText(bottomText, width / 2, height - yOffset);
  ctx.fillText(bottomText, width / 2, height - yOffset);
}
