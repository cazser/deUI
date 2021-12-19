function classes(...names: (undefined |string)[]){
return names.filter((v)=>v).join(' ')
}

export default classes