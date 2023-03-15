/* eslint-disable */
import styles from "./Home.module.css";
import { RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri";
import { useState } from "react";
// import { toast, ToastContainer } from "react-toastify";

function Home() {
  // const notify = () => toast("test", { position:"top-center" }) 토스트 실패
  let [img_num, setImg_num] = useState(0);

  let img_slide = () => {
    {
      img_num % 7 == 6 ? setImg_num(0) : setImg_num(img_num + 1);
    }
  };
  console.log(img_num);

  // 2초 간격으로 메시지를 보여줌
  let timerId = setInterval(() => img_slide(), 2000);

  // 3초 마다 클리어하여 중복 방지
  setTimeout(() => {
    clearInterval(timerId);
  }, 3000);

  return (
    <div className={styles.Home_background}>
      {/* <button onClick={ () => { {img_num % 7 == 6 ? setImg_num(0): setImg_num(img_num+1)}} } >dsda</button> */}

      <div className={styles.home_image_container}>
        <div className={styles.home_image}>
          <img src={process.env.PUBLIC_URL + "/image/image" + [img_num] + ".jpg"} />
        </div>
      </div>

      <div className={styles.item_container}>
        <div className={styles.item_row}>
          <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" />
          <span>The Lean Startup</span>

          <p className={styles.item_price}>
            <small>$.</small>
            <b>10</b>
            <p className={styles.item_rating}>
              {" "}
              <RiStarFill /> <RiStarFill /> <RiStarFill /> <RiStarFill /> <RiStarHalfFill />{" "}
            </p>
          </p>

          <button className={styles.item_button}>Add to Cart</button>
        </div>

        <div className={styles.item_row}>
          <img src="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg" />
          <span>Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band</span>

          <p className={styles.item_price}>
            <small>$.</small>
            <b>20</b>
            <p className={styles.item_rating}>
              {" "}
              <RiStarFill /> <RiStarFill /> <RiStarFill /> <RiStarFill /> <RiStarFill />{" "}
            </p>
          </p>

          <button className={styles.item_button}>Add to Cart</button>
        </div>

        <div className={styles.item_row}>
          <img src="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$" />
          <span>Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric</span>

          <p className={styles.item_price}>
            <small>$.</small>
            <b>98.99</b>
            <p className={styles.item_rating}>
              {" "}
              <RiStarFill /> <RiStarFill /> <RiStarFill /> <RiStarHalfFill /> <RiStarLine />{" "}
            </p>
          </p>

          <button className={styles.item_button}>Add to Cart</button>
        </div>

        <div className={styles.item_row}>
          <img src="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />
          <span>Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor</span>

          <p className={styles.item_price}>
            <small>$.</small>
            <b>199.99</b>
            <p className={styles.item_rating}>
              {" "}
              <RiStarFill /> <RiStarFill /> <RiStarFill /> <RiStarLine /> <RiStarLine />{" "}
            </p>
          </p>

          <button className={styles.item_button}>Add to Cart</button>
        </div>

        <div className={styles.item_row}>
          <img src="https://m.media-amazon.com/images/I/61i0CV-tKpL._AC_UL480_FMwebp_QL65_.jpg" />
          <span>Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric</span>

          <p className={styles.item_price}>
            <small>$.</small>
            <b>98.99</b>
            <p className={styles.item_rating}>
              {" "}
              <RiStarFill /> <RiStarFill /> <RiStarLine /> <RiStarLine /> <RiStarLine />{" "}
            </p>
          </p>

          <button className={styles.item_button}>Add to Cart</button>
        </div>

        <div className={styles.item_row}>
          <img src="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg" />
          <span>New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)</span>

          <p className={styles.item_price}>
            <small>$.</small>
            <b>598.99</b>
            <p className={styles.item_rating}>
              {" "}
              <RiStarFill /> <RiStarFill /> <RiStarFill /> <RiStarFill /> <RiStarLine />{" "}
            </p>
          </p>

          <button className={styles.item_button}>Add to Cart</button>
        </div>
      </div>

      <div className={styles.item_container}>
        <div className={styles.item_row2}>
          <img src="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg" />
          <span>Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440</span>

          <p className={styles.item_price2}>
            <small>$.</small>
            <b>1094.98</b>
            <p className={styles.item_rating}>
              {" "}
              <RiStarFill /> <RiStarFill /> <RiStarFill /> <RiStarFill /> <RiStarLine />{" "}
            </p>
          </p>

          <button className={styles.item_button}>Add to Cart</button>
        </div>
      </div>

      <div className={styles.item_container_nowrap}>
        <div className={styles.item_row3}>
          <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" />
          <span>The Lean Startup</span>

          <p className={styles.item_price}>
            <small>$.</small>
            <b>10</b>
            <p className={styles.item_rating}>
              {" "}
              <RiStarFill /> <RiStarFill /> <RiStarFill /> <RiStarFill /> <RiStarHalfFill />{" "}
            </p>
          </p>

          <button className={styles.item_button}>Add to Cart</button>
        </div>

        <div className={styles.item_row3}>
          <img src="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg" />
          <span>Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band</span>

          <p className={styles.item_price}>
            <small>$.</small>
            <b>20</b>
            <p className={styles.item_rating}>
              {" "}
              <RiStarFill /> <RiStarFill /> <RiStarFill /> <RiStarFill /> <RiStarFill />{" "}
            </p>
          </p>

          <button className={styles.item_button}>Add to Cart</button>
        </div>

        <div className={styles.item_row3}>
          <img src="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$" />
          <span>Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric</span>

          <p className={styles.item_price}>
            <small>$.</small>
            <b>98.99</b>
            <p className={styles.item_rating}>
              {" "}
              <RiStarFill /> <RiStarFill /> <RiStarFill /> <RiStarHalfFill /> <RiStarLine />{" "}
            </p>
          </p>

          <button className={styles.item_button}>Add to Cart</button>
        </div>

        <div className={styles.item_row3}>
          <img src="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />
          <span>Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor</span>

          <p className={styles.item_price}>
            <small>$.</small>
            <b>199.99</b>
            <p className={styles.item_rating}>
              {" "}
              <RiStarFill /> <RiStarFill /> <RiStarFill /> <RiStarLine /> <RiStarLine />{" "}
            </p>
          </p>

          <button className={styles.item_button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
