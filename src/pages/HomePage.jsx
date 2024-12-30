import Products from "../model/Products";
function HomePage(){
    const products = [
        {name: "Ghế Donno", price : "200.000"},
        {name: "Ghế Jeaneret", price : "200.000"},
        {name: "Ghế Cindy", price : "300.000"},
        {name: "Ghế Đôn", price : "400.000"},
    ]
    return (
        <div className={"content w-100"}>
            <div id="carouselExampleFade" className="carousel slide carousel-fade">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./images/banner/1.jpg" className="d-block w-100 img-fluid" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="./images/banner/2.jpg" className="d-block w-100 img-fluid" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="./images/banner/3.jpg" className="d-block w-100 img-fluid" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <hr/>
            <div className={"container-fluid p-5"}>
                <h1 className={"text-center"}>Các sản phẩm đang nổi bật</h1>
                <hr className={"w-100"}/>
                <div className={"container products"}>
                    <div className={"row"}>
                        {/*<div className="card">*/}
                        {/*    <img src="./images/chair/DONO.jpg" id="anhsp" className="card-img-top" alt="..."/>*/}
                        {/*    <div className="card-body">*/}
                        {/*        <h5 className="card-title text-center">Ghế Donno</h5>*/}
                        {/*        <p className="card-text text-center fs-5">Giá : 200.000VNĐ</p>*/}
                        {/*        <a href="#"*/}
                        {/*           className="btn btn-outline-danger fw-bold align-items-center justify-content-center d-flex txt">Chi*/}
                        {/*            tiết sản phẩm</a>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {products.map((product, index) => (
                            <div className={"col-md-3 mb-2"}>
                                <Products key={index} name={product.name} price={product.price}/>
                            </div>
                        ))}
                    </div>
                </div>
                <h4 className="text-center fw-bold mt-5">DỊCH VỤ THIẾT KẾ THI CÔNG</h4>
                <hr className="w-100"/>
                <div className="row">
                    <div className="col-md-8">
                        <img src="./images/icon/1.jpg" className="img-fluid" alt="..."/>
                    </div>
                    <div className="col-md-4">
                        <h6 className="text-center mb-2">Giảm đến 50% chi phí thiết kế với dịch vụ thiết kế thi công
                            nội thất trọn
                            gói.</h6>
                        <img src="./images/icon/2.jpg" alt="..." className="img-fluid"/>
                    </div>
                </div>
                <section className="section2">
                    <h4 className="text-center fw-bold mt-5">CẢM HỨNG THIẾT KẾ</h4>
                    <hr className="w-100"/>
                    <div className="row">
                        <div className="col-md-4 mb-2">
                            <a className="btn card h-100">
                                <img src="./images/camhung/1.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Thiết kế căn hộ Estella: Cảm hứng từ lối sống tối giản
                                        chất
                                        lượng</h5>
                                    <p className="card-text">Phong cách sống định hình nên không gian sống, điều này
                                        chính là phương
                                        châm mà HAY Decor đã áp dụng khi thực hiện thiết kế căn hộ Estella. Một lối
                                        sống tối
                                        giản
                                        hiện đại nhưng vẫn thể hiện rõ sự đủ đầy và sang trọng trong cách bố trí từng
                                        khu
                                        vực</p>
                                    <button className="btn morebtn align-items-start justify-content-start d-flex">Xem
                                        thêm >>
                                    </button>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 mb-2">
                            <a className=" btn card h-100">
                                <img src="./images/camhung/2.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Parisian Chic: Căn hộ LUMIERE mang vẻ đẹp lãng mạn
                                        Pháp</h5>
                                    <p className="card-text">Căn hộ LUMIERE mang những trải nghiệm sống sang trọng một
                                        cách tinh tế
                                        của
                                        đất nước Pháp lãng mạn ngay tại Sài Gòn. Không sa hoa cầu kỳ nhưng có sức hút
                                        mạnh mẽ
                                        như
                                        một quý cô thanh lịch. HAY sẽ cùng bạn khám phá không gian căn hộ 2 phòng ngủ
                                        được thế
                                        kế
                                        theo phong cách Parisian Chic – Nội thất kiểu Pháp đương đại với vẻ đẹp vượt
                                        thời
                                        gian.</p>
                                    <button className="btn morebtn align-items-start justify-content-start d-flex">Xem
                                        thêm >>
                                    </button>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 mb-2">
                            <a className="btn card h-100">
                                <img src="./images/camhung/3.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Căn hộ LUMIERE: Thiết kế thi công trọn gói hay nội thất
                                        rời?</h5>
                                    <p className="card-text">Căn hộ LUMIERE là một dự án theo tiêu chuẩn sống xanh
                                        hiện đại, phù hợp
                                        với
                                        xu hướng phổ biến về sự đổi mới trong lối sống và gu thẩm mỹ của nhiều người.
                                        Vậy giữa
                                        thiết
                                        kế thi công nội thất trọn gói và may đo nội thất rời, theo bạn lựa chọn nào
                                        tối ưu, mang
                                        đến
                                        nét nhấn nhá mang đậm tính cá nhân cho gia chủ?</p>
                                    <button className="btn morebtn align-items-start justify-content-start d-flex">Xem
                                        thêm >>
                                    </button>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 mb-2">
                            <a className="btn card h-100">
                                <img src="./images/camhung/4.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Mẫu thiết kế nội thất phòng ngủ căn hộ LUMIERE</h5>
                                    <p className="card-text">Sự sáng tạo trong không gian sống, đặc biệt là các thiết
                                        kế nội thất
                                        phòng
                                        ngủ luôn là chủ đề khiến nhiều người quan tâm khi làm nhà. Các khách hàng của
                                        HAY cũng
                                        không
                                        ngoại lệ, gần đây là các vị gia chủ của dự án căn hộ LUMIERE, càng tiếp xúc
                                        chúng tôi
                                        càng
                                        hiểu được tầm quan trọng của nơi nghỉ ngơi lý tưởng đối với quý khách
                                        hàng.</p>
                                    <button className="btn morebtn align-items-start justify-content-start d-flex">Xem
                                        thêm >>
                                    </button>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 mb-2">
                            <a className="btn card h-100">
                                <img src="./images/camhung/5.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Gợi ý các phong cách nội thất nổi bật cho căn hộ
                                        LUMIERE</h5>
                                    <p className="card-text">Căn hộ LUMIERE là một dự án mới được bàn giao gần đây
                                        nhưng để lại dấu
                                        ấn
                                        khá đặc biệt đối với những gia chủ sở hữu. Không chỉ mang lợi thế về vị trí,
                                        các tiện
                                        ích
                                        xung quanh mà việc tìm kiếm các phong cách nội thất thể hiện phong cách sống
                                        độc đáo,
                                        sang
                                        trọng của cư dân trong khu căn hộ cao cấp này cũng là điều được quan tâm hàng
                                        đầu.</p>
                                    <button className="btn morebtn align-items-start justify-content-start d-flex">Xem
                                        thêm >>
                                    </button>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 mb-2">
                            <a className="btn card h-100">
                                <img src="./images/camhung/6.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Căn hộ LUMIERE: Thiết kế không gian cho gia chủ có
                                        gu</h5>
                                    <p className="card-text">Căn hộ LUMIERE riverside được ví như “viên ngọc trai”
                                        cuối cùng của khu
                                        vực
                                        Thảo Điền – Nơi có cộng động chuyên gia nước ngoài sinh sống. Tiếp xúc với các
                                        vị khách
                                        nơi
                                        đây, đội ngũ HAY Decor có dịp được trò chuyện và kết nối với những gia chủ có
                                        gu sống
                                        tối
                                        giản mà vẫn rất ấn tượng.</p>
                                    <button className="btn morebtn align-items-start justify-content-start d-flex">Xem
                                        thêm >>
                                    </button>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default HomePage;