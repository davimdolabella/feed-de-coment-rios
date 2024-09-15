import { useState } from "react";
export default function useCommentContext(){
    
    const [usersComments, setUsersComments] = useState([])
    const AddUserComment = ({email, comment}) =>{
        const id = Math.floor(Math.random() * 1000000)
        const date = new Date();
        const userComment = {email, comment, id, date}
        
        setUsersComments(state =>{
          const newState = [...state, userComment]
          console.log(date.getDate());
          
          return newState
        })
        
        
      }
      const RemoveComment = (id)=>{
        setUsersComments(state =>{
          const newState = state.filter((state) => state.id !== id)
          return newState
        })
      }
      return {AddUserComment, RemoveComment, usersComments}
}