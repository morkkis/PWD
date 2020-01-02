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
  private intersectionObserver: IntersectionObserver;
  private config: IntersectionObserverInit = {
    rootMargin: '50px 20px 75px 30px',
    threshold: [0, 0.25, 0.75, 1],
  };

  constructor(private myElement: ElementRef) {
    this.onIntersection = this.onIntersection.bind(this);
  }

  ngAfterViewInit(): void {
    this.intersectionObserver = new IntersectionObserver(this.onIntersection, this.config);
    this.addElementsToIntersectionObserver();
  }

  addElementsToIntersectionObserver() {
    const myImgs: NodeListOf<HTMLElement> = (this.myElement.nativeElement as HTMLElement).querySelectorAll<HTMLElement>(this.selector);
    myImgs.forEach(image => {
      this.intersectionObserver.observe(image);
    });
  }

  onIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      if (this.isVisibleInViewPort(entry)) {
        this.addClass(entry.target, 'fancy');
      } else {
        this.removeClass(entry.target, 'fancy');
      }
    });
  }

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
