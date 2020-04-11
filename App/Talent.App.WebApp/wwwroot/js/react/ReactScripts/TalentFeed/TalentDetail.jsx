import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie'
import { BodyWrapper, loaderData } from '../Layout/BodyWrapper.jsx'
import TalentCardDetail from '../TalentFeed/TalentCardDetail.jsx';
import CompanyProfile from '../TalentFeed/CompanyProfile.jsx';
import FollowingSuggestion from '../TalentFeed/FollowingSuggestion.jsx';
import ReactPlayer from 'react-player';
import { Icon, Button } from 'semantic-ui-react';

export default class TalentDetail extends React.Component {

    constructor(props) {
        super(props)
    };
    render() {
        return (
            <div>
                <div className="center aligned description">  There are no talents found for your recruitment company</div>
                <div className="ui link job card">
                    <div className="content">
                        <div className="header">Name<Icon name="star" size="large" className="right floated" /></div>

                    </div>
                    <ReactPlayer url="" playing style={{ width: '550px', height: '360px' }} />
                    <div className="content">
                        
                            <Icon name="user" size="large" className="i icon location"/>
                        
                            <Icon name="file pdf outline" size="large" className="i icon location" />
                        
                            <Icon name="linkedin" size="large" className="i icon location"/>
                       
                            <Icon name="github" size="large" className="i icon location"/>
                        
                    </div>
                    <div className="extra content">
                        <div className="left floated">
                            <Button basic color='teal'>
                                C#</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}