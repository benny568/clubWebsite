drop database register;
create database register;
use register;
create table member(	id int not null auto_increment, 
						name varchar(100) not null,
						address text,
						phone varchar(10),
						amount varchar(10),
						team int,
                        position int,
						status varchar(20),
						primary key(id));

insert into member (name, address, phone, amount, team, position, status)
values ( "Jonathan Leyden","12 High Garden, Ennis","0863231321", "0", 3, 1, "ACTIVE"),
	("Max Montwill","12 High Garden, Ennis","0868043227", "0", 3, 1, "ACTIVE"),
	("Conor Daly",	"12 High Garden, Ennis","0867957933", "0", 3, 2, "ACTIVE"),
	("Harry Doherty","12 High Garden, Ennis","0872867887", "0", 3, 2, "ACTIVE"),
	("Ronan Crowe",	"12 High Garden, Ennis","0860770108", "0", 3, 2, "ACTIVE"),
	("Joe Mannion",	"12 High Garden, Ennis","0868133901", "0", 3, 2, "ACTIVE"),
	("James Noone",	"12 High Garden, Ennis","0879412393", "0", 3, 3, "ACTIVE"),
	("Brian McCarthy","12 High Garden, Ennis","0879816929", "0", 3, 3, "ACTIVE"),
	("Shane Mescall","12 High Garden, Ennis","0877840194", "0", 3, 3, "ACTIVE"),
	("Michale Cotter","12 High Garden, Ennis","0876533996", "0", 3, 3, "ACTIVE"),
	("David Cahill","12 High Garden, Ennis","0873201875", "0", 3, 3, "ACTIVE"),
	("Callum Hayes","12 High Garden, Ennis","0870506909", "0", 3, 3, "ACTIVE"),
	("Conor Clancy","12 High Garden, Ennis","0876859638", "0", 3, 2, "ACTIVE"),
	("Harry Keane",	"12 High Garden, Ennis","0872195859", "0", 3, 2, "ACTIVE"),
	("Kailum Cahir","12 High Garden, Ennis","0876303395", "0", 3, 2, "ACTIVE"),
	("Ashton Glynn","12 High Garden, Ennis","0860612796", "0", 3, 3, "ACTIVE"),
	("Liam Clune",	"12 High Garden, Ennis","0873139539", "0", 3, 3, "ACTIVE"),
	("Robbie Whelan","12 High Garden, Ennis","0860606234", "0", 3, 4, "ACTIVE"),
	("Conor Byrne",	"12 High Garden, Ennis","0866009071", "0", 3, 4, "ACTIVE"),
	("Darragh Ball","12 High Garden, Ennis","0871266315", "0", 3, 4, "ACTIVE"),
	("Luke Troy","12 High Garden, Ennis","0834319305", "0", 3, 99, "ACTIVE"),
	("Paddy Honon","33 The Grove, Ennis","0864051423", "0", 19, 4, "ACTIVE"),
	("Tadgh Connellan","Ross Hill, Ennis","0851208695", "0", 19, 4, "ACTIVE"),
	("James Crotty","Ross Hill, Ennis","0872029157", "0", 19, 2, "ACTIVE"),
	("Nzube Okoye","Ross Hill, Ennis","0872025226", "0", 19, 2, "ACTIVE"),
	("Darren Meehan","Ross Hill, Ennis","0872996189", "0", 19, 2, "ACTIVE"),
	("Patrick McDade","Ross Hill, Ennis","0876873254", "0", 19, 99, "ACTIVE"),
	("Killian O'Daly","Ross Hill, Ennis","0876470883", "0", 19, 3, "ACTIVE"),
	("Tomás Hehir","Ross Hill, Ennis","0863647434", "0", 19, 4, "ACTIVE"),
	("David Roche","Ross Hill, Ennis","0852728382", "0", 19, 4, "ACTIVE"),
	("Michael Junaid","Ross Hill, Ennis","0877446858", "0", 19, 4, "ACTIVE"),
	("Sam Ogendare","Ross Hill, Ennis","0851358940", "0", 19, 4, "ACTIVE"),
	("Sean Murphy","Ross Hill, Ennis","0872861460", "0", 19, 2, "ACTIVE"),
	("Keith Shea","Ross Hill, Ennis","0877854002", "0", 19, 2, "ACTIVE"),
	("Mikey Whelan","Ross Hill, Ennis","", "0", 19, 2, "ACTIVE"),
	("Gavin Cooney","Ross Hill, Ennis","0862536423", "0", 19, 3, "ACTIVE"),
	("James Tierney","Ross Hill, Ennis","0864425778", "0", 19, 3, "ACTIVE"),
	("Sean Kennedy","Ross Hill, Ennis","0851487510", "0", 19, 3, "ACTIVE"),
	("Aidan Griffey","Ross Hill, Ennis","0877844717", "0", 19, 4, "ACTIVE"),
	("Aiden Kennedy","Ross Hill, Ennis","0868419095", "0", 19, 4, "ACTIVE"),
    ("Ikem Ugwueru","Ross Hill, Ennis","0877620262", "0", 19, 4, "ACTIVE"),
	("Brendan O'Daly","Reaskaun, Larchill, Ennis","0876470883", "0", 19, 0, "ACTIVE"),
    ("Nigel Braddish","Ross Hill, Ennis","0872873996", "0", 19, 0, "ACTIVE"),
    ("John O'Malley","Ross Hill, Ennis","0868419095", "0", 3, 0, "ACTIVE"),
	("Oisín","Ross Hill, Ennis","0877620262", "0", 12, 1, "ACTIVE"),
    ("Gavin D'Auria","Ross Hill, Ennis","0877620262", "0", 12, 2, "ACTIVE"),
    ("Tom xxx","Ross Hill, Ennis","0877620262", "0", 12, 2, "ACTIVE"),
    ("Orin Meeney","Ross Hill, Ennis","0877620262", "0", 12, 2, "ACTIVE"),
    ("Chibe Okoye","Ross Hill, Ennis","0877620262", "0", 12, 2, "ACTIVE"),
    ("Cian McDonagh","Ross Hill, Ennis","0877620262", "0", 12, 3, "ACTIVE"),
    ("Jack Joyce","Ross Hill, Ennis","0877620262", "0", 12, 3, "ACTIVE"),
    ("Stephen Talty","Ross Hill, Ennis","0877620262", "0", 12, 99, "ACTIVE"),
    ("Manus Dorothy","Ross Hill, Ennis","0877620262", "0", 12, 3, "ACTIVE"),
    ("Eimhin O'Daly","Ross Hill, Ennis","0877620262", "0", 12, 4, "ACTIVE"),
    ("Bruce xxxxx","Ross Hill, Ennis","0877620262", "0", 12, 4, "ACTIVE"),
    ("Dillon xxxxxx","Ross Hill, Ennis","0877620262", "0", 12, 3, "ACTIVE"),
    ("Enda Meeney","Larchill, Ennis","0877620262", "0", 12, 0, "ACTIVE"),
    ("Colin McDonagh","Ross Hill, Ennis","0877620262", "0", 12, 0, "ACTIVE"),
    ("Brendan O'Daly","Reaskaun, Larchill, Ennis","0877620262", "0", 12, 0, "ACTIVE"),
    ("Tony Downey","Ross Hill, Ennis","0877620262", "0", 12, 0, "ACTIVE"),
    ("Player 1","Ross Hill, Ennis","0877620262", "0", 6, 1, "ACTIVE"),
    ("Player 2","Ross Hill, Ennis","0877620262", "0", 6, 1, "ACTIVE"),
    ("Player 3","Ross Hill, Ennis","0877620262", "0", 6, 1, "ACTIVE"),
    ("Player 4","Ross Hill, Ennis","0877620262", "0", 6, 1, "ACTIVE"),
    ("Player 5","Ross Hill, Ennis","0877620262", "0", 6, 1, "ACTIVE"),
    ("Player 6","Ross Hill, Ennis","0877620262", "0", 6, 1, "ACTIVE"),
    ("Player 7","Ross Hill, Ennis","0877620262", "0", 6, 1, "ACTIVE"),
    ("Player 8","Ross Hill, Ennis","0877620262", "0", 6, 1, "ACTIVE"),
    ("Player 9","Ross Hill, Ennis","0877620262", "0", 6, 1, "ACTIVE"),
    ("Player 10","Ross Hill, Ennis","0877620262", "0", 6, 99, "ACTIVE"),
    ("Player 11","Ross Hill, Ennis","0877620262", "0", 6, 1, "ACTIVE"),
    ("Player 12","Ross Hill, Ennis","0877620262", "0", 6, 1, "ACTIVE"),
    ("Player 13","Ross Hill, Ennis","0877620262", "0", 6, 1, "ACTIVE"),
    ("Player 14","Ross Hill, Ennis","0877620262", "0", 6, 1, "ACTIVE"),
    ("Player 15","Ross Hill, Ennis","0877620262", "0", 6, 0, "ACTIVE"),
    ("Player 16","Ross Hill, Ennis","0877620262", "0", 6, 0, "ACTIVE"),
	("Player 1","Ross Hill, Ennis","0877620262", "0", 7, 1, "ACTIVE"),
    ("Player 2","Ross Hill, Ennis","0877620262", "0", 7, 1, "ACTIVE"),
    ("Player 3","Ross Hill, Ennis","0877620262", "0", 7, 1, "ACTIVE"),
    ("Player 4","Ross Hill, Ennis","0877620262", "0", 7, 1, "ACTIVE"),
    ("Player 5","Ross Hill, Ennis","0877620262", "0", 7, 1, "ACTIVE"),
    ("Player 6","Ross Hill, Ennis","0877620262", "0", 7, 1, "ACTIVE"),
    ("Player 7","Ross Hill, Ennis","0877620262", "0", 7, 1, "ACTIVE"),
    ("Player 8","Ross Hill, Ennis","0877620262", "0", 7, 1, "ACTIVE"),
    ("Player 9","Ross Hill, Ennis","0877620262", "0", 7, 1, "ACTIVE"),
    ("Player 10","Ross Hill, Ennis","0877620262", "0", 7, 99, "ACTIVE"),
    ("Player 11","Ross Hill, Ennis","0877620262", "0", 7, 1, "ACTIVE"),
    ("Player 12","Ross Hill, Ennis","0877620262", "0", 7, 1, "ACTIVE"),
    ("Player 13","Ross Hill, Ennis","0877620262", "0", 7, 1, "ACTIVE"),
    ("Player 14","Ross Hill, Ennis","0877620262", "0", 7, 1, "ACTIVE"),
    ("Player 15","Ross Hill, Ennis","0877620262", "0", 7, 0, "ACTIVE"),
    ("Player 16","Ross Hill, Ennis","0877620262", "0", 7, 0, "ACTIVE")
    ;
	
