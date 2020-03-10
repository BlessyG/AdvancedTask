import React from 'react'
import Cookies from 'js-cookie'
import { default as Countries } from '../../../../util/jsonFiles/countries.json';
import { ChildSingleInput } from '../Form/SingleInput.jsx';

export class Address extends React.Component {
    constructor(props) {
        super(props)
        

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
                        <textarea name="Description" placeholder="Please tell us about any hobbies, additional expertise, or anything else you’d like to add."></textarea>
                    </div>
                    <p>Characters remaining : </p>
                </div>
            </React.Fragment>
        )
    }

}

export class Nationality extends React.Component {
    constructor(props) {
        super(props)
       
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
                        <textarea name="Description" placeholder="Please tell us about any hobbies, additional expertise, or anything else you’d like to add."></textarea>
                    </div>
                    <p>Characters remaining : </p>
                </div>
            </React.Fragment>
        )
        
    }
}