import React from 'react';
import ReactDOM from 'react-dom';

const App=(props)=>{
    return(
        <div>
     <h2 className='text-center'>
         Hello React Component
     </h2>
            {props.headerMessage}
        </div>
    )
};

ReactDOM.render(
    <App headerMessage='Hello props'/>,
    document.getElementById('root')
);