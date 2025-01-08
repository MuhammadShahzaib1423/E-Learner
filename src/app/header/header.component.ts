import { Component,AfterViewInit } from '@angular/core';
import 'owl.carousel';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    $('.owl-carousel').owlCarousel({
      loop: true, 
      margin: 10,
      nav: true, 
      items: 1, 
      dots: true, 
      autoplay: true, 
      autoplayTimeout: 5000,
      autoplayHoverPause: true, 
    });
  }
  }

