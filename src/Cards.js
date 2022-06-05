import Card from './Card.js'

function Cards(props) {
  return <div className="Cards">
    {props.items.map(({ name, teachers, href, c }) => (
      <Card 
          key={Math.random()}
          name={name} 
          teachers={teachers}
          href={href}
          c={c}
        />
    ))}
  </div>
}

export default Cards;