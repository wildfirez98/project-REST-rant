// Import React and Def function from default.jsx
const React = require('react')
const Def = require('../default')

function index () { // Use Def component as a wrapper
    return (
        <Def> 
            <main>
                <h1>Index</h1>
            </main>
        </Def>
    )
}

module.exports = index