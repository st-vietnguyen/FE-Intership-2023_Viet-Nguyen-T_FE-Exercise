export const enum PRODUCT_STATUS {
  OUTOFSTOCK = 0,
  AVAILABLE = 1
}

export interface ProductProps {
  id : number ,
  name : string ,
  price : number,
  image : string ,
  discount : number,
  status : 0 | 1
}
