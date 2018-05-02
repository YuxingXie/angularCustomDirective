import { Component } from '@angular/core';
import {ChainLink} from './domain/chain-link';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  chainLik: ChainLink = new ChainLink(1, 'first', new ChainLink(2, 'second' , new ChainLink(3, 'third', null)));

}
