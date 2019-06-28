import React, { Component } from 'react';
import firebase from '../config/firebase';
import { Button, Col, FormGroup, Input, FormText } from 'reactstrap';


class Login extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.path = firebase.database().ref().child('Project01');

    this.state = {
      email: '',
      password: '',
      emailError:'',
      passwordError:'',
      errorMessage:'',
    }
  }

  


  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox ? event.target.checked : event.target.value
    });
  };


  handleLogin(e) {
    if (this.state.email.toLocaleLowerCase() === 'parkingadmin@gmail.com' && this.state.password === 'password') {
      window.location = '/admindashboard/currentreservations';
      return
    }
    firebase.auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify(user.user));
        window.location.replace ('/dashboard')
      })

      .catch((e) => {
        let errorMessage = e.message;
        console.log(errorMessage)
        alert(errorMessage)
      })
  }


 




  render() {
    const divStyle = {
      margin: '0px 35px',
      backgroundColor:'#910063'
  };

    return (
      <div style={divStyle}>
        <Col sm={{ size: '10', offset: '1' }} md={{ size: '6', offset: '3' }}>

          <div style={{ margin: '10px auto', width: '80%' }}>
            <FormGroup>
              <h1 style={{  marginBottom: '30px', marginTop: '20px'
            ,color:'white' ,fontWeight:'bolder',textAlign:'center'}}>
                Login</h1>
              <Input onChange={this.handleChange} value={this.state.email}
                type="email" name="email" id="email" placeholder="Email" required />
            </FormGroup>
            <FormGroup>
              <Input onChange={this.handleChange} value={this.state.name}
                type="password" name="password" id="password" placeholder="Password"
                required />
              <div style={{ fontSize: 12, color: "red", fontWeight: 'bolder' }}>
              {this.state.emailError}
                        </div>


            </FormGroup>

              <FormGroup className="text-right">
                <Button onClick={this.handleLogin}>Login</Button>

              </FormGroup>
              <FormGroup>
                <FormText inline>
                  Don't have an account
            </FormText>
                <Button color='link' onClick={() => window.location = '/signup'}>
                  Register user</Button>

                <Button color='link' onClick={() => window.location = '/signup'}>
                  Register Restaurant</Button>


              </FormGroup>
          </div>
        </Col>

      </div>
        );
      }
    }
    
    
    
    export default Login;
