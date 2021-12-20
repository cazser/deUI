import Icon from "../Icon";
import React, { Fragment, ReactChild, ReactElement, ReactFragment, ReactPortal } from "react";
import ReactDOM from 'react-dom';
import scopedClassMaker from "../scopedClassMaker";
import './dialog.scss'

interface Props {
visible: boolean;
children: ReactChild | ReactFragment | ReactPortal;
buttons: Array<ReactElement>;
onClose: React.MouseEventHandler;
CloseOnMaskClick?: boolean
}


const scopedClass = scopedClassMaker("deui-dialog")
const sc = scopedClass

const Dialog: React.FunctionComponent<Props> =(props)=>{
	const onClickClose: React.MouseEventHandler=(e)=>{
		props.onClose(e)
	}
	const onClickMask: React.MouseEventHandler=(e)=>{
		if(props.CloseOnMaskClick){
			props.onClose(e);
		}
	}

const x = 
	<div>
		{props.visible? 
		<Fragment>
		<div className={sc("mask")} onClick={onClickMask}></div>
		<div className={sc()}>
			<div className={sc("close")} onClick={onClickClose}>
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
	return(
		ReactDOM.createPortal(x, document.body)
	)
}
Dialog.defaultProps={
	CloseOnMaskClick: false
}

export default Dialog