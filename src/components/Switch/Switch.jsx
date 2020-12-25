import React from 'react'
import PropTypes from 'prop-types';
import {Switch as AntdSwitch} from 'antd'

import './Switch.scss'

function Switch({label, additionalClassnames, disabled, defaultChecked, onChange}) {
    return (
        label ? <label className={`switch ${additionalClassnames||''}`}><AntdSwitch disabled={disabled} defaultChecked={defaultChecked} onChange={onChange} size='small' /><span className="switch__label">{label}</span></label>
        : <AntdSwitch className={`switch ${additionalClassnames||''}`} disabled={disabled} defaultChecked={defaultChecked} onChange={onChange} size='small' />
    )
}

export default Switch

Switch.propTypes = {
    label: PropTypes.string,
    additionalClassnames: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    defaultChecked: PropTypes.bool,
}
