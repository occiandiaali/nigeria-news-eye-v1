import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';


@Component({
  selector: 'app-sports',
  templateUrl: './sports.page.html',
  styleUrls: ['./sports.page.scss'],
})
export class SportsPage implements OnInit {
  articles;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.resourceCapture();
    setInterval(this.resourceCapture, 600000);
  }

  // get api data
  resourceCapture = () => {
    this.apiService.fetchSports().subscribe((data) => {
      // console.log(data);
       this.articles = data['articles'];
     });
  }

} // class
