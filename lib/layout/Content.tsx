import React from 'react'
import scopedClassMaker from '../scopedClassMaker'
const sc = scopedClassMaker("deui-layout")
const Content : React.FunctionComponent= ()=>{

return (

<div className={sc("content")}>
content
</div>

)

}

export default Content