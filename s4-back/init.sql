CREATE DATABASE s4_sut;

USE s4_sut;

CREATE TABLE users(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(2000) NOT NULL,
    email varchar(2000) NOT NULL,
    nationalCode varchar(10) NOT NULL,
    studentId varchar(10),
    attendType varchar(10) NOT NULL
);