import styles from "./Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiShoppingCart } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { RiMapPin2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className={styles.HeaderWrap}>
        <div className={styles.Container}>
          <GiHamburgerMenu
            className={styles.Hamburger}
            style={{ color: "white" }}
          />

 <Link to="/" className={styles.Link}>
            <img
              className={styles.HeaderImg}
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt=""
            />
          </Link>
          <input type="search" className={styles.SearchInput} />
          <AiOutlineSearch className={styles.SearchIcon} />

          <div className={styles.Menu}>
            <div className={styles.Next}>
              <Link to="/Login" className={styles.Link}>
                <span className={styles.Title}>Hello, User</span>
                <span className={styles.SmallTitle}>
                  <b>Sign In</b>
                </span>
              </Link>
            </div>
            <div className={styles.Next}>
              <Link to="/Order" className={styles.Link}>
                <span className={styles.Title}>Return</span>
                <span className={styles.SmallTitle}>
                  <b>Orders</b>
                </span>
              </Link>
            </div>
            <div className={styles.Next}>
              <span className={styles.Title}>Try</span>
              <span className={styles.SmallTitle}>
                <b>Prime</b>
              </span>
            </div>

            <Link to="/Profile" className={styles.Link}>
            <div className={styles.Next}>
              <span className={styles.Title}>Your</span>
              <span className={styles.SmallTitle}>
                <b>Profile</b>
              </span>
            </div>
            </Link>

            <Link to="/Cart" className={styles.Link}>
            <HiShoppingCart className={styles.Cart} />
            </Link>
          </div>
        </div>
      </header>

      <div className={styles.ListContainer}>
        <div className={styles.MapFinWrap}>
          <RiMapPin2Line className={styles.MapFinIcon} />
        </div>
        <div className={styles.Place}>
          <span className={styles.Title}>Deliver to</span>
          <span className={styles.SmallTitle}>
            <b>Seongnam-si(KR)</b>
          </span>
        </div>
        <div className={styles.ListsWrap}>
          <span className={styles.List}>
            <b>All Products</b>
          </span>
          <span className={styles.List}>
            <b>Mobile</b>
          </span>
          <span className={styles.List}>
            <b>Today's Deal</b>
          </span>
          <span className={styles.List}>
            <b>Prime</b>
          </span>
          <span className={styles.List}>
            <b>Computers</b>
          </span>
          <span className={styles.List}>
            <b>Pantry</b>
          </span>
          <span className={styles.List}>
            <b>Electronics</b>
          </span>
        </div>
        <div className={styles.ImgWrap}>
          <img
            className="header__bottom-image"
            alt="Amazon App"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/MAI/Sweepstakes/June20/SWM_DownloadApp._CB410314483_.jpg"
          />
        </div>
      </div>
    </>
  );
}
