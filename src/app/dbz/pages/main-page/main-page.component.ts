import { Component } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { generateManyHeroes } from '../../mock /heroes.mock';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  // constantemente está llamando al servicio
  get getHeroes() {
    return this.dbzService.getHeroes();
  }

  deleteHero(id: string) {
    this.dbzService.deleteHero(id);
  }
  addHero(hero: Hero) {
    this.dbzService.addNewHero(hero);
  }
}
