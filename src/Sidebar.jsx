import React from 'react';
import { useState, useRef, useEffect } from 'react';
import './Sidebar.css';
import { CgProfile } from 'react-icons/cg';

export default function Sidebar(props){
  console.log(props.xPosition)
  console.log(props.xPosition2)
  return (
    
    <div className='container'>
    <div id = 'sidebar' className='sidebar' style ={{transform:`translatex(${-props.xPosition}rem)`}}> 
        <div className="customer_info">
            <CgProfile/>
            <a>Hello, sign in</a>
        </div>

    <ul className='categories'>
      <li className="title" >
        Digital Content & Device
      </li>
      <li className="menu-item" >
        Amazon music
      </li>
      <li className="menu-item" >
        Kindle E-readers & Books
      </li>
      <li className="menu-item">
        Appstore for Android
      </li>

      </ul>

      <hr/>
      <ul className='categories'>
      <li className="title" >
        Shop By Department
      </li>
      <li className="menu-item" >
        Electronics
      </li>
      <li className="menu-item" >
        Computers
      </li>
      <li className="menu-item">
        Smart Home
      </li>
      </ul>

      <ul className='categories'>
      <li className="title" >
        Programs & Features
      </li>
      <li className="menu-item" >
        Gift Cards
      </li>
      <li className="menu-item" >
        #FoundItOnAmazon
      </li>
      <li className="menu-item">
        Amazon Live
      </li>
      <li className="menu-item">
        International Shopping
      </li>
      <li className="menu-item">
        See All
      </li>
      </ul>

      <ul className='categories'>
      <li className="title" >
        Help & Settings
      </li>
      <li className="menu-item" >
        Your Account
      </li>
      <li className="menu-item" >
        English
      </li>
      <li className="menu-item">
        Untited States
      </li>
      <li className="menu-item">
        Customer Service
      </li>
      <li className="menu-item">
        Sign in
      </li>
      </ul>

    </div>
    <div id = 'background' className='background' onClick={()=>{
              document.getElementById('sidebar').style.transform = `translatex(-23rem)`
              document.getElementById('background').style.transform = `translatex(-100vw)`
            }} style ={{transform:`translatex(${-props.xPosition2}vw)`}}/>
    </div>
  );
};