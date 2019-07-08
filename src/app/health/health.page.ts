import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.page.html',
  styleUrls: ['./health.page.scss'],
})
export class HealthPage implements OnInit {

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
    this.apiService.fetchHealth().subscribe((data) => {
      // console.log(data);
       this.articles = data['articles'];
     });
  }

} // class
