import styles from "@/app/styles/common.module.css";
import MovieCard from "../../../components/MovieCard";

const movie = async () => {

  await new Promise(resolve =>
    setTimeout(() => {
      resolve(1);
    }, 2000)
  );

  const url = process.env.RAPID_API_KEY;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1c7cae0d83msh7b0fbb0217f3b07p13c59ejsna8511b877efc",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;

  return <div className={styles.movieSection}>
    <div className={styles.container}>

    <h1>Movies & Series</h1>
      {/* <div className={styles.container}> */}
        <div className={styles.card_section}>
        {
          main_data.map((curElem)=>{
            return <MovieCard key={curElem.id} movies={...curElem} />
          })
        }
        </div>
      {/* </div> */}
    </div>
  </div>;
};

export default movie;
