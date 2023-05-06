import data from '../Data/data';
import Card from './Card';

const Collection = () => {

  return (
    <>
    <div className='flex flex-col sm:flex-row items-center justify-center'>

      {data.map((event, index) => (
        <Card key={index}
          title={event.title}
          time={event.time}
          Location={event.Location}
          Price={event.Price}
          Type={event.Type}
          Mode={event.Mode}
        />
      ))}
    </div>
    </>
  )
}

export default Collection;