import React from 'react'
import LeftSide from '../LeftSideBar/LeftSide'
import ExploreTweets from '../exploreTweets/ExploreTweets'

const Explore = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4'>
        <div className="px-6">
            <LeftSide />
        </div>
        <div className="col-span-2 border-x-2 border-t-slate-800 px-6">
            <ExploreTweets />
        </div>
    </div>
  )
}

export default Explore