### Schema ###

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers 
(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (255),
    devoured BOOLEAN,
    PRIMARY KEY (id)
);

SELECT * FROM burgers;

DELETE FROM burgers WHERE id = 6;