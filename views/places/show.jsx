const React = require('react')
const Def = require('../default')

function show ({place, id}) {
    return (
        <Def>
          <main>
            <h1>{place.name}</h1>
            <img src={place.pic} alt={place.name}/>
            <h2>Rating</h2>
            <p>Currently Unrated</p>
            <h2>Description</h2>
            <p>Located in {place.city}, {place.state} and serving {place.cuisines}</p>
            <h1>Comments</h1>
            <p>No comments yet!</p>
            <a href={`/places/${id}/edit`} className="btn btn-warning">Edit</a>
            <form method="POST" action={`/places/${id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">Delete</button>
            </form>
          </main>
        </Def>
    )
}

module.exports = show