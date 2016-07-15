drop database odalybr_register;
create database odalybr_register;
use odalybr_register;
create table member(	id int not null auto_increment, 
						name varchar(100) not null,
						address text default '',
						phone varchar(20) default '',
                        phone2 varchar(20) default '',
                        dob date default '1900/01/01',
                        email varchar(100) default 'x@y.com',
						amount varchar(10) default '0',
						receiptid varchar(20) default '0',
						team int default 0,
                        team2 int default 0,
                        team3 int default 0,
                        position int default 1,
                        position2 int default 1,
                        position3 int default 1,
                        lid int default 0,
                        favteam varchar(30) default '',
                        favplayer varchar(30) default '',
                        sappears int default 0,
                        sassists int default 0,
                        sgoals int default 0,
                        photo varchar(100) default 'resources/images/Players/default.png',
                        achievements text default '',
						status varchar(20) default '',
						primary key(id));

insert into member (name, address, phone, amount, team, position, lid, status)
values ( "Jonathan Leyden","12 High Garden, Ennis","0863231321", "", 3, 1, 0, "ACTIVE"),
	("Max Montwill","12 High Garden, Ennis","0868043227", "", 3, 1, 0, "ACTIVE"),
	("Conor Daly",	"12 High Garden, Ennis","0867957933", "", 3, 2, 0, "ACTIVE"),
	("Harry Doherty","12 High Garden, Ennis","0872867887", "", 3, 2, 0, "ACTIVE"),
	("Ronan Crowe",	"12 High Garden, Ennis","0860770108", "", 3, 2, 0, "ACTIVE"),
	("Joe Mannion",	"12 High Garden, Ennis","0868133901", "", 3, 2, 0, "ACTIVE"),
	("James Noone",	"12 High Garden, Ennis","0879412393", "", 3, 3, 0, "ACTIVE"),
	("Brian McCarthy","12 High Garden, Ennis","0879816929", "", 3, 3, 0, "ACTIVE"),
	("Shane Mescall","12 High Garden, Ennis","0877840194", "", 3, 3, 0, "ACTIVE"),
	("Michale Cotter","12 High Garden, Ennis","0876533996", "", 3, 3, 0, "ACTIVE"),
	("David Cahill","12 High Garden, Ennis","0873201875", "", 3, 3, 0, "ACTIVE"),
	("Callum Hayes","12 High Garden, Ennis","0870506909", "", 3, 3, 0, "ACTIVE"),
	("Conor Clancy","12 High Garden, Ennis","0876859638", "", 3, 2, 0, "ACTIVE"),
	("Harry Keane",	"12 High Garden, Ennis","0872195859", "", 3, 2, 0, "ACTIVE"),
	("Kailum Cahir","12 High Garden, Ennis","0876303395", "", 3, 2, 0, "ACTIVE"),
	("Ashton Glynn","12 High Garden, Ennis","0860612796", "", 3, 3, 0, "ACTIVE"),
	("Liam Clune",	"12 High Garden, Ennis","0873139539", "", 3, 3, 0, "ACTIVE"),
	("Robbie Whelan","12 High Garden, Ennis","0860606234", "", 3, 4, 0, "ACTIVE"),
	("Conor Byrne",	"12 High Garden, Ennis","0866009071", "", 3, 4, 0, "ACTIVE"),
	("Darragh Ball","12 High Garden, Ennis","0871266315", "", 3, 4, 0, "ACTIVE"),
	("Luke Troy","12 High Garden, Ennis","0834319305", "", 3, 99, 0, "ACTIVE"),
	("Paddy Honon","33 The Grove, Ennis","0864051423", "", 20, 4, 0, "ACTIVE"),
	("Tadgh Connellan","Ross Hill, Ennis","0851208695", "", 20, 4, 0, "ACTIVE"),
	("James Crotty","Ross Hill, Ennis","0872029157", "", 20, 2, 0, "ACTIVE"),
	("Nzube Okoye","Ross Hill, Ennis","0872025226", "", 20, 2, 0, "ACTIVE"),
	("Darren Meehan","Ross Hill, Ennis","0872996189", "", 20, 2, 0, "ACTIVE"),
	("Patrick McDade","Ross Hill, Ennis","0876873254", "", 20, 99, 0, "ACTIVE"),
	("Killian O'Daly","Ross Hill, Ennis","0876470883", "", 20, 3, 0, "ACTIVE"),
	("Tomás Hehir","Ross Hill, Ennis","0863647434", "", 20, 4, 0, "ACTIVE"),
	("David Roche","Ross Hill, Ennis","0852728382", "", 21, 4, 0, "ACTIVE"),
	("Michael Junaid","Ross Hill, Ennis","0877446858", "", 20, 4, 0, "ACTIVE"),
	("Sam Ogendare","Ross Hill, Ennis","0851358940", "", 20, 4, 0, "ACTIVE"),
	("Sean Murphy","Ross Hill, Ennis","0872861460", "", 20, 2, 0, "ACTIVE"),
	("Keith Shea","Ross Hill, Ennis","0877854002", "", 20, 2, 0, "ACTIVE"),
	("Mikey Whelan","Ross Hill, Ennis","", "", 20, 2, 0, "ACTIVE"),
	("Gavin Cooney","Ross Hill, Ennis","0862536423", "", 20, 3, 0, "ACTIVE"),
	("James Tierney","Ross Hill, Ennis","0864425778", "", 20, 3, 0, "ACTIVE"),
	("Sean Kennedy","Ross Hill, Ennis","0851487510", "", 20, 3, 0, "ACTIVE"),
	("Aidan Griffey","Ross Hill, Ennis","0877844717", "", 20, 4, 0, "ACTIVE"),
	("Aiden Kennedy","Ross Hill, Ennis","0868419095", "", 20, 4, 0, "ACTIVE"),
    ("Ikem Ugwueru","Ross Hill, Ennis","0877620262", "", 20, 4, 0, "ACTIVE"),
	("Brendan O'Daly","Reaskaun, Larchill, Ennis","0876470883", "", 20, 0, 0, "ACTIVE"),
    ("Nigel Braddish","Ross Hill, Ennis","0872873996", "", 20, 0, 0, "ACTIVE"),
    ("John O'Malley","Ross Hill, Ennis","0868419095", "", 3, 0, 0, "ACTIVE")	
    ;

