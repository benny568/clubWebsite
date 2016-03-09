LOAD DATA INFILE 'c:/tmp/Database.csv' 
INTO TABLE odalybr_register.member 
FIELDS TERMINATED BY ',' 
LINES TERMINATED BY '\n';

update odalybr_register.member set dob = '1900/01/01' where dob = '0000/00/00';
update odalybr_register.member set dob = '1998/08/16' where id = 28;
update odalybr_register.member set photo = 'resources/images/Players/U18/KillianODaly.png' where id = 28;
update odalybr_register.member set photo = 'resources/images/Players/U14A/CianMcDonough.jpg' where lid = 902;
update odalybr_register.member set dob = '2001/04/16', position = 3 where lid = 1190;
update odalybr_register.member set achievements = 'Top goal scorer in U11c league with 26 goals in xx games (2012). Represented Clare in the 2015 Kennedy Cup. Cup Medals: 1, League Medals: 2.' where lid = 1190;
update odalybr_register.member set photo = 'resources/images/Players/U14A/EimhinODaly.jpg' where lid = 1190;
update odalybr_register.member set favteam = 'Real Madrid', favplayer = 'Cristiano Ronaldo' where lid = 1190;
update odalybr_register.member set photo = 'resources/images/Players/U14A/ChibikemOkoye.jpg' where lid = 1247;
update odalybr_register.member set photo = 'resources/images/Players/U14A/DylanBrowne.jpg' where lid = 74;
update odalybr_register.member set photo = 'resources/images/Players/U14A/GavinDauria.jpg' where lid = 321;
update odalybr_register.member set photo = 'resources/images/Players/U14A/JackJoyce.jpg' where lid = 658;
update odalybr_register.member set photo = 'resources/images/Players/U14A/ManusDorherty.jpg' where lid = 356;
update odalybr_register.member set photo = 'resources/images/Players/U14A/OranMeaney.jpg' where lid = 1003;
update odalybr_register.member set photo = 'resources/images/Players/U14A/StephenTalty.jpg' where lid = 1467;
update odalybr_register.member set photo = 'resources/images/Players/U14A/MarkMcInery.jpg' where lid = 934;

INSERT INTO newsstory ( category, title, description, story, image, thumb )
VALUES 	("G", "Kicking for Killian", "Killian's Story", "Killian Browne is aged 6 from Listowel,
Co. Kerry. He has recently been diagnosed
with all leukaemia. He is currently attending to Crumlin Hospital every week for treatment as well as visiting Tralee hospital.
Before Kilian got sick he was just like any other typical 6 year old. He loved playing football with his friends and playing with his brothers. When he gets older he wants to be a fireman and help others.
The treatment that Kilian is getting sometimes makes him very sick, but he is determined not to let it stop him from playing or having fun. Killian understands he needs the treatment to get better and he looks forward to the day he can once again play football.", "resources/news/killStory.jpg", ""),
("G", "Scrap Metal Collection", "25th July", "We will have another metal collection on Saturday 25th July. All proceeds to towards the pitch development at the Rosleven.", "resources/news/scrapmetal.jpg", "");

INSERT INTO media (type, title, location, description)
VALUES 	(0,"2015 Cup Final vs. Coole", "resources/images/actionshots/1.jpg", "Killian O' Daly fights for the ball against Coole at the County grounds in Doora."),
		(0,"2015 Cup Final vs. Coole", "resources/images/actionshots/2.jpg", "Killian O' Daly fights for the ball against Coole at the County grounds in Doora."),
		(0,"2015 Cup Final vs. Coole", "resources/images/actionshots/3.jpg", "Killian O' Daly fights for the ball against Coole at the County grounds in Doora."),
		(0,"2015 Cup Final vs. Coole", "resources/images/actionshots/4.jpg", "Killian O' Daly fights for the ball against Coole at the County grounds in Doora."),
		(0,"2015 Cup Final vs. Coole", "resources/images/actionshots/5.jpg", "Killian O' Daly fights for the ball against Coole at the County grounds in Doora."),
		(0,"2015 Cup Final vs. Coole", "resources/images/actionshots/6.jpg", "Killian O' Daly fights for the ball against Coole at the County grounds in Doora."),
		(0,"2015 Cup Final vs. Coole", "resources/images/actionshots/7.jpg", "Killian O' Daly fights for the ball against Coole at the County grounds in Doora."),
		(0,"2015 Cup Final vs. Coole", "resources/images/actionshots/8.jpg", "Killian O' Daly fights for the ball against Coole at the County grounds in Doora."),
		(0,"2015 Cup Final vs. Coole", "resources/images/actionshots/9.jpg", "Killian O' Daly fights for the ball against Coole at the County grounds in Doora."),
		(0,"2015 Cup Final vs. Coole", "resources/images/actionshots/10.jpg", "Killian O' Daly fights for the ball against Coole at the County grounds in Doora."),
		(0,"2015 Cup Final vs. Coole", "resources/images/actionshots/11.jpg", "Killian O' Daly fights for the ball against Coole at the County grounds in Doora.");