import React from 'react'
import CardList from '../../components/Card-List/Card-List.component';
import Search from '../../components/Search/Search.component';
import './Home.styles.css'
import {connect} from 'react-redux'
import { searchMonster } from '../../redux/monster/monster.action';
class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            monsters: [],
            searchField: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }));
    }

    handleSearch = (event)=>{
        const{searchField}=this.props
        searchField(event.target.value)
        //this.setState({searchField:event.target.value})
    }
   
    render(){
        
        const {monsters,searchField } = this.state
        const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchField.toLowerCase()))
        return(
            <>
            <div className='App'>
                <h1>Monsters Rolodex</h1>
               
                <Search handleSearch={this.handleSearch} />
                <CardList monsters={filteredMonsters} />
                
            </div>
            </>
        )
    }
}
const mapDispatchToProps=dispatch=>({ searchField:username => dispatch(searchMonster(username))
})
   const mapStateToProps=state=>(
       {
           searchName:state.search.searchField
       }
   )
export default connect(mapStateToProps,mapDispatchToProps)(Home)//Higher order components