create table team(	id int not null auto_increment, 
						name varchar(30) not null,
                        lrcode int default 0,
                        lrFixturesCode int default 0,
                        lrResultsCode int default 0,
                        noticeboard TEXT default "",
						primary key(id));
insert into team (name, lrcode, lrFixturesCode, lrResultsCode)
values ("U6", 0, 0, 0), ("U7", 0, 0, 0), ("U8", 0, 0, 0), ("U9", 0, 0, 0), ("U10 Red", 0, 0, 0), 
	("U10 White", 0, 0, 0), ("U10 Yellow", 0, 0, 0), ("U11 Red", 745232022, 530377386, 591085157), 
    ("U11 Yellow", 224536360, 233289274, 333809163), ("U12 Yellow", 93106739, 761679493, 238495100), 
    ("U12 Red", 981490997, 167998312, 424077788), ("U12 Black", 690514436, 379528802, 173041865),
    ("U13 Red", 213530053, 589636378, 914881997), ("U13 Yellow", 841563685, 150197009, 831166096), 
    ("U14A", 147793369, 422727929, 366970193),("U15A", 927116106, 230249319, 783042), 
    ("U15B", 713612540, 894019393, 481080003), ("U16A", 810798564, 603632641, 82105372), ("U17", 235560328, 0, 0), 
    ("U18", 606535916, 0, 0),
    ("U19", 524728553, 0, 0), ("Junior B", 590304743, 730135545, 752639963), 
    ("Junior A", 815861010, 235113417, 466218606);
            
CREATE  TABLE user (
  userid int NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  password VARCHAR(70) NOT NULL,
  address varchar(100),
  phone varchar(20),
  email varchar(100),
  dob Date,
  avatar varchar(200),
  enabled TINYINT NOT NULL DEFAULT 1,
  PRIMARY KEY (userid));
  
CREATE TABLE user_roles (
  user_role_id INT(11) NOT NULL AUTO_INCREMENT,
  userid int NOT NULL,
  name VARCHAR(45) NOT NULL,
  ROLE VARCHAR(45) NOT NULL,
  PRIMARY KEY (user_role_id),
  UNIQUE KEY uni_userid_role (ROLE,userid),
  KEY fk_name_idx (userid),
  CONSTRAINT fk_name FOREIGN KEY (userid) REFERENCES user (userid));

INSERT INTO user(name,password,address,email,dob,avatar,enabled)
VALUES ('guest','123', 'Reaskaun, Larchill, Ennis, Co. Clare', 'odalybr@hotmail.com', '1968/05/11', 'resources/images/users/Brendan.png',TRUE);
INSERT INTO user(name,password,address,phone,email,dob,avatar,enabled)
VALUES ('benny','corina', 'Reaskaun, Larchill, Ennis, Co. Clare', '0876470883', 'odalybr@hotmail.com', '1968/05/11', 'resources/images/users/Brendan.png',TRUE);
 
INSERT INTO user_roles (userid, name, ROLE)
VALUES (1, 'benny', 'ROLE_USER');
INSERT INTO user_roles (userid, name, ROLE)
VALUES (1, 'benny', 'ROLE_ADMIN');
INSERT INTO user_roles (userid, name, ROLE)
VALUES (2,'guest', 'ROLE_USER');

