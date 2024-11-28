import React from "react";

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4">
            <div className="container">
                <div className="row">
                    {/* Cột 1: Thông tin bản quyền */}
                    <div className="col-md-4 mb-3">
                        <h5>YourWebsite</h5>
                        <p>© 2024 YourWebsite. All Rights Reserved.</p>
                    </div>

                    {/* Cột 2: Liên kết nhanh */}
                    <div className="col-md-4 mb-3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-light text-decoration-none">Home</a></li>
                            <li><a href="/about" className="text-light text-decoration-none">About Us</a></li>
                            <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
                        </ul>
                    </div>

                    {/* Cột 3: Mạng xã hội */}
                    <div className="col-md-4 mb-3">
                        <h5>Follow Us</h5>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                            <i className="bi bi-facebook"></i> Facebook
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                            <i className="bi bi-twitter"></i> Twitter
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light">
                            <i className="bi bi-instagram"></i> Instagram
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
