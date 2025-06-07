import "./list.css";

function ListComponent({ fetchData, renderItem }) {
  return (
    <ul className="container">
      {fetchData && fetchData.length > 0 ? (
        <>
          {fetchData?.map((item, index) =>
            renderItem ? (
              renderItem(item, index)
            ) : (
              <li className="custom- card" key={index}>
                <img src={item.image} alt={item.name} />
                <div className="card-content">
                  <h2>{item.name}</h2>
                  <div className="details">
                    <p>Status: {item.status}</p>
                    <p>Species: {item.species}</p>
                    <p>Gender: {item.gender}</p>
                  </div>
                </div>
              </li>
            )
          )}
        </>
      ) : (
        <p>No data available</p>
      )}
    </ul>
  );
}

export default ListComponent;
