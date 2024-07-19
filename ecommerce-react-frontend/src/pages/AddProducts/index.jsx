import { useForm } from 'react-hook-form';
import "./index.css";

const AddProducts = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const categories = [
    "Books", "Movies", "Music", "Games", "Electronics",
    "Computers", "Home", "Garden", "Tools", "Grocery", "Health",
    "Beauty", "Toys", "Kids", "Baby", "Clothing", "Shoes", "Jewelery",
    "Sports", "Outdoors", "Automotive", "Industrial"
  ];

  const onSubmit = (data) => {
    console.log("data del producto",data);
    // Aquí puedes manejar la lógica para enviar el formulario, por ejemplo, haciendo una solicitud a tu API
  };
    return (
      <div className='div-form-container'>
        <form onSubmit={handleSubmit(onSubmit)} className="add-product-form">
        <h2>Agregar Producto</h2>
          <div className="input-product-container">
            <label htmlFor="name">Nombre:</label>
            <input 
              className='input-data'
              type="text" 
              id="name" 
              {...register("name", { required: true })} 
            />
            {errors.name && <span>Este campo es obligatorio</span>}
          </div>
          <div className="input-product-container">
            <label htmlFor="description">Descripción:</label>
            <textarea 
              className='input-data'
              id="description" 
              {...register("description", { required: true })} 
            />
            {errors.description && <span>Este campo es obligatorio</span>}
          </div>
          <div className="input-product-container">
            <label htmlFor="price">Precio:</label>
            <input 
              className='input-data'
              type="number" 
              id="price" 
              {...register("price", { required: true })} 
            />
            {errors.price && <span>Este campo es obligatorio</span>}
          </div>
          <div className="input-product-container">
            <label htmlFor="category">Categoría:</label>
            <select
              className='input-data' 
              id="category" 
              {...register("category", { required: true })} 
            >
              <option value="">Selecciona una categoría</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
            {errors.category && <span>Este campo es obligatorio</span>}
          </div>
          <div className="input-product-container">
            <label htmlFor="brand">Marca:</label>
            <input
              className='input-data' 
              type="text" 
              id="brand" 
              {...register("brand", { required: true })} 
            />
            {errors.brand && <span>Este campo es obligatorio</span>}
          </div>
          <div className="input-product-container">
          <label htmlFor="image">URL de la Imagen</label>
          <input 
            className='input-data'
            type="url" 
            id="image" 
            {...register("image", { required: true, pattern: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i })} 
          />
          {errors.image && <span>Debe ser una URL válida</span>}
          </div>
          <button type="submit">Agregar Producto</button>
        </form>
      </div>
    );
}

export default AddProducts