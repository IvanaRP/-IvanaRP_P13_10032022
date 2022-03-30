import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";

// API calls
import { editUser } from "../../getApi/getApi";
import "../../style/profil.css";

function Profile() {
  const [editName, setEditName] = useState(false);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");

  const selectUser = (state) => state.getUser.user.body;
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  console.log(user);
  if (user === undefined) {
    return <Navigate to="/" />;
  }
  const firstName = user.firstName;
  const lastName = user.lastName;

  const edit = () => {
    dispatch(editUser(newFirstName, newLastName));
    setEditName(false);
  };
  return (
    <div>
      <main className="main bg-dark">
        <h1 className="profile-welcome">
          Welcome back
          <br />
          <div className="profile-welcome-name">
            {firstName} {lastName}
          </div>
        </h1>
        {editName ? (
          <div className="edit-input-box">
            <div className="edit-input-wrapper">
              <input
                className="edit-input"
                value={newFirstName}
                type="text"
                onChange={(e) => {
                  setNewFirstName(e.target.value);
                }}
              />
              <input
                className="edit-input"
                value={newLastName}
                type="text"
                onChange={(e) => {
                  setNewLastName(e.target.value);
                }}
              />
            </div>
            <div className="edit-button-wrapper">
              <button
                className="edit-button"
                type="submit"
                value="Save"
                onClick={edit}
              >
                Save
              </button>
              <button
                className="edit-button"
                type="button"
                value="Cancel"
                onClick={() => {
                  setEditName(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <input
            className="edit-button"
            type="button"
            onClick={() => {
              setEditName(true);
            }}
            value="Edit Name"
          />
        )}
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

export default Profile;
