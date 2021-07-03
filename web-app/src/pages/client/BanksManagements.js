
import React from 'react';
import { Link } from 'react-router-dom';
import MainNav from '../../componenets/MainNav';
import SideMenu from '../../componenets/SideMenu';


class BankManagements extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            message:'',

            accounts: [ 
                {
                    id_client:'15996',
                    dAte_creation :'2020-05-16',
                    Date_modification :'2020-05-16',
                    compte_comnpay : '15154949zdz',
                    key_comnpay :'15qs--qsqs',
                    Etat_compte : 1,
                    Id_carte :'1515156565659',
                    Type_comnpay :'1566595',

                },
                {
                    id_client:'15996',
                    dAte_creation :'2020-05-16',
                    Date_modification :'2020-05-16',
                    compte_comnpay : '18899999',
                    key_comnpay :'15qs--qsqs',
                    Etat_compte : 2,
                    Id_carte :'1515156565659',
                    Type_comnpay :'1566595',

                },
                
            ],
            filtredAccounts: [
                {
                    id_client:'15996',
                    dAte_creation :'2020-05-16',
                    Date_modification :'2020-05-16',
                    compte_comnpay : '15154949zdz',
                    key_comnpay :'15qs--qsqs',
                    Etat_compte : 1,
                    Id_carte :'1515156565659',
                    Type_comnpay :'1566595',

                },
                {
                    id_client:'15996',
                    dAte_creation :'2020-05-16',
                    Date_modification :'2020-05-16',
                    compte_comnpay : '18899999',
                    key_comnpay :'15qs--qsqs',
                    Etat_compte : 2,
                    Id_carte :'1515156565659',
                    Type_comnpay :'1566595',

                },
                
            ]

        }
    }

    getListUsers() {
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
        this.getListUsers();
    }



    toggleAddModal(){
        this.setState({
            isDisplayedAddModal:false
        })
    }


    sendEmail(){
        // web service
        const email = this.state.selectedEmail;

        
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

                                <h1 className="h3 mb-4 text-gray-800">Gérer les comptes bancaires</h1>


                                <div className="row mb-3">
                                    <div className="col-sm-4">
                                        <input type="search" className="form-control" placeholder="Chercher un compte utilisateur" onChange={(e) => {
                                            const v = e.target.value;


                                            console.log(v);
                                            this.setState({
                                                filtredAccounts: this.state.accounts.filter((c) => (c.compte_comnpay ).indexOf(v) != -1)
                                            })





                                        }} />
                                    </div>

                                    <div className="col-sm-4">
                                        <select className="form-control" onChange={(e) => {
                                            const v = e.target.value;
                                            if (v != '-1') {


                                                // search for by id

                                                this.setState({
                                                    filtredAccounts: this.state.accounts.filter((c) => c.Etat_compte == v)
                                                })
                                            } else {
                                                this.setState({
                                                    filtredAccounts: this.state.accounts
                                                })
                                            }


                                        }}>



                                            <option value="-1">Tous</option>
                                            <option value="1">Compte actifs</option>
                                            <option value="2">Compte inactifs</option>

                                        </select>
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
                                                    <th>Date de création</th>
                                                    <th>Compte ComnPay</th>
                                                    <th>Key ComnPay</th>
                                                    <th>Type ComnPay</th>
                                                    <th>Etat</th> 
                                                    <th>Actions</th>


                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.filtredAccounts.map((c) => {
                                                        return (
                                                            <tr>
                                                                <td>{c.dAte_creation}</td>
                                                                <td> {c.compte_comnpay} </td>
                                                                <td> {c.key_comnpay} </td>
                                                                <td> {c.Type_comnpay} </td>
                                                                
                                                                <td> {
                                                                    c.Etat_compte === 1 ? 'actif' : 'désactivé'
                                                                } </td>
                                                                 

                                                                
                                                                <td> 

                                                                    {
                                                                        c.Etat_compte === 1 ?
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


export default BankManagements;