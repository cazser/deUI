import React from 'react'
import scopedClassMaker from '../scopedClassMaker'
const sc = scopedClassMaker("deui-layout")
const Footer : React.FunctionComponent= ()=>{

return (

<div className={sc("footer")}>
footer
</div>

)

}

export default Footer