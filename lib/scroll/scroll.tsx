import React, { HTMLAttributes, UIEventHandler, useState, useRef } from 'react'
import './scroll.scss'
import scrollbarWidth from './scrollbarWidth';

interface Props extends HTMLAttributes<HTMLDivElement> {

}
const Scroll : React.FunctionComponent<Props> = (props)=>{
const {children, ...rest} = props;
const [barHeight, setBarHeight]= useState(0);
const onScroll: UIEventHandler= (e)=>{
const scrollHeight = e.currentTarget.scrollHeight;
const viewHeight = e.currentTarget.getBoundingClientRect().height;
setBarHeight(viewHeight*viewHeight/scrollHeight);
}
const containerRef = useRef(null);
return (

<div className='deui-scroll' {...rest}>
	<div className="deui-scroll-inner" 
		style={{right: - scrollbarWidth()}}
		onScroll={onScroll}>
	{children}
	</div>
	<div className='deui-scroll-track'>
		<div className='deui-scroll-bar' style={{height: barHeight}}>

		</div>
	</div>
</div>

)

}

export default Scroll