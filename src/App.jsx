import { useEffect, useState } from "react";
import "./App.css";
import ListComponent from "./components/counter/ListComponent";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const baseUrl = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseUrl);
        setData(response.data);
        setError(null);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again later.");
        setData([]);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!data.results) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Rick and Morty Characters</h1>

      <ListComponent
        fetchData={data.results}
        renderItem={(item, index) => (
          <li className="custom-card" key={index} style={{
            
          }}>
            <img src={item.image} alt={item.name} />
            <div className="card-content">
              <h2>{item.name}</h2>
              <div className="details">
                {" "}
                <p>Status: {item.status}</p>
                <p>Species: {item.species}</p>
                <p>Gender: {item.gender}</p>
              </div>{" "}
            </div>
          </li>
        )}
      />
    </>
  );
}

export default App;
