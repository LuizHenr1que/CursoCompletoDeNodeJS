const fs = require('fs')

console.log('Inicio')

fs.writeFileSync('arquivo.txt', 'oi', function(err) {

    setTimeout(function() {
        console.log('Arquivo criado!')
    }, 1000)
})

console.log('Fim')