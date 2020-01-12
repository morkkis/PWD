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
  private counter = 1;

  constructor(private myElement: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.scroller = (this.myElement.nativeElement as HTMLElement).querySelector('#scroller');
    this.sentinel = (this.myElement.nativeElement as HTMLElement).querySelector('#sentinel');
    this.status = (this.myElement.nativeElement as HTMLElement).querySelector('#status');
  }

  onIntersection(entries: IntersectionObserverEntry[]) { }

  private isNotVisibleInViewPort(entry: IntersectionObserverEntry) { }

  private moveSentinelElementToEnd() {
    // appendChild will move the existing element, so there is no need to
    // remove it first.
    this.scroller.appendChild(this.sentinel);
  }

  loadItems(n) {
    for (let i = 0; i < n; i++) {
      const newItem = document.createElement('div');
      newItem.classList.add('item');
      newItem.textContent = 'Item ' + this.counter++;
      this.scroller.appendChild(newItem);
    }
  }

  updateFooterStatus() {
    this.status.textContent = `Loaded up to item ${this.counter}`;
  }

}
