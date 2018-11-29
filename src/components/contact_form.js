import React, { Component } from 'react';

class ContactForm extends Component {
    constructor(props){
        super(props);
        this.state ={
            form: {
                firstName: '',
                lastName: ''
            }

        }
        this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        const { value, name } = event.target;

        const { form } = this.state;

        form[name] = value;

        this.setState({
            form: {...form}
        });
    }

    render(){
        const {firstName, lastName} = this.state.form;
        return(
            <form>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text"  onChange={this.handleInputChange} value={firstName} name="firstName" type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text"  onChange={this.handleInputChange}  value={lastName} name="lastName" type="text" className="form-control"/>
                </div>
            </form>
        )
    }
}

export default ContactForm;