import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            test:42,
            pageHeader:'Naming Contests'
        }
    }
    componentDidMount(){
        console.log('did mount');
    }
    render() {
        return (
            <div>
                <Header message={this.state.pageHeader}/>
                {this.state.test}
                <ContestPreview {...this.props.contests[0]}/>
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
