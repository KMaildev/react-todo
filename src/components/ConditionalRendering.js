function ConditionalRendering() {
    let login = true;
    return (
        <div>
            {
                login ? <h1>Home</h1> : <h1>Login</h1>
            }
        </div>
    )
}

export default ConditionalRendering;