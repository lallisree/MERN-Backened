import { useState } from "react";

const Like = () => {
    const [isLiked,setIsLiked] = useState(false);

    const handleLike = () => {

        setIsLiked(!isLiked)
    }

  return (
    <div>

        <h2>My Post</h2>
        <p>Click the Like Button!!</p>

        <button onClick = {handleLike}>
            {isLiked ? "Liked" : "Like"}
        </button>

        {isLiked && "you liked this post !!"}

    </div>
  )
}


export default Like
