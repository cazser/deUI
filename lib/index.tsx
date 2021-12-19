import React from "react";
import ReactDOM from "react-dom"
import Icon from './Icon'
const fn :React.MouseEventHandler= (e)=>{
	console.log(e.target)
}

ReactDOM.render(
<div>
	<Icon name="QQ"  onClick={fn} onMouseEnter={()=>{console.log("Enter")}}
	 		onMouseLeave={()=>{console.log("Leave")}}/>
</div>, document.querySelector("#root"))