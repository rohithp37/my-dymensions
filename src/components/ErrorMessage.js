
function ErrorMessage({message, getDefaultUrl}){
    return (
        <div className="errorMessage">
            <p>{message}</p>
            <button onClick={getDefaultUrl}>Close</button>
        </div>
    )
}

export default ErrorMessage;