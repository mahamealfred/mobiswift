import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import logo from "../../assets/images/logo.png"
import CssBaseline from '@mui/material/CssBaseline';


function Index() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky"  sx={{backgroundColor:"grey",width:"100vw"}} elevation={1}>
      <CssBaseline/>
    <Toolbar>
    <Box sx={{ flexGrow: 1 }} >
    <img
    style={{height:"80px"}} 
     src={logo}
     alt="Logo"
    />
        </Box>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
        >
            <MenuIcon colo/>
        </IconButton>
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="MobiSwift">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="MobiSwift" src="../../assets/images/mobiswiftlogo.png" />
              </IconButton>
            </Tooltip>
           
          </Box>
    </Toolbar>
</AppBar>
  );
}
export default Index;