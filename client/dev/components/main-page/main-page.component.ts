import {Component, HostListener, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';


@Component({
  moduleId: module.id,
  selector: 'main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent{
  constructor(@Inject(DOCUMENT) private document: Document) { }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    let element = this.document.getElementById('#main-content');
    let number = this.document.body.scrollTop;
    if (number > 20) {
      element.style.opacity = "0";
    }else if(number < 900){
      element.style.opacity = "1";
    }
  }
}
