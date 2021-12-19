import React from 'react'
import wechat from './icons/wechat.svg'
import QQ from './icons/QQ.svg'
interface IconProps{
	name:string
}
const Icon: React.FunctionComponent<IconProps> = (props)=>{
	console.log(wechat)
	console.log(QQ)
	return (
		<span>
			<svg>
				<use xlinkHref={`#${props.name}`}></use>
			</svg>
		</span>
	)
}

export default Icon