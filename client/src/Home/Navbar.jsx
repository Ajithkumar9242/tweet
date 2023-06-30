import React from 'react'
import { FiTwitter } from 'react-icons/fi';
import { BiSearch } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
const Navbar = () => {
  return (
<div className="grid grid-cols-1 md:grid-cols-4 my-5 justify-center">
      <div className="mx-auto md:mx-0">
        {/* <FiTwitter className="ml-8" width={"4em"} height={"2em"}/> */}

        <img
          src='https://help.twitter.com/content/dam/help-twitter/brand/logo.png'
          alt="Twitter Logo"
          width={"40px"}
          className="ml-8"
        />
        {/* <img src="./twitter.png"  /> */}
      </div>

      <div className="col-span-2 md:border-x-2 md:border-slate-200 md:px-6 my-6 md:my-0">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl">
            {/* {location.includes("profile") ? (
              <UserPlaceholder setUserData={setUserData} userData={userData} />
            ) : location.includes("explore") ? (
              "Explore"
            ) : (
              "Home"
            )} */}
            HOME
          </h2>
          <AiFillStar />
        </div>
      </div>

      <div className="px-0 md:px-6 mx-auto">
        <BiSearch className="absolute m-2" />
        <input type="text" className="bg-blue-100 rounded-full py-2 px-8" />
      </div>
    </div>
  )
}

export default Navbar