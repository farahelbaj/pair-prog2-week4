import { tours } from "../data";
import Tour from "./Tour.js";
import { useState } from 'react';

const Tours = () => {
  const [toursData, setToursData] = useState(tours);

  const handleDeleteTour = (tourId) => {
    const updatedTours = toursData.filter(tour => tour.id !== tourId)
    setToursData(updatedTours)
  }
  return (
    <section className="section" id="tour">
      <div className="section-title">
        <h2>
          featured <span>tours</span>
        </h2>
      </div>
      <div className="section-center featured-center">
        {toursData.map((tour) => {
          return <Tour {...tour} key={tour.id} onDelete={handleDeleteTour}/>
        })}
      </div>
    </section>
  );
};

export default Tours;