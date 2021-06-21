import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { initializeRoutes } from '../utils/routes.utils';
import { RouterOutlet } from '@angular/router';
import { appRoutingAnimations } from './shared/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    appRoutingAnimations,
  ]
})
export class AppComponent implements OnInit {
  title = 'Text Surge Web Texter';

  constructor(private primengConfig: PrimeNGConfig ) {}

  ngOnInit(): void {
    initializeRoutes();
    this.primengConfig.ripple = true;
  }

  prepareRoute(outlet: RouterOutlet): any {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
