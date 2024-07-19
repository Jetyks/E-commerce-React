import { useNavigate } from "react-router-dom";
import { registerUserService } from "../../services/registerUser";
import "./signup.css";
import { useForm } from "react-hook-form";


const SignUp = () => {
    
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try{
          const {status} = await registerUserService(data)
          if(status === 201){
            navigate("/log-in")
          }
        } catch (error){
          console.log(data);
          console.error(error);
          
        }
      };
    
  return (
    <div className="main-container-signup">
        <div className="signup-form-container">
            <div className="title-signup-form">
                <h2>Registrate</h2>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
                    
                    <div className='form-group-signup c1'>
                        <label htmlFor='first_name'>Nombre</label>
                        <input
                          type='text'
                          className='form-control-signup'
                          id='first_name'
                          name='first_name'
                          placeholder='Pepe'
                          {...register("first_name", { required: true })}
                        />
                        {errors.first_name && <span className="error-message-signup">Este campo es requerido</span>}
                    </div>
                    <div className='form-group-signup c2'>
                        <label htmlFor='last_name'>Apellido</label>
                        <input
                          type='text'
                          className='form-control'
                          id='last_name'
                          name='last_name'
                          placeholder='Martinez'
                          {...register("last_name", { required: true })}
                        />
                        {errors.last_name && <span className="error-message-signup">Este campo es requerido</span>}
                    </div>
                    <div className='form-group-signup c3'>
                        <label htmlFor='gender'>Genero</label>
                        <select
                          className='form-select'
                          id='gender'
                          name='gender'
                          {...register("gender", { required: true })}
                        >
                          <option value=''>Selecciona...</option>
                          <option value='M'>Masculino</option>
                          <option value='F'>Femenino</option>
                        </select>
                        {errors.gender && <span className="error-message-signup">Este campo es requerido</span>}
                    </div>
                    <div className="form-group-signup c4">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input
                        type="email"
                        id="email"
                        placeholder='name@example.com'
                        {...register("email", { required: true })}
                        />
                        {errors.email && <span className="error-message-signup">Este campo es requerido</span>}
                    </div> 
                    <div className="form-group-signup c5">
                        <label htmlFor="password">Contraseña</label>
                        <input
                        type="password"
                        id="password"
                        placeholder='Password'
                        {...register("password", { required: true })}
                        />
                        {errors.password && <span className="error-message-signup">Este campo es requerido</span>}
                    </div>
                    <div className="button-container-signup">
                        <button type="submit" className="submit-button-signup">
                            Registrarse
                        </button>
                    </div>
                    
            </form>
        </div>
    </div>
  )
}

export default SignUp