// En Home.jsx
import React, { useEffect, useContext } from "react";
import { AppContext } from "../Components/utils/global.context";
import Card from "../Components/Card";

const Home = () => {
  const { state, dispatch } = useContext(AppContext);

  const themeClass = state.theme === "dark" ? "dark" : "light";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        dispatch({ type: "SET_API_DATA", payload: data });
      } catch (error) {
        console.error("Error fetching dentists:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <main className={themeClass}>
      <h1>Home</h1>
      <div className="card-grid">
        {state.data.apiData &&
          state.data.apiData.map((dentist) => (
            <Card
              key={dentist.id}
              id={dentist.id}
              name={dentist.name}
              username={dentist.username}
            />
          ))}
      </div>
    </main>
  );
};

export default Home;
