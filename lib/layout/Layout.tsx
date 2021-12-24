import React from 'react'
import scopedClassMaker from '../scopedClassMaker'
const sc = scopedClassMaker("deui-layout")
const Layout : React.FunctionComponent= (props)=>{

return (

	<div className={sc()}>
		{props.children}
	</div>

	)

}

export default Layout