import styles from "./Computers.module.css";
import Header from "../Header";
import Footer from "../Footer";
import data from "../data"
import Card from "./Card";
import { useState } from "react";

export default function Computers(){
    let[products, 수정] = useState(data)
    return(
        <div className={styles.allpro}>
            <Header/>
            <div className = {styles.list}>
            {
                products.map(function(s,i){
                    return(

                        i>15 && i<20 && (<Card products={s}/>)

                    );
                })
            }
            </div>
            <div className = {styles.list}>
            {
                products.map(function(s,i){
                    return(

                        i>19 && i<24 && (<Card products={s}/>)

                    );
                })
            }
            </div>

            <Footer/>
        </div>
    );
}
