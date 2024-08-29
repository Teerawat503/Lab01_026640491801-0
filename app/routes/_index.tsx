import type { MetaFunction } from "@remix-run/node";
import AppMenu from "./template/manu";
import Card from "./Card";
import { cards } from "./data";
import Foolter from "./template/foolter";

export const meta: MetaFunction = () => {
  return [
    { title: "Teerawat" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <AppMenu />
      <div className="card-container">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
      <Foolter />
    </>
  );
}
