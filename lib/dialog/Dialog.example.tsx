import React
, { useState } from "react";
 import Dialog from './Dialog'

 export default function(){
	 const [x, setX] = useState(false)
	 return(
		<div>
			<button onClick={()=>setX((x)=>!x)}>click</button>
			<Dialog visible={x}></Dialog>
		</div>
	 )
 }