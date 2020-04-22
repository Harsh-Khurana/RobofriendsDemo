import React from 'react';

class ErrorBoundary extends React.Component{
	constructor(props){
		super(props)
		this.state={
			hasError:false
		}
	}

	//this is a new lifecycle method that is invoked whenever the error occurs
	componentDidCatch(error,info){
		this.setState({	hasError:true	})
	}

	render(){
		if(this.state.hasError){
			return <h1>Ooooops. We are really sorry for the inconvinece</h1>
		}
		return	this.props.children
	}
}

export default ErrorBoundary;