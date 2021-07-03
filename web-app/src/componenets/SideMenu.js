import { Link } from "react-router-dom";


function SideMenu() {
    const identity = localStorage.getItem('identity');



    return (
        <div>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar" style={{ height: '100%' }}>

                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">
                        Softavera Pay
                    </div>
                </a>


                <li className="nav-item">
                    <a className="nav-link" href="index.html">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Acceuil</span></a>
                </li>


                <div className="sidebar-heading">
                    Manu
                </div>

                {
                    identity == '0' ?
                        <div>
                            <li className="nav-item">
                                <Link to="/admin/clients" className="nav-link">
                                    <i class="fas fa-users"></i>
                                    <span>Gestion des clients test</span>
                                </Link>
                            </li>

                        </div>
                        :
                        <div>
                            <li className="nav-item">
                                <Link to="/client/users" className="nav-link">
                                    <i class="fas fa-users"></i>
                                    <span>Utilisateur</span>
                                </Link>
                            </li> 
 
                            <li className="nav-item">
                                <Link to="/client/banks" className="nav-link">
                                    <i class="fas fa-users"></i>
                                    <span>Banque</span>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/client/transactions" className="nav-link">
                                    <i class="fas fa-users"></i>
                                    <span>Transactions</span>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/client/payments" className="nav-link">
                                    <i class="fas fa-users"></i>
                                    <span>Paiements</span>
                                </Link>
                            </li>

                            



                            
                        </div>
                        
                }


            </ul>
        </div>
    );
}


export default SideMenu;