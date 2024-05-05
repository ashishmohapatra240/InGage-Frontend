import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("formData");
    navigate("/");
  };

  const formData = JSON.parse(localStorage.getItem("formData"));
  return (
    <>
      <div className={styles.dashContainer}>
        <div >
          <h1 style={{textAlign:"center"}}>Dashboard</h1>
          <h2 style={{textAlign:"center"}}>User Data</h2>
          </div>
          <div className="dash-data" style={{display:"flex",justifyContent:"center"}}>
           
            {formData && (
              <div>
                <p>User Type: {formData.userType}</p>
                {formData.userType === "brand" ? (
                  <p>Link to Website: {formData.socialMediaPresence}</p>
                ) : (
                  <p>
                    Link to Social Media Account: {formData.socialMediaPresence}
                  </p>
                )}
                {formData.userType === "influencer" && (
                  <p>Follower/Subscriber Count: {formData.followerCount}</p>
                )}
                <p>
                  Interest in Collaboration: {formData.collaborationInterest}
                </p>
              </div>
            )}
          </div>
          <div className={styles.dashButton}>
          <button onClick={handleLogout}>Logout</button>
          </div>
       
      </div>
    </>
  );
}

export default Dashboard;
