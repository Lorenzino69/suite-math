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
      title: 'Suite-arythmetique',
      url: '/suite-arythmetique',
      icon: 'ios-calculator'
    },
    {
      title: 'Suite-geometrique',
      url: '/suite-geometrique',
      icon: 'ios-barcode'
    },
      {
          title: 'Somme-suite',
          url: '/somme-suite',
          icon: 'ios-add'
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
