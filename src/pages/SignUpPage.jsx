import "../css/SignUp.css"
import {Link} from "react-router";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {useEffect, useState} from "react";
import {auth,db} from "../configs/firebase-config";
import {setDoc,doc} from "firebase/firestore";
import toast from "bootstrap/js/src/toast";
function SignUpPage(){
    useEffect(() => {
        document.title = "Đăng ký";
    }, []);
    const  [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");

    const handleSignup = async (e) => {
        try{
            e.preventDefault();
            if(password !== cpassword){
                setMessage("Mật khẩu không khớp");
                return;
            }
            if(password.length < 6){
                setMessage("Mật khẩu phải có ít nhất 6 ký tự");
                return;
            }
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            if(user){
                await setDoc(doc(db, "users", user.uid), {
                    username: username,
                    email: email,
                    role: "user"
                });
                window.location.href = "/home";
            }
            console.log(user);
        }catch (error){
            console.log(error);
            setMessage("Đăng ký thất bại");
        }
    }
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 log-banner overflow-hidden">
                    <img src="@{/images/banner/login.jpg}" alt="login" className="img-fluid"/>
                </div>
                <div className="col-md-6">
                    <form onSubmit={handleSignup}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Tên đăng ký</label>
                            <input type="text" className="form-control" id="username" name={"username"} onChange={(e) => {setUsername(e.target.value)} }/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" name={"gmail"} onChange={(e) => {setEmail(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Mật khẩu</label>
                            <input type="password" className="form-control" id="password" name={"password"} onChange={(e) => {setPassword(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Nhập lại mật khẩu</label>
                            <input type="password" className="form-control" id="Cpassword" name="cpass" onChange={(e) => {setCpassword(e.target.value)} }/>
                        </div>
                        <p className="text-danger">{message}</p>
                        <button className="btn btn-primary">Đăng ký</button>
                        <br/>
                        <p>Đã có tài khoản?<Link to={"/account/login"} className="btn btn-success">Đăng nhập</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;