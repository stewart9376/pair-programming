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
import vlad from "../../assets/class-photos/Vlad.png";
import halim from "../../assets/class-photos/Halim Mouaziz.jpg";
import Cards from "../../components/Cards/Cards";
import "./Card.scss";

export default function Card() {
  const pictures = [
    { id: 1, img: tamara, stat: "" },
    { id: 1, img: tamara, stat: "" },
    { id: 2, img: andrew, stat: "" },
    { id: 2, img: andrew, stat: "" },
    { id: 3, img: casper, stat: "" },
    { id: 3, img: casper, stat: "" },
    { id: 4, img: david, stat: "" },
    { id: 4, img: david, stat: "" },
    { id: 5, img: kenny, stat: "" },
    { id: 5, img: kenny, stat: "" },
    { id: 6, img: halim, stat: "" },
    { id: 6, img: halim, stat: "" },
    { id: 7, img: leon, stat: "" },
    { id: 7, img: leon, stat: "" },
    { id: 8, img: thinnapat, stat: "" },
    { id: 8, img: thinnapat, stat: "" },
    { id: 9, img: sarah, stat: "" },
    { id: 9, img: sarah, stat: "" },
    { id: 10, img: maryam, stat: "" },
    { id: 10, img: maryam, stat: "" },
    { id: 11, img: sol, stat: "" },
    { id: 11, img: sol, stat: "" },
    { id: 12, img: vlad, stat: "" },
    { id: 12, img: vlad, stat: "" },
  ].sort(() => Math.random() - 0.5);
  return (
    <div className="card">
      {pictures.map((picture, index) => (
        <img key={index} src={picture.img} alt="" className="card__image" />
      ))}
    </div>
  );
}
