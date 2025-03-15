import React from 'react'
import { Typography, IconButton } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function HeaderTitle() {
  return (
    <div className='header-component'>
      {/* Logo */}
      <div>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <span style={{ color: "#64b5f6" }}>My</span>Logo
        </Typography>
      </div>

      {/* Navigation Tabs */}
      <div>
        <div>
          <p className='tab-button cursor'>Gadget</p>
          <p className='tab-button cursor'>AI Website</p>
          <p className='tab-button cursor'>Apps</p>
          <p className='tab-button cursor'>Tips & Trick</p>
          <IconButton>
            <AccountCircleIcon size={24} />
          </IconButton>
        </div>

      </div>
    </div>
  )
}

export default HeaderTitle