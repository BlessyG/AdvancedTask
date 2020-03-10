import React from 'react'
import Cookies from 'js-cookie'
import { error } from 'util';
import { Progress } from 'semantic-ui-react'


export default class VideoUpload extends React.Component {
    constructor(props) {
        super(props)

        this.maxLength = 100 * 1024 * 1024; // 100MB - arbitary choice
        this.fileTypes = ['video/mp4']

     
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