import React from 'react'
import './ViewsImageStyles.scss'

const ViewsImage = ({bgImg, title}) => {
    return (
        <div className='views-location'>
            <img src={bgImg} alt={title} />
            <div className="overlay">
                <p>{title}</p>
            </div>
        </div>
    )
}

export default ViewsImage;