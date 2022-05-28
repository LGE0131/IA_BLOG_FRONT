interface IMGS {
  name: string;
  id: number;
  url: string;
}

export interface CustomIMGS extends Array<IMGS> {}

const imgs: CustomIMGS = [
  {
    name: "sushi",
    id: 1,
    url: "/food1.jpg",
  },
  {
    name: "steamed food",
    id: 2,
    url: "/food2.jpg",
  },
  {
    name: "grilled food",
    id: 3,
    url: "/food3.jpg",
  },
  {
    name: "sashimi",
    id: 4,
    url: "/food4.jpg",
  },
];

export { imgs };
