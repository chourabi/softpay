import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignUpPage from './pages/SignupPage';
import ClientsManagementPage from './pages/ClientsManagement';
import ClientsAdd from './pages/ClientsAdd';
import ClientDetails from './pages/ClientDetails';
import ClientsEdit from './pages/EditClient';
import ClientBankAccounts from './pages/ClientBankAccounts';
import UsersManagementPage from './pages/client/UsersManagement';
import AddNewClient from './pages/client/AddNewClient';
import EditNewClient from './pages/client/EditClient';
import ClientTransactionsHistory from './pages/client/ClientTransactionsHistory';
import BankManagements from './pages/client/BanksManagements';
import AllTransactions from './pages/client/AllTransactions';
import ClientsPayment from './pages/client/paymentsClient';

function App() {
  return (
    <Router>
      <div>

        <Switch>
        <Route path="/" component={SignInPage} exact />
        <Route path="/signin" component={SignInPage} exact />
        <Route path="/signup" component={SignUpPage} exact />
        <Route path="/home" component={HomePage} exact />
        <Route path="/admin/clients" component={ClientsManagementPage} exact />
        <Route path="/admin/clients/add" component={ClientsAdd} exact />
        <Route path="/admin/clients/edit/:id" component={ClientsEdit} exact />
        
        <Route path="/admin/clients/details/:id" component={ClientDetails} exact />
        <Route path="/admin/clients/accounts/:id" component={ClientBankAccounts} exact />
        

        <Route path="/client/users" component={UsersManagementPage} exact />
        <Route path="/client/users/add" component={AddNewClient} exact />
        <Route path="/client/users/edit/:id" component={EditNewClient} exact />
        <Route path="/client/users/transactions/:id" component={ClientTransactionsHistory} exact />
        <Route path="/client/banks" component={BankManagements} exact />


        <Route path="/client/transactions" component={AllTransactions} exact />

        
        <Route path="/client/payments" component={ClientsPayment} exact />

        
        
          



        </Switch>
      </div>
    </Router>
  );
}

export default App;
