// En Detail.jsx
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../Components/utils/global.context";

const Detail = () => {
  const { state, dispatch } = useContext(AppContext);
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setUserDetails(data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, [id]);

  const themeClass = state.theme === "dark" ? "dark" : "light";

  const handleAddToFavorites = () => {
    dispatch({
      type: "ADD_TO_FAVORITES",
      payload: {
        id: userDetails.id,
        name: userDetails.name,
        username: userDetails.username,
      },
    });
  };

  return (
    <div className={themeClass}>
      {userDetails ? (
        <>
          <h1>Detail Dentist {id}</h1>
          <table className="dentistTable">
            <tbody>
              <tr>
                <td>Name:</td>
                <td>{userDetails.name}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{userDetails.email}</td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>{userDetails.phone}</td>
              </tr>
              <tr>
                <td>Website:</td>
                <td>{userDetails.website}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={handleAddToFavorites}>Add to Favorites</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail;
