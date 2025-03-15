import React, { useState } from "react";
import { Typography, IconButton, Box, Drawer, List, ListItem, ListItemText } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";

function HeaderTitle() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Responsive Breakpoints
  const isTabletOrMobile = useMediaQuery("(max-width:900px)");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = ["Gadget", "AI Website", "Apps", "Tips & Trick"];

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
      }}
    >
      {/* Container with max 78% width */}
      <Box sx={{ width: "78%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Logo */}
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          <span style={{ color: "#64b5f6" }}>Thetech</span>Khazna
        </Typography>

        {/* Mobile/Tablet View: Hamburger Menu */}
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
                  width: "80%", // Full-width drawer
                  display: "flex",
                  justifyContent: "center",
                },
              }}
            >
              {/* Centered Content with 78% Width */}
              <Box sx={{ width: "78%", margin: "0 auto" }}>
                <List>
                  {menuItems.map((item, index) => (
                    <ListItem button key={index} onClick={handleDrawerToggle}>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                  <ListItem button>
                    <AccountCircleIcon sx={{ marginRight: "10px" }} />
                    <ListItemText primary="Profile" />
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          /* Desktop View: Inline Navigation */
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            {menuItems.map((item, index) => (
              <Typography key={index} variant="body1" sx={{ cursor: "pointer", fontWeight: 500 }}>
                {item}
              </Typography>
            ))}
            <IconButton>
              <AccountCircleIcon />
            </IconButton>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default HeaderTitle;