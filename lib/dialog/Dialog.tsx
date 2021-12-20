import React, { Fragment, ReactChild, ReactFragment, ReactPortal } from "react";
import './dialog.scss'
interface Props {
visible: boolean;
children: ReactChild | ReactFragment | ReactPortal
}
const Dialog: React.FunctionComponent<Props> =(props)=>{
	return(
	<div>
		{props.visible? 
		<Fragment>
		<div className="deui-dialog-mask"></div>
		<div className="deui-dialog">{props.children}</div>
		</Fragment>
		 : null}
	</div>
	)
}

export default Dialog