import React, { useEffect, useState } from 'react'
import LeftSide from '../components/LeftSideBar/LeftSide'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'

const Profile = () => {
  const [userTweets, setUserTweets] = useState(null)
  const [userProfile, setUserProfile] = useState(null)
  const { id } = useParams()
    const { currentUser } = useSelector((state)=> state.user)

  useEffect(() => {
    const fetchData = async () =>{
    try {
        const userTweets = await axios.get(`/api/tweet/user/all/${id}`)
        const userProfile = await axios.get(`/api/users/find/${id}`)
        setUserProfile(userProfile)
        setUserTweets(userTweets)
      } catch (error) {
        console.log(error)
      } 
    }
    fetchData()
    
  }, [currentUser , id])
  

  return (
    <div className='grid grid-cols-1 md:grid-cols-4'>
      <div className="px-6">
        <LeftSide />
      </div>

      <div className="col-span-2 border-x-2 border-t-slate-800 px-6">

      </div>
      
    </div>
  )
}

export default Profile