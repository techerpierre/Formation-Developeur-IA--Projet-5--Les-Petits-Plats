export type Recipe = {
  id: number;
  image: string;
  name: string;
  slug: string;
  servings: number;
  ingredients: {
    ingredient: string;
    quantity?: number;
    unit?: string;
  }[];
  time: number;
  description: string;
  appliance: string;
  ustensils: string[];
};

export type RecipeSearchQuery = {
  ingredients?: string[];
  appliances?: string[];
  ustensils?: string[];
  globalQuery?: string;
};
