import React from 'react'

function SearchIcon({width=20, height=20}) {
    return (
        <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='svg'>
            <path d="M19.6005 18.2571L13.3995 11.9152C14.3617 10.6429 14.8823 9.08727 14.8823 7.45111C14.8823 5.4926 14.1349 3.65618 12.7834 2.27155C11.432 0.886915 9.63157 0.125 7.71897 0.125C5.80637 0.125 4.00599 0.889357 2.65451 2.27155C1.30065 3.65374 0.555664 5.4926 0.555664 7.45111C0.555664 9.40718 1.30304 11.2485 2.65451 12.6307C4.00599 14.0153 5.80398 14.7772 7.71897 14.7772C9.31878 14.7772 10.8374 14.2449 12.0814 13.2632L18.2825 19.6027C18.3006 19.6213 18.3222 19.6361 18.346 19.6461C18.3698 19.6562 18.3952 19.6614 18.421 19.6614C18.4467 19.6614 18.4721 19.6562 18.4959 19.6461C18.5197 19.6361 18.5413 19.6213 18.5594 19.6027L19.6005 18.5404C19.6187 18.5218 19.6331 18.4997 19.643 18.4754C19.6528 18.4511 19.6579 18.4251 19.6579 18.3988C19.6579 18.3725 19.6528 18.3464 19.643 18.3221C19.6331 18.2978 19.6187 18.2757 19.6005 18.2571ZM11.5012 11.3193C10.4888 12.3523 9.14686 12.9213 7.71897 12.9213C6.29109 12.9213 4.94916 12.3523 3.93675 11.3193C2.92672 10.2839 2.37037 8.91145 2.37037 7.45111C2.37037 5.99077 2.92672 4.61591 3.93675 3.58292C4.94916 2.54994 6.29109 1.98095 7.71897 1.98095C9.14686 1.98095 10.4912 2.5475 11.5012 3.58292C12.5112 4.61835 13.0676 5.99077 13.0676 7.45111C13.0676 8.91145 12.5112 10.2863 11.5012 11.3193Z"/>
        </svg>
    )
}

export default SearchIcon