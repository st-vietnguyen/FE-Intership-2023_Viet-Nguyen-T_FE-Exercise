import { CartItemType } from '../cart/cart.interface';

export const fetchData = async (url: string): Promise<Array<CartItemType>> => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    return error.message;
  }
};
