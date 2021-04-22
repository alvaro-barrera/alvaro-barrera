import React from 'react';

class BadgeForm extends React.Component {

    handleClick = e => {
        // e.
    };
    render(){
        return(
            <div>
                <h1>Contacto</h1>
                <form action="">
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input 
                        name="name" 
                        placeholder="Tu nombre"
                        onChange={this.props.onChange} 
                        type="text" 
                        className="form-control"
                        value={this.props.formValues.name}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                        name="email" 
                        placeholder="Tu email"
                        onChange={this.props.onChange} 
                        type="email" 
                        className="form-control"
                        value={this.props.formValues.email}/>
                    </div>
                    <button type="button" onClick={this.handleClick} className="btn btn-primary">Enviar</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm;