import React from 'react'
import {Radio as AntdRadio} from 'antd'
import PropTypes from 'prop-types';

import './Radio.scss'

function Radio({label, additionalClassnames, value, defaultChecked, disabled, onChange}) {
    return (
        label ? <label className={`radio ${additionalClassnames||''}`}><AntdRadio value={value} defaultChecked={defaultChecked} disabled={disabled} onChange={onChange} /><span className="radio__label">{label}</span></label>
        : <AntdRadio className={`radio ${additionalClassnames||''}`} value={value} defaultChecked={defaultChecked} disabled={disabled} onChange={onChange} />
    )
}

export default Radio

Radio.propTypes = {
    label: PropTypes.string,
    additionalClassnames: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    defaultChecked: PropTypes.bool,
    value: PropTypes.string,
}
