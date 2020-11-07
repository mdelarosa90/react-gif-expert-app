import React from 'react'
import PropTypes from 'prop-types'

const GifGridItem = ({ title, url, id }) => {
    return (
            <div className="card animate__animated animate__fadeIn">
                <img src={url} alt={title} />
                <p>{title}</p>
            </div>
    )
}

GifGridItem.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.string,
}

export default GifGridItem
