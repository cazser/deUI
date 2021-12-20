import Icon from "../Icon";
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
		<div className="deui-dialog">
			<div className="deui-dialog-close">
				<Icon name="close" />
			</div>
			<header className="deui-dialog-header">提示</header>
			<main className="deui-dialog-main">
			{props.children}
			</main>
			<footer className="deui-dialog-footer">
				<button>ok</button>
				<button>cancel</button>
			</footer>
		</div>
		</Fragment>
		 : null}
	</div>
	)
}

export default Dialog