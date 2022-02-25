// Import React and Def function we created in default.jsx
const React = require('react')
const Def = require('./default')

function home () { // Create 'home' stub function and then export it 
    return (
        <Def>
            <main>
                <h1>Home</h1>
            </main>
        </Def>
    )
} 

module.exports = home