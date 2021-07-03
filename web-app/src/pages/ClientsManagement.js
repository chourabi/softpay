
import React from 'react';
import { Link } from 'react-router-dom';
import MainNav from '../componenets/MainNav';
import SideMenu from '../componenets/SideMenu';


class ClientsManagementPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "",
            clients: [
                {
                    id_client: "122233",
                    societe: "exmpl societe",
                    nom_commertial: "TUNX152",
                    id_franchise: "EXBU 1962",
                    id_boutique: "Bouti-1596",
                    type_client: "client libre", //1 client libre //2 client franchise boutique // 3 client erpos
                    adresse: "exmple 153 rue tet",
                    code_postal: "15633",
                    ville: "Tunisia",
                    pays: "Tunisia",
                    telephone: "15663366",
                    email: "email@test.com",
                    fax: "+216 99663322",
                    compte_comnpay: "1235665962626",
                    key_comnpay: "26622995ssdsd",
                    mot_de_passe: "161616",
                    dAte_creation: "15/15/21",
                    Etat_client: 1, /// 1 en attent //2 actif //3 inactif
                    Type_comnpay: "WOW",
                    sApikey: "hello world",
                    num_siret: "152259966",
                    num_tva: "helloworld",
                    c_fiscal: "1515151515"


                },
                {
                    id_client: "25966",
                    societe: "exmpl societe",
                    nom_commertial: "TUNX152",
                    id_franchise: "EXBU 1962",
                    id_boutique: "Bouti-1596",
                    type_client: "client libre", //1 client libre //2 client franchise boutique // 3 client erpos
                    adresse: "exmple 153 rue tet",
                    code_postal: "15633",
                    ville: "Tunisia",
                    pays: "Tunisia",
                    telephone: "15663366",
                    email: "email@test.com",
                    fax: "+216 99663322",
                    compte_comnpay: "1235665962626",
                    key_comnpay: "26622995ssdsd",
                    mot_de_passe: "161616",
                    dAte_creation: "15/15/21",
                    Etat_client: 2, /// 1 en attent //2 actif //3 inactif
                    Type_comnpay: "WOW",
                    sApikey: "hello world",
                    num_siret: "152259966",
                    num_tva: "helloworld",
                    c_fiscal: "1515151515"


                }
            ],
            filtredClients: [
                {
                    id_client: "122233",
                    societe: "exmpl societe",
                    nom_commertial: "TUNX152",
                    id_franchise: "EXBU 1962",
                    id_boutique: "Bouti-1596",
                    type_client: "client libre", //1 client libre //2 client franchise boutique // 3 client erpos
                    adresse: "exmple 153 rue tet",
                    code_postal: "15633",
                    ville: "Tunisia",
                    pays: "Tunisia",
                    telephone: "15663366",
                    email: "email@test.com",
                    fax: "+216 99663322",
                    compte_comnpay: "1235665962626",
                    key_comnpay: "26622995ssdsd",
                    mot_de_passe: "161616",
                    dAte_creation: "15/15/21",
                    Etat_client: 1, /// 1 en attent //2 actif //3 inactif
                    Type_comnpay: "WOW",
                    sApikey: "hello world",
                    num_siret: "152259966",
                    num_tva: "helloworld",
                    c_fiscal: "1515151515"


                },
                {
                    id_client: "25966",
                    societe: "exmpl societe",
                    nom_commertial: "TUNX152",
                    id_franchise: "EXBU 1962",
                    id_boutique: "Bouti-1596",
                    type_client: "client libre", //1 client libre //2 client franchise boutique // 3 client erpos
                    adresse: "exmple 153 rue tet",
                    code_postal: "15633",
                    ville: "Tunisia",
                    pays: "Tunisia",
                    telephone: "15663366",
                    email: "email@test.com",
                    fax: "+216 99663322",
                    compte_comnpay: "1235665962626",
                    key_comnpay: "26622995ssdsd",
                    mot_de_passe: "161616",
                    dAte_creation: "15/15/21",
                    Etat_client: 2, /// 1 en attent //2 actif //3 inactif
                    Type_comnpay: "WOW",
                    sApikey: "hello world",
                    num_siret: "152259966",
                    num_tva: "helloworld",
                    c_fiscal: "1515151515"


                }
            ],

            isDisplayedAddModal: true

        }
    }




    getListClients() {
        /*var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer "+window.localStorage.getItem('token'));


        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/clients/list", requestOptions)
            .then(response => response.json())
            .then((result) =>{
                
                this.setState({clients:result})
            } )
            .catch(error => console.log('error', error));*/
    }

    componentDidMount() {
        this.getListClients();
    }


    deleteClient(id) {

        if (window.confirm('voulez vous craiment supprimez ce client ?')) {
            /*var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", "Bearer " + window.localStorage.getItem('token'));


            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch("http://localhost:8080/api/clients/delete/" + id, requestOptions)
                //.then(response => response.json())
                .then((result) => {


                    this.getListClients();

                })
                .catch(error => console.log('error', error));*/

            this.setState({ message: "client supprmiée avec succés" })
        }

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

                                



                                <h1 className="h3 mb-4 text-gray-800">Gestion des clients</h1>


                                <div className="row mb-3">
                                    <div className="col-sm-4">
                                        <input type="search" className="form-control" placeholder="Chercher un compte client" onChange={(e) => {
                                            const v = e.target.value;

                                            // search for by id

                                            this.setState({
                                                filtredClients: this.state.clients.filter((c) => c.id_client.indexOf(v) != -1)
                                            })


                                        }} />
                                    </div>

                                    <div className="col-sm-4">
                                        <select className="form-control" onChange={(e) => {
                                            const v = e.target.value;
                                            if (v != '-1') {


                                                // search for by id

                                                this.setState({
                                                    filtredClients: this.state.clients.filter((c) => c.Etat_client == v)
                                                })
                                            } else {
                                                this.setState({
                                                    filtredClients: this.state.clients
                                                })
                                            }


                                        }} >
                                            <option value="-1">Tous</option>
                                            <option value="1">Clients en attentes</option>
                                            <option value="2">Clients actifs</option>
                                            <option value="3">Client inactifs</option>

                                        </select>
                                    </div>

                                    <div>
                                        <Link style={{ width: '100%' }} className="btn btn-info btn-sm" to="/admin/clients/add">Ajouter un client</Link>
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
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>ID Client</th>
                                                    <th>Date Création</th>
                                                    <th>Societe</th>
                                                    <th>Address</th>
                                                    <th>Email</th>
                                                    <th>Tél</th>
                                                    <th>Etat client</th>
                                                    <th>Actions</th>


                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.filtredClients.map((c) => {
                                                        return (
                                                            <tr>
                                                                <td>{c.id_client}</td>
                                                                <td> {c.dAte_creation} </td>
                                                                <td> {c.societe} </td>
                                                                <td> {c.adresse} </td>
                                                                <td> {c.email} </td>
                                                                <td> {c.telephone} </td>
                                                                <td> {
                                                                    c.Etat_client === 1 ? 'désactiver' : 'activer'
                                                                } </td>
                                                                <td>





                                                                    {
                                                                        c.Etat_client === 1 ?
                                                                            <button style={{ width: 90 }} className="btn btn-sm btn-success mr-2">
                                                                                activer

                                                                            </button> : <button style={{ width: 90 }} className="btn btn-sm btn-warning mr-2">
                                                                                désactiver

                                                                            </button>
                                                                    }


                                                                    <Link to={'/admin/clients/accounts/' + c.id_client} className="btn btn-sm btn-primary mr-2">
                                                                        <i class="fas fa-eye"></i>
                                                                        Comptes boncaires
                                                                    </Link>


                                                                    <Link to={'/admin/clients/edit/' + c.id_client} className="btn btn-sm btn-primary mr-2">
                                                                        <i class="fas fa-edit"></i>
                                                                        modifier
                                                                    </Link>


                                                                    <button className="btn btn-sm btn-danger" onClick={() => {
                                                                        this.deleteClient(c.id_client)
                                                                    }}>
                                                                        <i class="fas fa-trash"></i>
                                                                        supprimer
                                                                    </button>

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


export default ClientsManagementPage;