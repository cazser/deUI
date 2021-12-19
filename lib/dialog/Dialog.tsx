import React from "react";
interface Props{
visible: boolean
}
const Dialog: React.FunctionComponent<Props> =(props)=>{
	return(
	<div>
		{props.visible? "对话框" : null}
	</div>
	)
}

export default Dialog