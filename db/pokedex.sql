create database pokedex;
use pokedex;


CREATE TABLE pokemon(
    pokemon_id int NOT NULL AUTO_INCREMENT,
    pokemon_name varchar(100) NOT NULL,
    pokemon_height varchar(100) NOT NULL,
    pokemon_category varchar(100) NOT NULL,
    pokemon_weight varchar(100) NOT NULL,
    pokemon_ability varchar(100) NOT NULL,
    pokemon_type varchar(100) NOT NULL,
    pokemon_image varchar(256) NOT NULL,
    created_date datetime,
    modified_date datetime,
    PRIMARY KEY (pokemon_id)
);

INSERT INTO pokemon(pokemon_name, pokemon_height, pokemon_category, pokemon_weight, pokemon_ability, pokemon_type, pokemon_image, created_date, modified_date) 
VALUES ('Psyduck', "2' 07", 'Duck', "43.2 lbs", 'Damp', 'Water', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png', NOW(), NOW());


INSERT INTO pokemon(pokemon_name, pokemon_height, pokemon_category, pokemon_weight, pokemon_ability, pokemon_type, pokemon_image, created_date, modified_date) 
VALUES ('Staryu', "2' 07", 'Star Shape', "76.1 lbs", 'Natural Cure', 'Water', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/120.png', NOW(), NOW());

