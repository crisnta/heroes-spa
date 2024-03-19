import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"

import queryString from 'query-string'
import { getHeroesByName } from "../helpers"

export const Search = () => {

  const navigate = useNavigate()
  const location = useLocation()
  
  const { q = '' } = queryString.parse( location.search)

  const heroes = getHeroesByName(q)

  const { searchText, onInputChange} = useForm({
    searchText: q
  })

  const showSearchText = ( q === '')
  const showErrorText = ( q.length > 0) && heroes.length === 0

  const onSearchSubmit = (e) => {
    e.preventDefault()
    // if (searchText.trim().length <= 1) return

    navigate(`?q=${ searchText }`)
  }

  return (
    <>
      <h1>Search</h1>

      <div className="row">

        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={ onSearchSubmit}>
            <input 
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText}
              onChange={ onInputChange}
            />
          </form>

          <button 
            onClick={onSearchSubmit}
            className="btn btn-outline-primary mt-2">
            Search
          </button>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div 
            style={{ display: showSearchText ? '' : 'none'}}
            className="alert alert-primary">
            Search a Hero
          </div>

          <div
            style={{ display: showErrorText ? '' : 'none'}}
            className="alert alert-danger">
            No Hero with <b>{ q }</b>
          </div>

          {
            heroes.map( hero => (
              <HeroCard 
                key={hero.id}
                {...hero}
              />

            ))
          }
        </div>

      </div>

    </>
  )
}
