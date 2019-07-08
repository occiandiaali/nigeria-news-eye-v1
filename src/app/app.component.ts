import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'About',
      url: '/about',
      icon: 'help-circle-outline'
    },
    {
      title: 'Entertainment',
      url: '/entertainment',
      icon: 'logo-game-controller-b'
    },
    {
      title: 'Business',
      url: '/business',
      icon: 'business'
    },
    {
      title: 'Sports',
      url: '/sports',
      icon: 'basketball'
    },
    {
      title: 'Technology',
      url: '/technology',
      icon: 'cog'
    }
    ,
    {
      title: 'Health',
      url: '/health',
      icon: 'medkit'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
