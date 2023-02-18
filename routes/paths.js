const path  = require('path')

function paths(alias){
    const paths = {
        templates: path.join(__dirname, '/../templates')
    }

    return paths[alias]
}

module.exports = paths