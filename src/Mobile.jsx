import styles from "./AllProduct.module.css";
import Header from "./Header";
import Footer from "./Footer";
import data from "./data"
import Card from "./Card";
import { useState } from "react";

export default function Moblie(){
    let[products, 수정] = useState(data)
    return(
        <div className={styles.allpro}>
            <Header/>
            <div className = {styles.list}>
            {
                products.map(function(s,i){
                    return(
                        i<4 && (<Card products={s}/>)
                    );
                })
            }
            </div>
            <div className = {styles.list}>
            {
                products.map(function(s,i){
                    return(

                        i>3 && i<8 && (<Card products={s}/>)

                    );
                })
            }
            </div>
            <Footer/>
        </div>
    );
}
