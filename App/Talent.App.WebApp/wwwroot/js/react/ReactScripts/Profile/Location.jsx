import React from 'react'
import Cookies from 'js-cookie'
import { default as Countries } from '../../../../util/jsonFiles/countries.json';
import { ChildSingleInput } from '../Form/SingleInput.jsx';
import { Dropdown } from 'semantic-ui-react';
import { nationality } from '../Employer/common.js'

export class Address extends React.Component {
    constructor(props) {
        super(props)

        const details = this.props.addressData ?
            Object.assign({}, props.addressData)
            : {
                number: '',
                street: '',
                postCode: null,
                suburb: '',
                city: '',
                country: ''
            }
        this.state = {
            showEditSection: false,
            newAddress: details,
            citiesOptions: []
        }

        this.openEdit = this.openEdit.bind(this)
        this.closeEdit = this.closeEdit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.saveContact = this.saveContact.bind(this)
        this.renderEdit = this.renderEdit.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)
        this.handleChangeCountry = this.handleChangeCountry.bind(this)
        this.handleChangeCity = this.handleChangeCity.bind(this)
    }

    openEdit() {
        const details = Object.assign({}, this.props.addressData)
        var popCities = [];
        if (details.country != null) {
            popCities = _.map(Countries[details.country], (state, index) => ({
                key: state,
                text: state,
                value: state,
            }))
        }
        this.setState({
            showEditSection: true,
            newAddress: details,
            citiesOptions: popCities
        })
    }

    closeEdit() {
        this.setState({
            showEditSection: false
        })
    }

    handleChange(event) {
        const data = Object.assign({}, this.state.newAddress)
        data[event.target.name] = event.target.value
        this.setState({
            newAddress: data
        })
    }

    saveContact() {
        const data = Object.assign({}, this.state.newAddress)
        var updateData = {
            address: data
        }
        this.props.saveProfileData(updateData)
        this.closeEdit();
    }
    handleChangeCountry(event, objReference) {
        var data = Object.assign({}, this.state.newAddress);
        //required
        const name = objReference.name;
        let changedValue = objReference.value;
        var popCities = [];
        data[name] = changedValue;
        if (name == "country") {
            data["city"] = "";
        }
        if (changedValue != null) {
            popCities = _.map(Countries[changedValue], (state, index) => ({
                key: state,
                text: state,
                value: state,
            }))
        }
        this.setState({
            newAddress: data, citiesOptions: popCities
        })
    }
    handleChangeCity(event, objReference) {
        var data = Object.assign({}, this.state.newAddress);
        const name = objReference.name;
        let value = objReference.value;
        data[name] = value;
        this.setState({
            newAddress: data
        })
    }

    render() {
        return (
            this.state.showEditSection ? this.renderEdit() : this.renderDisplay()
        )
    }

    renderEdit() {
        let countriesOptions = [];
        const selectedCountry = this.state.newAddress.country;
        const selectedCity = this.state.newAddress.city;
        countriesOptions = _.map(Countries, (state, index) => ({
            key: index,
            text: index,
            value: index,
        }))
        return (
            <div className='ui sixteen wide column'>
                <div className='div row'>
                    <div className='div column' id='inputLocation'>                       
                        <strong> <label>Number</label></strong><br />
                        <input
                            type="text"
                            name="number"
                            value={this.state.newAddress.number}
                            placeholder="Enter your house number"
                            maxLength={20}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className='div column' id='inputStreet'>
                        <strong> <label>Street</label></strong><br />
                        <input
                            type="text"
                            name="street"
                            value={this.state.newAddress.street}
                            placeholder="Enter your street name"
                            maxLength={120}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className='div column' id='inputLocation'>
                        <strong> <label>Suburb</label></strong><br />
                        <input
                            type="text"
                            name="suburb"
                            value={this.state.newAddress.suburb}
                            placeholder="Enter an suburb"
                            maxLength={100}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div className='div row'>
                    <div className='div column'>
                       <strong> <label>Country</label></strong><br />
                        <Dropdown
                            name="country"
                            search selection
                            options={countriesOptions}
                            onChange={this.handleChangeCountry}
                            value={selectedCountry ? selectedCountry : "Select a country"}
                        />
                    </div>

                    <div className='div column'>
                        <strong> <label>City</label> </strong><br />
                        <Dropdown
                            name="city"
                            search selection
                            options={this.state.citiesOptions}
                            onChange={this.handleChangeCity}
                            value={selectedCity ? selectedCity : "Select a town or city"}
                        />
                    </div>
                    <div className='div column' id='inputLocation'>                       
                        <strong> <label>Post Code</label></strong><br />
                        <input
                            type="text"
                            name="postcode"
                            value={this.state.newAddress.postCode}
                            placeholder="Enter a post code"
                            maxLength={20}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <button type="button" className="ui teal button" onClick={this.saveContact}>Save</button>
                <button type="button" className="ui button" onClick={this.closeEdit}>Cancel</button>
            </div >
        )
    }

    renderDisplay() {

        let address = this.props.addressData ? `${this.props.addressData.number}, ${this.props.addressData.street}, ${this.props.addressData.suburb}, ${this.props.addressData.postCode}` : ""
        let city = this.props.addressData ? this.props.addressData.city : ""
        let country = this.props.addressData ? this.props.addressData.country : ""

        return (
            <div className='row'>
                <div className="ui sixteen wide column">
                    <React.Fragment>
                        <p>Address: {address}</p>
                        <p>City: {city}</p>
                        <p>Country: {country}</p>
                    </React.Fragment>
                    <button type="button" className="ui right floated teal button" onClick={this.openEdit}>Edit</button>
                </div>
            </div>
        )
    }
}


export class Nationality extends React.Component {
    constructor(props) {
        super(props)

        const details = props.nationalityData ? Object.assign({}, props.nationalityData)
            : {
                nationality: ""
            }
        this.state = {
            newData: details
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event, { value }) {
        const data = Object.assign({}, this.state.newData)
        data["nationality"] = value
        this.setState({
            newData: data
        })
        this.props.saveProfileData(data)
    }

    render() {

        let nationalityOptions = [];
        nationalityOptions = _.map(nationality, (state, index) => ({
            key: state,
            text: state,
            value: state,
        }))
        let nationalityData = this.props.nationalityData;
        return (

            <div className='row'>
                <div className="ui sixteen wide column">
                    <React.Fragment>
                        <Dropdown
                            name="nationality"
                            search selection
                            options={nationalityOptions}
                            onChange={this.handleChange}
                            value={nationalityData ? nationalityData : "Select your Nationality"}
                        />
                    </React.Fragment>
                </div>
            </div>
        )
    }
}
