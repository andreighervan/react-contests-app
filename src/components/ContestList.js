import React from 'react';


const ContestList = ({contests}) => (
    <div className="ContestList">
        {contests.map(contest =>
            <ContestPreview key={contest.id} {...contest}/>
        }
    </div>
);

ContestList.propTypes={
    contests:React.PropTypes.array
};

export default ContestList;

