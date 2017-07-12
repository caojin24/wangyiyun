import React from 'react'
import $ from 'jquery'
import NavLink from '../Common/NavLink'
// 引入组件
import './style/list.css'

export default class ListItem extends React.Component {
	constructor(props){
        super(props)
        this.state={
            lists:[]
        }
    }
   
    getId(event) {
		event.preventDefault();
        console.log(event.target.getAttribute('id'))
        var itemid=event.target.getAttribute('id');
        
	}
	render(){
      
        const listShows = this.state.lists.map((list,index)=>{
            return  <li onClick={this.getId}  className='item-li' key = {index} >
						<NavLink to={`/Detail/${index}`}><img id={index} className='pic' src={list.img}/></NavLink>
						<p className='title'>{list.title}</p>
						<span className='auther'>{list.auther}</span>
					</li>
        })
        return(
          <div className='list' id="Listtt">
        <div className='top'>
           <h3  className='all'>全部分类</h3>
        </div>
        <ul className='list-ul'>
               <div>
                {listShows}
            </div>
        </ul>
      </div>
           
        )
    }
    componentDidMount(){
    	var that = this;
		  $.ajax ({  
        type:"GET",  
        url:'http://bxu2442380389.my3w.com/www/api/list-item.php',  
        dataType:"json",  
        success: function(data){  
            var arr=data;
            that.setState({
                    lists : arr
                }) 
            }  
        });  
    	
    }
}