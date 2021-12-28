import React, { HTMLAttributes, UIEventHandler, useState, useRef, useEffect } from 'react'
import './scroll.scss'
import scrollbarWidth from './scrollbarWidth';

interface Props extends HTMLAttributes<HTMLDivElement> {

}
const Scroll : React.FunctionComponent<Props> = (props)=>{
const {children, ...rest} = props;
const [barHeight, setBarHeight]= useState(0);
const [barTop, setBarTop]= useState(0);
const onScroll: UIEventHandler= (e)=>{
const scrollHeight = containerRef.current!.scrollHeight;
const viewHeight = containerRef.current!.getBoundingClientRect().height;
const scrollTop = containerRef.current!.scrollTop;
setBarTop( scrollTop * viewHeight / scrollHeight);
}
const containerRef = useRef<HTMLDivElement>(null);
useEffect(()=>{
const scrollHeight = containerRef.current!.scrollHeight;
const viewHeight = containerRef.current!.getBoundingClientRect().height;
setBarHeight(viewHeight*viewHeight/scrollHeight);
}, [])
return (

<div className='deui-scroll' {...rest}>
	<div className="deui-scroll-inner" 
		style={{right: - scrollbarWidth()}}
		onScroll={onScroll}
		ref={containerRef}>
	{children}
	</div>
	<div className='deui-scroll-track'>
		<div className='deui-scroll-bar' style={{height: barHeight, transform: `translateY(${barTop}px)`}}>

		</div>
	</div>
</div>

)

}

export default Scroll