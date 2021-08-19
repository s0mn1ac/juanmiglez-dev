import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements OnInit {

  @Input() imgUrl = 'https://dummyimage.com/300/fff/000';
  @Input() type = 'one';
  @Input() back = true;

  constructor() {
    //
  }

  ngOnInit(): void {
    //
  }

}
