import React from "react";
import {alert, confirm} from './Dialog'

 export default function(){
	 //const [x, setX] = useState(false)
	 return(
		<div>
			<button onClick={()=>{alert("1")}}>alert</button>
			<button onClick={()=>{confirm("1", ()=>{}, ()=>{})}}>confirm</button>
		</div>
	 )
 }