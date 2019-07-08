import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.page.html',
  styleUrls: ['./business.page.scss'],
})
export class BusinessPage implements OnInit {
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
    this.apiService.fetchBiz().subscribe((data) => {
      // console.log(data);
       this.articles = data['articles'];
     });
  }

} // class
