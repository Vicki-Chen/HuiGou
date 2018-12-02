import React, { Component } from 'react';
import Home from './components/Home/Home';
// import List from './components/List';
import Cart from './components/Cart';
import Classify from './components/Classify';
import My from './components/My/Myinfo';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import { TabBar } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
// import { Item } from '../node_modules/antd-mobile/lib/tab-bar';
import './styles/App.scss';
class App extends Component {
    constructor(){
        super();
        this.state={
            tabs:[
                {
                    title:'首页',
                    path:'/home',
                    img: './img/sprites.png',
                    position: '0px'
                },
                {
                    title:'分类',
                    path:'/classify',
                    img: './img/sprites.png',
                    position: '-20px'
                },
                {
                    title:'购物车',
                    path:'/cart',
                    img: './img/sprites.png',
                    position: '-50px'
                },
                {
                    title:'我的',
                    path:'/myinfo',
                    img: './img/sprites.png',
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
                        <Route path='/my' component={My} />
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
                                title={item.title}
                                key={item.path}
                                icon={<div style={{
                                    width: '30px',
                                    height: '20px',
                                    background: 'url(https://vipkshttps0.wiz.cn/ks/note/view/3070a5d0-e339-11e8-92a3-47b92e5247e4/aa446742-615d-4044-bd56-a7ab32cce3fd/index_files/sprites_3.png)  no-repeat',
                                    backgroundPosition: '-83px 0px'
                                    }}
                                />}
                                selectedIcon={<div style={{
                                    width: '32px',
                                    height: '20px',
                                    background: 'url(https://vipkshttps0.wiz.cn/ks/note/view/3070a5d0-e339-11e8-92a3-47b92e5247e4/aa446742-615d-4044-bd56-a7ab32cce3fd/index_files/sprites_3.png) no-repeat',
                                    backgroundPosition: '-83px -29px',
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
