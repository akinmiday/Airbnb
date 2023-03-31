import './App.css'
import Navbar from './Components/Navbar'
import Card from './Components/card'
import data from './data'
import Hero from './Components/hero'

function App() {

  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
      // title={item.title}
      // description={item.description}
      // price={item.price}
      // img={item.img}
      // stats={item.stats.rating}
      // reviewcount={item.stats.reviewcount}
      // country={item.country}
      // available={item.available}
      // openspot={item.openspot}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>
    </div>
  )
}

export default App
