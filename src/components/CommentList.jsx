export default function CommentList({email, comment, date, onRemove}){
    return(
        <div className="d-flex flex-column bg-light text-dark p-4 rounded shadow">

            <span style={{fontSize:"12px"}}>{email}</span>{/* Email */}
            <span style={{fontSize:"12px"}}>{new Date(date).toLocaleDateString()}</span>{/* Data */}
            <div className="border border-dark text-dark p-2 rounded mt-2 d-flex flex-column flex-wrap p-3">
                <h2 className="fs-6 fs-md-4">Comentário:</h2>
                <p className="text-break " style={{overflowY:"auto", height:"100px"}}>{comment}</p>{/* Comentarios */}
                <button className="btn btn-outline-danger col-12 fs-6 col-md-6 mx-auto" onClick={onRemove}>Remover</button>
                {/* Remover */}
            </div>
            
        </div>
    )
}
