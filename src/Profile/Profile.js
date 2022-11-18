/* eslint-disable */
import React from 'react';
import styles from "./Profile.module.css"


function Profile(){

    return(
    <div className={styles.Profile}>
        <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
            className={styles.Profile_img}
            />

        <div className={styles.profile_container}>
            <h1 style={ {fontSize : "50px"}}>Profile</h1> 
            
            <h3>Email</h3>
            <input type="email" className={styles.SearchInput} />
            <h3>Name</h3>
            <input type="text" className={styles.SearchInput} placeholder="Please Enter Your Name"/>
            <h3>Mobile</h3>
            <input type="text" className={styles.SearchInput} placeholder="Please Enter Your Contact Number"/>
            <br/>
            <button className={styles.Up_button}>Update Profile</button>
        </div>
    </div>)  
}


export default Profile;