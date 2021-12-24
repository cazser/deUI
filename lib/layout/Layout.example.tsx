import React from 'react'
import Content from './Content'
import Layout from './Layout'
import Header from './Header'
import Footer from './Footer'
const Layout_example : React.FunctionComponent= ()=>{

return (

<div>
	<h1>第一个例子</h1>
	<Layout>
		<Header>Header</Header>
		<Content>Content</Content>
		<Footer>Footer</Footer>
	</Layout>
</div>

)

}

export default Layout_example