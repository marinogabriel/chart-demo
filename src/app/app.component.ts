import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartType, ChartConfiguration } from 'chart.js';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BaseChartDirective, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: any = {
    Food: {
      Snacks: {
        Chips: [100, 200, 150, 300],
        Cornflakes: [20, 160, 120, 200]
      },
      Burguers: {
        BeeMac: [90, 170, 130, 160],
        Whapper: [95, 180, 140, 280]
      }
    },
    Drinks: {
      Juice: {
        Orange: [50, 220, 180, 320],
        Grape: [130, 240, 190, 340]
      },
      Soda: {
        NukaCola: [80, 210, 160, 150],
        Juggernog: [125, 230, 170, 330]
      }
    }
  };

  categories = ['Comida', 'Bebida'];
  products = ['Fruta'];
  brands = ['Frutas2'];

  selectedCategory = 'Comida';
  selectedProduct = 'Fruta';
  selectedBrand = 'Frutas2';

  chartType: ChartType = 'line';

  chartLabels = ['January', 'February', 'March', 'April'];

  chartData: ChartConfiguration['data']['datasets'] = [
    {
      label: 'Sales',
      data: [100, 200, 150, 300],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1
    }
  ];

  chartOptions: ChartConfiguration['options'] = {
    animation: false,
    responsive: true,
    scales: { y: { beginAtZero: true } },
    plugins: { legend: { display: true } }
  };

  ngOnInit(): void {
    this.categories = Object.keys(this.data);
    this.selectedCategory = this.categories[0];
    this.onCategoryChange();
  }

  onCategoryChange(): void {
    this.products = Object.keys(this.data[this.selectedCategory]);
    this.selectedProduct = this.products[0];
    this.onProductChange();
  }

  onProductChange(): void {
    this.brands = Object.keys(this.data[this.selectedCategory][this.selectedProduct]);
    this.selectedBrand = this.brands[0];
    this.updateChart();
  }

  onBrandChange(): void {
    this.updateChart();
  }

  updateChart(): void {
    const sales = this.data[this.selectedCategory][this.selectedProduct][this.selectedBrand];
    this.chartData = [{
      label: 'Sales',
      data: sales,
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 2
    }];
  }
}
