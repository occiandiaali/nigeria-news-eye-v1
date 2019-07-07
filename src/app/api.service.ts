import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = '40f233687a574369b42c8cd177ab60e0';

  constructor(private httpClient: HttpClient) { }

  getNews() {
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=ng&apiKey=${this.API_KEY}`);
  }


  // for other categories
  fetchNews() {
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=ng&category=entertainment&apiKey=${this.API_KEY}`);
  }

} // class
