import React from "react";
import ReactDOM from "react-dom"
import Icon from './Icon'
const fn :React.MouseEventHandler= (e)=>{
	console.log(e.target)
}

ReactDOM.render(
<div>
	<Icon name="wechat" onClick={fn}/>
	<Icon name="QQ"  onClick={fn}/>
</div>, document.querySelector("#root"))