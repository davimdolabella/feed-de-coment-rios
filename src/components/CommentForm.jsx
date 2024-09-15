import { useState } from "react"
export default function CommentForm({AddUserComment}){
    const [comment, setComment] = useState('')
    const [email, setEmail] = useState('')
    const CommentSubmit = (e) =>{
        e.preventDefault()
        AddUserComment({email, comment})
        setComment('')
        setEmail('')
    }
    return(
        <form className="form-group mt-3 d-flex flex-column gap-3 col-10 col-sm-8 col-md-6 col-lg-4" onSubmit={CommentSubmit}>
        <div>
          <label>Email</label>
          <input type="email"  className="form-control mt-2" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div>
          <label>Comentário</label>
          <textarea className="form-control mt-2" 
         id="comment" onChange={(e) => setComment(e.target.value)} value={comment} ></textarea >
        </div>
        <input type="submit" value={'Enviar'} className="btn btn-dark col-12 shadow-sm"  />
      </form>
    )
}