create table team(	id int not null auto_increment, 
						name varchar(30) not null,
                        lrcode int,
						primary key(id));
insert into team (name, lrcode)
values ("U6", 0), ("U7", 0), ("U8", 0), ("U9", 0), ("U10", 0), ("U11 Red", 672936870), ("U11 Yellow", 293150747), ("U12A", 898378654), ("U12B", 581109106), ("U13A", 334178093), ("U13B", 874844096), ("U14A", 155756020), ("U14B", 0),
			("U15A", 634698290), ("U15B", 535908601), ("U16A", 0), ("U16B", 0), ("U17", 235560328), ("U18", 606535916), ("U19", 524728553), ("Junior B", 590304743), ("Junior A", 747448681);
            
CREATE  TABLE users (
  username VARCHAR(45) NOT NULL ,
  password VARCHAR(45) NOT NULL ,
  enabled TINYINT NOT NULL DEFAULT 1 ,
  PRIMARY KEY (username));
  
CREATE TABLE user_roles (
  user_role_id INT(11) NOT NULL AUTO_INCREMENT,
  username VARCHAR(45) NOT NULL,
  ROLE VARCHAR(45) NOT NULL,
  PRIMARY KEY (user_role_id),
  UNIQUE KEY uni_username_role (ROLE,username),
  KEY fk_username_idx (username),
  CONSTRAINT fk_username FOREIGN KEY (username) REFERENCES users (username));

INSERT INTO users(username,password,enabled)
VALUES ('guest','123', TRUE);
INSERT INTO users(username,password,enabled)
VALUES ('benny','corina', TRUE);
 
INSERT INTO user_roles (username, ROLE)
VALUES ('benny', 'ROLE_USER');
INSERT INTO user_roles (username, ROLE)
VALUES ('benny', 'ROLE_ADMIN');
INSERT INTO user_roles (username, ROLE)
VALUES ('guest', 'ROLE_USER');

create table newsitem (	nsid INT(11) NOT NULL AUTO_INCREMENT,
						title VARCHAR(18) NOT NULL,
						description VARCHAR(34) NOT NULL,
						image VARCHAR(20) NOT NULL,
						PRIMARY KEY (nsid) );
INSERT INTO newsitem ( 	title, description, image )
VALUES 	("Avenue Junior A", "Avenue take the points at Tulla", "001.jpg"),
		("Avenue Junior B", "B's take vital win in the Bridge", "002.jpg"),
		("Avenue U16s", "U16s make Cup Final", "003.jpg");