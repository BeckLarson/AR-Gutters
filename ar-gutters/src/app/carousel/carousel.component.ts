import { Component, Input} from "@angular/core";

export interface Slide{
  imgSrc: string;
  imgAlt: string;
}
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent{

    @Input() images: Slide[] = [];

    selectedIndex = 1;

    showPrev(i:number){
      if(this.selectedIndex > 0){
        this.selectedIndex =i -1;
      }
    }

    showNext(i:number){
      if(this.selectedIndex < this.images?.length - 1){
        this.selectedIndex = i + 1;
      }
    }
}
