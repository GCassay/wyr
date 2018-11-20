import React, { Component } from 'react';
import logo from './assets/login.svg';
import award1 from './assets/award1.svg';
import award2 from './assets/award2.svg';
import award3 from './assets/award3.svg';
import './App.css';

import user1 from './avatars/user1.svg';
import user2 from './avatars/user2.svg';
import user3 from './avatars/user3.svg';

class App extends Component {
  render() {
    return (
      <div className="App h-100 d-flex flex-column">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <a href="#" className="navbar-brand text-brand">Would you rather?</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">New Question</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Leader Board</a>
              </li>
            </ul>
            <div id="appUserOptions" className="dropdown">
              <button className="btn dropdown-toggle btn-sm btn-dark btn-block" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src={user1} className="loged-user-avatar rounded-circle border bg-secondary border-secondary" />
                <span className="mr-2 ml-3 text-light">Hello, User</span>
              </button>
              <div className="dropdown-menu w-100 dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item text-truncate" href="#"><i className="fa fa-user-circle" aria-hidden="true"></i> Profile (Ranking Position/My Questions)</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item text-truncate" href="#"><i className="fa fa-sign-out" aria-hidden="true"></i> Logout</a>
              </div>
            </div>
          </div>
        </nav>
        <div className="pt-5 pb-5 d-flex container-fluid justify-content-center align-items-center flex-column flex-grow-1 w-100">

{/* LOGIN */}
          <div id="appLogin" className="d-none card text-center w-50 login-card">
            <div className="card-header">
              Welcome to <span className="text-primary font-weight-bold">Would you Rather</span> App
            </div>
            <div className="card-body">
              <img src={logo} className="card-img-top h-auto login-img" />
              <h5 className="card-title">Sign in</h5>
              <div className="dropdown w-100">
                <button className="btn btn-primary border border-dark-50 w-100" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Select User
                </button>
                <div className="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#"><i className="fa fa-user-circle" aria-hidden="true"></i> Profile (Ranking Position/My Questions)</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#"><i className="fa fa-sign-out" aria-hidden="true"></i> Logout</a>
                </div>
              </div>
            </div>
            <div className="card-footer text-muted">
              Gea Cassinello &copy; 2018
            </div>
          </div>

{/* LEADER BOARD */}
          <div id="appLeaderBoard" className="w-100 d-flex flex-column align-items-center">
            <div className="card user-card d-flex flex-row mb-2 pb-2 pt-2 align-items-center">
              <div className="d-flex align-items-center pl-4 pr-4">
                <img src={user1} className="card-avatar rounded-circle bg-secondary border border-secondary" />
              </div>
              <div className="d-flex flex-column text-left flex-grow-1 justify-content-start">
                <p className="font-weight-bold border-bottom p-0 m-0 mb-2 pb-2 h5">User 1</p>
                <p className="p-0 m-0 d-flex justify-content-between align-items-center">
                  <span className="d-block">Answered Questions</span>
                  <span className="d-block h6">150</span>
                </p>
                <p className="p-0 m-0 d-flex justify-content-between align-items-center">
                  <span className="d-block">Created Questions</span>
                  <span className="d-block h6">350</span>
                </p>
              </div>
              <div className="user-score ml-4 mr-2 d-flex align-items-center flex-column border rounded p-2">
                SCORE
                <div className="total-score h5 m-0 d-flex align-items-center justify-content-center">500</div>
              </div>
            </div>
            <div className="card user-card d-flex flex-row mb-2 pb-2 pt-2 align-items-center">
              <div className="d-flex align-items-center pl-4 pr-4">
                <img src={user3} className="card-avatar rounded-circle bg-secondary border border-secondary" />
              </div>
              <div className="d-flex flex-column text-left flex-grow-1 justify-content-start">
                <p className="font-weight-bold border-bottom p-0 m-0 mb-2 pb-2 h5">User 3</p>
                <p className="p-0 m-0 d-flex justify-content-between align-items-center">
                  <span className="d-block">Answered Questions</span>
                  <span className="d-block h6">18</span>
                </p>
                <div class="flex-parent has-child">

                  <div class="flex-child long-and-truncated-with-child">
                    <h2>2. This is a long string that is OK to truncate please and thank you</h2>
                  </div>

                  <div class="flex-child short-and-fixed">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>

                </div>
              </div>
              <div className="user-score ml-4 mr-2 d-flex align-items-center flex-column border rounded p-2">
                SCORE
                <div className="total-score h5 m-0 d-flex align-items-center justify-content-center">20</div>
              </div>
            </div>
            <div className="card user-card d-flex flex-row mb-2 pb-2 pt-2 align-items-center">
              <div className="d-flex align-items-center pl-4 pr-4">
                <img src={user2} className="card-avatar rounded-circle bg-secondary border border-secondary" />
              </div>
              <div className="d-flex flex-column text-left flex-grow-1 justify-content-start">
                <p className="font-weight-bold border-bottom p-0 m-0 mb-2 pb-2 h5">User 2</p>
                <p className="p-0 m-0 d-flex justify-content-between align-items-center">
                  <span className="d-block">Answered Questions</span>
                  <span className="d-block h6">5</span>
                </p>
                <p className="p-0 m-0 d-flex justify-content-between align-items-center">
                  <span className="d-block">Created Questions</span>
                  <span className="d-block h6">0</span>
                </p>
              </div>
              <div className="user-score ml-4 mr-2 d-flex align-items-center flex-column border rounded p-2">
                SCORE
                <div className="total-score h5 m-0 d-flex align-items-center justify-content-center">5</div>
              </div>
            </div>
          </div>
{/* NEW QUESTION */}
{/* RATHER QUESTION */}
{/* PROFILE */}

        </div>
      </div>
    );
  }
}

export default App;
