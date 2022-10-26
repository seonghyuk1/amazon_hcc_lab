import styles from "./Header.module.css";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux"
import { GiHamburgerMenu } from "react-icons/gi";
import { HiShoppingCart } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { RiMapPin2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Header() {
  let a = useSelector((state) => { return state.user})
    const toggleMenu = () => {
          document.getElementById('sidebar').style.transform = `translatex(23rem)`
          document.getElementById('background').style.transform = `translatex(100vw)`
      };
  return (
    <>
      <header className={styles.HeaderWrap}>
        <div className={styles.Container}>
          <GiHamburgerMenu
            className={styles.Hamburger}
            style={{ color: "white" }}
            onClick={()=>toggleMenu()}
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
            <div className={styles.Next}>
              <span className={styles.Title}>Your</span>
              <span className={styles.SmallTitle}>
                <b>Profile</b>
              </span>
            </div>
            <Link to="/Order" className={styles.Link}>
              <HiShoppingCart className={styles.Cart} />
              <a>{a.length}</a>
            </Link>
          </div>
        </div>
      </header>


        <Sidebar/>


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
          <Link to = "/All" className={styles.Link}>
            <span className={styles.List}>
              <b>All Products</b>
            </span>
          </Link>
          <Link to = "/Mobile" className={styles.Link}>
          <span className={styles.List}>
            <b>Mobile</b>
          </span>
          </Link>
          <Link to = "/All" className={styles.Link}>
          <span className={styles.List}>
            <b>Today's Deal</b>
          </span>
          </Link>
          <Link to = "/Prime" className={styles.Link}>
          <span className={styles.List}>
            <b>Prime</b>
          </span>
          </Link>
          <Link to = "/Computers" className={styles.Link}>
          <span className={styles.List}>
            <b>Computers</b>
          </span>
          </Link>
          <Link to = "/Pantry" className={styles.Link}>
          <span className={styles.List}>
            <b>Pantry</b>
          </span>
          </Link>
          <Link to = "/Electronics" className={styles.Link}>
          <span className={styles.List}>
            <b>Electronics</b>
          </span>
          </Link>

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
