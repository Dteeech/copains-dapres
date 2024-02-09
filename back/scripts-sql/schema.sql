CREATE TABLE Token (
    id INTEGER PRIMARY KEY NOT NULL,
    value VARCHAR(100),
    expires_at TIMESTAMP,
    created_at TIMESTAMP,
    last_updated TIMESTAMP
);

CREATE TABLE "User" (
    id INTEGER PRIMARY KEY NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30),
    email VARCHAR(50) NOT NULL,
    password VARCHAR(30) NOT NULL,
    age INTEGER,
    description VARCHAR(200),
    picture VARCHAR(300),
    is_admin BOOLEAN,
    created_at TIMESTAMP,
    last_updated TIMESTAMP,
    id_token INTEGER REFERENCES Token (id)
);
 
CREATE TABLE Chat (
    id INTEGER PRIMARY KEY NOT NULL,
    sent_at TIMESTAMP,
    id_emitter INTEGER REFERENCES "User" (id),
    id_receiver INTEGER REFERENCES "User" (id)
);
 
CREATE TABLE Company (
    siret INTEGER PRIMARY KEY NOT NULL,
    website VARCHAR(100),
    telephone VARCHAR(10),
    id_user INTEGER REFERENCES "User" (id)
);
 
CREATE TABLE Advert (
    id INTEGER PRIMARY KEY NOT NULL,
    title VARCHAR(50),
    description VARCHAR(500),
    location VARCHAR(30),
    created_at TIMESTAMP,
    last_updated TIMESTAMP,
    id_user INTEGER REFERENCES "User" (id)
);
 
CREATE TABLE Address (
    id INTEGER PRIMARY KEY NOT NULL,
    number VARCHAR(8),
    street VARCHAR(30),
    city VARCHAR(20),
    zip VARCHAR(10)
);
 
CREATE TABLE HouseShare (
    id INTEGER PRIMARY KEY NOT NULL,
    housing_type VARCHAR(11),
    is_furnished BOOLEAN,
    surface_area FLOAT,
    pets_allowed BOOLEAN,
    wifi_available BOOLEAN,
    low_mobility_friendly BOOLEAN,
    has_garden BOOLEAN,
    rent INTEGER,
    id_advert INTEGER REFERENCES Advert (id),
    id_address INTEGER REFERENCES Address (id)
);
 
CREATE TABLE Service (
    id INTEGER PRIMARY KEY NOT NULL,
    hourly_rate FLOAT,
    id_advert INTEGER REFERENCES Advert (id)
);
 
CREATE TABLE Picture (
    id INTEGER PRIMARY KEY NOT NULL,
    url VARCHAR(250),
    created_at TIMESTAMP,
    last_updated TIMESTAMP
);
 
CREATE TABLE Category (
    id INTEGER PRIMARY KEY NOT NULL,
    name VARCHAR(15),
    created_at TIMESTAMP,
    last_updated TIMESTAMP,
    id_advert INTEGER REFERENCES Advert (id)
);