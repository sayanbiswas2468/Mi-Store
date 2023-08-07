import React from 'react'
import "../styles/PreNavbar.css"
import { Link } from "react-router-dom"


const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -960 960 960" width="30"><path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Z" /></svg>


const cartIcon = <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -960 960 960" width="35"><path d="M294.269-115.538q-24.224 0-40.657-16.725-16.433-16.725-16.433-41.16 0-24.436 16.568-41.019t40.782-16.583q24.215 0 40.92 16.724 16.705 16.725 16.705 41.161 0 24.435-16.725 41.018-16.725 16.584-41.16 16.584Zm375.384 0q-24.223 0-40.656-16.725t-16.433-41.16q0-24.436 16.568-41.019t40.782-16.583q24.214 0 40.919 16.724 16.706 16.725 16.706 41.161 0 24.435-16.725 41.018-16.725 16.584-41.161 16.584ZM232-746.308l110.974 233.026h267.642q6.923 0 12.564-3.462 5.641-3.461 8.974-9.615l109.487-198.41q4.616-8.462.77-15-3.847-6.539-13.077-6.539H232Zm-17.282-33.846h520.627q26.071 0 39.222 21.346t1.228 43.885L663.774-510.525q-8.876 14.32-22.647 22.705-13.77 8.384-29.534 8.384H324l-52.513 96.513q-5.641 9.231-.128 20t17.051 10.769h439.129v33.846H291.333q-34.025 0-49.795-25.935-15.769-25.936-.205-54.577l63.231-113.385-149.333-313.949h-72V-860h93.641l37.846 79.846Zm128.256 266.872h282.257-282.257Z" /></svg>


const accountIcon=<svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -960 960 960" width="35"><path d="M480-504.769q-49.5 0-83.212-33.712-33.711-33.711-33.711-83.468 0-49.756 33.711-83.211Q430.5-738.615 480-738.615t83.212 33.455q33.711 33.455 33.711 83.211 0 49.757-33.711 83.468Q529.5-504.769 480-504.769ZM200-215.384v-60.513q0-25.898 14.91-46.987 14.91-21.09 39.449-32.859 58.41-26.488 114.446-39.988 56.035-13.5 111.179-13.5 55.144 0 111.119 13.577 55.974 13.577 114.103 40.145 25.093 11.639 39.944 32.677Q760-301.795 760-275.897v60.513H200Zm33.846-33.846h492.308v-26.667q0-14.59-9.705-27.898-9.705-13.307-26.654-22.205-52.462-25.564-104.349-37.474Q533.559-375.385 480-375.385t-105.856 11.911Q321.846-351.564 270.051-326q-16.949 8.898-26.577 22.205-9.628 13.308-9.628 27.898v26.667ZM480-538.615q34.949 0 59.013-24.064 24.064-24.065 24.064-59.013 0-34.949-24.064-59.013T480-704.769q-34.949 0-59.013 24.064t-24.064 59.013q0 34.948 24.064 59.013 24.064 24.064 59.013 24.064Zm0-83.077Zm0 372.462Z"/></svg>


const PreNavbar = () => {
    return (
        <div >
            <span>
                <a href="https://www.mi.com/in" >
                    <img src={require('../components/logo.jpg')} className='logo' alt='Loading'/>
                </a>

            </span>
            <div className="navBar1">
                <Link to="https://www.mi.com/in/store" className='navLinks'>Store</Link>
                <Link to="https://www.mi.com/in/phone" className='navLinks'>Phone</Link>
                <Link to="https://www.mi.com/in/smart-home" className='navLinks'>TV & Smart Home</Link>
                <Link to="https://www.mi.com/in/smart-office" className='navLinks'>Laptop & Tablet</Link>
                <Link to="https://www.mi.com/in/life-style" className='navLinks'>LifeStyle</Link>
            </div>
            <div className='navBar2'>
                <Link to="https://www.mi.com/in/discover" className='navbardiv2'> Discover</Link>
                <Link to="https://www.mi.com/in/support" className='navbardiv2'>Support</Link>
            </div>
            <span className='leftIcons'>
                <Link to="https://www.mi.com/in/support" className='navbardiv2'>{searchIcon}</Link>
                <Link to="https://store.mi.com/in/cart" className='navbardiv2'>{cartIcon}</Link>
                <Link to="https://www.mi.com/in/support" className='navbardiv2'>{accountIcon}</Link>
            </span>

        </div >

    )
}

export default PreNavbar