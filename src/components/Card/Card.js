import tamara from "../../assets/class-photos/Akguneyli Tamara.jpg";
import andrew from "../../assets/class-photos/Andrew Kelly.jpg";
import casper from "../../assets/class-photos/Casper Lam.jpg";
import david from "../../assets/class-photos/David Stewart.jpg";
import kenny from "../../assets/class-photos/kenny.jpeg";
import leon from "../../assets/class-photos/Leon Williams.jpg";
import maryam from "../../assets/class-photos/Maryam Al-Neama.jpg";
import sarah from "../../assets/class-photos/Sarah Naunton.jpg";
import sol from "../../assets/class-photos/Solomon Pipi.jpg";
import thinnapat from "../../assets/class-photos/Thinnapat Prasopakarakit.jpg";
import halim from "../../assets/class-photos/Halim Mouaziz.jpg";
import Cards from "../../components/Cards/Cards";
import "./Card.scss";
import { useEffect, useState } from "react";

export default function Card() {
  const picFunc = () => {
    return [
      { key: 1, img: tamara, isMatched: false },
      { key: 1, img: tamara, isMatched: false },
      { key: 2, img: andrew, isMatched: false },
      { key: 2, img: andrew, isMatched: false },
      { key: 3, img: casper, isMatched: false },
      { key: 3, img: casper, isMatched: false },
      { key: 4, img: david, isMatched: false },
      { key: 4, img: david, isMatched: false },
      { id: 5, img: kenny, isMatched: false },
      { key: 5, img: kenny, isMatched: false },
      { key: 6, img: halim, isMatched: false },
      { key: 6, img: halim, isMatched: false },
      { key: 7, img: leon, isMatched: false },
      { key: 7, img: leon, isMatched: false },
      { key: 8, img: thinnapat, isMatched: false },
      { key: 8, img: thinnapat, isMatched: false },
      { key: 9, img: sarah, isMatched: false },
      { key: 9, img: sarah, isMatched: false },
      { key: 10, img: maryam, isMatched: false },
      { key: 10, img: maryam, isMatched: false },
      { key: 11, img: sol, isMatched: false },
      { key: 11, img: sol, isMatched: false },
    ].sort(() => Math.random() - 0.5);
  };

  const [pics, setPics] = useState([]);
  const [flippedId, setFlippedId] = useState([]);
  const [canFlip, setCanFlip] = useState(true);

  useEffect(() => {
    setPics(picFunc());
  }, []);

  useEffect(() => {
    const [firstId, secondId] = flippedId;
    if (flippedId.length === 2) {
      setCanFlip(false);

      if (pics[firstId].key === pics[secondId].key) {
        setPics((prevPics) =>
          prevPics.map((pic, index) => ({
            ...pic,
            isMatched: index === firstId || index === secondId,
          }))
        );

        setFlippedId([]);
        setCanFlip(true);
      } else if (
        pics[firstId] &&
        pics[secondId] &&
        pics[firstId].key !== pics[secondId.key]
      ) {
        setTimeout(() => {
          setFlippedId([]);
          setCanFlip(true);
        }, 2000);
      }
    }
  }, [flippedId]);

  const flipPic = (index) => {
    if (!canFlip || flippedId.includes[index] || pics[index].isMatched) return;
    setFlippedId([...flippedId, index]);
  };

  return (
    <>
      {pics.map((picture, index) => (
        <div
          key={index}
          className={`card ${
            picture.isMatched
              ? "card--matched"
              : flippedId.includes(index)
              ? "card--flipped"
              : "card--unmatched"
          }`}
          onClick={() => flipPic(index)}
        >
          <img
            key={index}
            src={picture.img}
            alt=""
            className={`card__image ${
              picture.isMatched ? "card__image--matched" : ""
            }`}
          />
        </div>
      ))}
    </>
  );
}
