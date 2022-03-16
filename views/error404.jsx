// Import React and Def function from default.jsx

const React = require('react')
const Def = require('./default')

function error404 () { // Use Def component as a wrapper
    return (
        <Def> 
            <main>
                <h1>404: Page not Found</h1>
                <p><h2>Oops, sorry, we can't find this page!</h2></p>
                <div>
                    <img src="/images/bulldog404.jpg" alt="Bulldog"/>
                    <div>Photo by <a href="https://unsplash.com/@lavalaye?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sébastien Lavalaye</a> on <a href="https://unsplash.com/s/photos/bulldog?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404

