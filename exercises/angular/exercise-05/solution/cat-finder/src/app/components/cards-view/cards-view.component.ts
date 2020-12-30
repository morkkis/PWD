import { Component, OnInit } from '@angular/core';
import { CatService } from '../../services/cat.service';
import { ICat } from '../../interfaces/cat.interface';

@Component({
  selector: 'cf-cards-view',
  templateUrl: './cards-view.component.html',
  styleUrls: ['./cards-view.component.scss']
})
export class CardsViewComponent implements OnInit {
  catList: ICat[];

  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.catService.getCatList().subscribe((cl: ICat[]) => {
      this.catList = cl;
    });
  }
}
