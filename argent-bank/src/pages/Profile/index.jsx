import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";

import { accounts } from "../../data/accounts";
import Account from "../../components/accounts";

// API calls
import { editUser } from "../../getApi/getApi";
import "../../style/profil.css";

/**
 * This Function display a Profile page
 * Display of user first name and last name
 * Edit function to modify user's name
 * Accounts component
 */

function Profile() {
  const [editName, setEditName] = useState(false);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");

  const selectUser = (state) => state.getUser.user.body;
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  // console.log(user);
  if (user === undefined) {
    return <Navigate to="/IvanaRP_P13_10032022" />;
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

        <div className="accounts">
          <h2 className="sr-only">Accounts</h2>
          {accounts &&
            accounts.map((account) => (
              <Account
                key={account.id}
                title={account.title}
                amount={account.amount}
                description={account.description}
              />
            ))}
        </div>
      </main>
    </div>
  );
}

export default Profile;
