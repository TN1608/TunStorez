import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function Products({name, price}){
    return (
        <div className="card">
            <img src="./images/chair/DONO.jpg" id="anhsp" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-center">{name}</h5>
                <p className="card-text text-center fs-5">Giá : {price} VNĐ</p>
                <a href="#"
                   className="btn btn-outline-danger fw-bold align-items-center justify-content-center d-flex txt">Chi
                    tiết sản phẩm</a>
            </div>
        </div>
    )
}

export default Products;