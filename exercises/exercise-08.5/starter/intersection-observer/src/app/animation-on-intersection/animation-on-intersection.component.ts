import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef} from '@angular/core';

// https://alligator.io/js/intersection-observer/

@Component({
  selector: 'app-animation-on-intersection',
  templateUrl: './animation-on-intersection.component.html',
  styleUrls: ['./animation-on-intersection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimationOnIntersectionComponent implements AfterViewInit {

  private intersectionObserver: IntersectionObserver;
  private config: IntersectionObserverInit = {
    rootMargin: '50px 20px 75px 30px',
    threshold: [0, 0.25, 0.75, 1],
  };

  constructor(private myElement: ElementRef) {
    this.onIntersection = this.onIntersection.bind(this);
  }

  ngAfterViewInit(): void {
    const myImgs: NodeListOf<HTMLElement> = (this.myElement.nativeElement as HTMLElement).querySelectorAll<HTMLElement>('.animate-me');

    this.intersectionObserver = new IntersectionObserver(this.onIntersection, this.config);
    myImgs.forEach(image => {
      this.intersectionObserver.observe(image);
    });
  }

  onIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      if (this.isVisibleInViewPort(entry)) {
        entry.target.classList.add('fancy');
      } else {
        entry.target.classList.remove('fancy');
      }
    });
  }

  private isVisibleInViewPort(entry: IntersectionObserverEntry) {
    return entry.intersectionRatio > 0;
  }

}
