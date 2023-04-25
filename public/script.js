import basketStore from './models/basket-store.js';
import productStore from './models/product-store.js';

function renderBasket() {
  const basketTemplateSource = $('#basket-template').html();
  const basketTemplate = Handlebars.compile(basketTemplateSource);
  const basketHtml = basketTemplate(basketStore.getAllItems());
  $('#views').html(basketHtml);

  // Attach click event handler for removing items from the basket
  $('.remove-from-basket').on('click', function () {
    const productId = $(this).data('product-id');
    basketStore.removeItem(productId);
    renderBasket(); // Update the view
  });
}

function addProductToBasket(productId) {
  const product = productStore.getProductById(productId);
  basketStore.addItem(product);
  // update the basket view or display a notification
}

$(document).ready(function () {
  // Add an event listener for the "Add to Basket" button
  $(".add-to-basket").on("click", function () {
    const productId = $(this).data('product-id');
    addProductToBasket(productId);
  });

  // The rest of your event listeners
});

const greenbtn = document.querySelector(".green");

greenbtn &&
  greenbtn.addEventListener("click", () => alert("Thanks! You're okay too"));

const bluebtn = document.querySelector(".blue");

bluebtn &&
  bluebtn.addEventListener("click", () => {
    let readMoreDiv = document.querySelector("#readmore");
    if (readMoreDiv.style.display === "block") {
      readMoreDiv.style.display = "none";
    } else {
      readMoreDiv.style.display = "block";
    }
  });

const redbtn = document.querySelector(".red");

const welcomeUserDiv = document.querySelector("#welcomeuser");

redbtn &&
  redbtn.addEventListener("click", () => {
    let username = prompt("What's your name?");
    welcomeUserDiv.style.display = "block";
    document.querySelector("#welcomeuser").innerHTML = `<p> Hello, ${username},
    looking forward to hearing your playlists! Click this message to close it.</p>`;
    welcomeUserDiv.style.cursor = "pointer";
  });

welcomeUserDiv &&
  welcomeUserDiv.addEventListener("click", (evt) => {
    welcomeUserDiv.style.display = "none";
  });

const ratebtn = document.querySelector("#rateit");

ratebtn &&
  ratebtn.addEventListener("click", () => {
    let userRating = parseInt(prompt("Rate this collection (from 1 to 5 stars)"));
    if (userRating > 5 || userRating < 1 || isNaN(userRating)) {
      alert("Try again with a number between 1 and 5!");
    } else {
      document.querySelector("#rating").innerHTML = "You gave a rating of: ";
      for (let i = 0; i < userRating; i++) {
        document.querySelector("#rating").innerHTML += "<i class='yellow star icon'></i>";
      }
    }
  });


