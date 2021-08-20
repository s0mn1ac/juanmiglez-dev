import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public yearsOfExperience!: number;

  constructor() {
    //
  }

  ngOnInit(): void {
    this.calculateYearsOfExperience();
  }

  private calculateYearsOfExperience(): void {
    this.yearsOfExperience = new Date().getFullYear() - 2019;
  }

}
