create database burgers_db;
 use  burgers_db;
Create table burgers(
	id int not null auto_increment,
    burger_name varchar(30),
    devoured boolean default false,
    primary key(id)
);