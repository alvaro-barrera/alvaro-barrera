import React from 'react';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import './styles/BadgeNew.css';
const firstName =  'Álvaro';
const lastName =  'Barrera';
class BadgeNew extends React.Component { 
    state = {
        form: {
            name:'',
            email:'',
        }
    };
    handleChange = e => {
        // const nextForm = this.state.form
        // nextForm[e.target.name] = e.target.value
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                        <Badge 
                        firstName={firstName} 
                        lastName={lastName} 
                        ></Badge>
                        </div>
                        <div className="col-md-6">
                            <BadgeForm
                            onChange={this.handleChange}
                            formValues={this.state.form}
                            ></BadgeForm>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew;