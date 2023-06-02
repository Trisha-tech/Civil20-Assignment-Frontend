import React from 'react'
import { Box } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined'


/*const useStyles = makeStyles((theme) => ({
    component: {
        display: "flex",
        margin: "55px 130px 0 130px",
        justifyContent: "space-between"
    },
    container: {
        textAlign: "center",
        padding: "12px 8px"
    },
    image: {
        width: 64
    },
    text: {
        fontSize: 14,
        fontWeight: 600
    }
}))
*/
const Navbar = () => {
    // const classes = useStyles();
    return (
        <Box style={{textAlign:"right"}}>
            <SearchIcon style={{fontSize:"55px",marginRight:"40px"}}/>
            <AccountCircleOutlined style={{fontSize:"55px",marginRight:"40px"}} />
        </Box>
    )
}
export default Navbar;