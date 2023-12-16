const gravityBall = document.getElementById("canvas");
const removeButton = document.getElementById("remove");
const ctx = gravityBall.getContext("2d");
const circles = [];

gravityBall.width = window.innerWidth;
gravityBall.height = window.innerHeight;
class Circle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocityY = 0;
    this.dampening = 0.9;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
  update() {
    this.velocityY += 0.5;

    if (this.y + this.velocityY + this.radius >= gravityBall.height) {
      this.y = gravityBall.height - this.radius;
      this.velocityY *= -this.dampening;
    } else {
      this.y += this.velocityY;
    }

    this.draw();
  }
}

gravityBall.addEventListener("click", (event) => {
  const x = event.clientX;
  const y = event.clientY;
  const radius = 20;
  const colour = getRandomColor();
  const circle = new Circle(x, y, radius, colour);
  circles.push(circle);
});

function getRandomColor() {
  const words = "0123456789ABCDEF";
  let colour = "#";
  for (let i = 0; i < 6; i++) {
    colour += words[Math.floor(Math.random() * 16)];
  }
  return colour;
}

const animation = () => {
  requestAnimationFrame(animation);
  ctx.clearRect(0, 0, gravityBall.width, gravityBall.height);
  circles.map((circle) => {
    circle.update();
  });
};
animation();

removeButton.addEventListener("click", () => {
  circles.length = 0;
});
