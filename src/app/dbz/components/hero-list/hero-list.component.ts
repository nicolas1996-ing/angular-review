import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent {
  @Input() heroes!: Hero[];
  @Output() idHeroDelete = new EventEmitter<string>();

  // emitir id del heroe a eliminar 
  deleteHero(id: string) {
    this.idHeroDelete.emit(id);
  }
}
