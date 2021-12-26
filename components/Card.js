import cardStyles from "../styles/Card.module.css";
import Image from "next/image";

const Card = () => {
  return (
    <div className={cardStyles.card}>
      <Image src="/porosImg.png" width={280} height={260} />
      <div className={cardStyles.card__info}>
        <h2 className={cardStyles.card__title}>Hari Pahlawan Nasional</h2>
      </div>
      <div className={cardStyles.card__modal}>
        <button className={cardStyles.card__button}>Lihat Selengkapnya</button>
      </div>
    </div>
  );
};

export default Card;
