/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import "./listasuspensa.css";

const ListaSuspensa = (props) => {
  console.log(props.itens);
  return (
    <div className="ListaSuspensa">
      <label>{props.label}</label>
      <select
        onChange={(evento) => props.aoAlterado(evento.target.value)}
        required={props.required}
        value={props.value}
      >
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;
