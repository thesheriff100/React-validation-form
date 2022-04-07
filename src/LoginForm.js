const LoginForm = () => {
    return (  
        <div className="form">
            <form className="register-form">
            <input type="text" placeholder="username" required/>
           <input type="password" placeholder="password" required/>
            <button>Sign in</button>
            </form>
            </div>
    );
}
 
export default LoginForm;