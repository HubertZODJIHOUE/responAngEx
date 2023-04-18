import {Component, OnInit} from '@angular/core';
import {SettingsService} from "../services/settings.service";
import {HttpClient} from "@angular/common/http";
import {Products} from "../Models/Products";


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent  implements  OnInit{

  searchTerm = '';
  products: Products[] = [];
  searchPerformed = false;
  public istaogle : boolean= JSON.parse(localStorage.getItem('myValue') || 'false');
  constructor(private settingsService:SettingsService , private http: HttpClient) {
    this.settingsService.boolean$.subscribe(value => {this.istaogle= value})

  }

  ngOnInit(): void {

    this.http.get<Products[]>('https://api.example.com/products').subscribe(products => {
      // @ts-ignore
      this.products.push(products)
    });
    window.onload = function() {
      console.log('Page reloaded');
      // effectuer une action spécifique ici
    }


    }
  onSearch() {
    if (this.searchTerm.trim() !== '') {
      this.http.get('https://api-produits-ecologiques.com/products?search=' + this.searchTerm)
        .subscribe((response: any) => {
          this.products = response;
          this.searchPerformed = true;
        });
    } else {
      this.products = [];
      this.searchPerformed = false;
    }}


  onAddToCart(product: any) {

  }
}
