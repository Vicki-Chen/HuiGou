import React, { Component } from 'react';
import Home from './components/Home/Home';
import List from './components/List/List';
import Cart from './components/Cart';
import Classify from './components/Classify';
import Myinfo from './components/My/Myinfo.js';
import Search from './components/Search/Search';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import { TabBar } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import "./styles/base.css";
import './styles/App.scss';



class App extends Component {
    constructor(){
        super();
        this.state={
            tabs:[
                {
                    title:'首页',
                    path:'/home',
                    position: '0px'
                },
                {
                    title:'分类',
                    path:'/classify',
                    position: '-20px'
                },
                {
                    title:'购物车',
                    path:'/cart',
                    position: '-50px'
                },
                {
                    title:'我的',
                    path:'/my',
                    position: '-83px'
                }

            ],
            currentIndex: 0,
        }
    }
    //点进页面识别hash，高亮效果
    componentWillMount(){
        let hash = window.location.hash.slice(1);
        let currentIndex = 0;
        this.state.tabs.some((item,index)=>{
            currentIndex = index;
            return item.path ===hash
        });
        this.setState({
            currentIndex
        });
    }
    //点击页面底部的Tab
    handerClick(path,index){
        this.setState({
            currentIndex: index
        })
        this.props.history.replace(path);
    }
    
    render() {
        return (
            <div className="App">
                <div className="content">
                    <Switch>
                        <Route path='/home' component={Home} />
                        <Route path='/classify' component={Classify} />
                        <Route path='/cart' component={Cart} />
                        <Route path='/my' component={Myinfo} />
                        <Route path='/search' component={Search} />
                        <Route path='/list/:goods' component={List} />
                        <Redirect from='/' to='/home' exact />
                    </Switch>
                </div>
                <TabBar
                unselectedTintColor="#727272"
                tintColor="#ff3200"
                barTintColor="white"
                >
                {
                    this.state.tabs.map((item,index)=>{
                           return <TabBar.Item
                           hidden={this.state.hidden}
                                title={item.title}
                                key={item.path}
                                icon={<div style={{
                                    width: '30px',
                                    height: '20px',
                                    background: 'url(https://github.com/Vicki-Chen/HuiGou/blob/master/huigou/src/img/sprites.png?raw=true)  no-repeat',
                                    backgroundPosition: `${item.position} 0px`
                                    }}
                                />}
                                selectedIcon={<div style={{
                                    width: '30px',
                                    height: '20px',
                                    background: 'url(https://github.com/Vicki-Chen/HuiGou/blob/master/huigou/src/img/sprites.png?raw=true) no-repeat',
                                    backgroundPosition: `${item.position} -29px`,
                                }}
                            />}
                            selected={this.state.currentIndex === index}
                            onPress={ 
                                this.handerClick.bind(this,item.path,index)
                            }
                        >
                        </TabBar.Item>
                    })
                }
                </TabBar>
            </div>
        );
    }
}
App = withRouter(App);
export default App;
