import React from 'react';
import {css} from 'glamor';

const NewsItem = ({item}) => {
    let news_item = css ({
        padding: '20px',
        boxSizing: 'border-box',
        borderBottom: '1px solid grey',
        ':hover':{
            color:'red'
        },

        '@media(max-width: 500px)':{
            color:'blue'
        }
    })

    let grey_background = css ({
        background: 'Lightgrey',
    })
    return(
        <div className= {`${news_item} ${grey_background } `}>
        <h3>{item.title}</h3>
        <div>
            {item.feed}
        </div>
        </div> 
    )
}

export default NewsItem;



