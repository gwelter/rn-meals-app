export default class Meal {
  constructor(
    public id: string,
    public categoryIds: string[],
    public title: string,
    public affordability: string,
    public complexity: string,
    public imageUrl: string,
    public duration: Number,
    public ingreditens: string[],
    public steps: string[],
    public isGlutenFree: boolean,
    public isVegan: boolean,
    public isVegetarian: boolean,
    public isLactoseFree: boolean
  ) {}
}
