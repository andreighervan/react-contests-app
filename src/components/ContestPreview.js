import React from 'react';

const ContestPreview = (contest) => {
    return(
    <div className="ContestPreview">
        <div>
            {contest.categoryName}
        </div>
        <div>
            {contest.contestName}
        </div>
    </div>
    )
};

ContestPreview.propTypes = {
    categoryName: PropTypes.string.isRequired,
    contestName:PropTypes.string.isRequired
};

export default ContestPreview;