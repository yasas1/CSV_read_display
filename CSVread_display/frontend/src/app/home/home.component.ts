import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
//import  { CsvserveService } from '../csvserve.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.chart();
  }

  chart(){
    new Chart(document.getElementById("pie-chart"), {
      type: 'pie',
      data: {
        labels: ["Africa", "Asia", "Europe"],
        datasets: [{
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734]
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Predicted world population (millions) in 2050'
        }
      }
    });
  }

}
