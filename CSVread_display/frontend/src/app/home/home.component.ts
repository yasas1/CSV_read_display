import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { CsvReadserviceService } from '../csv-readservice.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _csv:CsvReadserviceService) { } 

  country1:String="";
  country2:String;
  country3:String;
  data1:number;
  data2:number;
  data3:number;

  ngOnInit() {

    this._csv.getcsvdata()
      .subscribe(
        data=>{
          console.log(data);
          console.log(data[0][0]);
          this.country1 = data[0][0];
          this.country2 = data[0][1];
          this.country3 = data[0][2];
          this.data1 = data[1][0];
          this.data2 = data[1][1];
          this.data3 = data[1][2];
          console.log(this.country3);

        },
        error=>console.error(error)
    );
    
    this.chart();
  }
 
  chart(){
    //var country1:String="";
 

    

    new Chart(document.getElementById("pie-chart"), {
      type: 'pie',
      data: {
        labels: [this.country1, this.country2, "Erope"],
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
