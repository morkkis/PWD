import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef} from '@angular/core';

// https://googlechrome.github.io/samples/intersectionobserver/

@Component({
  selector: 'app-load-table-data-on-intersection',
  templateUrl: './load-table-data-on-intersection.component.html',
  styleUrls: ['./load-table-data-on-intersection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadTableDataOnIntersectionComponent implements AfterViewInit {

  private scroller: HTMLElement;
  private sentinel: HTMLElement;
  private status: HTMLElement;
  private counter = 0;

  constructor(private myElement: ElementRef<HTMLElement>) {
    this.onIntersection = this.onIntersection.bind(this);
  }

  ngAfterViewInit(): void {
    this.scroller = this.myElement.nativeElement.querySelector('#scroller');
    this.sentinel = this.myElement.nativeElement.querySelector('#sentinel');
    this.status = this.myElement.nativeElement.querySelector('#status');
    const intersectionObserver = new IntersectionObserver(this.onIntersection);
    intersectionObserver.observe(this.sentinel);
  }

  onIntersection(entries: IntersectionObserverEntry[]) {
    if (this.isNotVisibleInViewPort(entries[0])) {
      return;
    }
    this.loadItems(10);
    this.moveSentinelElementToEnd();
    this.loadItems(5);
    this.updateFooterStatus();
  }

  private isNotVisibleInViewPort(entry: IntersectionObserverEntry) {
    // If intersectionRatio is 0, the sentinel is out of view
    // and we do not need to do anything.
    return entry.intersectionRatio <= 0;
  }

  private moveSentinelElementToEnd() {
    // appendChild will move the existing element, so there is no need to
    // remove it first.
    this.scroller.appendChild(this.sentinel);
  }

  loadItems(n) {
    for (let i = 0; i < n; i++) {
      const newItem = document.createElement('div');
      newItem.classList.add('item');
      newItem.textContent = 'Item ' + ++this.counter;
      this.scroller.appendChild(newItem);
    }
  }

  updateFooterStatus() {
    this.status.textContent = `Loaded up to item ${this.counter}`;
  }

}
