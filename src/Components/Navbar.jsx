import React from "react"
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LogoutIcon from '@mui/icons-material/Logout';
import Butterfly from "../img/butterfly.png"
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
      <div className="d-flex navbar flex-column">
          <div className="d-flex flex-column part-one justify-content-between">
              <img src={Butterfly} alt="" />
              <SearchIcon/>
          </div>
          <div className="d-flex flex-column part-two justify-content-around">
            
                      <HomeIcon />
                      <NewspaperIcon/>
              <ListAltIcon />
              <PersonIcon/>
              
          </div>
          <div className="d-flex flex-column part-three justify-content-around">
              <NotificationsNoneIcon />
              <LogoutIcon />
          </div>
          </div>
  )
}

export default Navbar