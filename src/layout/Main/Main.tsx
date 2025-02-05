import "./Main.style.scss";
import { Hero } from "../../components/Hero/Hero";
import { PrimaryProducts } from "../../components/PrimaryProducts/PrimaryProducts";
import { exampleProducts } from "../../data/exampleProducts";
import { OurCollection } from '../../components/OurCollection/OurCollection';
import { LatestCollection } from '../../components/LatestCollection/LatestCollection';
import { ShortAbout } from '../../components/ShortAbout/ShortAbout';
import { FAQ } from '../../components/FAQ/FAQ';
import { Subscribe } from '../../components/Subscribe/Subscribe';

// const slides: Slide[] = [
//   {
//     id: 1,
//     title: "Летняя коллекция",
//     description: "Откройте для себя яркие краски лета",
//     image: "",
//     link: "/collections/summer",
//   },
//   {
//     id: 2,
//     title: "Осенний стиль",
//     description: "Теплые оттенки для прохладных дней",
//     image: "",
//     link: "/collections/autumn",
//   },
//   {
//     id: 3,
//     title: "Зимний гардероб",
//     description: "Элегантность в каждой детали",
//     image: "",
//     link: "/collections/winter",
//   },
// ];

export const Main = () => {
  return (
    <main className="main">
      <Hero />
      <PrimaryProducts products={exampleProducts} />
      <OurCollection />
      <LatestCollection 
        products={exampleProducts}
      />
      <ShortAbout />
      <FAQ />
      <Subscribe />
    </main>
  );
};
