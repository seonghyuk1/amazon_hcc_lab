import styles from "./Order.module.css";
import Header from "./Header";

export default function Order() {
  return (
    <>
      <Header />
      <div className={styles.Container}>
        <div className={styles.Title}>
          <h1>Your Orders</h1>
        </div>
      </div>
    </>
  );
}
