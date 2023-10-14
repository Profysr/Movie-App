import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";

const MovieCard = ({ movies }) => {
  const { id, title, synopsis, backgroundImage: img } = movies.jawSummary;
  return (
    // <div className={styles.card_section}>
    <div className={styles.card}>
      <div className={styles.card_image}>
        <Image src={img.url} alt={title} width={320} height={280} />
      </div>
      <div className={styles.card_data}>
        <h2>{title}</h2>
        <p>{synopsis}</p>
        <Link href={`/movie/${id}`}>
          <button>Read More</button>
        </Link>
      </div>
      {/* </div> */}
    </div>
  );
};

export default MovieCard;
