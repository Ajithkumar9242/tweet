import React, { useState } from 'react'
import TimelineTweet from '../TimeLineTweet/TimelineTweet'
import { useSelector } from 'react-redux'
import axios from 'axios'

const Maintweet = () => {
    const { currentUser } = useSelector((state)=> state.user)
    const [tweettext, setTweettext] = useState("")

  const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const submitTweet = await axios.post(`/api/tweet`, {
            userId: currentUser.othersData._id,
            description: tweettext
          })
          // window.location.reload(false)
        } catch (error) {
          console.log(error)
        }
  }

  return (
    <div>
      {
        currentUser && (
          <p className="font-bold pl-2 my-2">{currentUser.username}</p>
        )
      }
        <form className="border-b-2 pb-6">
        <textarea
          onChange={(e) => setTweettext(e.target.value)}
          type="text"
          placeholder="What's happening"
          maxLength={280}
          className="bg-slate-200 rounded-lg w-full p-2"
        ></textarea>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded-full ml-auto"
        >
          Tweet
        </button>
      </form>
      <TimelineTweet />
    </div>
  )
}

export default Maintweet