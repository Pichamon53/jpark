import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  barChart: any = []; //ประกาศตัวแปรเก็บค่า
  doughnut: any = [];
  constructor() { }

  ngOnInit() {
    this.doughnut = new Chart('doughnut', {
      type: 'doughnut',
      data: {
        labels: ["1", "2", "3", "4", "5", "6"],
        datasets: [{
          data: [10, 20, 30, 40, 50, 10],
          backgroundColor: ["#00ff00", "red", "purple", "green", "orange", "blue"],
          borderWidth: 0
        }]
      }
    });

    this.barChart = new Chart('barChart', { // สร้าง object และใช้ชื่อ id lineChart ในการอ้างอิงเพื่อนำมาเเสดงผล
      type: 'bar', // ใช้ชนิดแผนภูมิแบบเส้นสามารถเปลี่ยนชิดได้
      data: { // ข้อมูลภายในแผนภูมิแบบเส้น
        labels: ["", "", "", "", "", ""], // ชื่อของข้อมูลในแนวแกน x
        datasets: [{ // กำหนดค่าข้อมูลภายในแผนภูมิแบบเส้น
          label: ['Data A'],
          data: [50, 20, 30, 50, 70, 60, 10],
          fill: false,
          lineTension: 0.2,
          backgroundColor: ["red", "blue", "green", "yellow", "purple", "orange"],
          borderWidth: 0
        }]
      },
      options: {
        title: { // ข้อความที่อยู่ด้านบนของแผนภูมิ
          text: "Bar Chart",
          display: false
        }
      }
    });
  }

}
