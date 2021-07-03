
import React from 'react';
import MainNav from '../componenets/MainNav';
import SideMenu from '../componenets/SideMenu';


class ClientDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            client:null
        }
    }


    getClientsDetails(){
        const id = this.props.match.params.id;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer "+localStorage.getItem('token'));

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("http://localhost:8080/api/clients/list/"+id, requestOptions)
        .then(response => response.json())
        .then(result => this.setState({client:result}))
        .catch(error => console.log('error', error));
    }
    
    componentDidMount(){
        const id = this.props.match.params.id;



        this.getClientsDetails();
    }

    render() {
        return (
            <div>

                <div id="wrapper">

                    <SideMenu />

                    <div id="content-wrapper" className="d-flex flex-column">

                        <div id="content">

                            <MainNav />
                            <div className="container-fluid">

                                {
                                    this.state.client === null ?
                                    <div className="mt-5 pt-5">
                                        chargement...
                                    </div>
                                    :
                                    <div>
                                        <h1 className="h3 mb-4 text-gray-800">{this.state.client.societe}</h1>

                                        <div className="card">
                                            <div className="card-body">
                                                <table className="table">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <strong>Type Client</strong>
                                                            </td>
                                                            <td>{this.state.client.type_client}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Adresse</strong>
                                                            </td>
                                                            <td>{this.state.client.adresse}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Adresse</strong>
                                                            </td>
                                                            <td>{this.state.client.adresse}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Code Postal</strong>
                                                            </td>
                                                            <td>{this.state.client.code_postal}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Ville</strong>
                                                            </td>
                                                            <td>{this.state.client.ville}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Pays</strong>
                                                            </td>
                                                            <td>{this.state.client.pays}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Télephone</strong>
                                                            </td>
                                                            <td>{this.state.client.telephone}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Email</strong>
                                                            </td>
                                                            <td>{this.state.client.email}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Fax</strong>
                                                            </td>
                                                            <td>{this.state.client.fax}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Compte comnpay</strong>
                                                            </td>
                                                            <td>{this.state.client.compte_comnpay}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Key comnpay</strong>
                                                            </td>
                                                            <td>{this.state.client.key_comnpay}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Password</strong>
                                                            </td>
                                                            <td>{this.state.client.password}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Type comnpay</strong>
                                                            </td>
                                                            <td>{this.state.client.type_comnpay}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Api Key</strong>
                                                            </td>
                                                            <td>{this.state.client.api_key}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Num siret</strong>
                                                            </td>
                                                            <td>{this.state.client.num_siret}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Num Tva</strong>
                                                            </td>
                                                            <td>{this.state.client.num_tva}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Code fiscal</strong>
                                                            </td>
                                                            <td>{this.state.client.code_fiscal}</td>
                                                        </tr>
                                                        
                                                        


                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                }
 




                            </div>

                        </div>
                        <footer className="sticky-footer bg-white">
                            <div className="container my-auto">
                                <div className="copyright text-center my-auto">
                                    <span>Copyright &copy; Your Website 2020</span>
                                </div>
                            </div>
                        </footer>

                    </div>

                </div>
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>

                <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                <a className="btn btn-primary" href="login.html">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>





            </div>
        );
    }
}


export default ClientDetails;