
import React from 'react';
import { Link } from 'react-router-dom'; 
import MainNav from '../../componenets/MainNav';
import SideMenu from '../../componenets/SideMenu';


class EditNewClient extends React.Component {
    constructor(props) {
        super(props)
        this.state = {  
            nom:'test',
            prenom:'test',
            adresse:'hi rue exmple',
            email:'test@test.test',
            telephone:'99663333',
            mot_de_passe:'',
            c_mot_de_passe:'',
            

        }
    }


    componentDidMount(){
        // 1 call server

        // 2 fetch user data 
    }


    createClient() {
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


 




    render() {
        return (
            <div>

                <div id="wrapper">

                    <SideMenu />

                    <div id="content-wrapper" className="d-flex flex-column">

                        <div id="content">

                            <MainNav />
                            <div className="container-fluid">

                                <h1 className="h3 mb-4 text-gray-800">Modifier un utilisateur</h1>

                                <Link className="btn btn-info btn-sm" to="/client/users">Retour</Link>

                                <hr />

                                <div className="card" >
                                    <div className="card-body">

                                    
                                        
                                        

                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Nom</label>
                                                    <input type="text" value={this.state.nom} className="form-control" onChange={(e) => { this.setState({ nom: e.target.value }) }} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Prénom</label>
                                                    <input type="text" value={this.state.prenom}  className="form-control" onChange={(e) => { this.setState({ prenom: e.target.value }) }} />
                                                </div>
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <label>Adresse</label>
                                                    <input type="text" value={this.state.adresse} className="form-control" onChange={(e) => { this.setState({ adresse: e.target.value }) }} />
                                                </div>
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Email</label>
                                                    <input type="text" value={this.state.email} className="form-control" onChange={(e) => { this.setState({ email: e.target.value }) }} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Télephone</label>
                                                    <input type="text" value={ this.state.telephone } className="form-control" onChange={(e) => { this.setState({ telephone: e.target.value }) }} />
                                                </div>
                                            </div>

                                        </div>

                                        
 

                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Mot de passe</label>
                                                    <input type="text" className="form-control" onChange={(e) => { this.setState({ mot_de_passe: e.target.value }) }} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Confirmer mot de passe</label>
                                                    <input type="text" className="form-control" onChange={(e) => { this.setState({ c_mot_de_passe: e.target.value }) }} />
                                                </div>
                                            </div>

                                        </div>


                                        
  

                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <button className="btn btn-primary btn-block mt-3" onClick={() => { this.createClient() }} >Sauvgarder</button>
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


export default EditNewClient;