import styles from "./hero.module.css";
import { GitHubLastRepo } from "../../assets/class/hooks";
import { MenBlack, Rectangle } from "../../assets/images";

export default function Hero() {
  return (
    <div className={styles.portfolioContainer}>
      <main className={styles.heroContainer}>
        <section className={styles.heroSection}>
          <h2>
            Marlo is a <span>web designer</span> and <span>front-end developer</span>
          </h2>
          <p>
            He crafts responsive websites where technologies meet creativity
          </p>
          <div>
            <button>
              <p>Contact me!!</p>
            </button>
          </div>
        </section>
        <section className={styles.heroImage}>
          <img src={MenBlack} alt="Men in black" />
          <div>
            <img src={Rectangle} alt="Status" />
            <p>
              Currently working on&nbsp;
              <GitHubLastRepo />
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
