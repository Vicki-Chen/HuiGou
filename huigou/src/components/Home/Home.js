import React,{Component} from 'react';
import Header from './Header';
import Banner from './Banner';
import ClassifyList from './ClassifyList';
import Recommendation from './Recommendation';
import '../../styles/Home.scss'
class Home extends Component{
	render(){
		return <div>
			<Header />
			<Banner />
			<ClassifyList />
			<Recommendation />
		</div>
	}
}

export default Home;