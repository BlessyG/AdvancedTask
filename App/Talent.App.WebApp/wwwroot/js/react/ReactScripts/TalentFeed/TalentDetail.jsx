import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie'
import { BodyWrapper, loaderData } from '../Layout/BodyWrapper.jsx'
import TalentCardDetail from '../TalentFeed/TalentCardDetail.jsx';
import CompanyProfile from '../TalentFeed/CompanyProfile.jsx';
import FollowingSuggestion from '../TalentFeed/FollowingSuggestion.jsx';

export default class TalentDetail extends React.Component {

    constructor(props) {
        super(props)
    }

    //componentDidMount() {
    //    this.loadData()
    //}

    //loadData()  url: 'http://localhost:60290/profile/profile/getTalentProfile',

    render() {
        return (
            <div>
                <div className="content">
                    <div className="header">Opportunities</div>
                </div>
                <TalentCardDetail />
                <div className="extra content">
                    <div className="left floated">
                        <i className="thumbs up icon interested"></i>
                    </div>
                    <div className="right floated author">
                        <img className="ui avatar image" src="https://semantic-ui.com/images/avatar/small/matt.jpg" /> Company Z
                    </div>
                </div>
            </div>
        )
    }
}