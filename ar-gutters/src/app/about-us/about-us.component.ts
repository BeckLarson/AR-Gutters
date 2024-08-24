import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

  constructor(private viewportScroller: ViewportScroller) {} 
  public onClick(elementId: string): void { this.viewportScroller.scrollToAnchor(elementId);}
}
