const React = require('react') // Import React

function Def (html) { // Create a stub function called Def with one parameter html
    return (
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
} 

module.exports = Def // Export Def function