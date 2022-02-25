// Import React and Def function from default.jsx

const React = require('react')
const Def = require('./default')

function error404 () { // Use Def component as a wrapper
    return (
        <Def> 
            <main>
                <h1>404: Page not Found</h1>
                <p>Oops, sorry, we can't find this page!</p>
            </main>
        </Def>
    )
}

module.exports = error404

