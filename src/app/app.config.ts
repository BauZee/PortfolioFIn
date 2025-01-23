import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { appRoutes } from './app.routes';
import 'primeng/resources/themes/lara-light-blue/theme.css';
import 'primeng/resources/primeng.css';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(appRoutes),
    provideAnimations() 
  ]
};