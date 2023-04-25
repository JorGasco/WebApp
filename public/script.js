import basketStore from './models/basket-store.js';
import productStore from './models/product-store.js';
// Import Handlebars
import Handlebars from 'handlebars';

function renderBasket() {
  const basketTemplateSource = $('#basket-template').html();
  const basketTemplate = Handlebars.compile(basketTemplateSource);
  const basketHtml = basketTemplate(basketStore.getAllItems());
  $('#views').html(basketHtml);

  $('.remove-from-basket').on('click', handleRemoveFromBasket);
}

function addToBasket(productId) {
  $.ajax({
    url: '/basket/add',
    type: 'POST',
    data: { productId },
    success: function (response) {
      // Update the basket view or display a notification
    },
    error: function (xhr, status, error) {
      console.error('Error adding product to basket:', error);
    }
  });
}

function handleRemoveFromBasket() {
  const productId = $(this).data('product-id');
  basketStore.removeItem(productId);
  renderBasket();
}
