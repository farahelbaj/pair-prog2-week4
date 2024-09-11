import Title from './Title'
import Service from './Service'
import { useState } from 'react';
import { services } from "../data";


function Services() {
  const [servicesData, setServicesData] = useState(services)

  const handleDeleteServices = (serviceId) => {
    const updatedServices = servicesData.filter(s => s.id !== serviceId)
    setServicesData(updatedServices)
  }

  return (
    <section className='section services' id='services'>
      <Title title='our' subTitle='services' />

      <div className='section-center services-center'>
        {servicesData.map((service) => {
          return <Service {...service} key={service.id} onDelete={handleDeleteServices}/>
        })}
      </div>
    </section>
  )
}
export default Services