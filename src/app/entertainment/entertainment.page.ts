import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';


@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.page.html',
  styleUrls: ['./entertainment.page.scss'],
})
export class EntertainmentPage implements OnInit {

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
    this.apiService.fetchNews().subscribe((data) => {
      // console.log(data);
       this.articles = data['articles'];
     });
  }

} // class
