const { Pool } = require('pg')
const pg_connection = new Pool({
    user: 'yhauactojfphfy',
    host: 'ec2-54-152-28-9.compute-1.amazonaws.com',
    database: 'def5oovd5ukhcc',
    password: 'bc413524a646ed92b8a1d5fea845c5f5b321373c1620bdc86177488be69bea97',
    port: 5432,
    ssl:{
        rejectUnauthorized: false
    }
})
module.exports = pg_connection