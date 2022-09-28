
import { GiTabletopPlayers } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import styles from "./Card.module.css"

function Card(props){
    return(
        <div className = {styles.box}>
          <img className = {styles.img} src={props.products.img} width="140px"></img>
          <h4 className = {styles.title}>{props.products.title}</h4>
          <p className = {styles.prices}>{props.products.price}$</p>
          <div onClick={()=>{

          }}className={styles.button}>Add to Cart</div>
        </div>
    )
}
export default Card;