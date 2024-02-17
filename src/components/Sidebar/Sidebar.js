import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../icons/logo.png'; 
import Dashboardicon from '../../icons/Dashboard.svg';
import Notificationicon from '../../icons/Notifications.svg';
import Settingsicon from '../../icons/Settings.svg';
import Usersicon from '../../icons/Users.svg';
import Usericon from '../../icons/User.svg';
import Outicon from '../../icons/Logout.svg';

const Sidebar = () => {
  const [items, setItems] = useState([
    { icon: Dashboardicon ,name: 'Dashboard', path: '/' }, 
    { icon: Usersicon ,name: 'Users', path: '/users' },
    { icon: Notificationicon ,name: 'Notifications', path: '/notifications' },
    { icon: Settingsicon ,name: 'Settings', path: '/settings' },
  ]);

  return (
    <div className="h-screen rounded-r-xl bg-black text-white flex flex-col justify-between">
      <div>
        <div className="flex items-center p-8">
          <img src={logo} alt='' className="h-[60px] w-[60px]"/>
          <h1 className="text-4xl p-2">LOGO</h1>
        </div>
        <nav className="flex justify-center w-full flex-grow">
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <div className="flex p-5 ">
                  <Link className="flex text-2xl items-center " to={item.path}>
                    <img src={item.icon} alt={item.name} className="w-6 h-6 m-3"/>
                    {item.name}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="bg-[#232323] rounded-2xl flex p-2 m-3 items-center"> {/* this div */}
        <img src={Usericon} alt='user icon' />
        <div className="flex justify-between items-center w-full ">
          <div className="flex flex-col m-1 ">
            <p>@Username</p>
            <p>Admin</p>
          </div>
          <img src={Outicon} alt='logout'/>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
