function animate() {
  var tg = document.querySelector(".tg");
  tg.style.animationPlayState = "running";
  setTimeout(function () {
    tg.style.animationPlayState = "paused";
    setTimeout(animate, 3000);
  }, 1500);
}

animate();

function animate2() {
  var insta = document.querySelector(".insta");
  insta.style.animationPlayState = "running";
  setTimeout(function () {
    insta.style.animationPlayState = "paused";
    setTimeout(animate2, 3000);
  }, 1500);
}

animate2();

function animate3() {
  var email = document.querySelector(".email");
  email.style.animationPlayState = "running";
  setTimeout(function () {
    email.style.animationPlayState = "paused";
    setTimeout(animate3, 3000);
  }, 1500);
}

animate3();

function animate4() {
  var tel = document.querySelector(".tel");
  tel.style.animationPlayState = "running";
  setTimeout(function () {
    tel.style.animationPlayState = "paused";
    setTimeout(animate4, 3000);
  }, 1500);
}

animate4();
