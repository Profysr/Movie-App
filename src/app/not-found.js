import Link from "next/link";
import styles from "@/app/styles/notFound.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.notfound}>
        <div className={styles["notfound-404"]}>
          <h1>404</h1>
        </div>
        <h2>Oops! Nothing was found</h2>
        <p>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.{" "}
          <Link href="/">Return to homepage</Link>
        </p>
        <div className={styles["notfound-social"]}>
          <Link href="#">
            <i>
              {" "}
              <FaFacebookF />{" "}
            </i>
          </Link>
          <Link href="#">
            <i>
              {" "}
              <FaTwitter />{" "}
            </i>{" "}
          </Link>
          <Link
            href="https://www.instagram.com/thapatechnical/"
            target="_blank"
          >
            <i>
              {" "}
              <FaInstagram />{" "}
            </i>
          </Link>
          <Link href="#">
            <i>
              {" "}
              <FaLinkedinIn />{" "}
            </i>
          </Link>
          <Link href="#">
            <i>
              {" "}
              <FaYoutube />{" "}
            </i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
