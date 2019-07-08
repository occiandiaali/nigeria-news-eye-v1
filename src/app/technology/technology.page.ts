import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.page.html',
  styleUrls: ['./technology.page.scss'],
})
export class TechnologyPage implements OnInit {
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
    this.apiService.fetchTech().subscribe((data) => {
      // console.log(data);
       this.articles = data['articles'];
     });
  }

} // class
