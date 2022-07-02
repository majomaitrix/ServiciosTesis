const {Client} = require('pg');

async function getConnection(){
  const client = new Client({
    host:'localhost',
    port:5432,
    user:'andres',
    password:'dcandres123',
    database:'api_AppTesis',
    ssl: true
  });
  await client.connect();
  return client;
}


module.exports=getConnection;
