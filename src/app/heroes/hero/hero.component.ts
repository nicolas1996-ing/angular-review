import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  showBtnChangeAge: boolean = true;
  showBtnChangeName: boolean = true;

  hero = {
    name: 'ironman',
    age: 45,
  };

  get capitalizeName(): string {
    return this.hero.name.toLocaleUpperCase();
  }

  get heroDescritpion(): string {
    return `${this.hero.name} - ${this.hero.age}`;
  }

  changeName(): void {
    this.showBtnChangeName = false;
    this.hero.name = 'new-hero-name';
  }

  changeAge(): void {
    this.showBtnChangeAge = false;
    this.hero.age = Math.round(Math.random() * 100);
  }

  resetForm(): void {
    this.showBtnChangeAge = true;
    this.showBtnChangeName = true;

    this.hero = {
      name: 'ironman',
      age: 45,
    };
  }
}
