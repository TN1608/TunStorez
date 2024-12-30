    import "../css/Login.css";
import {Link, useParams} from "react-router";
import {useEffect, useState} from "react";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../configs/firebase-config";
import toast from "bootstrap/js/src/toast";

function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    // title
    useEffect(() => {
        document.title = "Đăng nhập";
    }, []);
    const showPassword = () => {
        document.getElementById('togglePassword').addEventListener('click', function () {
            const passwordField = document.getElementById('password');
            const passwordType = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordField.setAttribute('type', passwordType);
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    }
    //login
    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            await signInWithEmailAndPassword(auth, email, password);
            window.location.href = "/home";
        }catch(error){
            setMessage("Sai tài khoản hoặc mật khẩu");
        }
    }
    return (
        <div className="container-fluid p-5" style={{backgroundColor : '#A6AEBF'}}>
            <div className="row align-items-center">
                <div className="col-md-12">
                    <div className="login-form p-4 shadow rounded">
                        <h2 className="text-center mb-4">Đăng Nhập</h2>
                        <form onSubmit={handleLogin}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="text" className="form-control" id="email" name="email"
                                       placeholder="Nhập tài khoản Email" onChange={(e) => {setEmail(e.target.value)}}/>
                            </div>
                            <div className="mb-3 position-relative">
                                <label htmlFor="password" className="form-label">Mật khẩu</label>
                                <input type="password" className="form-control" id="password" name="password"
                                       placeholder="Nhập mật khẩu" onChange={(e) => {setPassword(e.target.value)} }/>
                                <i className="toggle-password fa-solid fa-eye position-absolute" id="togglePassword"
                                   style={{right: "10px", top: "50%", transform: "translateY(-50%)", cursor: "pointer"}} onClick={() => showPassword()}></i>
                                <div className="form-check mt-2">
                                    <input type="checkbox" className="form-check-input" id="rememberMe" name="remember"
                                           value="true"/>
                                    <label className="form-check-label" htmlFor="rememberMe">Lưu đăng nhập</label>
                                </div>
                            </div>
                            <p className="text-danger">{message}</p>
                            <button type="submit" className="btn btn-primary w-100">Đăng nhập</button>
                            <div className="text-center mt-3">
                                <Link to={"/account/forgot-password"} className="text-decoration-none">Quên mật
                                    khẩu?</Link>
                            </div>
                            <p className="text-center mt-3">Chưa có tài khoản?
                                <Link to={"/account/sign-up"} className="btn btn-success ms-2">Đăng ký</Link>
                            </p>
                            <div className="d-flex justify-content-center align-items-center mt-4">
                                <span className="fw-bold me-2">Đăng nhập với</span>
                                <Link to={"/account/login/authorize/google"} className="btn auth-btn me-2">
                                    <i className="fa-brands fa-google me-2 text-danger"></i>GOOGLE
                                </Link>
                                <Link to={"/account/login/authorize/facebook"} className="btn auth-btn">
                                    <i className="fa-brands fa-facebook me-2 text-primary"></i>FACEBOOK
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;