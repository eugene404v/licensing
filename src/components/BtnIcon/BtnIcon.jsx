import React from 'react'
import PropTypes from 'prop-types';

import './BtnIcon.scss'
import {BackIcon, PlusIcon, SearchIcon, DocumentDownIcon} from 'icons'

function BtnIcon({icon, children, additionalClassnames, disabled, onClick}) {

    function iconSwitcher() {
        if (children) {
            return children
        } else {
            switch(icon) {
                case 'BackIcon': return <BackIcon />
                case 'PlusIcon': return <PlusIcon width={16} height={16} />
                case 'SearchIcon': return <SearchIcon width={20} height={20} />
                case 'DocumentDownIcon': return <DocumentDownIcon width={20} height={20} />
            }
        }
    }

    return (
        <button className={`btn-icon svg-parent ${additionalClassnames||''}`} onClick={onClick} disabled={disabled}>
            {iconSwitcher()}
        </button>
    )
}

export default BtnIcon

BtnIcon.propTypes = {
    icon: PropTypes.string,
    additionalClassnames: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.element
}

