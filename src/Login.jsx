import styles from "./Login.module.css";

export default function Login() {
  return (
    <>
      <div className={styles.Container}>
        <div className={styles.LoginLogoWrap}>
          <img
            className={styles.LoginLogo}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt=""
          />
        </div>
        <div className={styles.LoginBox}>
          <div>
            <h2 style={{ textAlign: "center" }}>Sign In</h2>
          </div>
          <div className={styles.InputForm}>
            <h5 style={{ height: "5px" }}>Email</h5>
            <input className={styles.Input} type="email" />
            <h5 style={{ height: "5px" }}>Password</h5>
            <input className={styles.Input} type="password" />
            <button className={styles.Btn}>Sign In </button>
          </div>
        </div>
      </div>
    </>
  );
}
