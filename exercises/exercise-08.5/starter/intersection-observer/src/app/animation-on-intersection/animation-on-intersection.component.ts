import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef} from '@angular/core';

// https://alligator.io/js/intersection-observer/

@Component({
  selector: 'app-animation-on-intersection',
  templateUrl: './animation-on-intersection.component.html',
  styleUrls: ['./animation-on-intersection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimationOnIntersectionComponent implements AfterViewInit {

  private selector = '.animate-me';
  private animationClassName = 'fancy';
  private config: IntersectionObserverInit = {
    rootMargin: '50px 20px 75px 30px',
    threshold: [0, 0.25, 0.75, 1],
  };

  constructor(private myElement: ElementRef) {
  }

  ngAfterViewInit(): void {
    // create observer
    // add to observer
  }

  addElementsToIntersectionObserver(intersectionObserver: IntersectionObserver) { }

  onIntersection(entries: IntersectionObserverEntry[]) { }

  private isVisibleInViewPort(entry: IntersectionObserverEntry) {
    return entry.intersectionRatio > 0;
  }

  private addClass(element: Element, className: string) {
    element.classList.add(className);
  }

  private removeClass(element: Element, className: string) {
    element.classList.remove(className);
  }

}
