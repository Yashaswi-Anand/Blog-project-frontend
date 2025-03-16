import React, { useState } from "react";
import { Typography, IconButton, Box, Drawer, List, ListItem, ListItemText } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const isTabletOrMobile = useMediaQuery("(max-width:900px)");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMobileOpen(false); // Close drawer on navigation (mobile)
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px 20px",
        boxShadow: 2,
        backgroundColor: "#fff",
        width: "100%",
        position: "fixed",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Box sx={{ width: "78%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", cursor: "pointer" }} onClick={() => handleNavigation('/')}>
          <span style={{ color: "#64b5f6" }}>Thetech</span>Khazna
        </Typography>

        {isTabletOrMobile ? (
          <>
            <IconButton onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              sx={{
                "& .MuiDrawer-paper": {
                  width: "80%",
                  display: "flex",
                  justifyContent: "center",
                },
              }}
            >
              <Box sx={{ width: "78%", margin: "0 auto" }}>
                <List>
                  <ListItem button onClick={() => handleNavigation('/gadget')}>
                    <ListItemText primary="Gadget" />
                  </ListItem>
                  <ListItem button onClick={() => handleNavigation('/ai-website')}>
                    <ListItemText primary="AI Website" />
                  </ListItem>
                  <ListItem button onClick={() => handleNavigation('/apps')}>
                    <ListItemText primary="Apps" />
                  </ListItem>
                  <ListItem button onClick={() => handleNavigation('/tips')}>
                    <ListItemText primary="Tips & Trick" />
                  </ListItem>
                  <ListItem button onClick={() => handleNavigation('/profile')}>
                    <AccountCircleIcon sx={{ marginRight: "10px" }} />
                    <ListItemText primary="Profile" />
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Typography variant="body1" sx={{ cursor: "pointer", fontWeight: 500 }} onClick={() => handleNavigation('/gadget')}>Gadget</Typography>
            <Typography variant="body1" sx={{ cursor: "pointer", fontWeight: 500 }} onClick={() => handleNavigation('/ai-website')}>AI Website</Typography>
            <Typography variant="body1" sx={{ cursor: "pointer", fontWeight: 500 }} onClick={() => handleNavigation('/apps')}>Apps</Typography>
            <Typography variant="body1" sx={{ cursor: "pointer", fontWeight: 500 }} onClick={() => handleNavigation('/tips')}>Tips & Trick</Typography>
            <IconButton onClick={() => handleNavigation('/profile')}>
              <AccountCircleIcon />
            </IconButton>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Header;