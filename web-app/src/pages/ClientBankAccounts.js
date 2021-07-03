
import React from 'react';
import { Link } from 'react-router-dom';
import MainNav from '../componenets/MainNav';
import SideMenu from '../componenets/SideMenu';


class ClientBankAccounts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id:this.props.match.params.id,
            accounts:[
                {
                    id:15,
                c_date:"15/15/15",
                m_date:"15/15/15",
                compte_ComPay:"1549985656479",
                key_ComPay:"qd54sd45sd54sd5ds5ds",
                etat:"actif", 
                }

            ],

            add_compte_comnpay:"",
            add_key_comnpay:"",
            type_comnpay:"",

            isDisplayedAddModal : false
            

        }
    }
 

    componentDidMount() { 
    }

    toggleAddModal(){
        this.setState({
            isDisplayedAddModal : ! this.state.isDisplayedAddModal
        })
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
                                <label>Compte ComNPay</label>
                                <input type="text"  className="form-control" onChange={(e) => { this.setState({ add_compte_comnpay: e.target.value }) }} />
                            </div>
                            <div className="form-group">
                                <label>Key ComNPay</label>
                                <input type="text"  className="form-control" onChange={(e) => { this.setState({ add_key_comnpay: e.target.value }) }} />
                            </div>
                            <div className="form-group">
                                <label>Type ComNPay</label>
                                <select className="form-control" onChange={(e) => { this.setState({ type_comnpay: e.target.value }) }}>
                                    <option value="PROD">PROD</option>
                                    <option value="OMOLOGATION">OMOLOGATION</option>
                                    
                                </select>
                            </div>

                            <div className="form-group">
                                <button onClick={ ()=>{this.toggleAddModal()} }

                                
                                className="btn btn-success mr-3">Ajouter</button>
                                <button
                                 onClick={ ()=>{this.toggleAddModal()} }
                                className="btn btn-secondary">Annuler</button>
                                
                            </div>

                        </div>
                            
                    </div>:
                    <div></div>
                    }

                    <SideMenu />

                    <div id="content-wrapper" className="d-flex flex-column">

                        <div id="content">

                            <MainNav />
                            <div className="container-fluid">

                                <div className="row">
                                    <div className="col-6">
                                        <h1 className="h3 mb-4 text-gray-800">Comptes bancaires</h1>
                                        <h1 className="h3 mb-4 text-gray-800">Societé : {this.state.id}</h1>
                                
                                    </div>
                                    <div className="col-6 text-right text-left">
                                    <button onClick={()=>{

}}  className="btn btn-info btn-sm mt-5" onClick={ ()=>{this.toggleAddModal()} } >Ajouter un compte bancaire</button>
                                    </div>
                                    
                                </div> 

  

                                <hr />


                                <div className="card">
                                    <div className="card-body">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Date Création</th>
                                                    <th>Date Modification</th>
                                                    <th>Compte ComPay</th>
                                                    <th>Key ComPay</th> 
                                                    <th>Etat client</th>
                                                    <th>Actions</th>


                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.accounts.map((c) => {
                                                        return ( 
                                                             <tr>
                                                                 <td>
                                                                    { c.c_date }
                                                                 </td>
                                                                 <td>
                                                                 { c.m_date }
                                                                 </td>
                                                                 <td>
                                                                 { c.compte_ComPay }
                                                                 </td>
                                                                 <td>
                                                                 { c.key_ComPay }
                                                                 </td>
                                                                 <td>
                                                                 { c.etat }
                                                                 </td>
                                                                 <td>
                                                                    
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


export default ClientBankAccounts;