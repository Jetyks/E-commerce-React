import { useNavigate } from "react-router-dom";
import { logInUserService } from "../../services/logInUser";
import "./login.css";
import { useForm } from "react-hook-form";
import { useAuthContext } from "../../hooks/useAuth";




const Login = () => {
    const {login} = useAuthContext()
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try{
            const response = await logInUserService(data)
            if(response.status === 200){
              console.log(response.data);
              /* window.localStorage.setItem("token", response.data.token); */
              login(response.data.token);
              navigate("/");
            }
          } catch (error){
            console.log(data);
            console.error(error);
            
          }
      };
    
  return (
    <div className="main-container">
        <div className="login-form-container">
            <div className="title-form">
                <h2>Iniciar Sesión</h2>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                    <div className="form-group blue">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input
                        type="email"
                        id="email"
                        {...register("email", { required: true })}
                        />
                        {errors.email && <span className="error-message">Este campo es requerido</span>}
                    </div> 
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input
                        type="password"
                        id="password"
                        {...register("password", { required: true })}
                        />
                        {errors.password && <span className="error-message">Este campo es requerido</span>}
                    </div>
                    <div className="button-container">
                        <button type="submit" className="submit-button">
                            Iniciar Sesión
                        </button>
                    </div>
                    
            </form>
        </div>
    </div>
  )
}

export default Login