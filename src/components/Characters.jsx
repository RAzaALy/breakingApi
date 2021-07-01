import React from "react";
import CharacterItem from "./CharacterItem";
import Spinner from "./Spinner";
const Characters = ({ items, loading }) => {
  return loading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem item={item} id={item.char_id} />
      ))}
    </section>
  );
};

export default Characters;
