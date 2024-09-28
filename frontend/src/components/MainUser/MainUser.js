import React from 'react';
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { userProfile, updateUserName } from "../../actions/userActions";

import './MainUser.css'

export const MainUser = () => {
  // const dispatch = useDispatch();

  // const [userName, setUserName] = useState("");
  // const [display, setDisplay] = useState(true);

  const token = useSelector((state) => state.auth.user)
  
  // const userData = useSelector((state) => state.user.userData);
  // console.log(userData);

  // const [newUserName, setNewUserName] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      });
      // const user = await response.json();

      // dispatch(userProfile(user));
    };

    fetchUserData();
  }, 
  // [dispatch]
)
  
    return (
        <div>
            <main className="main bg-dark">
            <div className="header">
              <h1>Welcome back<br/></h1>
              <button className="edit-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
              <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                <p className="account-amount">$2,082.79</p>
                <p className="account-amount-description">Available Balance</p>
              </div>
              <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
              </div>
            </section>
            <section className="account">
              <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                <p className="account-amount">$10,928.42</p>
                <p className="account-amount-description">Available Balance</p>
              </div>
              <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
              </div>
            </section>
            <section className="account">
              <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                <p className="account-amount">$184.30</p>
                <p className="account-amount-description">Current Balance</p>
              </div>
              <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
              </div>
            </section>
          </main>
        </div>
    );
}

export default MainUser;