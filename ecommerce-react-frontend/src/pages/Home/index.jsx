import "./index.css";
import Card from '../../components/Card'
import ListCard from '../../components/List Card'

const Home = () => {
  return (

    <div className='home-container'>
        <ListCard>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </ListCard>
      
    </div>
    
  )
}

export default Home