import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { CatService } from '../../services/cat.service';
import { ICat } from '../../interfaces/cat.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'cf-cards-view',
  templateUrl: './cards-view.component.html',
  styleUrls: ['./cards-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardsViewComponent implements OnInit {
  catList: ICat[];
  cardSize = 300;
  cardsInRaw = 4;

  constructor(private catService: CatService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.cardsInRaw = this.calcCardsInRaw();
    this.catService.getCatList().subscribe((cl: ICat[]) => {
      this.catList = cl;
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.cardsInRaw = this.calcCardsInRaw();
  }

  calcCardsInRaw(): number {
    const viewWidth = window.outerWidth;
    return viewWidth >= 1025 ? 4 :
      viewWidth >= 729 ? 2 : 1;
  }

  handleLikeClick(catItem: ICat) {
    this.replaceItemInList({...catItem, like: !catItem.like});
    const onError = this.handleLikeClickError.bind(this, catItem);
    this.catService.setLikeCat(catItem.id).subscribe(_ => true, onError);
  }

  handleLikeClickError(catBeforeChange: ICat, error) {
    console.warn(error);
    const mess = `Could not like ${catBeforeChange.name} cat`;
    this.showToastErrorMessage(mess);
    this.replaceItemInList({...catBeforeChange});
  }

  replaceItemInList(itemToReplace) {
    this.catList = this.catList.map(item => item.id === itemToReplace.id ? itemToReplace : item);
  }

  handleRemoveClick(catItem: ICat) {
    this.catList = this.catList.filter(item => item !== catItem);
    const onError = this.handleRemoveClickError.bind(this, catItem);
    this.catService.removeLikeCat(catItem.id).subscribe(_ => true, onError);
  }

  handleRemoveClickError(removedCat: ICat, error) {
    console.warn(error);
    const mess = `Could remove ${removedCat.name} cat`;
    this.showToastErrorMessage(mess);
    this.catList = [...this.catList, removedCat];
    this.catList.sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
  }

  showToastErrorMessage(message: string) {
    this.toastr.error(message, null, {
      timeOut: 5000,
      positionClass: 'toast-top-center'
    });
  }
}
