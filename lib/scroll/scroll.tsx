import React, { HTMLAttributes, UIEventHandler } from 'react'
import './scroll.scss'
import scrollbarWidth from './scrollbarWidth';

interface Props extends HTMLAttributes<HTMLDivElement> {

}
const Scroll : React.FunctionComponent<Props> = (props)=>{
const {children, ...rest} = props;
const onScroll: UIEventHandler= (e)=>{
console.log(e)
}
return (

<div className='deui-scroll' {...rest}>
	<div className="deui-scroll-inner" 
		style={{right: - scrollbarWidth()}}
		onScroll={onScroll}>
	{children}
	</div>
	<div className='deui-scroll-bar'></div>
</div>

)

}

export default Scroll