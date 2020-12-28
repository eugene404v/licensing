import React from 'react'
import PropTypes from 'prop-types';

import './Widget.scss'
import {WidgetCorner} from 'icons'

const BgLineSvg = ({fillShadow, fillCircle}) => {
    return (
        <svg width="207" height="80" viewBox="0 0 207 80" fill="none" xmlns="http://www.w3.org/2000/svg" className='widget__bg-line'>
            <path d="M-16.905 34.9389C-16.905 34.9389 -10.1497 29.1573 -4.87003 27.5957C3.69658 25.0618 9.63281 27.176 17.7716 30.8593C25.5026 34.3581 29.0403 38.2319 34.4979 44.7299C43.065 54.9301 55.0997 69.6166 64.4828 73.8988C70.0929 76.4591 74.3914 77.6318 80.1891 75.5306C84.6576 73.9112 85.3212 72.6484 89.5722 67.7795C93.8232 62.9105 110.786 21.0694 116.905 5.97516C123.025 -9.11908 126.331 31.7394 133.914 38.675C141.498 45.6106 144.135 42.881 150.358 41.2634C156.581 39.6458 169.351 25.377 183.81 19.6416C188.33 17.849 195.641 15.7649 195.641 15.7649" stroke="white" strokeWidth="1.5"/>
            <g filter="url(#filter0_f)">
                <circle cx="195.641" cy="15.0979" r="5.41921" fill={fillShadow}/>
            </g>
            <circle cx="195.641" cy="15.0982" r="3.04258" fill="white"/>
            <circle cx="75.0513" cy="76.6152" r="2.5" fill={fillCircle}/>
            <circle cx="119.475" cy="2.82617" r="2.5" fill={fillCircle}/>
            <circle cx="143.372" cy="43.2207" r="2.5" fill={fillCircle}/>
            <defs>
                <filter id="filter0_f" x="185.222" y="4.67871" width="20.8384" height="20.8384" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur"/>
                </filter>
            </defs>
        </svg>
    )
}

const WidgetInnerCount = ({title, count}) => {
    return (
        <>
            <h3 className="widget__title">{title}</h3>
            <p className="widget__count">{count}</p>
        </>
    )
}

function Widget({additionalClassnames, cornerFill, children, type, title, count}) {

    const bgLineSwitcher = () => {
        switch(type) {
            case 'inProgress': return <BgLineSvg fillShadow='#FFD998' fillCircle='#FFEDD4' />
            case 'new': return <BgLineSvg fillShadow='#98ECFF' fillCircle='#ADE6FF' />
            case 'done': return <BgLineSvg fillShadow='#98FFC1' fillCircle='#ADFFCE' />
            default: return 
        }
    }

    const classNameSwitcher = () => {
        switch(type) {
            case 'inProgress': return 'widget--inprogress'
            case 'new': return 'widget--new'
            case 'done': return 'widget--done'
            default: return ''
        }
    }

    const childrenSwitcher = () => {
        switch(type) {
            case 'inProgress': return <WidgetInnerCount title={title} count={count} />
            case 'new': return <WidgetInnerCount title={title} count={count} />
            case 'done': return <WidgetInnerCount title={title} count={count} />
            default: return children
        }
    }

    return (
        <section className={`widget ${classNameSwitcher()} ${additionalClassnames||''}`}>
            <WidgetCorner fill={cornerFill} className='widget__corner' />
            {childrenSwitcher()}
            {bgLineSwitcher()}
        </section>
    )
}

export default Widget

Widget.propTypes = {
    additionalClassnames: PropTypes.string,
    cornerFill: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.element,
    title: PropTypes.string,
    count: PropTypes.string,
}
