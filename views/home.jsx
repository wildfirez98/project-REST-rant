// Import React and Def function we created in default.jsx
const React = require('react')
const Def = require('./default')

function home () { // Create 'home' stub function and then export it 
    return (
        <Def>
            <main>
                <h1>Home</h1>
                <div>
                    <img src="/images/ramen.jpg" alt="Ramen"/>
                    <div>
                        Photo by <a href="https://unsplash.com/@photos_by_ryder?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joshua Ryder</a> on <a href="https://unsplash.com/s/photos/ramen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                    <a href="/places">
                        <button className="btn-primary">Places Page</button>
                    </a>
            </main>
        </Def>
    )
} 

module.exports = home