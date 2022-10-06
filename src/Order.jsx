import styles from "./Order.module.css";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux"

export default function Order(props) {
  let a = useSelector((state) => { return state.user})
  let dispatch = useDispatch()

  return (
    <>
      <Header />
      <div className={styles.Container}>
        <div className={styles.Title}>
          <h1>Your Orders</h1>
        </div>
        {
                    a.map((s, i)=>{
                        return(
                            <>
                            <img src={s.img}/>
                            </>
                        )})
                }
      </div>
    </>
  );
}
