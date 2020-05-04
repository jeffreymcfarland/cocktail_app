DROP DATABASE IF EXISTS cocktail_db;

CREATE DATABASE cocktail_db;

USE cocktail_db;

CREATE TABLE cocktails(
    id INT NOT NULL AUTO_INCREMENT,
    cocktail_name VARCHAR(75) NOT NULL,
    drank BOOLEAN NOT NULL DEFAULT false,
    PRIMARY KEY(id)
);