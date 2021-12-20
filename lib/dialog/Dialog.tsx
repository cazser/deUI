import Icon from "../Icon";
import React, { Fragment, ReactChild, ReactElement, ReactFragment, ReactPortal } from "react";
import scopedClassMaker from "../scopedClassMaker";
import './dialog.scss'
interface Props {
visible: boolean;
children: ReactChild | ReactFragment | ReactPortal;
buttons: Array<ReactElement>
}


const scopedClass = scopedClassMaker("deui-dialog")
const sc = scopedClass
const Dialog: React.FunctionComponent<Props> =(props)=>{
	return(
	<div>
		{props.visible? 
		<Fragment>
		<div className={sc("mask")}></div>
		<div className={sc()}>
			<div className={sc("close")}>
				<Icon name="close" />
			</div>
			<header className={sc("header")}>提示</header>
			<main className={sc("main")}>
			{props.children}
			</main>
			<footer className={sc("footer")}>
				{props.buttons}
			</footer>
		</div>
		</Fragment>
		 : null}
	</div>
	)
}

export default Dialog