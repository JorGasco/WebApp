const basket = {
  items: [],

  addProduct(product) {
    const existingProduct = this.items.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }
  },

  removeProduct(productId) {
    const productIndex = this.items.findIndex((item) => item.id === productId);
    if (productIndex > -1) {
      if (this.items[productIndex].quantity > 1) {
        this.items[productIndex].quantity--;
      } else {
        this.items.splice(productIndex, 1);
      }
    }
  },
};
