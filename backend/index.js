var express = require('express');
var app = express();
var mysql = require('mysql');
var cors = require('cors');
app.use(cors());
app.use(express.json());

const port = 3000;



/*
  Método GET que listar todos los pokemons (arreglo de pokemones)
*/
app.get('/pokemons', function(req, res){
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'utec',
      password: '1234567890',
      database: 'pokedex'
    });
    connection.connect();
    var myQuery = " SELECT pokemon_id, pokemon_name, pokemon_height, pokemon_category, " +
                  "  pokemon_weight, pokemon_ability, pokemon_type, pokemon_image" +
                  " FROM pokemon " +
                  " WHERE 1 = 1 ";
    var myValues = [];
    connection.query(myQuery, myValues, function(error, results, fields){
      if (error) throw error;
      res.send(results);
      connection.end();
    });
  });


/*
  Método GET que selecciona data de un solo pokemón (un objeto, NO un arreglo)
*/
app.get('/pokemons/:pokemon_id', function(req, res){
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'utec',
      password: '1234567890',
      database: 'pokedex'
    });
    connection.connect();
    var myQuery = " SELECT pokemon_id, pokemon_name, pokemon_height, pokemon_category, " +
                  "  pokemon_weight, pokemon_ability, pokemon_type, pokemon_image" +
                  " FROM pokemon " +
                  " WHERE pokemon_id = ? ";
    var myValues = [req.params.pokemon_id];
    connection.query(myQuery, myValues, function(error, results, fields){
      if (error) throw error;
      res.send(results[0]);
      connection.end();
    });
  });

  /*
  Método post que inserta un pokemón
  localhost:3000/pokemons
     {
        "pokemon_id": 1,
        "pokemon_name": "Psyduck",
        "pokemon_height": "2",
        "pokemon_category": "Duck",
        "pokemon_weight": "43.2 lbs",
        "pokemon_ability": "Damp",
        "pokemon_type": "Water",
        "pokemon_image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png"
    }
*/
app.post('/pokemons', function(req, res){
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'utec',
      password: '1234567890',
      database: 'pokedex'
    });
    connection.connect();
    var myQuery = " INSERT INTO pokemon (pokemon_name, pokemon_height, pokemon_category, " +
                    "pokemon_weight, pokemon_ability, pokemon_type, pokemon_image, created_date, modified_date)" +
                  " VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), NOW()); ";
    var myValues = [req.body.pokemon_name, req.body.pokemon_height,
        req.body.pokemon_category, req.body.pokemon_weight, req.body.pokemon_ability, req.body.pokemon_type, req.body.pokemon_image];
  
    connection.query(myQuery, myValues, function(error, results, fields){
      if (error) throw error;
      res.send(results);
      connection.end();
    });
  });


  /*
  Metodo que modifica un pokemon en funcion de su product_id
  localhost:3000/pokemons/1
     {
        "pokemon_name": "Gaaaa",
        "pokemon_height": 2,
        "pokemon_category": "Duck",
        "pokemon_weight": 43.2,
        "pokemon_ability": "Damp",
        "pokemon_type": "Water",
        "pokemon_image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png"
    }
*/
app.put('/pokemons/:pokemon_id', function(req, res){
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'utec',
      password: '1234567890',
      database: 'pokedex'
    });
    connection.connect();
    var myQuery = " UPDATE pokemon SET modified_date = NOW() ";
    var myValues = [ ];
    if (req.body.pokemon_name){
      myQuery += " , pokemon_name = ? ";
      myValues.push(req.body.pokemon_name);
    }
    if (req.body.pokemon_height){
      myQuery += " , pokemon_height = ? ";
      myValues.push(req.body.pokemon_height);
    }
    if (req.body.pokemon_category){
      myQuery += " , pokemon_category = ? ";
      myValues.push(req.body.pokemon_category);
    }
    if (req.body.pokemon_weight){
      myQuery += " , pokemon_weight = ? ";
      myValues.push(req.body.pokemon_weight);
    }
    if (req.body.pokemon_ability){
      myQuery += " , pokemon_ability = ? ";
      myValues.push(req.body.pokemon_ability);
    }
    if (req.body.pokemon_type){
        myQuery += " ,pokemon_type= ? ";
        myValues.push(req.body.pokemon_type);
      }
    if (req.body.pokemon_image){
        myQuery += " ,pokemon_image= ? ";
        myValues.push(req.body.pokemon_image);
    }

    myQuery += " WHERE pokemon_id = ? "
    myValues.push(req.params.pokemon_id);
    connection.query(myQuery, myValues, function(error, results, fields){
      if (error) throw error;
      res.send(results);
      connection.end();
    });
  });

  /* 
  Método que borra un pokemon determinado en base a su pokemon_id
  localhost:3000/pokemon/1
*/
app.delete('/pokemons/:pokemon_id', function(req, res){
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'utec',
      password: '1234567890',
      database: 'pokedex'
    });
    connection.connect();
    var myQuery = " DELETE FROM pokemon " +
                  " WHERE pokemon_id = ?; ";
    var myValues = [ req.params.pokemon_id];
    connection.query(myQuery, myValues, function(error, results, fields){
      if (error) throw error;
      res.send(results);
      connection.end();
    });
  });
  


app.listen(port, function(){
    console.log("Server start in port 3000!")
  })