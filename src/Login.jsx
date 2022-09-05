import styles from "./Login.module.css";
import Header from "./Header";

export default function Login() {
  return (
    <>
      <Header />
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
            <p style={{ fontSize: "smaller" }}>
              By continuing, you agree to Amazon's Conditions of Use and Privacy
              Notice.
            </p>
            <button className={styles.Btn}>Create your amazon account</button>
            <p className={styles.Text}>Login With :</p>
            <p className={styles.Google}>google login</p>
          </div>
        </div>
      </div>
    </>
  );
}
