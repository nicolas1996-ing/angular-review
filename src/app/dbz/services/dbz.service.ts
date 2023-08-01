import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';
import { generateManyHeroes } from '../mock /heroes.mock';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  heroes: Hero[] = [];

  constructor() {
    this.initHeroes();
  }

  initHeroes() {
    this.heroes = generateManyHeroes();
  }

  getHeroes() {
    return this.heroes;
  }

  addNewHero(hero: Hero) {
    this.heroes.push(hero);
  }

  deleteHero(id: string) {
    this.heroes = this.heroes.filter((h) => h.id != id);
  }
}
