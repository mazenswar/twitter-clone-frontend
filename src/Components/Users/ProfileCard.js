import React from "react";
import { connect } from "react-redux";

const ProfileCard = props => {
  const { currentUser } = props;
  return (
    <div className="profile-card-container">
      <h5>
        {currentUser.first_name} {currentUser.last_name}
      </h5>
      <p>@{currentUser.username}</p>
    </div>
  );
};

const mapStateToProps = state => ({ currentUser: state.currentUser });

export default connect(
  mapStateToProps,
  null
)(ProfileCard);
