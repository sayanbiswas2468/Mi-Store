import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/HotAcessoriesMenu.css'
import './HotAcessories.js'
const HotAcessoriesMenu = () => {
    return (
        <div className='HotAcessoriesMenu'>
            <Link className='HotAcessoriesLink' to="/music"> Music Store</Link>
            <Link className='HotAcessoriesLink' to='/smartDevice'> Smart Devices</Link>
            <Link className='HotAcessoriesLink' to='/home'> Home</Link>
            <Link className='HotAcessoriesLink' to='/lifestyle'> Lifestyle</Link>
            <Link className='HotAcessoriesLink' to='/mobileAccessories'> Mobile Acessories</Link>
        </div>
    )
}

export default HotAcessoriesMenu