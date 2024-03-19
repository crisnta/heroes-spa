import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroesById } from "../helpers/getHeroesById"
import { useMemo } from "react"

export const Heroes = () => {

  const { id } = useParams()
  const navigate = useNavigate()
  
  const hero = useMemo( () => getHeroesById(id), [id])

  const onNavigateBack = () => {
    navigate(-1)
  }
  
  if (!hero) {
    return <Navigate to={'/marvel'} />
  }
  
  return (
    <div className="row mt-5">
      <h1>{hero.superhero}</h1>
        <div className="col-4">
          <img
            className="img-thumbnail" 
            src={`/assets/heroes/${ id }.jpg`}
            alt={hero.superhero} />
        </div>

        <div className="col-8">
          <h3>{hero.superhero}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><b>Alter ego:</b> {hero.alter_ego}</li>
            <li className="list-group-item"><b>Publisher:</b> {hero.publisher}</li>
            <li className="list-group-item"><b>First Appearance:</b> {hero.first_appearance}</li>
          </ul>

          <h5 className="mt-3">Characters</h5>
          <p>{hero.characters}</p>

          <button 
            className="btn btn-outline-primary"
            onClick={onNavigateBack}  
          >
            Back
          </button>
        </div>
    </div>
  )
}
