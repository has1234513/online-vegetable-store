// server/api/cart.js
import fs from 'fs';
import path from 'path';

// Define the path for data storage (file-based for this example)
const filePath = path.join(process.cwd(), 'server', 'data', 'cartData.json');

// Helper function to read cart data
const readCartData = () => {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf-8');
    return data
      ? JSON.parse(data)
      : { cartItems: [], orderSummary: {}, user: {} };
  }
  return { cartItems: [], orderSummary: {}, user: {} };
};

// Helper function to write cart data
const writeCartData = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// Define the API endpoint handler
export default defineEventHandler(async (event) => {
  const method = event.req.method;
  const body = await readBody(event);
  let data = readCartData();

  if (method === 'POST') {
    // Add an item to the cart
    const newItem = {
      id: body.id,
      name: body.name,
      imageUrl: body.imageUrl,
      pricePerUnit: body.pricePerUnit,
      unit: body.unit,
      quantity: body.quantity,
      totalPrice: body.pricePerUnit * body.quantity,
      isEditable: true,
    };
    data.cartItems.push(newItem);
    writeCartData(data);
    return {
      success: true,
      message: 'Item added to cart',
      cart: data.cartItems,
    };
  }

  if (method === 'PUT') {
    // Update item quantity or other details in the cart
    const itemIndex = data.cartItems.findIndex((item) => item.id === body.id);
    if (itemIndex > -1) {
      const updatedItem = {
        ...data.cartItems[itemIndex],
        quantity: body.quantity,
        totalPrice: body.pricePerUnit * body.quantity,
      };
      data.cartItems[itemIndex] = updatedItem;
      writeCartData(data);
      return {
        success: true,
        message: 'Item updated in cart',
        cart: data.cartItems,
      };
    }
    return { success: false, message: 'Item not found' };
  }

  if (method === 'DELETE') {
    // Remove an item from the cart
    data.cartItems = data.cartItems.filter((item) => item.id !== body.id);
    writeCartData(data);
    return {
      success: true,
      message: 'Item removed from cart',
      cart: data.cartItems,
    };
  }

  if (method === 'GET') {
    // Retrieve the cart data
    return {
      success: true,
      cart: data.cartItems,
      orderSummary: data.orderSummary,
      user: data.user,
    };
  }
});
