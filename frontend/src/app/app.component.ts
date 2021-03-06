import { Component } from '@angular/core';

import { TitleService } from '@core/services/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TitleService],
})
export class AppComponent {
  constructor(private titleService: TitleService) {
    this.titleService.initializeTitleService();
  }
}
