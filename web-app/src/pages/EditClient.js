
import React from 'react';
import { Link } from 'react-router-dom';
import MainNav from '../componenets/MainNav';
import SideMenu from '../componenets/SideMenu';


class ClientsEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            societe: "",
            type_client: "",
            adresse: "",
            code_postal: "",
            ville: "",
            pays: "",
            telephone: "",
            email: "",
            fax: "",
            compte_comnpay: "",
            key_comnpay: "",
            mot_de_passe: "",
            type_comnpay: "",
            etat_client: "",
            sApikey: "",
            num_siret: "",
            num_tva: "",
            c_fiscal: "",

 


        }
    }


    updateClient() {
        var urlENDPOITN = "";

        /*var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer "+localStorage.getItem('token'));

        var raw = JSON.stringify(this.state);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(urlENDPOITN, requestOptions)
            .then(response => response.json())
            .then(result =>{
                if (result.id) {
                    // success
                    this.props.history.push('/admin/clients')
                }
            })
            .catch(error => console.log('error', error));*/

            console.log(this.state);
    }

    
    getClientInformation(){
        const id = this.props.match.params.id;

        console.log(id); 

        // get client by id == 
        // update state
    }

    componentDidMount(){
        this.getClientInformation();
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

                                <h1 className="h3 mb-4 text-gray-800">Modifier un client</h1>

                                <Link className="btn btn-info btn-sm" to="/admin/clients">Retour</Link>

                                <hr />

                                <div className="card" >
                                    <div className="card-body">

                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Societe</label>
                                                    <input type="text" className="form-control" onChange={(e) => { this.setState({ societe: e.target.value }) }} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Type client</label>
                                                    <input type="text"  className="form-control" onChange={(e) => { this.setState({ type_client: e.target.value }) }} />
                                                </div>
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <label>Adresse</label>
                                                    <input type="text" className="form-control" onChange={(e) => { this.setState({ adresse: e.target.value }) }} />
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <label>Code postal</label>
                                                    <input type="text" className="form-control" onChange={(e) => { this.setState({ code_postal: e.target.value }) }} />
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <label>Ville</label>
                                                    <input type="text" className="form-control" onChange={(e) => { this.setState({ ville: e.target.value }) }} />
                                                </div>
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Pays</label>
                                                    <input type="text" className="form-control" onChange={(e) => { this.setState({ pays: e.target.value }) }} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Télephone</label>
                                                    <input type="text" className="form-control" onChange={(e) => { this.setState({ telephone: e.target.value }) }} />
                                                </div>
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Email</label>
                                                    <input type="text" className="form-control" onChange={(e) => { this.setState({ email: e.target.value }) }} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Fax</label>
                                                    <input type="text" className="form-control" onChange={(e) => { this.setState({ fax: e.target.value }) }} />
                                                </div>
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Compte comnpay</label>
                                                    <input type="text" className="form-control" onChange={(e) => { this.setState({ compte_comnpay: e.target.value }) }} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Key comnpay</label>
                                                    <input type="text" className="form-control" onChange={(e) => { this.setState({ key_comnpay: e.target.value }) }} />
                                                </div>
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>password</label>
                                                    <input type="text" className="form-control" onChange={(e) => { this.setState({ mot_de_passe: e.target.value }) }} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Type comnpay</label>
                                                    <input type="text" className="form-control" onChange={(e) => { this.setState({ type_comnpay: e.target.value }) }} />
                                                </div>
                                            </div>

                                        </div>


                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Etat client</label>
                                                    <input type="text" className="form-control" onChange={(e) => { this.setState({ etat_client: e.target.value }) }} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Api key</label>
                                                    <input type="text" className="form-control" onChange={(e) => { this.setState({ sApikey: e.target.value }) }} />
                                                </div>
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Num siret</label>
                                                    <input disabled={true} type="text" className="form-control" onChange={(e) => { this.setState({ num_siret: e.target.value }) }} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Num TVA</label>
                                                    <input type="text" className="form-control" onChange={(e) => { this.setState({ num_tva: e.target.value }) }} />
                                                </div>
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <label>Code fiscal</label>
                                                    <input type="text" className="form-control" onChange={(e) => { this.setState({ c_fiscal: e.target.value }) }} />
                                                </div>
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <button className="btn btn-primary btn-block mt-3" onClick={() => { this.updateClient() }} >MODIFIER</button>
                                                </div>
                                            </div>

                                        </div>



                                    </div>
                                </div>



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


export default ClientsEdit;