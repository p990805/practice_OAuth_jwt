const LoginPage= () =>{
    const onNaverLogin = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/naver"
    }

    return(
        <>
        <h1>Login</h1>
        <button onClick={onNaverLogin}> naver login</button>
        </>
    );
};
export default LoginPage
