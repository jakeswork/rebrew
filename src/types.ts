interface Amount {
  value: number;
  unit: string;
}

interface BeerTemp {
  temp: Amount;
}

interface BeerMashTemp extends BeerTemp {
  duration: number;
}

interface BeerResponseMethod {
  fermentation: BeerTemp;
  twist: string;
  mash_temp: BeerMashTemp[];
}

export interface Ingredient {
  name: string;
  amount: Amount;
}

interface HopsIngredient extends Ingredient {
  add: string;
  attribute: string;
}

interface Recipie {
  malt: Ingredient[];
  hops: HopsIngredient[];
  yeast: string;
}

export interface Beer {
  id: number;
  name: string;
  tagline: string;
  description: string;
  abv: number;
  ibu: number;
  ebc: number;
  volume: Amount;
  ingredients: Recipie;
  first_brewed: string;
  image_url: string;
  boil_volume: Amount;
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
  method: BeerResponseMethod;
}

export interface User {
  display_name: string;
}

export interface Review {
  user: User;
  rating: number;
  comment: string;
}
