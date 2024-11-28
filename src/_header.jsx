import 'bootstrap/dist/css/bootstrap.min.css';
import './css/header.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Header(){
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
                                <a className="nav-link active" aria-current="page" href="/home">Trang chủ</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Liên hệ
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Gmail</a></li>
                                    <li><a className="dropdown-item" href="#">Github</a></li>
                                    <li><a className="dropdown-item" href="#">Facebook</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Các loại sản phẩm
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/cart"><i class="bi bi-cart me-2"></i>Giỏ hàng</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    <i class="bi bi-people me-2"></i>Tài khoản
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Đăng nhập</a></li>
                                    <li><a className="dropdown-item" href="#">Đăng ký</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;