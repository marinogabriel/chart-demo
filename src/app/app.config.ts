import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { NG_CHARTS_CONFIGURATION, NgChartsConfiguration } from 'ng2-charts';
import { routes } from './app.routes';
import {
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  LineController, LineElement, PointElement,
  Title,
  Tooltip
} from 'chart.js';

const ngChartsConfig: NgChartsConfiguration = {};

Chart.register(
  CategoryScale,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {
      provide: NG_CHARTS_CONFIGURATION,
      useValue: ngChartsConfig
    }]
};
