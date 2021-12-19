import React from 'react'
import './importIcons'
import "./icon.scss"
import classes from './helpers/classes';

interface IconProps extends React.SVGAttributes<SVGElement>{
	name:string,
}
const Icon: React.FunctionComponent<IconProps> = (props)=>{
	const {className, ...restProps} = props;
	return (
		<svg  {...restProps}
		      className={classes("deui-icon", className)}>
			<use xlinkHref={`#${props.name}`}></use>
		</svg>
	)
}

export default Icon