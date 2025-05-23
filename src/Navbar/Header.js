import React, { useEffect, useState } from "react";
import { Typography, IconButton, Box, Button, Drawer, List, ListItem, ListItemText } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";
import LoginPage from "../Widgets/LoginPage";
import ReplyIcon from '@mui/icons-material/Reply';
import SocialOnFooter from "../Widgets/fancyWidgets/SocialOnFooter";
import ThemeToggleButton from "../Widgets/theme/ThemeToggleButton";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const isTabletOrMobile = useMediaQuery("(max-width:900px)");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMobileOpen(false); // Close drawer on navigation (mobile)
  };

  const onHandleClickLogin = () => {
    setOpen(true)
  };

  const handleLogout = () => {
    localStorage.clear();
    setMobileOpen(false);
    navigate('/');
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px 20px",
        boxShadow: isScrolled ? 4 : 0,
        transition: "box-shadow 0.3s ease-in-out",
        width: "100%",
        position: "fixed",
        top: 0,
        zIndex: 1000,
        backgroundColor: "lavender !important",
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 10
      }}
    >
      <Box>
        <LoginPage open={open} setOpen={setOpen} />
      </Box>
      <Box sx={{
        width: isTabletOrMobile ? "109%" : "80%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginRight: isTabletOrMobile ? "30px" : "0%",
      }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", cursor: "pointer" }} onClick={() => handleNavigation('/')}>
          <span style={{ color: "#00bcd4" }}>thetech</span>Khazana
        </Typography>

        <Box>
          {isTabletOrMobile ? (
            <>
              <IconButton onClick={handleDrawerToggle}>
                <MenuIcon color="primary"/>
              </IconButton>
              <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                  "& .MuiDrawer-paper": {
                    width: "80%",
                    display: "flex",
                    justifyContent: "space-between",
                    borderTopLeftRadius: 20,
                    borderBottomLeftRadius: 20,
                    background: 'background.paper',
                    zIndex: 1000,
                    boxShadow: 5
                  },
                }}
              >
                <Box>
                  <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
                      <IconButton sx={{ marginTop: 1 }} onClick={handleDrawerToggle}>
                        <ReplyIcon sx={{ color: '#00bcd4' }} />
                      </IconButton>
                      <Typography variant="h6" sx={{ fontWeight: "bold", cursor: "pointer", margin: 1, marginTop: 2 }} onClick={() => handleNavigation('/')}>
                        <span style={{ color: "#00bcd4" }}>thetech</span>Khazana
                      </Typography>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: 10, width: '100%' }}>
                        <ThemeToggleButton />
                      </div>
                    </Box>
                    <hr></hr>
                  </Box>
                  <Box sx={{ padding: '0px 10px' }}>
                    <List>
                      <ListItem button onClick={() => handleNavigation('/gadget')}>
                        <ListItemText sx={{ fontSize: '20px', ':hover': { color: '#00bcd4', textDecoration: 'underline', fontSize: '20px' } }} primary="Gadget" />
                      </ListItem>
                      <ListItem button onClick={() => handleNavigation('/ai_website')}>
                        <ListItemText sx={{ ':hover': { color: '#00bcd4', textDecoration: 'underline' } }} primary="AI Website" />
                      </ListItem>
                      <ListItem button onClick={() => handleNavigation('/apps')}>
                        <ListItemText sx={{ ':hover': { color: '#00bcd4', textDecoration: 'underline' } }} primary="Apps" />
                      </ListItem>
                      <ListItem button onClick={() => handleNavigation('/tips')}>
                        <ListItemText sx={{ ':hover': { color: '#00bcd4', textDecoration: 'underline' } }} primary="Tips & Trick" />
                      </ListItem>
                      {localStorage.getItem('isLoggedIn') === 'true' && <ListItem button onClick={() => handleNavigation('/add-new-post')}>
                        <ListItemText primary="Add Post" />
                      </ListItem>}
                      {localStorage.getItem('isLoggedIn') === 'true'
                        ? <ListItem sx={{ color: 'red', fontFamily: 'bold' }} onClick={() => handleLogout()}> <ListItemText fontFamily="bold" primary="Logout" /></ListItem>
                        : <ListItem button onClick={onHandleClickLogin}>
                          <AccountCircleIcon sx={{ marginRight: "10px" }} />
                          <ListItemText primary="Profile" />
                        </ListItem>}
                    </List>
                  </Box>
                </Box>

                <Box>
                  <hr></hr>
                  <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', padding: '5px 10px' }}>
                    <SocialOnFooter />
                  </Box>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              <Typography variant="body1" sx={{ cursor: "pointer", fontWeight: 500, ':hover': { color: '#00bcd4', textDecoration: 'underline' } }} onClick={() => handleNavigation('/gadget')}>Gadget</Typography>
              <Typography variant="body1" sx={{ cursor: "pointer", fontWeight: 500, ':hover': { color: '#00bcd4', textDecoration: 'underline' } }} onClick={() => handleNavigation('/ai_website')}>AI Website</Typography>
              <Typography variant="body1" sx={{ cursor: "pointer", fontWeight: 500, ':hover': { color: '#00bcd4', textDecoration: 'underline' } }} onClick={() => handleNavigation('/apps')}>Apps</Typography>
              <Typography variant="body1" sx={{ cursor: "pointer", fontWeight: 500, ':hover': { color: '#00bcd4', textDecoration: 'underline' } }} onClick={() => handleNavigation('/tips')}>Tips & Trick</Typography>
              {localStorage.getItem('isLoggedIn') && <Button variant="outlined" sx={{ cursor: "pointer", fontWeight: 500 }} onClick={() => handleNavigation('/add-new-post')}><strong> + New Post </strong></Button>}
              {localStorage.getItem('isLoggedIn') === 'true'
                ? <Button variant="outlined" color="error" onClick={() => handleLogout()}> <strong>Logout</strong> </Button>
                : <IconButton onClick={onHandleClickLogin}>
                  <AccountCircleIcon />
                </IconButton>}
              <ThemeToggleButton />
            </Box>
          )}
        </Box>
        {/* <ThemeToggleButton /> */}
      </Box>
    </Box>
  );
}

export default Header;