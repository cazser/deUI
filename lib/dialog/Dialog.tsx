import Icon from "../Icon";
import React, { Fragment, ReactChild, ReactElement, ReactFragment, ReactPortal, ReactNode } from "react";
import ReactDOM from 'react-dom';
import scopedClassMaker from "../scopedClassMaker";
import './dialog.scss'

interface Props {
visible: boolean;
children: ReactChild | ReactFragment | ReactPortal;
buttons?: Array<ReactElement>;
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
			{props.buttons && props.buttons.length>0 &&
			<footer className={sc("footer")}>
				{props.buttons && props.buttons.map((button, index)=>
					React.cloneElement(button, {key:index})
				)}
			</footer>
			}
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

const alert=(content: string)=>{
const component = 
		<Dialog visible={true} onClose={()=>{
			ReactDOM.render(React.cloneElement( component, {visible:false}), div)
			ReactDOM.unmountComponentAtNode(div)
			div.remove()
		}}>
			{content}
		</Dialog>
const div = document.createElement("div")
document.body.appendChild(div)
ReactDOM.render(component, div)
}
const confirm=(content: string, yes?: ()=>void, no?: ()=>void)=>{
	const onYes=()=>{ 	
		ReactDOM.render(React.cloneElement( component, {visible:false}), div)
			ReactDOM.unmountComponentAtNode(div)
			div.remove()
			yes&&yes();
		}
	const onNo=()=>{ 	
		ReactDOM.render(React.cloneElement( component, {visible:false}), div)
			ReactDOM.unmountComponentAtNode(div)
			div.remove()
			no&&no();
	}	
	const component = <Dialog visible={true} onClose={onNo}
							buttons={[
							<button onClick={onYes}>yes</button>, 
							<button onClick={onNo}>no</button>]}>
						{content}
					 </Dialog>
	const div = document.createElement("div")
	document.body.appendChild(div)
	ReactDOM.render(component, div)

}

const modal = (content: ReactNode| ReactFragment)=>{
	const onClose=()=>{
			ReactDOM.render(React.cloneElement( component, {visible:false}), div)
			ReactDOM.unmountComponentAtNode(div)
			div.remove()	
	}
	const component=<Dialog
					onClose={onClose} visible={true}
					>
						<div>{content}</div>
					</Dialog>
	const div = document.createElement("div")
	document.body.appendChild(div)
	ReactDOM.render(component, div)	
	return onClose			
}
export {confirm, alert, modal}
export default Dialog