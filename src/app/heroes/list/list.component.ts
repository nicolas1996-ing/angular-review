import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  heroeNames: string[] = ['spiderman', 'ironman', 'hulk', 'thor'];
  elementDeleted: string = '';

  removeLastHero() {
    this.elementDeleted = this.heroeNames.pop() || '';
  }
}
