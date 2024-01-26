CREATE DATABASE dgrtwdyy_copains_dapres CHARACTER SET utf8;


USE dgrtwdyy_copains_dapres


DROP TABLE IF EXISTS Chat;
DROP TABLE IF EXISTS User;
DROP TABLE IF EXISTS Campany;
DROP TABLE IF EXISTS Token;
DROP TABLE IF EXISTS Advert;
DROP TABLE IF EXISTS HouseShare;
DROP TABLE IF EXISTS Service;
DROP TABLE IF EXISTS Picture;
DROP TABLE IF EXISTS Category;


CREATE TABLE IF NOT EXISTS Chat (
    id INTEGER PRIMARY KEY NOT NULL,
    sent_at TIMESTAMP,
    id_emitter INTEGER REFERENCES User(id),
    id_reciever INTEGER REFERENCES User(id),
)


CREATE TABLE IF NOT EXISTS User (
    id INTEGER PRIMARY KEY NOT NULL,
    first_name VARCHAR (30) NOT NULL,
    last_name VARCHAR (30),
    email VARCHAR(50) NOT NULL,
    password VARCHAR(30) NOT NULL,
    age INTEGER,
    description VARCHAR(200),
    picture VARCHAR(300),
    is_admin BOOLEAN,
    created_at TIMESTAMP,
    last_updated TIMESTAMP
)


CREATE TABLE IF NOT EXISTS Company (
    siret INTEGER PRIMARY KEY NOT NULL,
    website VARCHAR(100),
    telephone VARCHAR(10),
    id_user INTEGER REFERENCES User(id)
)


CREATE TABLE IF NOT EXISTS Token (
    id INTEGER PRIMARY KEY NOT NULL,
    value VARCHAR(100),
    expires_at TIMESTAMP,
    created_at TIMESTAMP,
    last_updated TIMESTAMP
)


CREATE TABLE IF NOT EXISTS Advert (
    id INTEGER PRIMARY KEY NOT NULL,
    title VARCHAR (50),
    description VARCHAR(500),
    location VARCHAR(30),
    created_at TIMESTAMP,
    Last_updated TIMESTAMP
    id_user INTEGER REFERENCES User(id)
)


CREATE TABLE IF NOT EXISTS HouseShare (
    id INTEGER PRIMARY KEY NOT NULL,
    housing_type VARCHAR(11),
    is_furnished BOOLEAN,
    surface_area FLOAT,
    pets_allowed BOOLEAN,
    wifi_available BOOLEAN,
    low_mobulity_friendly BOOLEAN,
    has_garden BOOLEAN,
    rent INTEGER,
    id_advert INTEGER REFERENCES Advert(id),
    id_address INTEGER REFERENCES Address(id)
)


CREATE TABLE IF NOT EXISTS Address (
    id INTEGER PRIMARY KEY NOT NULL,
    number VARCHAR(8),
    street VARCHAR(30),
    city VARCHAR(20),
    zip VARCHAR(10)
)


CREATE TABLE IF NOT EXISTS Service (
    id INTEGER PRIMARY KEY NOT NULL,
    hourly_rate FLOAT,
    id_advert INTEGER REFERENCES Advert (id)
)


CREATE TABLE IF NOT EXISTS Picture (
    id INTEGER PRIMARY KEY NOT NULL,
    url VARCHAR(250),
    created_at TIMESTAMP,
    last_updated TIMESTAMP,
)


CREATE TABLE IF NOT EXISTS Category (
    id INTEGER PRIMARY KEY NOT NULL,
    name VARCHAR(15),
    created_at TIMESTAMP,
    last_updated TIMESTAMP,
    id_advert INTEGER REFERENCES Advert(id)
)

