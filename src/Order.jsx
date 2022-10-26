import styles from "./Order.module.css";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux"
import { RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri";
import { deleteItem } from "./store/cartSlice";
import { useState } from "react";

export default function Order(props) {
  let a = useSelector((state) => { return state.user})
  let dispatch = useDispatch()
  let sum  = 0
  console.log(a.length)

  return (
    <>
      <Header />
      <div className={styles.Container}>
        <div className={styles.Container__left}>
        <div className={styles.Title}>
          <h1>Your Orders</h1>
        </div>
        {
                    a.length>0?
                    a.map((s, i)=>{
                      sum += s.price
                      let halfRating = (s.grade - Math.floor(s.grade)) * 10;
                      let outline = 0;
                        return(
                            <div className = {styles.cart__card}>
                              <img className = {styles.cart__image} src={s.img}/>
                              <div className = {styles.cart__explaination}>
                                <div className = {styles.cart__title}>{s.title}</div>
                                <div className = {styles.cart__price}>${s.price}</div>
                                <div className={styles.item_rating}>
                                  {
                                      Array(Math.floor(s.grade))
                                          .fill()
                                          .map((_, index) => (
                                              <RiStarFill key={index} />
                                          ))
                                  }
                                  {
                                      (halfRating > 0) ? <RiStarHalfFill /> : <></>
                                  }
                                  {
                                      outline > 0 ? (
                                          Array(outline)
                                              .fill()
                                              .map((_, index) => (
                                                  <RiStarLine key={index} />
                                              ))
                                      )
                                          : ""
                                  }
                                </div>
                                <button className={styles.cart__btn} onClick={()=>{
                                  dispatch(deleteItem(s))
                                }}>Remove From Cart</button>
                              </div>
                            </div>
                        )})
                        :
                        <div>주문한 상품이 없습니다</div>
                }
                </div>
                {
                  a.length>0?
                  <div className={styles.Container_right}>
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
                      alt=""
                    />
                  
                  <div className={styles.right_card}>
                    <div className={styles.right_card_subtotal}>
                      Subtotal ({a.length} items): ${sum}
                    </div>
                    <div className={styles.right_card_option}>
                      <input type="checkbox"></input>
                      <div className={styles.right_card_option_text}>this order contains a gift</div>
                    </div>
                    <div className={styles.right_card_Button}>
                      Proceed to Checkout
                    </div>
                  </div>
                </div>
                :
                <div></div>

                }
                
      </div>
    </>
  );
}

