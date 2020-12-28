import React from 'react'
import PropTypes from 'prop-types';
import {Link as RouterLink} from 'react-router-dom' 

import './BreadCrumbs.scss'
import {HomeIcon} from 'icons'
import Link from 'components/Link/Link'

function BreadCrumbs({crumbs, lastItem}) {
    const mappedItems = Array.isArray(crumbs) && crumbs.map(el => {
        return (
            <li className="bread__item" key={el.text}>
                <Link to={el.to} text={el.text}></Link>
            </li>
        )
    })

    return (
        <ul className="bread">
            <li className="bread__home"><RouterLink to='/'><HomeIcon /></RouterLink></li> 
            {mappedItems}
            <li className="bread__item bread__item--active">{lastItem}</li>
        </ul>
    )
}

export default BreadCrumbs


BreadCrumbs.propTypes = {
    additionalClassnames: PropTypes.string,
    crumbs: PropTypes.array,
    lastItem: PropTypes.string
}