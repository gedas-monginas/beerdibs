import React, { Component, PropTypes } from 'react';

import Tap from './Tap';
import ActivityList from './ActivityList';

class Dashboard extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getTaps();
    }

    render() {
        const {taps} = this.props;

        return (
            <div className="rowFlex">
                <div className="colLg5 colXs12 section-dark">
                    <div className="header">On the Tap</div>
                    {taps.map(tap => {
                        return <Tap key={tap.id} {...tap} />;
                    })}
                </div>
                <div className="colLg7 colXs12 section">
                    <ActivityList {...this.props} />
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    taps: PropTypes.array.isRequired,
    getTaps: PropTypes.func.isRequired
};

export default Dashboard;