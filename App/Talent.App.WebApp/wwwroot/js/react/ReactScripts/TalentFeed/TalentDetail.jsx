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
        this.state = {
            profileData: {
                address: {
                    number: '',
                    street: '',
                    postCode: null,
                    suburb: '',
                    city: '',
                    country: ''
                },
                nationality: '',
                education: [],
                languages: [],
                skills: [],
                experience: [],
                certifications: [],
                visaStatus: '',
                visaExpiryDate: '',
                profilePhoto: '',
                linkedAccounts: {
                    linkedIn: "",
                    github: ""
                },
                jobSeekingStatus: {
                    status: "",
                    availableDate: null
                },

                firstName: '',
                lastName: '',
                middleName: '',
                gender: '',
                mobilePhone: null,
                email: '',
                phone: null,

                cvName: '',
                cvUrl: '',
                description: '',
                isMobilePhoneVerified: false,
                profilePhotoUrl: '',
                summary: '',
                videoName: '',
                videoUrl: ''
            },
            loaderData: loaderData,
        }
        this.loadData = this.loadData.bind(this);
        this.init = this.init.bind(this);
    };

    init() {
        let loaderData = this.state.loaderData;
        loaderData.allowedUsers.push("Employer")
        loaderData.allowedUsers.push("Recruiter")
        loaderData.isLoading = false;
        this.setState({ loaderData, })
    }

    componentDidMount() {
        this.loadData()
    }

    loadData() {
        var cookies = Cookies.get('talentAuthToken');
        $.ajax({
            url: 'http://localhost:60290/profile/profile/getTalentProfile',
            headers: {
                'Authorization': 'Bearer ' + cookies,
                'Content-Type': 'application/json'
            },
            type: "GET",
            success: function (res) {
                this.updateWithoutSave(res.data)
            }.bind(this)
        })
    }
    updateWithoutSave(newValues) {        
        let newProfile = Object.assign({}, this.state.profileData, newValues)
        this.setState({
            profileData: newProfile
        })
    }
    render() {
        return (
            <div>
                <div className="center aligned description">  There are no talents found for your recruitment company</div>
                <div className="ui link job card">
                    <div className="content">
                        <div className="header">Name<Icon name="star" size="large" className="right floated" /></div>

                    </div>
                    <ReactPlayer url="https://www.youtube.com/watch?v=sBws8MSXN7A" playing style={{ width: '550px', height: '360px' }} />
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