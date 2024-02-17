import React from 'react';
import usericon from '../../icons/User.svg';

function Settings() {
  const borderStyle = {
    width: '100%',
    height: '3px',
    backgroundColor: '#000',
    margin: '1rem 0',
  };
  return (
    <div className="rounded-lg flex flex-col items-center justify-center p-8" >
        <h1 className="text-5xl">Settings</h1>
        <hr style={borderStyle} />
        <div>
          <div className="flex flex-row items-center">
            <img src={usericon} alt='' className="h-40 w-40"/>
            <div className="flex flex-col">
              <p className="text-3xl p-3">Username</p>
              <p className="text-3xl p-3">Id:xxxxxxx</p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl p-3">+213-xxx-xxx-xxx</p>
            <p className="text-2xl p-3">exemple@domain.com</p>
          </div>
          <hr style={borderStyle} />
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold p-3">Change your password</h1>
            <input className="m-3 p-3 bg-[#D9D9D9] rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#000]" placeholder='Old password'/>
            <input className="m-3 p-3 bg-[#D9D9D9] rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#000]" placeholder='New password'/>
            <input className="m-3 p-3 bg-[#D9D9D9] rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#000]" placeholder='Confirm new password'/>
            <div className="flex justify-center">
              <button className="m-3 p-3 text-lg bg-[#ACAAAA] w-[174px] rounded-lg hover:bg-[#848383] transition-colors duration-300">Submit</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Settings