import "./UserForm.scss";
import { Link } from "react-router-dom";
export default function UserForm({ type }) {
  const title = type === "login" ? "Hola!" : "Registrate!";

  return (
    <div className="user">
      <div className="user-form">
        <form className="user-form__form">
          <h2>{title}</h2>
          {type == "register" ? (
            <>
              <div className="user-form__form__input">
                <label></label>
                <input placeholder="Tu e-mail" />
              </div>
              <div className="user-form__form__input">
                <label></label>
                <input placeholder="Tu nueva contraseña" />
              </div>
              <div className="user-form__form__input">
                <label></label>
                <input placeholder="Repite tu contraseña" />
              </div>
            </>
          ) : (
            <>
              <div className="user-form__form__input">
                <label></label>
                <input placeholder="Tu nombre de usuario" />
              </div>
              <div className="user-form__form__input">
                <label></label>
                <input placeholder="Tu contraseña" />
              </div>
            </>
          )}
          <button>
            {type === "register" ? "Registrate" : "Iniciar Sesion"}
          </button>
        </form>
        {type === "login" ? (
          <Link to={"/register"}>No tienes usuario? Registrate!</Link>
        ) : null}
      </div>
    </div>
  );
}
