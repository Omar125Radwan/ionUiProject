import { Injectable } from '@angular/core';

export interface ICategory {
  id: number;
  name: string;
  image: string;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getCategories() {
    const categories = [];
    const cat1: ICategory = {
      id: 1,
      name: 'Women',
      image: '../assets/categories/category-1.png'
    };
    const cat2: ICategory = {
      id: 2,
      name: 'Men',
      image: '../assets/categories/category-2.png'
    };
    const cat3: ICategory = {
      id: 3,
      name: 'Kids',
      image: '../assets/categories/category-3.png'
    };
    categories.push(cat1, cat2, cat3);
    return categories;
  }
}
