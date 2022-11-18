import styles from "./Footer.module.css";
import { IoIosArrowUp } from "react-icons/io";

export default function Footer() {
  const clickToTop = () => {
    window.scrollTo(0, 0);
  };

  const content = [
    {
      title: "Get to Know Us",
      lists: {
        text1: "About",
        text2: "Career",
        text3: "Press",
        text4: "Amazon Cares",
        text5: "Gift a smile",
      },
    },
    {
      title: "Connect with us",
      lists: {
        text1: "Facebook",
        text2: "Twitter",
        text3: "Instagram",
      },
    },

    {
      title: "Make Money with Us",
      lists: {
        text1: "Sell on fake Amazon",
        text2: "Sell under fake Amazon",
        text3: "Become an Affiliate",
        text4: "Fulfilment by Amazon",
        text5: "Amazon Pay",
      },
    },
    {
      title: "Connect with us",
      lists: {
        text1: "COVID-19 and Amazon",
        text2: "Your Account",
        text3: "Returns Centre",
        text4: "100% Purchase Protection",
        text5: "Amazon App Download",
        text6: "Amazon Assistant Download",
        text7: "Help",
      },
    },
  ];

  return (
    <div className={styles.Container}>
      <div className={styles.UpBtn} onClick={clickToTop}>
        <IoIosArrowUp className={styles.UpIcon} />
      </div>
      <div className={styles.FooterWrap}>
        <div className={styles.Content}>
          {content.map((a, i) => {
            return (
              <>
                <div className={styles.TextWrap}>
                  <div className={styles.Title}>
                    <b>{a.title}</b>
                  </div>
                  <div>{a.lists.text1}</div>
                  <div>{a.lists.text2}</div>
                  <div>{a.lists.text3}</div>
                  <div>{a.lists.text4}</div>
                  <div>{a.lists.text5}</div>
                  <div>{a.lists.text6}</div>
                  <div>{a.lists.text7}</div>
                </div>
              </>
            );
          })}
        </div>
        <div>
          <hr style={{ margin: "0 0 2% 0" }} />

          <img
            className={styles.FooterLogo}
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
          <span className={styles.FooterText}>
            fake amazon clone developed by &copy;
          </span>
        </div>
      </div>
    </div>
  );
}
