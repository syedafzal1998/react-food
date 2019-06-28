import React, { Component } from 'react';
import firebase from '../config/firebase';
import { FormGroup, FormText, Col, Input, Button, Label } from 'reactstrap';


const initialState = {
    name: "",
    email: "",
    password: "",
    nameError: "",
    emailError: "",
    passwordError: ""
  };

export class Signup extends Component {
    constructor(props) {
        super(props);
        this.path = firebase.database().ref().child('users');
        this.handleChange = this.handleChange.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
        this.state = {
            fullName: '',
            email: '',
            gender: '',
            country: '',
            city: '',
            age: '',
            password: '',
            cnfrmPassword: '',
        }
    }

    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox ? event.target.checked : event.target.value
        });
    };

    validate = () => {
        let nameError = "";
        let emailError = "";
        let passwordError = "";
        let cpasswordError = "";        
        let rgxemail = /^([a-zA-Z0-9_\.])+\@(([a-z]{5,10})+\.)+([a-z]{2,4})$/
        let rgxpassword = /^([0-9]{6,8})/
        let rgxname = /^([a-zA-Z]{3,25})/


        if (!this.state.nameErro) {
            nameError = "**Please enter a full name";
        }
        else if (!this.state.nameError.match(rgxname)) {
            nameError = "**Enter Correct Username";
        }


        if (!this.state.email) {
            emailError = "**Please Enter email";
        }
        else if (!this.state.email.match(rgxemail)) {
            emailError = "**Enter a correct email";
        }

        if (!this.state.passwordError) {
            passwordError = "**Password requried"
        }
        else if (!this.state.passwordError.match(rgxpassword)) {
            passwordError = "**Passoword must be 6-8 digit";
        }


        if (emailError || nameError || passwordError) {
            this.setState({ emailError, nameError, passwordError });
            return false;
        }

        return true;
    };




    handleSignup() {
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            // clear form
            this.setState(initialState);
        }

        firebase.auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((user) => {
                this.path.child(`${user.user.uid}`).set({
                    info: {
                        fullName: this.state.fullName,
                        email: this.state.email,
                        gender: this.state.gender,
                        country: this.state.country,
                        city: this.state.city,
                        age: this.state.age,
                    },
                    selected: {
                        slotBooked: ""
                    }
                })
                window.location = '/'
            })


            .catch((error) =>
                console.log(error))
    }
    render() {
        return (
            <Col sm={{ size: '10', offset: '1' }} md={{ size: '6', offset: '3' }}>

                <div style={{ margin: '10px auto', width: '80%' }}>
                    <h1 style={{ fontWeight: '300', marginBottom: '30px', marginTop: '20px' }}>Create New Account</h1>
                    <FormGroup>
                        <Input onChange={this.handleChange} value={this.state.fullName}
                            type="text" name="fullName" placeholder="Full name" required />

                        <div style={{ fontSize: 12, color: "red", fontWeight: 'bolder' }}>
                            {this.state.nameError}
                        </div>
                    </FormGroup>

                    <FormGroup style={{ color: 'aqua' }}>
                        <Input onChange={this.handleChange} value={this.state.email}
                            type="email" name="email" id="email" placeholder="Email" required />

                        <div style={{ fontSize: 12, color: "red", fontWeight: 'bolder' }}>
                            {this.state.emailError}</div>

                    </FormGroup>
                    <FormGroup check inline>
                        <Label check>
                            <Input onChange={this.handleChange} value={this.state.gender}
                                type="radio" name="gender" value="male" /> Male
                         </Label>
                    </FormGroup>
                    <FormGroup check inline>
                        <Label check>
                            <Input onChange={this.handleChange} value={this.state.gender}
                                type="radio" name="gender" value="female" /> Female
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Input onChange={this.handleChange} value={this.state.country}
                            type="text" name="country" placeholder="Country" required />
                    </FormGroup>
                    <FormGroup>
                        <Input onChange={this.handleChange} value={this.state.city}
                            type="text" name="city" placeholder="City" required />
                    </FormGroup>
                    <FormGroup>
                        <Input onChange={this.handleChange} value={this.state.age}
                            type="number" name="age" placeholder="Age" required />
                    </FormGroup>




                    <FormGroup>
                        <Input onChange={this.handleChange} value={this.state.password}
                            type="password" name="password" id="password" placeholder="Password"
                            required />
                        <div style={{ fontSize: 12, color: "red", fontWeight: 'bolder' }}>
                            {this.state.passwordError} </div>

                    </FormGroup>

                    <FormGroup>
                        <Input onChange={this.handleChange} value={this.state.cnfrmPassword}
                            type="password" name="cnfrmPassword" id="cfrmpassword"
                            placeholder="Confirm Password" required />
                    </FormGroup>


                    <FormGroup className="text-right">
                        <Button style={{ color: 'aqua' }} onClick={this.handleSignup}>Register</Button>
                    </FormGroup>

                    <FormGroup>
                        <FormText inline>
                            Already  have an account
                    </FormText>
                        <Button color='link' onClick={() => window.location = '/'}>Login</Button>
                        {/* <Button color='link' onClick={()=> window.location = '/'}>Login</Button> */}

                    </FormGroup>
                </div>
            </Col >
        )
    }
}

export default Signup;