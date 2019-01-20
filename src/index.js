import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import JSON from './db.json';

//COMPONENTS
import Header from './components/header';
import NewsList from './components/news_list';
import { target } from 'glamor';

class App extends Component{
    state = {
        news : JSON,
        filtered: []
    }

    getKeyword = (event) => {
        // console.log(event.target.value)
        let keyword = event.target.value;
        let filtered = this.state.news.filter((item)=>{
            return item.title.indexOf(keyword) > -1
        });
        this.setState({
            filtered
        })  
        // console.log(filtered)
    }




    render(){
        return (
            <div>
                <Header keywords={this.getKeyword}/>
                <NewsList news={this.state.filtered.lenght === 0 ? this.state.news : this.state.filtered }>
                <h3>The News Are:</h3>
                </NewsList>
    
            </div>
        )
    }
}
 

ReactDOM.render(<App/>,document.querySelector('#root'));