import React from "react";
import {alert, confirm} from './Dialog'

 export default function(){
	 //const [x, setX] = useState(false)
	 return(
		<div>
			<button onClick={()=>{alert("1")}}>alert</button>
			<button onClick={()=>{confirm("1", ()=>{console.log("你点击了yes")}, 
											   ()=>{console.log("你点击了no")})}}>confirm</button>
		</div>
	 )
 }