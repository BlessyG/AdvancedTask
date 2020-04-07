import React from 'react';
import { Loader, Icon } from 'semantic-ui-react';

export default class CompanyProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {        
        return (
            <div className="ui card">
                <div className="content">
                    <div className="center aligned header">
                        <img src='https://react.semantic-ui.com/images/wireframe/square-image.png' className="ui image talent" />
                        </div>
                    <div className="center aligned header">MVP Studio</div>
                    <div className="ui location center"><Icon name="map marker alternate" size="small" />Auckland, NewZealand</div>
                    <div className="center aligned description">                        
                       We currently do not have specific skills that we desire.
                    </div>
                </div>
                <div className="extra content">
                    <div className="center">
                        <span className="ui location"><Icon name="call" size="small" /> : 232323</span><br />
                        <span className="ui location"><Icon name="mail" size="small" /> : ru@mvp.studio</span>
                    </div>
                </div>
            </div>
        )
    }
}