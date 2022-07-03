import React from 'react';
import BadgesList from '../components/BadgesList';
import './styles/Badges.css'
// import logo from '../images/desarrollo-web.png'
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';


class Badges extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            nextPage: 1,
            loading: true,
            error:null,
            data: {
                results:[]
            }
        }
    }

    componentDidMount(){
        console.log('3')
        this.fetchCharacters()
      
    }

    componentWillUnmount(){
        // clearTimeout(this.timeoutId)
    }
    fetchCharacters = async () => {
        this.setState({loading:true, error: null})
        try{
                const response = await fetch(`https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`);
                const data = await response.json();
                console.log(data)
                this.setState({
                    data: {
                        info: data.info,
                        results: [].concat(
                            this.state.data.results,
                            data.results
                        )
                    },
                    loading: false,
                    nextPage: this.state.nextPage+1
                })
        }catch(error){
                this.setState({
                    loading: false,
                    error: error
                })
        }
    }
    render(){
        if(this.state.error){
            return `Error: ${this.state.error.message}`
        }
        return(
    
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            {/* <img className="Badges_conf-logo" src={logo} alt="Logo"/> */}
                        </div>
                    </div>
                </div>
                <div className="Badge_contain">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            Nuevo
                        </Link>
                    </div>
                </div>

                <div className="Badges_list">
                    <div className="Badges__container">
                        <BadgesList badges={this.state.data}></BadgesList>
                        {this.state.loading && (
                            <Skeleton></Skeleton>
                        )}

                        {!this.state.loading && (
                            <button className="btn btn-primary" type="button" onClick={() => this.fetchCharacters()}>Ver más</button>
                        )}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Badges;