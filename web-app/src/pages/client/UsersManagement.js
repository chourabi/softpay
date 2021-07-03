
import React from 'react';
import { Link } from 'react-router-dom';
import MainNav from '../../componenets/MainNav';
import SideMenu from '../../componenets/SideMenu';


class UsersManagementPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isDisplayedAddModal: false,
            message: '',

            selectedEmail: '',

            clients: [ ],
            filtredClients: [ ]

        }
    }

    getListUsers() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ "chaineRecherche": "", "EtatClient": "Tous", "id_client": "016966" });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://www.softwebaveraa.com/COMNPAY_WS/V1/Get_liste_utilisateur", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                this.setState({
                    filtredClients: result,
                    clients: result,

                })
            })
            .catch(error => console.log('error', error));
    }

    componentDidMount() {
        this.getListUsers();
    }



    toggleAddModal() {
        this.setState({
            isDisplayedAddModal: false
        })
    }


    sendEmail() {
        // web service
        const email = this.state.selectedEmail;


    }




    render() {
        return (
            <div>

                <div id="wrapper">

                    {

                        this.state.isDisplayedAddModal === true ?
                            <div className="pop-add ">
                                <div className="block card-body">
                                    <div className="form-group">
                                        <label>Email:</label>
                                        <input value={this.state.selectedEmail} type="text" className="form-control" onChange={(e) => { this.setState({ selectedEmail: e.target.value }) }} />
                                    </div>


                                    <div className="form-group">
                                        <button onClick={() => { this.toggleAddModal() }} className="btn btn-success mr-3">Envoyer</button>
                                        <button onClick={() => { this.toggleAddModal() }} className="btn btn-secondary">Annuler</button>

                                    </div>

                                </div>

                            </div> :
                            <div></div>
                    }


                    <SideMenu />

                    <div id="content-wrapper" className="d-flex flex-column">

                        <div id="content">

                            <MainNav />
                            <div className="container-fluid">

                                <h1 className="h3 mb-4 text-gray-800">Gérer les utilisateur</h1>


                                <div className="row mb-3">
                                    <div className="col-sm-4">
                                        <input type="search" className="form-control" placeholder="Chercher un compte utilisateur" onChange={(e) => {
                                            const v = e.target.value;


                                            console.log(v);
                                            this.setState({
                                                filtredClients: this.state.clients.filter((c) => (c.nom + ' ' + c.prenom).indexOf(v) != -1)
                                            })





                                        }} />
                                    </div>

                                    <div className="col-sm-4">
                                        <select className="form-control" onChange={(e) => {
                                            const v = e.target.value;
                                            if (v != '-1') {


                                                // search for by id

                                                this.setState({
                                                    filtredClients: this.state.clients.filter((c) => c.etatcompte == v)
                                                })
                                            } else {
                                                this.setState({
                                                    filtredClients: this.state.clients
                                                })
                                            }


                                        }}>



                                            <option value="-1">Tous</option>
                                            <option value="1">utilisateur actifs</option>
                                            <option value="2">utilisateur inactifs</option>

                                        </select>
                                    </div>


                                    <div>
                                        <Link style={{ width: '100%' }} className="btn btn-info btn-sm" to="/client/users/add">Ajouter un compte</Link>
                                    </div>



                                </div>

                                {
                                    this.state.message !== '' ?
                                        <div className="row mb-3">
                                            <div className="col-sm-12">
                                                <div className="alert alert-success">
                                                    {this.state.message}
                                                </div>
                                            </div>

                                        </div> :
                                        <div></div>
                                }


                                <hr />


                                <div className="card">
                                    <div className="card-body">
                                        <table className="table table-responsive">
                                            <thead>
                                                <tr>
                                                    <th>Id utilisateur</th>
                                                    <th>Nom</th>
                                                    <th>Prénom</th>
                                                    <th>Address</th>
                                                    <th>Email</th>
                                                    <th>Tél</th>
                                                    <th>Login</th>
                                                    <th>Mot de passe</th>
                                                    <th>Date de création</th>
                                                    <th>Etat compte</th>
                                                    <th>Actions</th>


                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.filtredClients.map((c) => {
                                                        return (
                                                            <tr>
                                                                <td>{c.id_utilisateur}</td>
                                                                <td> {c.nom} </td>
                                                                <td> {c.prenom} </td>
                                                                <td> {c.adresse} </td>
                                                                <td> {c.email} </td>
                                                                <td> {c.num_tell} </td>
                                                                <td> {c.Login} </td>
                                                                <td> {c.motdepasse} </td>
                                                                <td> {c.datecreation} </td>

                                                                <td> {
                                                                    c.etatcompte === 1 ? 'désactiver' : 'activer'
                                                                } </td>
                                                                <td>


                                                                    <Link className="mr-2" to={'/client/users/edit/' + c.id_utilisateur}  >
                                                                        <span>
                                                                            <i class="fas fa-edit"></i>
                                                                        </span>
                                                                    </Link>

                                                                    <Link className="mr-2" to={'/client/users/transactions/' + c.id_utilisateur}  >
                                                                        <span>
                                                                            <i class="fas fa-history"></i>
                                                                        </span>
                                                                    </Link>
                                                                    <a className="mr-2">
                                                                        <span>

                                                                        </span>
                                                                    </a>





                                                                    <a className="mr-2" onClick={() => {
                                                                        this.setState({
                                                                            isDisplayedAddModal: true,
                                                                            selectedEmail: c.email
                                                                        })
                                                                    }}>
                                                                        <span>
                                                                            <i class="fas fa-paper-plane"></i>
                                                                        </span>
                                                                    </a>





                                                                    {
                                                                        c.etatcompte === 1 ?
                                                                            <button style={{ width: 90 }} className="btn btn-sm btn-success mr-2">
                                                                                activer

                                                                            </button> :


                                                                            <button style={{ width: 90 }} className="btn btn-sm btn-warning mr-2">

                                                                                desactiver
                                                                            </button>
                                                                    }







                                                                </td>


                                                            </tr>
                                                        );
                                                    })
                                                }

                                            </tbody>

                                        </table>
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






            </div>
        );
    }
}


export default UsersManagementPage;