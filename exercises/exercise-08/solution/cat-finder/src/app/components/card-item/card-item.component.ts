import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICat } from '../../interfaces/cat.interface';

@Component({
  selector: 'cf-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent {
  @Input() data: ICat;
  @Output() handleLikeClick: EventEmitter<ICat> = new EventEmitter();
  @Output() handleRemoveClick: EventEmitter<ICat> = new EventEmitter();
}
