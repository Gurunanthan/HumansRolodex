import "./Styles.css";

export function Card(props) {
  return (
    <div className="card-container">
        <img src={`https://robohash.org/${props.monster.id}?set=set5&size=180x180`} alt="" srcset="" />
      <h1>{props.monster.name}</h1>
    </div>
  );
}
