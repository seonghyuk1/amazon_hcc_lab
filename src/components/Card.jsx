
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';
import styles from "./Card.module.css"
import { RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri";


function Card(props){

    let dispatch = useDispatch();
    let halfRating = (props.products.grade - Math.floor(props.products.grade)) * 10;
    let outline = 0;

    halfRating > 0 ? outline = (5 - Math.ceil(props.products.grade)) : outline = (5 - Math.floor(props.products.grade))

    return(
        <div className = {styles.box}>
          <img className = {styles.img} src={props.products.img} width="140px"></img>
          <h4 className = {styles.title}>{props.products.title}</h4>
          <div className={styles.item_rating}>
                        {
                            Array(Math.floor(props.products.grade))
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
          <p className = {styles.prices}>{props.products.price}$</p>
          <div onClick={()=>{
             dispatch(addItem(props.products))
          }}className={styles.button}>Add to Cart</div>
        </div>
    )
}
export default Card;