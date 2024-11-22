interface IDish {
  id: string;
  title: string;
  price: number;
  urlImage: string;
}

interface IDishMutation {
  title: string;
  price: number;
  urlImage: string;
}

export interface ApiDish {
  [id: string]: IDish;
}