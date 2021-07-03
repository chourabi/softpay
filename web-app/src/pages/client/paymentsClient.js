
import React from 'react';
import { Link } from 'react-router-dom';
import MainNav from '../../componenets/MainNav';
import SideMenu from '../../componenets/SideMenu';


class ClientsPayment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            amount:''

        }
    }



    updateView(newC){
        this.setState({
            amount:this.state.amount+newC
        })
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

                                <h1 className="h3 mb-4 text-gray-800"> Paiement</h1>





                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="text-center"> Veuillez saisir le montant de transaction </h3>

                                        <div className="row  m-auto" style={{ width: '50%' }}>

                                            <div className="col-sm-12">
                                                <input value={this.state.amount} className="form-control text-center" placeholder="Montant a payer" />
                                            </div>


                                            
                                                <div className="col-sm-4 mt-2">
                                                    <button onClick={ (e)=>{this.updateView('7')} } className="btn-outline-primary btn" style={{ width: '100%' }}>7</button>
                                                </div>
                                                <div className="col-sm-4 mt-2">
                                                    <button onClick={ (e)=>{this.updateView('8')} } className="btn-outline-primary btn" style={{ width: '100%' }}>8</button>
                                                </div>
                                                <div className="col-sm-4 mt-2">
                                                    <button onClick={ (e)=>{this.updateView('9')} } className="btn-outline-primary btn" style={{ width: '100%' }}>9</button>
                                                </div>
                                                
                                            
                                                <div className="col-sm-4 mt-2">
                                                    <button onClick={ (e)=>{this.updateView('4')} } className="btn-outline-primary btn" style={{ width: '100%' }}>4</button>
                                                </div>
                                                <div className="col-sm-4 mt-2">
                                                    <button onClick={ (e)=>{this.updateView('5')} } className="btn-outline-primary btn" style={{ width: '100%' }}>5</button>
                                                </div>
                                                <div className="col-sm-4 mt-2">
                                                    <button onClick={ (e)=>{this.updateView('6')} } className="btn-outline-primary btn" style={{ width: '100%' }}>6</button>
                                                </div>
                                                
                                            
                                                <div className="col-sm-4 mt-2">
                                                    <button onClick={ (e)=>{this.updateView('1')} } className="btn-outline-primary btn" style={{ width: '100%' }}>1</button>
                                                </div>
                                                <div className="col-sm-4 mt-2">
                                                    <button onClick={ (e)=>{this.updateView('2')} } className="btn-outline-primary btn" style={{ width: '100%' }}>2</button>
                                                </div>
                                                <div className="col-sm-4 mt-2">
                                                    <button onClick={ (e)=>{this.updateView('3')} } className="btn-outline-primary btn" style={{ width: '100%' }}>3</button>
                                                </div>
                                                
                                           
                                                
                                                <div className="col-sm-4 mt-2">
                                                    <button onClick={ (e)=>{this.updateView('0')} } className="btn-outline-primary btn" style={{ width: '100%' }}>0</button>
                                                </div>
                                                <div className="col-sm-4 mt-2">
                                                    <button onClick={ (e)=>{this.updateView('.')} } className="btn-outline-primary btn" style={{ width: '100%' }}>.</button>
                                                </div>

                                                <div className="col-sm-4 mt-2">
                                                    <button onClick={ (e)=>{
                                                        let value = this.state.amount;
                                                        let newValue = value.slice(0,-1);
                                                        this.setState({
                                                            amount:newValue
                                                        })

                                                    } } className="btn-outline-primary btn" style={{ width: '100%' }}>
                                                        <i class="fas fa-backspace"></i>
                                                    </button>
                                                </div> 
                                                
                                            
                                            


                                        </div>


                                        <div className="row m-auto w-50">
                                            <div className="col-sm-4">
                                                <p className="text-center mt-5">
                                                    <i class="fas fa-sms" style={{fontSize:56,color:'#ffeb3b'}}></i> <br/>
                                                    Paiement par sms
                                                </p>

                                            </div>
                                            <div className="col-sm-4">
                                                <p className="text-center mt-5">
                                                    
                                                    <i class="fas fa-envelope" style={{fontSize:56,color:'#2196f3'}}></i> <br/>
                                                    Paiement par E-mail
                                                </p>
                                            </div>
                                            <div className="col-sm-4">
                                                <p className="text-center mt-5"> 
                                                    <i class="fas fa-credit-card" style={{fontSize:56,color:'#2196f3'}}></i> <br/>
                                                    Paiement par carte bancaire
                                                </p>
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






            </div>
        );
    }
}


export default ClientsPayment;