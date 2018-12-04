import React,{Component} from 'react';
import '../styles/Classify.scss';
import { Tabs, WhiteSpace, Grid } from 'antd-mobile';
import {Link} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
library.add(faSearch)
class Classify extends Component{
	constructor(){
		super();
		this.state={
			initData:[]
		}
	}
	componentWillMount(){
		axios.get('http://m-api.huigo8.com/front-api/goods/goods/category/appList?client=2')
		.then((res)=>{
			console.log(res.data.data);
			let data = res.data.data;
			let initData = this.state.initData;
			data.map((item,ind)=>{
				return initData.push({
					title: `${item.catName}`,
					"action": `${item.action}`,
					catIcon: `${item.catIcon}`,
					children: 
						item.catList.map((val)=>{
							return {
								"label": `${val.catName}`,
								"action": `${val.action}`,
								catIcon: `${val.catIcon}`,
							}
						})
					
				})
			})
			this.setState({
				initData
			})
			console.log(initData)
		})
		.catch((err)=>{
			console.log(err)
		})
	}
	render(){
		return <div className="classify">
			<Link className="header" to="/search">
				<FontAwesomeIcon icon={faSearch} />
				<span>请输入您想找的宝贝</span>
			</Link>
			<Tabs tabs={this.state.initData} usePaged="false"  renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}>
				{
				this.state.initData.map((item)=>{
					return <div key={item.title} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
						<div style={{ width: "100%"}} className="classList">
							<img style={{ width: "100%"}} src={item.catIcon} />
							<p className="className">—— {item.title} ——</p>
							<ul>
								{
									item.children.map((val)=>{
										return <li>
											<div>
												<img src={val.catIcon} style={{ width: '75px', height: '75px' }} alt="" />
												<div style={{ color: '#888', fontSize: '14px'}}>
													<p>{val.label}</p>
												</div>
											</div>
										</li>
									})
								}
							</ul>
						</div>
					</div>
				})
			}
			</Tabs>
			<br /><br /><br /><br />
			<Tabs tabs={this.state.initData}
				tabBarActiveTextColor="red"
				tabBarPosition="left"
				tabDirection="vertical"
				usePaged= "false"
				prerenderingSiblingsNumber='4'
				useOnPan="true"
				swipeable="true"
				activeTab="3"
			>
			{
				this.state.initData.map((item)=>{
					return <div key={item.title} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
						<div style={{ width: "100%"}} className="classList">
							<img style={{ width: "100%"}} src={item.catIcon} />
							<p className="className">—— {item.title} ——</p>
							<ul>
								{
									item.children.map((val)=>{
										return <li>
											<div>
												<img src={val.catIcon} style={{ width: '75px', height: '75px' }} alt="" />
												<div style={{ color: '#888', fontSize: '14px'}}>
													<p>{val.label}</p>
												</div>
											</div>
										</li>
									})
								}
							</ul>
						</div>
					</div>
				})
			}
			</Tabs>
		</div>
	}
}

export default Classify;