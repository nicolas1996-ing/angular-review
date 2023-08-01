import { faker } from '@faker-js/faker';
import { Hero } from '../interfaces/hero.interface';

export const generateOneHero = (): Hero => ({
  id: faker.string.uuid(),
  name: faker.person.firstName(),
  power: +faker.finance.amount(0, 100),
});

export const generateManyHeroes = (count = 10): Hero[] => {
  const heroes: Hero[] = [];
  for (let index = 0; index < count; index++) {
    heroes.push(generateOneHero());
  }
  return heroes;
};
