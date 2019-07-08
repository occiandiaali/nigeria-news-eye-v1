import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_PRE = 'https://newsapi.org/v2/top-headlines?country=ng&category=';
  apiCategory;
  API_KEY = '&apiKey=40f233687a574369b42c8cd177ab60e0';
  // apiUrl = `${this.API_PRE}${this.apiCategory}${this.API_KEY}`;

  constructor(private httpClient: HttpClient) { }

  getNews() {
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=ng${this.API_KEY}`);
  }

  fetchEntertainment() {
    this.apiCategory = 'entertainment';
    return this.httpClient.get(this.API_PRE + this.apiCategory + this.API_KEY);
  }
  fetchSports() {
    this.apiCategory = 'sports';
    return this.httpClient.get(this.API_PRE + this.apiCategory + this.API_KEY);
  }
  fetchBiz() {
    this.apiCategory = 'business';
    return this.httpClient.get(this.API_PRE + this.apiCategory + this.API_KEY);
  }
  fetchTech() {
    this.apiCategory = 'technology';
    return this.httpClient.get(this.API_PRE + this.apiCategory + this.API_KEY);
  }
  fetchHealth() {
    this.apiCategory = 'health';
    return this.httpClient.get(this.API_PRE + this.apiCategory + this.API_KEY);
  }


  // for other categories
  fetchNews() {
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=ng&category=entertainment${this.API_KEY}`);
  }

} // class
