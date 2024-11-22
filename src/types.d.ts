interface IDish {
  id: string;
  name: string;
  price: number;
  urlImage: string;
}

interface IDishMutation {
  title: string;
  price: number;
  urlImage: string;
}

export type ApiDish = Omit<IDishMutation, 'id'>;