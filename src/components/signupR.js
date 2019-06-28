import React, { Component } from 'react';
import firebase from '../config/firebase';
import { FormGroup, FormText, Col, Input, Button } from 'reactstrap';

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
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSignup() {
        const rgxemail = /^([a-zA-Z0-9_\.])+\@(([a-z]{5,10})+\.)+([a-z]{2,4})$/

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
                        <Input onChange={this.handleChange} value={this.state.fullName} type="text" name="fullName" placeholder="Full name" required />
                    </FormGroup>

                    <FormGroup style={{ color: 'aqua' }}>
                        <Input onChange={this.handleChange} value={this.state.email} type="email" name="email" id="email" placeholder="Email" required />
                    </FormGroup>
                    <FormGroup>
                        <Input onChange={this.handleChange} value={this.state.gender} type="text" name="gender" placeholder="Gender" required />
                    </FormGroup>
                    <FormGroup>
                        <Input onChange={this.handleChange} value={this.state.country} type="text" name="country" placeholder="Country" required />
                    </FormGroup>
                    <FormGroup>
                        <Input onChange={this.handleChange} value={this.state.city} type="text" name="city" placeholder="City" required />
                    </FormGroup>
                    <FormGroup>
                        <Input onChange={this.handleChange} value={this.state.age} type="number" name="age" placeholder="Age" required />
                    </FormGroup>




                    <FormGroup>
                        <Input onChange={this.handleChange} value={this.state.password} type="password" name="password" id="password" placeholder="Password" required />
                    </FormGroup>

                    <FormGroup>
                        <Input onChange={this.handleChange} value={this.state.cnfrmPassword} type="password" name="cnfrmPassword" id="cfrmpassword" placeholder="Confirm Password" required />
                    </FormGroup>


                    <FormGroup className="text-right">
                        <Button style={{ color: 'aqua' }} onClick={this.handleSignup}>Register</Button>
                        {/* //onClick={this.handleSignup} */}
                    </FormGroup>

                    <FormGroup>
                        <FormText inline>
                            Already  have an account
        </FormText>
                        <Button color='link' onClick={() => window.location = '/'}>Login</Button>
                        {/* <Button color='link' onClick={()=> window.location = '/'}>Login</Button> */}

                    </FormGroup>
                </div>
            </Col>
        )
    }
}

export default Signup;