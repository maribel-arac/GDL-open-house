import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import './SignInForm.css';

class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
            

                <div className="FormField text-center">
                    <label className="FormField__Label" htmlFor="email">Email</label>
                    <input type="email" id="email" className="FormField__Input text-center" placeholder="organa@dominio.com" name="email" value={this.state.email} onChange={this.handleChange} />
                </div>
 
                <div className="FormField text-center">
                    <label className="FormField__Label" htmlFor="password">Contraseña</label>
                    <input type="password" id="password" className="FormField__Input"  name="password" value={this.state.password} onChange={this.handleChange} />
                </div>

                <div class="container">
                      <div class="row">
                        <div class="col align-self-start">
                        </div>
                        <div class="col align-self-center">
                          <div className="FormField FormField__Button mr-20 text-center ">
                                <NavLink className="nav-menu__link" exact to="/">Ingresar</NavLink>
                            </div>
                        </div>
                        <div class="col align-self-end">
                        </div>
                      </div>
                    </div>
                
            </form>
        </div>
        );
    }
}

export default SignInForm;