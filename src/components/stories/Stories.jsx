import "./stories.scss";
import { useContext } from "react";
import {AuthContext} from "../../context/authContext";

const Stories = () => {
const {currentUser} = useContext(AuthContext);
//TEMPORARY
const stories = [
    {
      id: 1,
      name: "Ruhama May",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 2,
      name: "Ruhama May",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 3,
      name: "Ruhama May",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 4,
      name: "Ruhama May",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
  ];




  return (
    <div className='stories'>
        <div className="story">
            <img src={currentUser.profilePicture} alt="img"/>
            <span>{currentUser.name}</span>
            <button>+</button>
        </div>
     {stories.map(story => (
        <div className="story">
            <img src={story.img} alt="img"/>
            <span>{story.name}</span>
        </div>
     ))} 
    </div>
  )
}

export default Stories
