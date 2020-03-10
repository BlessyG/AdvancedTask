/* Self introduction section */
import React, { Component } from 'react';
import Cookies from 'js-cookie'

export default class SelfIntroduction extends React.Component {
    constructor(props) {
        super(props);
    
    };

    



    render() {
        return (
            <React.Fragment>
                <div className="four wide column">
                    <h3>Description</h3>
                    <div className="tooltip">Write a description of your company.</div>
                </div>
                <div className="ten wide column">
                    <div className="field" >
                        <textarea name="Description" placeholder="Please tell us about any hobbies, additional expertise, or anything else you’d like to add."></textarea>
                    </div>
                    <p>Characters remaining : </p>
                </div>
            </React.Fragment>
        )
    }
}



