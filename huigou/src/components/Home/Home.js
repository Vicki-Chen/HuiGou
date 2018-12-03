import React,{Component} from 'react';
import Header from './Header';
import Banner from './Banner'
class Home extends Component{
	render(){
		return <div>
			<Header />
			<Banner />
		</div>
	}
}

export default Home;