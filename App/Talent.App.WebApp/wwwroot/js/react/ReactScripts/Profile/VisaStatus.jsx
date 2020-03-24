import React from 'react'
import { SingleInput } from '../Form/SingleInput.jsx';
import { visaType } from '../Employer/common.js'
import { Dropdown } from 'semantic-ui-react'

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
        if (value == "Citizen" || value == "Permanent Resident")
            this.props.saveProfileData(data)
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
        debugger
        return (
            <div className='row'>
                <div className="ui sixteen wide column">
                    <React.Fragment>
                        <div>
                            Visa type:<br />
                            <Dropdown
                                name="visaStatus"
                                search selection
                                options={visaType}
                                onChange={this.handleChange}
                                defaultValue={this.props.visaStatus ? this.props.visaStatus : visaType[0].value}
                                id="visaStatus"
                            />
                        </div>
                        {this.state.showSection || (this.props.visaStatus != "Citizen" && this.props.visaStatus != "Permanent Resident") ?
                            <div>
                                Visa expiry date:<br />
                                <div className="ui calendar" >
                                    <div className="ui input">
                                        <input type="date" name="visaExpiryDate"
                                            defaultValue={this.props.visaExpiryDate ? this.props.visaExpiryDate : ""}
                                            onChange={this.handleChangeDate} id="visaExpiryDate" />
                                    </div>
                                </div>
                                <button type="button" className="ui teal button" onClick={this.save}>Save</button>
                            </div> : ""}
                    </React.Fragment>
                </div>
            </div>
        )
    }
}
