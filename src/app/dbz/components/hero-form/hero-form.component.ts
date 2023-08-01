import { Component, EventEmitter, Output } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { faker } from '@faker-js/faker';
import { v4 as uuid } from 'uuid';

/*
  uuid config 
    npm i uuid
    npm i --save-dev @types/uuid
*/

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css'],
})
export class HeroFormComponent {
  @Output() newHeroFromSon = new EventEmitter<Hero>();

  hero = { id: '', name: '', power: 0 };
  addHero() {
    if (this.hero.name.length > 0) {
      this.newHeroFromSon.emit({ ...this.hero, id: uuid() });
      this.hero = { ...this.hero, name: '', power: 0 };
    }
  }
}
