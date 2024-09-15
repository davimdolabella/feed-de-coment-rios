
import useCommentContext from "./hooks/useCommentContext"
import CommentList from './components/CommentList'
import CommentForm from "./components/CommentForm"

export default function App(){
  const {AddUserComment, RemoveComment, usersComments} = useCommentContext()

  return(
    <div id="app" className="bg-secondary text-light p-5 align-items-center justify-content-center d-flex flex-column col-11 mx-auto mt-3 rounded">
      <h2>Seção de Comentários</h2>
      <CommentForm AddUserComment={AddUserComment}/>
      <div className="border border-dark col-12 my-4"></div>{/* HR */}
      <div className="col-12 col-md-6 col-lg-4  d-flex flex-column gap-3 text-break  pe-2" style={{maxHeight:'320px', overflowY:'auto'}}>
        {usersComments.length > 0 ? usersComments.map((Comment)=>(
            <CommentList 
              key={Comment.id}
              email={Comment.email} comment={Comment.comment} 
              date={Comment.date} onRemove={() => RemoveComment(Comment.id)}
            />
          )) : <span className="text-center">Seja o primeiro a comentar!</span>}  
      </div>{/* Comments Container */}
    </div> /* App */
    
  )
}