import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import InboxIcon from '@mui/icons-material/Inbox';
import { Avatar } from '@mui/material';
import './Navbar.css'

function Navbar() {
    const user = useSelector(selectUser)
  return (
    <div>
        <div className='content'>
            <div className='left-content'>
                <Link to='/'>
                <img srcSet= "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png (max-width: 768w), https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg 1200w" alt='logo' />
                </Link>
                <p>Products</p>
            </div>
            <div className='middle-content'>
                <SearchIcon />
                <input type='text' placeholder='Search...'></input>
            </div>
            <div className='right-content'>
                <Avatar src={user?.photo}/>
                <InboxIcon />
                <img src="https://stackoverflow.design/assets/img/logos/se/se-icon.svg" alt="Dropdown" />
            </div>
        </div>

    </div>
  )
}

export default Navbar