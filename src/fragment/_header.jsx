import '../css/header.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, {useEffect, useState} from "react";
import {db,auth} from "../configs/firebase-config";
import {doc,getDoc} from "firebase/firestore";

import {Link} from "react-router";

function Header(){
    const [userDetail, setUserDetail] = useState(null);

    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
           console.log(user);
            if(user){
                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);
                if(docSnap.exists()){
                    setUserDetail(docSnap.data());
                }
            }
        });
    };
    useEffect(()=> {
        fetchUserData();
    },[]);

    async function handleLogout() {
        try{
            await auth.signOut();
            window.location.href = "/home";
        }catch(error){
            console.log(error);
        }
    }
    return(
        <header>
            <div className="d-flex justify-content-end me-4">
                <span className="text-muted">Ngôn ngữ:</span><a href="?lang=vi"
                                                                className="text-decoration-none">vi-VN</a>
                <span className="text-muted">|</span><a href="?lang=en" className="text-decoration-none">en-US</a>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light align-items-center d-flex justify-content-center">
                <div className="container-fluid">
                    <a className="navbar-brand logo" href="/home">
                        <img src={`${process.env.PUBLIC_URL}/images/icon/logo.png`} height={30} width={30} className="d-inline-block align-top" alt="logo"/><span>TunStorez</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={"/home"} className="nav-link active" aria-current="page">Trang chủ</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to={"#"} role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Liên hệ
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to={""}>Gmail</Link></li>
                                    <li><Link className="dropdown-item" to={""}>Github</Link></li>
                                    <li><Link className="dropdown-item" to={""}>Facebook</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Các loại sản phẩm
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to={""}>Action</Link></li>
                                    <li><Link className="dropdown-item" to={""}>Another action</Link></li>
                                    <li><Link className="dropdown-item" to={""}>Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/cart"}><i className="bi bi-cart me-2"></i>Giỏ hàng</Link>
                            </li>
                            {/*Not logged in*/}
                            <div>
                                {userDetail ? (
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                           aria-expanded="false">
                                            {userDetail.username}
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to={""}>Thông tin cá nhân</Link></li>
                                            <li><Link className="dropdown-item" to={""}>Đơn hàng</Link></li>
                                            <li><Link className="dropdown-item" to={""} onClick={handleLogout}>Đăng xuất</Link></li>
                                        </ul>
                                    </li>
                                ) : (
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button"
                                           data-bs-toggle="dropdown"
                                           aria-expanded="false">
                                            <i className="bi bi-people me-2"></i>Tài khoản
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to={"/account/login"}>Đăng nhập</Link>
                                            </li>
                                            <li><Link className="dropdown-item" to={"/account/sign-up"}>Đăng ký</Link>
                                            </li>
                                        </ul>
                                    </li>
                                )}
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;