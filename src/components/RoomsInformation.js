import First from "../assets/Singleroom.jpg";
import Second from "../assets/Doubleroom.jpg";
import Third from "../assets/Familyroom.jpg";
import Fourth from "../assets/Suite.jpg";

const room = [
  {
    id: 1,
    name: "Habitación Simple",
    price: 50,
    type: "simple",
    available: true,
    image: First,
  },
  {
    id: 2,
    name: "Habitación Doble",
    price: 100,
    type: "doble",
    available: false,
    image: Second,
  },
  {
    id: 3,
    name: "Habitación Familiar",
    price: 150,
    type: "familiar",
    available: true,
    image: Third,
  },
  {
    id: 4,
    name: "Suite",
    price: 200,
    type: "suite",
    available: true,
    image: Fourth,
  },
];

export default room;
