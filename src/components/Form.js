import React from 'react'

export default class Form extends React.Component{
    render() {
        return(
            <div>
                <form onSubmit={this.props.getWeather}>
                    <input type="text" name="city" className="form-control" placeholder="Digite o nome de uma cidade" />
                    <input type="text" name="country" className="form-control"  placeholder="País..." />
                    <button className="btn btn-primary">Buscar</button>
                </form>
            </div>
        )
    }
}