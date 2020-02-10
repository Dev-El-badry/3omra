import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from '../../shared/translate-config.service';

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.page.html",
  styleUrls: ["./welcome.page.scss"]
})
export class WelcomePage implements OnInit {
  constructor(private translateConfig: TranslateConfigService) {}

  ngOnInit() {
    var defaultLang = this.translateConfig.getDefaultLanguage();
    this.translateConfig.setLanguage("ar");
  }


}
