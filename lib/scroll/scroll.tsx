import React, { HTMLAttributes } from 'react'
import './scroll.scss'
import scrollbarWidth from './scrollbarWidth';

interface Props extends HTMLAttributes<HTMLDivElement> {

}
const Scroll : React.FunctionComponent<Props> = (props)=>{
const {children, ...rest} = props;
return (

<div className='deui-scroll' {...rest}>
	<div className="deui-scroll-inner" style={{right: - scrollbarWidth()}}>
	{children}
	</div>
</div>

)

}

export default Scroll