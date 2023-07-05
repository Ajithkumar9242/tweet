// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const Tweet = ({ tweet , setData}) => {

//   const { currentUser } = useSelector((state)=> state.user)

//   const [userData, setUserData] = useState()

//   useEffect(() => {
//     const fetchData = async () =>{
//       try{
//         const findUser = await axios.get(`/users/find/${tweet.userId}`)
//         setUserData(findUser.data)
//       }catch (err){
//         console.log(err)
//       }
//     }
  
//     fetchData()
//   }, [tweet.userId , tweet.likes])
  
//   return (
//     <div>Tweet</div>
//   )
// }

// export default Tweet

import axios from "axios";
import React, { useEffect, useState } from "react";
import formatDistance from "date-fns/formatDistance";
import { Link, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';

const Tweet = ({ tweet, setData }) => {
  const { currentUser } = useSelector((state) => state.user);

  const [userData, setUserData] = useState();

  const dateStr = formatDistance(new Date(tweet.createdAt), new Date());
  const location = useLocation().pathname;
  const { id } = useParams();

  console.log(location);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const findUser = await axios.get(`/api/users/find/${tweet.userId}`);
        console.log("USER" , findUser)
        setUserData(findUser.data);
      } catch (err) {
        console.log("error", err);
      }
    };

    fetchData();
  }, [tweet.userId, tweet.likes]);

  const handleLike = async (e) => {
    e.preventDefault();

    try {
      const like = await axios.put(`/api/tweet/${tweet._id}/like`, {
        id: currentUser.othersData._id,
      });

      if (location.includes("profile")) {
        const newData = await axios.get(`/api/tweet/user/all/${id}`);
        setData(newData.data);
      } 
      else if (location.includes("explore")) {
        const newData = await axios.get(`/api/tweet/explore`);
        setData(newData.data);
      } else {
        const newData = await axios.get(`/api/tweet/timeline/${currentUser.othersData._id}`);
        setData(newData.data);
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <div>
      {userData && (
        <>
          <div className="flex space-x-2">
            {/* <img src="" alt="" /> */}
            <Link to={`/profile/${userData._id}`}>
              <h3 className="font-bold">{userData.username}</h3>
            </Link>

            <span className="font-normal">@{userData.username}</span>
            <p> - {dateStr}</p>
          </div>

          <p>{tweet.description}</p>
          <button onClick={handleLike}>
            {tweet.likes.includes(currentUser.othersData._id) ? (
              <AiFillHeart className="mr-2 my-2 cursor-pointer"></AiFillHeart>
            ) : (
              <AiOutlineHeart className="mr-2 my-2 cursor-pointer"></AiOutlineHeart>
            )}
            {tweet.likes.length}
          </button>
        </>
      )}
    </div>
  );
};

export default Tweet;