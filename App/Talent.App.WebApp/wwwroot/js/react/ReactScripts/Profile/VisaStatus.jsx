import React from 'react'
import { SingleInput } from '../Form/SingleInput.jsx';
import { visaType } from '../Employer/common.js';
import { Dropdown } from 'semantic-ui-react';
import moment from 'moment';

export default class VisaStatus extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showSection: false,
            newData: {
                visaStatus: '',
                visaExpiryDate: ''
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.save = this.save.bind(this);
    }

    handleChange(event, { value }) {
        const data = Object.assign({}, this.state.newData)
        data["visaStatus"] = value
        this.setState({
            newData: data
        })
        if (value == "Citizen" || value == "Permanent Resident") {
            this.props.saveProfileData(data);
            this.setState({ showSection: false });
        }
        else
            this.setState({ showSection: true })
    }
    handleChangeDate(event) {
        event.preventDefault();
        const id = event.target.id;
        var data = Object.assign({}, this.state.newData)
        data[id] = event.target.value
        this.setState({
            newData: data
        })
    }
    save() {
        const data = Object.assign({}, this.state.newData);
        this.props.saveProfileData(data);
    }
    render() {
        var isCitizen = (this.props.visaStatus && this.props.visaStatus != "Citizen") ? true : false;
        var isPR = (this.props.visaStatus && this.props.visaStatus != "Permanent Resident") ? true : false;
        return (
            <React.Fragment>
                <div style={{ paddingTop: '10px', paddingBottom:'10px'}}>
                    Visa type:<br />
                    <Dropdown
                        name="visaStatus"
                        search selection
                        options={visaType}
                        onChange={this.handleChange}
                        value={this.props.visaStatus ? this.props.visaStatus : visaType[0].value}
                        id="visaStatus"
                    />
                </div>
                {this.state.showSection || (isCitizen && isPR ) ?
                    <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                        Visa expiry date:<br />
                        <div className="ui calendar" >
                            <div className="ui input" style={{paddingRight:'30px'}}>
                                <input type="date" name="visaExpiryDate"
                                    defaultValue={this.props.visaExpiryDate ? moment(this.props.visaExpiryDate).format("YYYY-MM-DD") : ""}
                                    onChange={this.handleChangeDate} id="visaExpiryDate" />
                            </div>
                            <button type="button" className="ui teal button" onClick={this.save}>Save</button>
                        </div>
                    </div> : ""}
            </React.Fragment>

        )
    }
}
