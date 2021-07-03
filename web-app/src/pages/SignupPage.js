
import React from 'react';
import { Link } from 'react-router-dom';


class SignUpPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username:"",
            password:"",
            messageError:""
        }
    }


    authUser(){
        this.setState({
            messageError:''
        })
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"username":this.state.username,"password":this.state.password});





        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:8080/api/auth/signin", requestOptions)
        .then(response => response.json())
        .then((res)=>{
            if (res.status == 400) {
                // error access
                this.setState({
                    messageError:"Verifier nom d'utilisateur et mot de passe."
                })
            }else if (res.status == 401) {
                // error access
                this.setState({
                    messageError:"Mauvais nom d'utilisateur et mot de passe."
                })
            }else{
                console.log(res);

                // we are good to go !!

                localStorage.setItem('token',res.accessToken);
                localStorage.setItem('tokenType',res.tokenType);
                

            }
        })
        .catch((error)=>{
            console.log("oups"+error.status);
        });
    }



    render() {
        return (

            <div className="container">


                <div className="row justify-content-center">

                    <div className="col-xl-10 col-lg-12 col-md-9">

                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Connexion !</h1>
                                            </div>
                                            
                                                <div className="form-group">
                                                    <input type="text"  className="form-control form-control-user"
                                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                                        placeholder="nom d'utilisateur" value={ this.state.username } onChange={ (e)=>{ this.setState({username:e.target.value}) } } />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password"  className="form-control form-control-user"
                                                        id="exampleInputPassword" placeholder="Mot de passe" onChange={ (e)=>{ this.setState({password:e.target.value}) } }  />
                                                </div>
                                                <button onClick={ (e)=>{ this.authUser() } }  type="submit" className="btn btn-primary btn-user btn-block">
                                                    Créer maintenant
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

                                            
                                            <div className="text-center">
                                                <Link to="/signin" >retour</Link>
                                            </div>


                                        </div>
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


export default SignUpPage;