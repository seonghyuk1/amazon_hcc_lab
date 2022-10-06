import styles from "./AllProduct.module.css";
import Header from "../Header";
import Footer from "../Footer";
import data from "../data"
import Card from "./Card";
import { useState } from "react";



export default function AllProduct(){
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
            <div className = {styles.list}>
            {
                products.map(function(s,i){
                    return(

                        i>7 && i<12 && (<Card products={s}/>)

                    );
                })
            }
            </div>
            <div className = {styles.list}>
            {
                products.map(function(s,i){
                    return(

                        i>11 && i<16 && (<Card products={s}/>)

                    );
                })
            }
            </div>
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
            <div className = {styles.list}>
            {
                products.map(function(s,i){
                    return(

                        i>23 && i<28 && (<Card products={s}/>)

                    );
                })
            }
            </div>
            <div className = {styles.list}>
            {
                products.map(function(s,i){
                    return(

                        i>27 && i<32 && (<Card products={s}/>)

                    );
                })
            }
            </div>
            <div className = {styles.list}>
            {
                products.map(function(s,i){
                    return(

                        i>31 && i<36 && (<Card products={s}/>)

                    );
                })
            }
            </div>
            <div className = {styles.list}>
            {
                products.map(function(s,i){
                    return(

                        i>35 && i<40 && (<Card products={s}/>)

                    );
                })
            }
            </div>

            <Footer/>
        </div>
    );
}
