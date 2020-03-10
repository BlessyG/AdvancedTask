/* Social media JSX */
import React from 'react';
import { ChildSingleInput } from '../Form/SingleInput.jsx';
import { Popup } from 'semantic-ui-react';

export default class SocialMediaLinkedAccount extends React.Component {
    constructor(props) {
        super(props);


    }

    componentDidMount() {
        $('.ui.button.social-media')
            .popup();
    }



    render() {
        return (
            <React.Fragment>
                <div className="four wide column">
                    <h3>Description</h3>
                    <div className="tooltip">Write a description of your company.</div>
                </div>
                <div className="ten wide column">
                    <div className="field" >
                        <textarea  name="Description" placeholder="Please tell us about any hobbies, additional expertise, or anything else you’d like to add."></textarea>
                    </div>
                    <p>Characters remaining : </p>
                </div>
            </React.Fragment>
        )
    }

}