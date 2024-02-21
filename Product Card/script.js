var number = document.querySelector(".number");
var plus = document.querySelector(".ri-add-line");
var minus = document.querySelector(".ri-subtract-line");
var btn = document.querySelector("#btn");
var item = document.querySelector(".cart-item");
var msg = document.querySelector(".message");

let counter = 1;

plus.addEventListener("click", function () {
  counter++;
  number.textContent = counter;
});

minus.addEventListener("click", function () {
  if (counter > 1) {
    counter--;
    number.innerText = counter;
  } else {
    counter = 1;
  }
});

btn.addEventListener("click", function () {

    if(item.textContent === ''){
        item.classList.add('cart-item-active');
        item.textContent = 1;
    }
    else {
        msg.classList.add('message-active');

        setTimeout(function(){
            msg.classList.remove('message-active');
        },2000)
    }

});