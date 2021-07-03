
import React from 'react';
import { Link } from 'react-router-dom';
import MainNav from '../../componenets/MainNav';
import SideMenu from '../../componenets/SideMenu';


class ClientTransactionsHistory extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            message:'',
            slectedDate:'2021-06-28',
            transactions:[
                {
                    ProductLabel:'hello',
                    ProductReference:'test-ref-15',
                    Amount:'15,8$',
                    TransactionRef:'test-ref-15',
                    LinkID:'156-sdsd',
                    status: 0, // 0 1,
                    BeginDate : "2021-06-28",
                    EndDate :'15/15/15',
                    sEmai: 'test@email.com',
                    etat: 'some state' ,
                    User : '151599',
                    Id_user: '151599',
                    id_franchise: '151515',
                    id_boutique :'1515996' ,
                    sTell: '99663322',
                    sType_paiement :'1548896',
                    Nom : 'hello',
                    Prenom :'world',
                    Motif :'1561-qdqd',
                
                },
                {
                    ProductLabel:'hello',
                    ProductReference:'test-ref-15',
                    Amount:'15,8$',
                    TransactionRef:'test-ref-15',
                    LinkID:'156-sdsd',
                    status: 0, // 0 1,
                    BeginDate : "2021-06-25",
                    EndDate :'15/15/15',
                    sEmai: 'test@email.com',
                    etat: 'some state' ,
                    User : '151599',
                    Id_user: '151599',
                    id_franchise: '151515',
                    id_boutique :'1515996' ,
                    sTell: '99663322',
                    sType_paiement :'1548896',
                    Nom : 'hello',
                    Prenom :'world',
                    Motif :'1561-qdqd',
                
                },
                {
                    ProductLabel:'hello',
                    ProductReference:'test-ref-15',
                    Amount:'15,8$',
                    TransactionRef:'test-ref-15',
                    LinkID:'156-sdsd',
                    status: 0, // 0 1,
                    BeginDate : "2021-05-20",
                    EndDate :'15/15/15',
                    sEmai: 'test@email.com',
                    etat: 'some state' ,
                    User : '151599',
                    Id_user: '151599',
                    id_franchise: '151515',
                    id_boutique :'1515996' ,
                    sTell: '99663322',
                    sType_paiement :'1548896',
                    Nom : 'hello',
                    Prenom :'world',
                    Motif :'1561-qdqd',
                
                },
                
            ]
            ,
            filtredTransactions:[
                {
                    ProductLabel:'hello',
                    ProductReference:'test-ref-15',
                    Amount:'15,8$',
                    TransactionRef:'test-ref-15',
                    LinkID:'156-sdsd',
                    status: 0, // 0 1,
                    BeginDate : "2021-06-28",
                    EndDate :'15/15/15',
                    sEmai: 'test@email.com',
                    etat: 'some state' ,
                    User : '151599',
                    Id_user: '151599',
                    id_franchise: '151515',
                    id_boutique :'1515996' ,
                    sTell: '99663322',
                    sType_paiement :'1548896',
                    Nom : 'hello',
                    Prenom :'world',
                    Motif :'1561-qdqd',
                
                },
                {
                    ProductLabel:'hello',
                    ProductReference:'test-ref-15',
                    Amount:'15,8$',
                    TransactionRef:'test-ref-15',
                    LinkID:'156-sdsd',
                    status: 0, // 0 1,
                    BeginDate : "2021-06-25",
                    EndDate :'15/15/15',
                    sEmai: 'test@email.com',
                    etat: 'some state' ,
                    User : '151599',
                    Id_user: '151599',
                    id_franchise: '151515',
                    id_boutique :'1515996' ,
                    sTell: '99663322',
                    sType_paiement :'1548896',
                    Nom : 'hello',
                    Prenom :'world',
                    Motif :'1561-qdqd',
                
                },
                {
                    ProductLabel:'hello',
                    ProductReference:'test-ref-15',
                    Amount:'15,8$',
                    TransactionRef:'test-ref-15',
                    LinkID:'156-sdsd',
                    status: 0, // 0 1,
                    BeginDate : "2021-05-20",
                    EndDate :'15/15/15',
                    sEmai: 'test@email.com',
                    etat: 'some state' ,
                    User : '151599',
                    Id_user: '151599',
                    id_franchise: '151515',
                    id_boutique :'1515996' ,
                    sTell: '99663322',
                    sType_paiement :'1548896',
                    Nom : 'hello',
                    Prenom :'world',
                    Motif :'1561-qdqd',
                
                },
            ]
            
        }
    }

    getTransactionsList() {
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
        this.getTransactionsList();
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

                                <h1 className="h3 mb-4 text-gray-800">Historique des transactions</h1>


                                <div className="row mb-3">
                                    <div className="col-sm-3">
                                        <input value= { this.state.slectedDate}  type="date" className="form-control" placeholder="Chercher un compte utilisateur" onChange={(e) => {
                                            const v = e.target.value;

                                             
                                                console.log(v);
                                                this.setState({
                                                    slectedDate:v,
                                                    filtredTransactions: this.state.transactions.filter((c) => c.BeginDate == v )
                                                })
    

                                             


                                        }} />
                                    </div>

                                    <div className="col-sm-3">
                                        <select className="form-control"  onChange={(e) => {
                                            const v = e.target.value;
                                            if (v != '-1') {


                                                // search for by id

                                                this.setState({
                                                    filtredTransactions: this.state.transactions.filter((c) => c.status == v)
                                                })
                                            } else {
                                                this.setState({
                                                    filtredTransactions: this.state.transactions
                                                })
                                            }


                                        }}>



                                            <option value="-1">Tous</option> 
                                            <option value="0">transactions réussite</option>
                                            <option value="1">transactions en attente</option>

                                        </select>
                                    </div>

                                    <div className="col-sm-3">
                                        <select className="form-control"  onChange={(e) => {
                                            const v = e.target.value;
                                            if (v != '-1') {


                                                // search for by id

                                                switch (v) {
                                                    case '5': // avant hier

                                                        const today = new Date();

                                                        const currentMonth = today.getMonth()+1;

                                                        if (currentMonth >= 1  && currentMonth <= 3  ) {
                                                            this.setState({
                                                                filtredTransactions: this.state.transactions.filter((c) => 
                                                                
                                                                (new Date(c.BeginDate).getMonth() >= 0 && new Date(c.BeginDate).getMonth() <= 3    )
                                                                )
                                                            })
                                                        }else if (currentMonth >= 4  && currentMonth <= 6 ) {
                                                            this.setState({
                                                                filtredTransactions: this.state.transactions.filter((c) => 
                                                                
                                                                (new Date(c.BeginDate).getMonth() >= 3 && new Date(c.BeginDate).getMonth() <= 5    )
                                                                )
                                                            })
                                                        }else if (currentMonth >= 7  && currentMonth <= 9 ) {
                                                            this.setState({
                                                                filtredTransactions: this.state.transactions.filter((c) => 
                                                                
                                                                (new Date(c.BeginDate).getMonth() >= 6 && new Date(c.BeginDate).getMonth() <= 8    )
                                                                )
                                                            })
                                                        }else if (currentMonth >= 10  && currentMonth <= 12 ) {
                                                            this.setState({
                                                                filtredTransactions: this.state.transactions.filter((c) => 
                                                                
                                                                (new Date(c.BeginDate).getMonth() >= 9 && new Date(c.BeginDate).getMonth() <= 11    )
                                                                )
                                                            })
                                                        }


                                                       
                                                        
                                                        
                                                        break;

                                                        
                                                
                                                    default:

                                                        this.setState({
                                                            filtredTransactions: this.state.transactions
                                                        })
                                                        break;
                                                }
                                                
                                            } else {
                                                this.setState({
                                                    filtredTransactions: this.state.transactions
                                                })
                                            }


                                        }}>



                                            <option value="-1">Tous</option> 
                                            <option value="0">Avant hier</option>
                                            <option value="1">Hier</option>
                                            <option value="2">Aujourd'hui</option>
                                            <option value="3">Semaine en cours</option>
                                            <option value="4">Mois en cours</option>
                                            <option value="5">Trimestre en cours</option>
                                            <option value="6">Année en cours</option> 

                                        </select>
                                    </div>
 

                                     



                                </div>

                                {
                                    this.state.message !== '' ?
                                    <div className="row mb-3">
                                    <div className="col-sm-12">
                                        <div className="alert alert-success">
                                            { this.state.message }
                                        </div>
                                    </div>

                                </div>:
                                <div></div>
                                }


                                <hr />


                                <div className="card">
                                    <div className="card-body">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Date</th>
                                                    <th>Transaction ref</th>
                                                    <th>Montant</th>
                                                    <th>Nom</th>
                                                    <th>Email</th>
                                                    <th>Tél</th>
                                                    <th>Etat</th>
                                                    <th>Motif</th>
                                                    <th>Type de paiement</th> 


                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                    this.state.filtredTransactions.map((c) => {
                                                        return (
                                                            <tr>
                                                                <td>{c.BeginDate}</td>
                                                                <td> {c.ProductReference} </td>
                                                                <td> {c.Amount} </td>
                                                                <td> {c.Nom} </td>
                                                                <td> {c.sEmai} </td>
                                                                <td> {c.sTell} </td>
                                                                <td> {
                                                                    c.status === 0 ? 'transactions réussite' : 'transactions en attente'
                                                                } </td>


                                                                <td> {c.Motif} </td>
                                                                <td> {c.sType_paiement} </td>  

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


export default ClientTransactionsHistory;