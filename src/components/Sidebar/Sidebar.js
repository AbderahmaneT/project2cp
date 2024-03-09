import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../icons/logo.png'; 
import { Dashboard, Notifications, People, Settings } from '@material-ui/icons';
import Usericon from '../../icons/User.svg';
import { Logout } from '@mui/icons-material';

const Sidebar = () => {
  const location = useLocation();
  const [items, setItems] = useState(() => [
    { icon: <Dashboard />, name: 'Dashboard', path: '/' }, 
    { icon: <People />, name: 'Users', path: '/users' },
    { icon: <Notifications />, name: 'Notifications', path: '/notifications' },
    { icon: <Settings />, name: 'Settings', path: '/settings' },
  ]);

  useEffect(() => {
    setItems([
      { icon: <Dashboard style={{ fontSize: location.pathname === '/' ? '2rem' : '1.5rem', color: location.pathname === '/' ? 'black' : 'white', transition: 'font-size 0.2s' }} />, name: 'Dashboard', path: '/' }, 
      { icon: <People style={{ fontSize: location.pathname === '/users' ? '2rem' : '1.5rem', color: location.pathname === '/users' ? 'black' : 'white', transition: 'font-size 0.2s' }} />, name: 'Users', path: '/users' },
      { icon: <Notifications style={{ fontSize: location.pathname === '/notifications' ? '2rem' : '1.5rem', color: location.pathname === '/notifications' ? 'black' : 'white', transition: 'font-size 0.2s' }} />, name: 'Notifications', path: '/notifications' },
      { icon: <Settings style={{ fontSize: location.pathname === '/settings' ? '2rem' : '1.5rem', color: location.pathname === '/settings' ? 'black' : 'white', transition: 'font-size 0.2s' }} />, name: 'Settings', path: '/settings' },
    ]);
  }, [location.pathname]);

  return (
    <div className="h-screen rounded-r-xl bg-black text-white flex flex-col justify-between">
      <div>
        <div className="flex items-center p-8">
          <img src={logo} alt='' className="h-[60px] w-[60px]"/>
          <h1 className="text-4xl p-2">LOGO</h1>
        </div>
        <nav className="flex justify-center w-full ">
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <Link className="flex text-2xl items-center w-full " to={item.path}>
                  <div className={`flex py-5 px-8 space-x-2 w-full items-center ${location.pathname === item.path ? 'bg-white rounded-l-xl transition-opacity duration-500' : 'transition-opacity duration-500 opacity-50'}`} style={{ width: '250px' }}>
                    {item.icon}
                    <h1 className={`${location.pathname === item.path ? 'text-black' : ''}`}>{item.name}</h1>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="bg-[#232323] rounded-2xl flex p-2 m-3 items-center">
        <img src={Usericon} alt='user icon' />
        <div className="flex justify-between items-center w-full ">
          <div className="flex flex-col m-1 ">
            <p>@Username</p>
            <p>Admin</p>
          </div>
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
