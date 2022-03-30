import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private navCtrl: NavController, private util: UtilService) { }

  ngOnInit() {
  }

  login() {
    this.util.setMenuState(true);
    this.navCtrl.navigateBack('/home', {animationDirection: 'forward'});
  }

}
