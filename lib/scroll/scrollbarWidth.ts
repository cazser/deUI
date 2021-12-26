function scrollbarWidth(){
	const body = document.body;
	const div = document.createElement('div')
	
	
	div.style.position = 'absolute';
	div.style.top = div.style.left="-9999px";
	div.style.width = div.style.height = '100px';
	div.style.overflow = "scroll"
	body.appendChild(div);
	const width = div.offsetWidth - div.clientWidth;
	body.removeChild(div);
	return width;
}

export default scrollbarWidth