import cardStyles from "../styles/Card.module.css";

const Card = ({ title, urlToImage }) => {
  return (
    <div className={`w-72 h-64 flex flex-col font-monts text-xs  ${cardStyles.card}`}>

      <img src={urlToImage} alt="Image" className=" w-full h-40" />
      <div className={cardStyles.card__info}>
        <h2 className={cardStyles.card__title}>{title}</h2>
      </div>
      <div className={cardStyles.card__modal}>
        <button className={cardStyles.card__button}>Lihat Selengkapnya</button>
      </div>
    </div>
  );
};

export default Card;
