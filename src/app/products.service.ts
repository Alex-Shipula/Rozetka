import { Injectable } from '@angular/core';
import {Products} from './products';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
    private data: Products[] = [
        {id: 1, name: 'Ноутбук', price: 8000},
        {id: 2, name: 'Смартфон', price: 2500},
        {id: 3, name: 'Роутер', price: 500},
        {id: 4, name: 'Телевизор', price: 6000},
        {id: 5, name: 'Планшет', price: 3700},
        {id: 6, name: 'Пылесос', price: 1870},
        {id: 7, name: 'Микроволновка', price: 2560},
        {id: 8, name: 'Домашний кинотеатр', price: 8790},
        {id: 9, name: 'Холодильник', price: 9800},
        {id: 10, name: 'Стиральная машина', price: 4650},
    ];


    getData(): Products[] {

        return this.data;
    }

    getProducts(id: number):Products {
         const url = `${this.data}/${id}`;
        return this.data.find(product => product.id === id)
    }
}