create table newsstory (	nsid INT(11) NOT NULL AUTO_INCREMENT,
							category VARCHAR(2) NOT NULL,
							title VARCHAR(50) NOT NULL,
							description VARCHAR(80) NOT NULL,
							story TEXT,
							image VARCHAR(100),
                            thumb VARCHAR(50),
							PRIMARY KEY (nsid) );
INSERT INTO newsstory ( category, title, description, story, image, thumb )
VALUES 	("G", "Avenue Junior A", "Avenue take the points at Tulla", "Last week was a busy one for the club with the return of mid week matches; on Wednesday last, both Junior A and U17 sides were in action in Tulla and both recorded wins against the hosts. In the Junior game, Avenue ran out winners on a 3-0 scoreline, Mark Roche, Pa Sherlock and Jack Arra getting the goals. The U17's had a facile win on a scoreline of 10-0. Mossy Hehir, Keith Shea, Killian O Daly, Gavin Cooney, Davie Roche, Aiden Griffey and Sam Ogundare all getting on the scoresheet.
On Saturday last, the U17's played their cup quarter final against Newmarket Celtic at Roslevan and ran out winners on a 7-1 scoreline. The first half was an even affair with Avenue leading by 1-0 at the break, Keith Shea getting the goal. The lads upped the ante in the second half with Shaysie (2), JT from the spot, Gavin Cooney, Mossy Hehir and Davy Roche all on the scoresheet.
On Sunday, the B side saw their title hopes take a knock after losing at home to Monutshannon on a 2-0 scoreline. Then on Easter Monday, the youths were inaction against Newmarket in the U19 cup semi final and they gave a tremendous team performance to book their place in the final on a 1-0 scoreline; a suiperb strike from Ronan Kerin enough to settle the tie. Late drama saw JamesTierney save a Newmarket penalty in the dying moments to deny Newmarket an equaliser and send the boys through to play Burren in the final.", "resources/news/001.jpg", "resources/news/thumb-001.jpg"),
		("G", "Avenue Junior B", "B's take vital win in the Bridge", "Last weekend saw both Avenue teams in action claim the 3 points on offer to them. On Saturday, the youths overcame Burren United on a 3-1 scoreline in Roslevan. Avenue opened the scoring in the 20th minute when Joe O Grady was on hand to put the finishing touch to a cross from Ronan Kerin. Avenue doubled their lead on the stroke of halftime when Tadgh Murphy volleyed to the net after an Avenue corner was partially cleared. Dean Malone then grabbed the third in the second half before Rowan Danagher netted a late consolation for the Burren boys.
On Sunday, the A team had a convincing win against relegation threatened Lifford on a 4-0 scoreline.", "resources/news/002.jpg", "resources/news/thumb-002.jpg"),
		("G", "Avenue U16s", "U16s make Cup Final", "", "resources/news/003.jpg", "resources/news/thumb-003.jpg"),
        ("A", "Summer Camp", "Avenue Summer Soccer School", "The Avenue United Summer Soccer School, in association with the FAI will take place from Monday July 6th to Friday July 10th. This will be a full on academy style camp following the Avenue theme of \"learning through fun\". Each kid receives a pack containing a jersey, socks, togs, football, cert and backpack, all he/she needs to feel like a professional. You can book your place on the camp at www.SummerSoccerSchools.ie or call 1890 653 653. Places are limited so don't delay", "resources/news/academy/avenuefai.jpg", ""),
        ("A", "Polska Éire", "First Polska Éire day", "Polksa Ireland day in Lees Road saw kids from all walks take part in the Avenue training camp and games. The camp started with coaching for all the kids in a fun environment and led into two matches to promote the Polksa Ireland day. Well done to all involved for both their hard work and participation, it was a great success.", "resources/news/academy/polskaday.png", "");
 
 
 CREATE TABLE sessionPlan (
	sessionid INT(11) NOT NULL AUTO_INCREMENT,
    teamid int,
    date date default '1900/01/01',
    details  text,
    PRIMARY KEY (sessionid));


INSERT INTO sessionPlan (teamid, date, details)
values	(3,'2015/07/05', 'First U8 session at Rosleven'),
		(3,'2015/07/12', 'U8 session at Rosleven'),
        (3,'2015/07/19', 'U8 session at Rosleven'),
        (3,'2015/07/24', 'U8 session at Rosleven'),
        (3,'2015/07/31', 'U8 session at Rosleven'),
        (3,'2015/08/06', 'U8 session at Rosleven'),
        (3,'2015/08/13', 'U8 session at Rosleven'),
        (3,'2015/08/20', 'U8 session at Rosleven');
    
CREATE TABLE sessionRecord (
	recid INT(11) NOT NULL AUTO_INCREMENT,
	teamid INT,
    memberid INT,
    sessionid INT,
    status boolean,
    PRIMARY KEY (recid));
    
INSERT INTO sessionRecord (teamid, memberid, sessionid, status)
VALUES 	(3, 28, 1, true),
		(3, 28, 2, true),
        (3, 28, 3, true),
        (3, 28, 4, true),
        (3, 28, 5, true),
        (3, 28, 6, true),
        (3, 28, 7, false),
        (3, 28, 8, true),
        (3, 22, 1, false),
        (3, 22, 2, false),
        (3, 22, 3, false),
        (3, 22, 4, false),
        (3, 22, 5, false),
        (3, 22, 6, false),
        (3, 22, 7, false),
        (3, 22, 8, false),
        (3, 23, 1, false),
        (3, 23, 2, true),
        (3, 23, 3, true),
        (3, 23, 4, true),
        (3, 23, 5, true),
        (3, 23, 6, true),
        (3, 23, 7, false),
        (3, 23, 8, true),
        (3, 24, 1, false),
        (3, 24, 2, true),
        (3, 24, 3, true),
        (3, 24, 4, true),
        (3, 24, 5, true),
        (3, 24, 6, true),
        (3, 24, 7, true),
        (3, 24, 8, false),
        (3, 25, 1, false),
        (3, 25, 2, true),
        (3, 25, 3, true),
        (3, 25, 4, true),
        (3, 25, 5, true),
        (3, 25, 6, true),
        (3, 25, 7, true),
        (3, 25, 8, true),
        (3, 26, 1, true),
        (3, 26, 2, true),
        (3, 26, 3, true),
        (3, 26, 4, true),
        (3, 26, 5, false),
        (3, 26, 6, true),
        (3, 26, 7, false),
        (3, 26, 8, true),
        (3, 27, 1, true),
        (3, 27, 2, true),
        (3, 27, 3, false),
        (3, 27, 4, true),
        (3, 27, 5, true),
        (3, 27, 6, true),
        (3, 27, 7, false),
        (3, 27, 8, true);
        
CREATE TABLE media (
	mediaid INT(11) NOT NULL AUTO_INCREMENT,
	type INT,
    location VARCHAR(50),
    title VARCHAR(50),
    description VARCHAR(200),
    PRIMARY KEY (mediaid));
    
CREATE  TABLE booking (
  bookingid int NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(20) NOT NULL,
  surname VARCHAR(20) NOT NULL,
  email varchar(100),
  phone varchar(20),
  country varchar(20),
  arrivaldate date,
  departuredate date,
  numberofnights int,
  numberofpeople int,
  parking int,
  vehicalreg varchar(20),
  totalcharge int,
  deposit double,
  tandc boolean,
  PRIMARY KEY (bookingid));

  
CREATE  TABLE ipn (
    ipnid int NOT NULL AUTO_INCREMENT,
	paymentType VARCHAR(20)default '',
	paymentDate VARCHAR(40)default '',
	paymentStatus VARCHAR(20) default '',
	pendingReason VARCHAR(20) default '',
	addressStatus VARCHAR(20) default '',
	payerStatus VARCHAR(20) default '',
	firstName VARCHAR(20) NOT NULL,
	lastName VARCHAR(20) NOT NULL,
	payerEmail VARCHAR(40) NOT NULL,
	payerId VARCHAR(20) NOT NULL,
	addressName VARCHAR(20) default '',
	addressCountry VARCHAR(10) default '',
	addressCountryCode VARCHAR(10) default '',
	addressZip VARCHAR(10) default '',
	addressState VARCHAR(20) default '',
	addressCity VARCHAR(10) default '',
	addressStreet VARCHAR(60) default '',
	business VARCHAR(40) default '',
	receiverEmail VARCHAR(40) default '',
	receiverId VARCHAR(20) default '',
	residenceCountry VARCHAR(20) default '',
    itemName VARCHAR(20) default '',
    itemNumber VARCHAR(20) default '',
    quantity int default 0,
    shipping VARCHAR(20) default '',
    tax VARCHAR(20) default '',   
    paymentCurrency VARCHAR(10) default '',
    mcFee VARCHAR(10) default '',
    paymentAmount VARCHAR(20) default '',
    mcHandling VARCHAR(10) default '',
    mcShipping VARCHAR(10) default '',
    txnType VARCHAR(20) default '',
	txnId VARCHAR(40) default '',
	notifyVersion VARCHAR(20) default '',
	parentTxnId VARCHAR(20) default '',
	reasonCode VARCHAR(20) default '',
	receiptId VARCHAR(20) default '',
	custom VARCHAR(20) default '',
	invoice VARCHAR(20) default '',
    logTime VARCHAR(30) default '',
    PRIMARY KEY (ipnid));