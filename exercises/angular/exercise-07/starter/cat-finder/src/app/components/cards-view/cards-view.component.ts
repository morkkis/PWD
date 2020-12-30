import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CatService } from '../../services/cat.service';
import { ICat } from '../../interfaces/cat.interface';

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

  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.catService.getCatList().subscribe((cl: ICat[]) => {
      this.catList = cl;
    });
  }
}
