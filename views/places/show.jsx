const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <img src={ data.place.pic } alt={ data.place.name }/>
            <h2>Rating</h2>
            <p>Currently Unrated</p>
            <h2>Description</h2>
            <p>Located in { data.place.city }, { data.place.state } and serving { data.place.cuisines }</p>
            <h1>Comments</h1>
            <p>No comments yet!</p>
            <a href="" className="btn btn-warning">Edit</a>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">Delete</button>
            </form>
          </main>
        </Def>
    )
}

module.exports = show