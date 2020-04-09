import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types'
import { Popup, Icon } from 'semantic-ui-react'
import TalentDetail from './TalentDetail.jsx';

export default class TalentCard extends React.Component {
    constructor(props) {
        super(props);

    };
    render() {
        return (
            <div>
                <div className="center aligned description">  There are no talents found for your recruitment company</div>
                <TalentDetail />
            </div>
        )
    }
}

