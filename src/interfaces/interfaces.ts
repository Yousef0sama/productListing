
export interface ProductI {
  id : number,
  name : string,
  price : number,
  category : string,
  description : string,
}

export type setState<T> = (curr : T) => void