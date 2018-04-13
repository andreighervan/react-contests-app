import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import ContestPreview from './ContestPreview';
import axios from 'axios';
import data from '../testData';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            pageHeader:'Naming Contests',
            contests:this.props.initialContests
        }
    }
    componentDidMount(){
        axios.get('/api/contests')
            .then(resp=>{
                this.setState({
                    contests:resp.data.contests
                })
            })
            .catch(console.error)
    }
    render() {
        return (
            <div>
                <Header message={this.state.pageHeader}/>
                {this.state.contests.map(contest=>
                <ContestPreview key={contest.id} {...contest}/>
                )}
            </div>
        )
    };
}


App.propTypes = {
    headerMessage: PropTypes.string.isRequired
};


App.defaultProps = {
    headerMessage: 'Hello!'
};

export default App;
