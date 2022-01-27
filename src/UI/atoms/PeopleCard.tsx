import './peopleCard.css'

interface CardProps {
  id: number;
  name: string;
  image: string;
  gender: string;
  species: string;
}

const PeopleCard = ( { id, name, image, gender, species }: CardProps ) => {

  return (
    <div className='card'>
      <div
        style={{
          backgroundImage: `url( ${image} )`
        }}
        className="card__person"
      >
        <div className='card__description'>
          <h2>{ name }</h2>
          <h3>{ gender } </h3>
          <h4>{ species } </h4>
        </div>
      </div>
    </div>
  )
}

export default PeopleCard
