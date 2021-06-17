import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { initializeRoutes } from '../utils/routes.utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Text Surge Web Texter';

  constructor(private primengConfig: PrimeNGConfig ) {}

  ngOnInit(): void {
    initializeRoutes();
    this.primengConfig.ripple = true;
  }
}
