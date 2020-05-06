import { Component, OnInit, Input } from '@angular/core';
import { Prediction } from 'src/app/prediction.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {



  @Input() product: Prediction = {
    className: "",
    probability: 0.0
  };

  constructor() { }

  ngOnInit(): void {
  }

  getImage():string{

    return "data:image/jpeg;base64,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";
     
  }

}
