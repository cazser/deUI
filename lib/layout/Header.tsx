import React from 'react'
import scopedClassMaker from '../scopedClassMaker'
const sc = scopedClassMaker("deui-layout")
const Header : React.FunctionComponent= ()=>{

return (

<div className={sc("header")}>
header
</div>

)

}

export default Header