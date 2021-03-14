import React from 'react'

function Dropdown(){

    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="dropdown">
                        <button id="button1" className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                        Dropdown 
                        </button>
                        <div className="dropdown-menu">
                            <a href="#" className="dropdown-item">Link-1</a>
                            <a href="#" className="dropdown-item">Link-2</a>
                            <a href="#" className="dropdown-item">Link-3</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="dropdown">
                        <a id="button2" className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                        Dropdown Link
                        </a>
                        <div className="dropdown-menu">
                            <h6 className="dropdown-header">Cabeçalho do Dropdown</h6>
                            <a href="#" className="dropdown-item">Link-1</a>
                            <a href="#" className="dropdown-item">Link-2</a>
                            <a href="#" className="dropdown-item">Link-3</a>
                            <div className="dropdown-divider"></div>
                            <h6 className="dropdown-header">Cabeçalho do Dropdown</h6>
                            <a href="#" className="dropdown-item">Link separado</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown