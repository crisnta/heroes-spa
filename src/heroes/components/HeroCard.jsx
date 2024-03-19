import { Link } from "react-router-dom"

export const HeroCard = ({ 
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
 }) => {
    const heroImageUrl = `/assets/heroes/${id}.jpg`

  return (
    <div className="col">
        <div className="card">
            <div className="col-6">
                <img
                    className="card-img-top"
                    src={heroImageUrl} 
                    alt={superhero} />
            </div>

            <div className="col-6">
                <div className="card-body">
                    <h5 className="card-title">{superhero}</h5>
                    <p className="card-text">{ alter_ego}</p>   
                    {
                        ( alter_ego != characters  && (<p>{characters}</p>  ))
                    }
                    <p className="card-text">
                        <small className="text-muted">{first_appearance}</small>
                    </p>

                    <Link to={`/hero/${id}`}>
                        Mas Informacion...
                    </Link>

                </div>
            </div>
        </div>
    </div>
    
  )
}
