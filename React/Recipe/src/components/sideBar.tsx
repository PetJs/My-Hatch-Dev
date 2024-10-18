import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { auth } from '../config/firebase';
import './sidebar.css';

function Sidebarr() {
  const user = auth.currentUser;

  return (
    <div className='sidebar-component'>
      <Sidebar>
        <Menu className='pro-menu-item'>
          <MenuItem className='menu-item'>
            Home
            <Link to="/" />
          </MenuItem>
          <MenuItem className='menu-item'>
            {user && user.photoURL ? (
              <div className="user-profile">
                <img
                  src={user.photoURL}
                  alt="User Profile"
                  className="user-photo"
                />
                <span>User</span>
              </div>
            ) : (
              <p>No Profile Photo</p>
            )}
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default Sidebarr;
