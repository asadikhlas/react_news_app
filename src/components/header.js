import React,{Component} from 'react';
import '../css/styles.css'
 
 
class Header extends Component{ 
    inputchangeHandler(event){
        console.log(event.target.value)
    }
    render (){ 
    return (
    <header>
         <div className="logo">logo</div>
         <input 
         type="text"
         onChange={(e) => this.inputchangeHandler(e)}
         />
    </header>
        )
    }
}

export default Header;  