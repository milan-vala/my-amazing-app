import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const Profile = (props) => {
    let navigate = useNavigate();
    let {username} = useParams();   

    const location = useLocation();
    console.log("location ==>", location)
    const search = location.search;
    console.log("search ===>", search)
    const name = new URLSearchParams(search).get('name');
    console.log("name ===>", name)

    return (
        <div>
            this is profile page of {username}
            <br/>
            <button onClick={() => navigate("/about")}>change to about page</button>
            <h1></h1>
        </div>
    );
};

export default Profile;