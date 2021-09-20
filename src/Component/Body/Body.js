import React from 'react'
import ss from '../../Assets/ss.png'

const Body = () => {
    return (
        <div className='row mx-5'>
            <div className="col-7">
                <img className='bodyImg' src={ss} alt="ssimg" />
                <img className='bodyImg' style={{ marginTop: "100px" }} src={ss} alt="ssimg" />
                <img className='bodyImg' style={{ marginTop: "200px" }} src={ss} alt="ssimg" />
            </div>
            <div className="col-5 my-5">
                <h1 className="px-5 mt-5">About Us</h1>
                <p style={{fontSize:"25px",fontFamily: 'Roboto',paddingLeft:"20px"}}>
                    Lorem ipsum, somethimes <br/>
                    referred to as 'lipsum', is the<br/>
                    placeholder text used in design <br/>
                    when creating content. It helps <br/>
                    designers plan out where the <br/>
                    content will sit
                </p>
            </div>
        </div>
    )
}

export default Body
