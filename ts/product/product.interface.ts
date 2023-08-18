export interface ProductProps {
  id : number ,
  name : string ,
  price : number,
  image : string ,
  discount : number,
  status : 'Available' | 'Out of stock'
}