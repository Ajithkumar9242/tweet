import React from 'react'
import { BiHomeAlt2 } from 'react-icons/bi'
import { BsPersonCircle } from 'react-icons/bs'
import { FaSlackHash } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const LeftSide = () => {
  return (
    <div className="flex flex-col h-full md:h-[90vh] justify-between mr-6">
      <div className="mt-6 flex flex-col space-y-4">
        <Link to="/">
          <div className="flex items-center space-x-6 px-2 py-2 hover:bg-slate-200 rounded-full cursor-pointer">
            <BiHomeAlt2 fontSize="large" />
            <p>Home</p>
          </div>
        </Link>
        <Link to="/explore">
          <div className="flex items-center space-x-6 px-2 py-2 hover:bg-slate-200 rounded-full cursor-pointer">
            <FaSlackHash fontSize="large" />
            <p>Explore</p>
          </div>
        </Link>
        {/* <Link to={`/profile/${currentUser._id}`}> */}
        <Link to={`/profile/`}>
          <div className="flex items-center space-x-6 px-2 py-2 hover:bg-slate-200 rounded-full cursor-pointer">
            <BsPersonCircle fontSize="large" />
            <p>Profile</p>
          </div>
        </Link>
      </div>
      <div className="flex justify-between">
        <div>
          {/* <p className="font-bold">{currentUser.username}</p>
          <p className="font-bold">@{currentUser.username}</p> */}
          <p className='font-bold'>User</p>
          <p className='font-bold'>User</p>
        </div>
        <div>
          <Link to="/signin">
            <button
              className="bg-red-500 px-4 py-2 text-white rounded-full"
            //   onClick={handleLogout}
            >
              Logout
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LeftSide