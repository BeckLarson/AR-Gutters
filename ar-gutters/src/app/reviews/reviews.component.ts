import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {

  images = [
    {
      imgSrc: 'assets/review1.png',
      imgAlt: 'image 1',
    },
    {
      imgSrc: 'assets/review2.png',
      imgAlt: 'image 2',
    },
    {
      imgSrc: 'assets/review3.png',
      imgAlt: 'image 3',
    },
    {
      imgSrc: 'assets/review4.png',
      imgAlt: 'image 4',
    },
    {
      imgSrc: 'assets/review5.png',
      imgAlt: 'image 5',
    },
    {
      imgSrc: 'assets/review6.png',
      imgAlt: 'image 6',
    },
    {
      imgSrc: 'assets/review7.png',
      imgAlt: 'image 7',
    },
  ]
}
