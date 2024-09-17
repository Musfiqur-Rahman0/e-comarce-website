import product1 from "../assets/pexels-wildanzainulfaki-3323428.jpg";
import product2 from "../assets/pexels-akhmad-syarif-wirawan-1238083-2432220.jpg";
import product3 from "../assets/pexels-akhmad-syarif-wirawan-1238083-2432225.jpg";
import product4 from "../assets/pexels-wildanzainulfaki-3323428.jpg";
import product5 from "../assets/pexels-akhmad-syarif-wirawan-1238083-2432226.jpg";
import product6 from "../assets/pexels-gabby-k-5996980.jpg";
import product7 from "../assets/pexels-akhmad-syarif-wirawan-1238083-2432225.jpg";
import product8 from "../assets/pexels-shvetsa-4482887.jpg";
import product9 from "../assets/pexels-gabby-k-5996980.jpg";
import product10 from "../assets/pexels-akhmad-syarif-wirawan-1238083-2432220.jpg";

// import italian from "../assets/italian.jpeg";
// import japanese from "../assets/japanese.jpeg";
// import indian from "../assets/indian.jpeg";

import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export const LINKS = [
  { text: "Dishes", targetId: "dishes" },
  { text: "About", targetId: "about" },
  { text: "Mission", targetId: "mission" },
  { text: "Expertise", targetId: "expertise" },
  { text: "Review", targetId: "review" },
  { text: "Contact", targetId: "contact" },
];

export const PRODUCTS = [
  {
    id: 1,
    image: product1,
    title: "Spaghetti",
    description: "Creamy pasta with bacon and cheese",
  },
  {
    id: 2,
    image: product2,
    title: "Chicken ",
    description: "Indian curry with tender chicken in spicy sauce",
  },
  {
    id: 3,
    image: product3,
    title: "Caprese ",
    description: "Fresh tomatoes, mozzarella, and basil with balsamic glaze",
  },
  {
    id: 4,
    image: product4,
    title: "Sushi",
    description: "Assorted seafood and vegetables wrapped in seaweed and rice",
  },
  {
    id: 5,
    image: product5,
    title: "Chocolate",
    description: "Decadent chocolate cake with a gooey center",
  },
  {
    id: 6,
    image: product6,
    title: "Greek ",
    description: "Crisp lettuce, olives, feta cheese, and tangy dressing",
  },
  {
    id: 7,
    image: product7,
    title: "Pad Thai",
    description: "Stir-fried rice noodles with shrimp, tofu, and peanuts",
  },
  {
    id: 8,
    image: product8,
    title: "Peking ",
    description: "Crispy duck with pancakes, cucumber, and hoisin sauce",
  },
  {
    id: 9,
    image: product9,
    title: "Wellington",
    description: "Tender beef filet wrapped in pastry with mushrooms and herbs",
  },
  {
    id: 10,
    image: product10,
    title: "Tiramisu",
    description:
      "Italian dessert with layers of coffee-soaked biscuits and mascarpone",
  },
  {
    id: 11,
    image: product5,
    title: "Tiramisu",
    description:
      "Italian dessert with layers of coffee-soaked biscuits and mascarpone",
  },
  {
    id: 12,
    image: product1,
    title: "Tiramisu",
    description:
      "Italian dessert with layers of coffee-soaked biscuits and mascarpone",
  },
];

export const ABOUT = {
  header: "We love Creating!",
  content:
    "At Restaura, we believe that great food goes beyond taste; it tells a story of dedication and creativity. From our chef's signature creations to our attentive service, every detail is curated to ensure your visit is nothing short of exceptional. Whether you're savoring our renowned Tikka Kebab or exploring our diverse menu inspired by global flavors, each dish is a celebration of flavor and innovation. Join us for a culinary journey where every bite leaves a lasting impression. Experience Restaura—where every meal is a masterpiece.",
};

export const MISSION =
  "At our restaurant, our mission is to create delicious and memorable dining experiences.";

export const CUSINES = [
  {
    number: "01.",
    image: product5,
    title: "Italian",
    description:
      "Experience the flavors of Italy with our exquisite Italian cuisine, featuring traditional recipes and contemporary dishes.",
  },
  {
    number: "02.",
    image: product2,
    title: "Japanese",
    description:
      "Delight in the art of Japanese culinary excellence, offering a fusion of classic and modern flavors.",
  },
  {
    number: "03.",
    image: product7,
    title: "Indian",
    description:
      "Indulge in the rich and diverse tastes of India, with a menu that celebrates the country's culinary heritage.",
  },
];

export const REVIEW = {
  name: "Xaviour Fernando",
  profession: "Food Critic",
  content:
    "“As a seasoned food critic, my expectations are always high when stepping into a new dining establishment. Restaura, with its unassuming exterior and elegantly designed interior, promised a unique culinary experience from the moment I walked in. And I must say, it delivered beyond my expectations.”",
};

export const CONTACT = [
  { key: "address", value: "Address: 123 Main Street, Paris, France, 345678" },
  { key: "phone", value: "Phone: 123-456-7890" },
  { key: "email", value: "Email: contact@restaurant.com" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },

  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={30} className="hover:opacity-80" />,
  },
];
