
import React from 'react';
import { Link } from 'react-router-dom';


class SignInPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            messageError: "",
            didChooseClient: false,
            identity: null, // admin 0 , client 1 default null,,
            mailingModal:false
        }
    }


    componentDidMount() {
        if (localStorage.getItem('token') != null) {
            this.props.history.push('/home');
        }
    }


    authUser() {
        // test if state.identity === 0 or 1
        localStorage.setItem("identity",this.state.identity); 

        if (this.state.identity == '1') {
            // show mailing modal
            if (localStorage.getItem('setemail') ==='OK' ) {
                window.location = "/home";
            }else{
                this.setState({
                    mailingModal : true
                })
            }
        } else {
            window.location = "/home";
        }
    }



    authClient(){
        localStorage.setItem('setemail','OK');
        window.location = "/home";
    }


    toggleAddModal(){
        this.setState({
            mailingModal : true
        })
    }


    render() {
        return (

            <div className="container">


                <div className="row justify-content-center">

                    <div className="col-xl-10 col-lg-12 col-md-9">

                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <div className="row">

                                    <div className="col-lg-12">
                                        {
                                            this.state.mailingModal === false ?
                                            <div className="p-5">
                                            <div className="text-center">
                                                <img src="https://www.farojob.net/wp-content/uploads/2019/08/Softavera.png" width="250" />
                                                <h1 className="h4 text-gray-900 mb-4">
                                                    {
                                                        this.state.didChooseClient === false ? 'Bonjour !' : 'Connexion !'
                                                        
                                                    }
                                                </h1>
                                            </div>


                                            {
                                                this.state.didChooseClient === false ?
                                                    <div>


                                                        <button onClick={
                                                            ()=>{
                                                                this.setState({
                                                                    identity: 0,
                                                                    didChooseClient : true
                                                                })
                                                            }
                                                        }   className="btn btn-primary btn-user btn-block">
                                                            ADMINISTRATEUR
                                                        </button>
                                                        <button onClick={
                                                            ()=>{
                                                                this.setState({
                                                                    identity: 1,
                                                                    didChooseClient : true
                                                                })
                                                            }
                                                        }  className="btn btn-secondary btn-user btn-block">
                                                            CLIENT
                                                        </button>
                                                        



                                                    </div> :
                                                    <div>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control form-control-user"
                                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                                placeholder="nom d'utilisateur" value={this.state.username} onChange={(e) => { this.setState({ username: e.target.value }) }} />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="password" className="form-control form-control-user"
                                                                id="exampleInputPassword" placeholder="Mot de passe" onChange={(e) => { this.setState({ password: e.target.value }) }} />
                                                        </div>
                                                        <button onClick={(e) => { this.authUser() }} type="submit" className="btn btn-primary btn-user btn-block">
                                                            Se connecter
                                                        </button>

                                                        {
                                                            this.state.messageError != '' ?
                                                                <div className="form-group my-2" >
                                                                    <div className="alert alert-warning">
                                                                        {this.state.messageError}
                                                                    </div>
                                                                </div>
                                                                :
                                                                <div></div>
                                                        }
                                                    </div>

                                            }







                                        </div>
                                        :

                                        <div className="p-5">
                                            <div className="text-center">
                                                <img src="https://www.farojob.net/wp-content/uploads/2019/08/Softavera.png" width="250" />
                                                <h1 className="h4 text-gray-900 mb-4">
                                                    {
                                                        this.state.didChooseClient === false ? 'Bonjour !' : 'Connexion !'
                                                        
                                                    }
                                                </h1>
                                            </div>


                                            <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="form-group">
                                                            <label>Email</label>
                                                            <input type="text" className="form-control form-control-user"     />
                                                        </div>
                                                    </div>
                                            </div>
                                            <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="text-danger text-center">
                                                             Serveur émission (SMTP)
                                                        </div>
                                                    </div>
                                            </div>
                                            <div className="row">
                                                    <div className="col-sm-10">
                                                        <div className="form-group">
                                                            <label>Serveur</label>
                                                            <input type="text" className="form-control form-control-user"     />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-2">
                                                        <div className="form-group">
                                                            <label>Port</label>
                                                            <input type="text" className="form-control form-control-user"     />
                                                        </div>
                                                    </div>
                                                    
                                            </div>
                                            <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="form-group">
                                                            <label>Mot de passe session</label>
                                                            <input type="password" className="form-control form-control-user"     />
                                                        </div>
                                                    </div>
                                            </div>

                                            <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="form-group">
                                                            <label>utiliser une connexion sécurisé</label>
                                                            <br/>
                                                            <input checked={true}  type="radio" name="sec"   />
                                                            <label  className="mr-5">Aucun</label>
                                                            
                                                            <input type="radio" name="sec"   />
                                                            <label  className="mr-5">SSL</label>
                                                            
                                                            <input type="radio" name="sec"   />
                                                            <label  className="mr-5">TLS</label>
                                                            
                                                            
                                                        </div>
                                                    </div>
                                            </div>


                                            <div className="form-group">
                                                <button onClick={ ()=>{this.authClient()} }

                                                
                                                className="btn btn-success mr-3">Continuer</button>
                                                <button
                                                onClick={ ()=>{this.toggleAddModal()} }
                                                className="btn btn-secondary">Annuler</button>
                                                
                                            </div>




                                        </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}


export default SignInPage;