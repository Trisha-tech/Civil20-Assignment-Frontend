import React from 'react'
import { Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined'

const Navbar = () => {
    return (
        <Box style={{textAlign:"right",marginTop:"20px"}}>
            <SearchIcon style={{fontSize:"55px",marginRight:"40px",color:"#A50383"}}/>
            <AccountCircleOutlined style={{fontSize:"55px",marginRight:"40px",color:"#A50383"}} />
        </Box>
    )
}
export default Navbar;