/* Photo upload section */
import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { Image, Icon } from 'semantic-ui-react';

export default class PhotoUpload extends Component {

    constructor(props) {
        super(props)
        //        this.state = {
        //            imgUpload: ''
        //        };
        //        this.handleChange = this.handleChange.bind(this);
        //    }

        //    handleChange(event) {
        //        event.preventDefault();
        //    }

        //    render() {
        //        return (
        //            <div className='row'>
        //                <div className="ui sixteen wide column">
        //                    <strong>Profile Photo</strong>                    
        //                    <div>
        //                        <input id='fileinput' type='file'
        //                            style={{ display: 'none' }}
        //                            accept=".png,.jpg,.jpeg"
        //                            onChange={this.handleChange}
        //                        />
        //                        <label htmlFor='fileinput' float='right'>                           
        //                            { this.state.imgUpload ?
        //                                <img src='https://react.semantic-ui.com/images/wireframe/square-image.png' className="ui image custom"/> :
        //                                <Icon name="camera retro" size="huge" circular className="i icon custom" />
        //                            }
        //                    </label>
        //                </div>
        //                </div>
        //            </div>
        //        )
        //    }
        //}


        this.selectFileToUpload = this.selectFileToUpload.bind(this);
        this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
        this.fileUploadHandler = this.fileUploadHandler.bind(this);
        this.maxFileSize = 2097152;
        this.acceptedFileType = ["image/gif", "image/jpeg", "image/png", "image/jpg"];

        this.state = {
            selectedFile: null,
            selectedFileName: '',
            imageSrc: ''
        }
    };

    selectFileToUpload() {
        document.getElementById('selectFile').click();
    }

    fileSelectedHandler(event) {

        var localSelectedFile = this.state.selectedFile;
        let localSelectedFileName = this.state.selectedFileName;
        let localImageSrc = this.state.imageSrc;

        if (event.target.files[0].size > this.maxFileSize || this.acceptedFileType.indexOf(event.target.files[0].type) == -1) {
            TalentUtil.notification.show("Max file size is 2 MB and supported file types are *.jpg, *.jpeg, *.png, *.gif", "error", null, null);
        }
        else {
            localSelectedFile = event.target.files[0],
                localSelectedFileName = event.target.files[0].name,
                localImageSrc = window.URL.createObjectURL(event.target.files[0])
        }

        this.setState({
            selectedFile: localSelectedFile,
            selectedFileName: localSelectedFileName,
            imageSrc: localImageSrc
        })
    }



    fileUploadHandler(event) {
        event.preventDefault();
        debugger
        let data = new FormData();
        if (this.state.selectedFile != "") {
            data.append('file', this.state.selectedFile);
        }
        var cookies = Cookies.get('talentAuthToken');

        $.ajax({
            url: 'http://localhost:60290/profile/profile/updateProfilePhoto',
            headers: {
                'Authorization': 'Bearer ' + cookies
            },
            type: "POST",
            data: data,
            cache: false,
            processData: false,
            contentType: false,
            success: function (res) {
                if (res.success) {
                    TalentUtil.notification.show("Profile updated sucessfully", "success", null, null)
                } else {
                    TalentUtil.notification.show(res.message, "error", null, null);
                }
            }.bind(this),
            error: function (res, status, error) {
                //Display error
                TalentUtil.notification.show("There is an error when updating Images - " + error, "error", null, null);
            }
        });
    }

    render() {
        let showProfileImg = [];
        let profileUrl = this.state.imageSrc ? this.state.imageSrc : this.props.imageId;
        //let test = `url(${URL.createObjectURL(this.props.imageId)}`;

        if (profileUrl != '') {
            showProfileImg.push(<span key="imgSpan"><img style={{ height: 112, width: 112, borderRadius: 55 }} className="ui small" src={profileUrl} alt="Image Not Found" onClick={this.selectFileToUpload} /></span>);
        } else {
            showProfileImg.push(<span key="imgSpan"><i className="huge circular camera retro icon " style={{ alignContent: 'right', verticalAlign: 'top' }} onClick={this.selectFileToUpload}></i></span>);
        }

        return (
            <div className="row">
                <div className="ui sixteen wide column">
                    <section>
                        <div>
                            <label htmlFor="work_sample_uploader" className="profile-photo">
                                {showProfileImg}
                            </label>
                            <input id="selectFile" type="file" style={{ display: 'none' }} onChange={this.fileSelectedHandler} accept="image/*" />
                            <button type="button" className="ui teal button" onClick={this.fileUploadHandler}>Upload</button>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
