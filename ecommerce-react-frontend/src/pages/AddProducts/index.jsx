import { useForm } from 'react-hook-form';
import "./index.css";
import { addProductService } from '../../services/addProduct';

const AddProducts = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const categories = [
    "Books", "Movies", "Music", "Games", "Electronics",
    "Computers", "Home", "Garden", "Tools", "Grocery", "Health",
    "Beauty", "Toys", "Kids", "Baby", "Clothing", "Shoes", "Jewelery",
    "Sports", "Outdoors", "Automotive", "Industrial"
  ];

  const onSubmit = async (productData) => {
    try{
      const token = localStorage.getItem("token");
      const response = await addProductService(token, productData)
      if(response.status === 200){
        console.log("status de la respuesta",response.status);
        console.log("respuesta.data",response.data);
        console.log("este producto se ha creado",productData)
      }
    } catch (error){
      console.log(productData);
      console.error(error);
      
    }
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
              id="product_name"
              placeholder='"Inteligent Desk Computer"' 
              {...register("product_name", { required: true })} 
            />
            {errors.name && <span>Este campo es obligatorio</span>}
          </div>
          <div className="input-product-description">
            <label htmlFor="description">Descripción:</label>
            <textarea 
              className='input-data input-description'
              id="description" 
              placeholder='"The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive"' 
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
              placeholder='$999' 
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
              placeholder='"Thompson LLC"' 
              {...register("brand", { required: true })} 
            />
            {errors.brand && <span>Este campo es obligatorio</span>}
          </div>
          <div className="input-product-container input-url-container">
          <label htmlFor="image">URL de la Imagen</label>
          <input 
            className='input-data input-url'
            type="url" 
            id="image"
            placeholder='https://images-na.ssl-images-amazon.com...'  
            {...register("image", { required: true, pattern: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i })} 
          />
          {errors.image && <span>Debe ser una URL válida</span>}
          </div>
          <div className='btn-container'>
            <button type="submit">Crear Producto</button>
          </div>
          
        </form>
      </div>
    );
}

export default AddProducts