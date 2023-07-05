import React from 'react'
import LeftSide from '../components/LeftSideBar/LeftSide'
import Maintweet from '../components/mainTweet/Maintweet'
import { useSelector } from 'react-redux'
import Login from '../auth/Login'

const Home = () => {

  const { currentUser } = useSelector((state)=> state.user)
  console.log('first', currentUser)

  return (
    <>
    {
      currentUser ? (
        <div className='grid grid-cols-1 md:grid-cols-4'>
      <div className='px-6'>
        <LeftSide />
      </div>
      <div className="col-span-2" border-x-2 border-t-slate-800 px-6>
        <Maintweet />
      </div>
    </div>
      ) : ( <Login />)
    }
    
    </>
  )
}

export default Home