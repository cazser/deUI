import React from "react";
import Dialog from './Dialog'

 export default function(){
	 //const [x, setX] = useState(false)
	 return(
		<div>
			<Dialog visible={true} enableMask={false} onClose={()=>{}}>
				<h1>12</h1>
			</Dialog>
		</div>
	 )
 }