import React from 'react'
import img1 from '../../Assets/img_1.jpg'
import img2 from '../../Assets/img_2.jpg'
import img3 from '../../Assets/img_3.jpg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Service & Package</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Gallery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Package</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">FAQ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner ">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100 carouselImg" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100 carouselImg" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100 carouselImg" alt="..." />
                    </div>
                </div>

                <div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <ArrowBackIcon/>
                    </button>

                    <div className='center' >
                        <div  className='center_1'>
                        <h4>A Picture is Worth a thousand words</h4>
                        <p>
                            It clearly and butifully captures your emotions- the joy,the laughter, the<br />
                            tears, you name it. Our pride is in offering the best shoots as we help you tell <br />
                            your story in photos.
                        </p>
                        <button style={{ border: "2px solid #C10F0F", width: "150px", padding: "3px", borderRadius: "35px" }}>
                            <h5>View Gallery</h5></button>
                        </div>
                        
                    </div>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <ArrowForwardIcon />
                    </button>
                </div>
            </div>





        </div>
    )
}

export default Header
