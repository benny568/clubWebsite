package org.avenue.service.controller;

import java.io.IOException;
import java.security.Principal;
import java.util.Calendar;
import java.util.List;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.avenue.dao.TaskManagerService;
import org.avenue.exceptions.IpnException;
import org.avenue.service.domain.Booking;
import org.avenue.service.domain.EmailMessage;
import org.avenue.service.domain.Media;
import org.avenue.service.domain.Member;
import org.avenue.service.domain.NewsStory;
import org.avenue.service.domain.SessionPlan;
import org.avenue.service.domain.SessionRecord;
import org.avenue.service.domain.Team;
import org.avenue.service.domain.Worker;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;



/**
 * @author odalybr
 *
 */
//@CrossOrigin()
@RestController
public class TaskManagerController {
	java.sql.Timestamp currentTimestamp = null;
	private final Logger log = LoggerFactory.getLogger(TaskManagerController.class);
	
	public TaskManagerController(){}
	
	TaskManagerService taskmanagerservice=new TaskManagerService();

	 @RequestMapping(value="/admin/team/{teamId}",method = RequestMethod.GET,headers="Accept=application/json")
	 public List<Member> getMembersByTeam(@PathVariable int teamId) {
		 log.debug("## [TaskManagerController]->getMembersByTeam(" + teamId + ")");
		 List<Member> members=taskmanagerservice.getMembersByTeam(teamId);
		 return members;
	
	 }
	 
	 @RequestMapping(value="/admin/teams",method = RequestMethod.GET,headers="Accept=application/json")
	 public List<Team> getTeams() {
		 log.debug("## [TaskManagerController]->getTeams()..");
		 List<Team> teams=taskmanagerservice.getAllTeams();
		 return teams;
	
	 }
	 
	 @RequestMapping(value="/teams",method = RequestMethod.GET,headers="Accept=application/json")
	 public List<Team> getAllTeams() {
		 log.debug("## [TaskManagerController]->getTeams()..");
		 List<Team> teams=taskmanagerservice.getAllTeams();
		 return teams;
	
	 }
	 
	 @RequestMapping(value="/stories",method = RequestMethod.GET,headers="Accept=application/json")
	 public List<NewsStory> getNewsStories() {
		 log.debug("##                        |-> getNewsStories()..");
		 List<NewsStory> stories=taskmanagerservice.getNewsStories();
		 log.debug("##                        |<- getNewsStories()..");
		 return stories;
	
	 }
	 
	 @RequestMapping(value="/team/{teamName}",method = RequestMethod.GET,headers="Accept=application/json")
	 public Team getTeamDetails(@PathVariable String teamName) {
		 log.debug("## [TaskManagerController]->getTeamDetails(" + teamName + ")..");
		 Team team=taskmanagerservice.getTeamDetails(teamName);
		 return team;
	
	 }
	 
	 @RequestMapping(value="/teammembers/{teamName}",method = RequestMethod.GET,headers="Accept=application/json")
	 public List<Member> getMembersByTeam(@PathVariable String teamName) {
		 log.debug("## [TaskManagerController]->getMembersByTeam(" + teamName + ")");
		 List<Member> members=taskmanagerservice.getMembersByTeam(taskmanagerservice.getTeamId(teamName));
		 return members;
	
	 }
	 
	 @RequestMapping(value="/academy/news",method = RequestMethod.GET,headers="Accept=application/json")
	 public List<NewsStory> getAcademyNews() {	 
	  List<NewsStory> news=taskmanagerservice.getAcademyNews();
	  return news;
	
	 }
	 
	 @RequestMapping(value="/admin/submitNews",method = RequestMethod.POST)
	 public void submitNewsStory(@RequestBody NewsStory newsStory) {	 
		 taskmanagerservice.submitNewsStory( newsStory );	
	 }
	 
	 @RequestMapping(value="/admin/story",method = RequestMethod.DELETE)
	 public void deleteNewsStory(@RequestBody NewsStory newsStory) {	 
		 taskmanagerservice.deleteNewsStory( newsStory );	
	 }
	 
	 @RequestMapping(value="/admin/story",method = RequestMethod.PUT)
	 public void updateNewsStory(@RequestBody NewsStory newsStory) {	 
		 taskmanagerservice.updateNewsStory( newsStory );	
	 }
	 
	 @RequestMapping(value="/admin/members",method = RequestMethod.GET,headers="Accept=application/json")
	 public List<Member> getAllTasks() {
		 log.debug("## [TaskManagerController]->getAllTasks()..");
	  List<Member> members=taskmanagerservice.getAllMembers();
	  return members;
	
	 }
	 
	 @RequestMapping(value="/admin/member",method = RequestMethod.POST)
	 public void addMember(@RequestBody Member member) {	 
		 taskmanagerservice.addMember( member );	
	 }
	 
	 @RequestMapping(value="/admin/member",method = RequestMethod.PUT)
	 public void updateMemberDetails(@RequestBody Member member) {	 
		 taskmanagerservice.updateMemberDetails( member );
	 }
	 
	 @RequestMapping(value="/admin/member",method = RequestMethod.DELETE)
	 public void deleteMemberDetails(@RequestBody int memberId) {	 
		 taskmanagerservice.deleteMemberDetails( memberId );	
	 }	 

	 
	 @RequestMapping(value="/admin/upload",method = RequestMethod.POST)
	 public void uploadNewsPic(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException
	 {
		 currentTimestamp = new java.sql.Timestamp(Calendar.getInstance().getTime().getTime());
		 System.out.println(currentTimestamp + ": ## [TaskManagerController]->uploadNewsPic()");
		 
		 System.out.println("## ############################################################## ##");
		 System.out.println("## ^^^^^^^^^^^^^^^^^^^^ NEWS UPLOAD RECEIVED ^^^^^^^^^^^^^^^^^^^^ ##");
		 System.out.println("## ############################################################## ##");
		 System.out.println("## ############################################################## ##");
		 System.out.println("## ^^^^^^^^^^^^^^^^^^^^ NEWS UPLOAD RECEIVED ^^^^^^^^^^^^^^^^^^^^ ##");
		 System.out.println("## ############################################################## ##");
		 System.out.println("## ############################################################## ##");
		 System.out.println("## ^^^^^^^^^^^^^^^^^^^^ NEWS UPLOAD RECEIVED ^^^^^^^^^^^^^^^^^^^^ ##");
		 System.out.println("## ############################################################## ##");
		 System.out.println("## ############################################################## ##");
		 System.out.println("## ^^^^^^^^^^^^^^^^^^^^ NEWS UPLOAD RECEIVED ^^^^^^^^^^^^^^^^^^^^ ##");
		 System.out.println("## ############################################################## ##");
		 System.out.println("## ############################################################## ##");
		 System.out.println("## ^^^^^^^^^^^^^^^^^^^^ NEWS UPLOAD RECEIVED ^^^^^^^^^^^^^^^^^^^^ ##");
		 System.out.println("## ############################################################## ##");
		 System.out.println("## ############################################################## ##");
		 System.out.println("## ^^^^^^^^^^^^^^^^^^^^ NEWS UPLOAD RECEIVED ^^^^^^^^^^^^^^^^^^^^ ##");
		 System.out.println("## ############################################################## ##");
		 
		 taskmanagerservice.uploadNews(req, res);
	 }
	 
	 @RequestMapping(value="/admin/team",method = RequestMethod.POST)
	 public void addTeam(@RequestBody Team team) {	 
		 taskmanagerservice.addTeam( team );
	 }
	 
	 @RequestMapping(value="/admin/team",method = RequestMethod.PUT)
	 public void updateTeam(@RequestBody Team team) {	 
		 taskmanagerservice.updateTeam( team );
	 }
	 
	 @RequestMapping(value="/admin/team",method = RequestMethod.DELETE)
	 public void deleteTeam(@RequestBody int teamId) {	 
		 taskmanagerservice.deleteTeam( teamId );
	 }
	 
	 @RequestMapping(value="/admin/sessionplan/{teamId}",method = RequestMethod.GET,headers="Accept=application/json")
	 public List<SessionPlan> getTrainingSessions(@PathVariable int teamId) {	 
	  List<SessionPlan> sessions=taskmanagerservice.getTrainingSessionsForTeam(teamId);
	  return sessions;	
	 }
	 
	 @RequestMapping(value="/admin/session",method = RequestMethod.POST)
	 public void addTrainingSession(@RequestBody SessionPlan session)
	 {
		 System.out.println("## [TaskManagerController]->addTrainingSession(): " + session);
		 taskmanagerservice.addTrainingSessionPlan(session);
	 }
	 
	 @RequestMapping(value="/admin/sessionrec",method = RequestMethod.GET,headers="Accept=application/json")
	 public List<SessionRecord> getSessionRecords() {	 
	  List<SessionRecord> sessions=taskmanagerservice.getSessionRecords();
	  return sessions;	
	 }
	 
	 @RequestMapping(value="/admin/sessionrec/{teamid}",method = RequestMethod.GET,headers="Accept=application/json")
	 public  List<SessionRecord> getSessionRecordsForTeam(@PathVariable int teamid) {	 
		 List<SessionRecord> sessions=taskmanagerservice.getSessionRecordsForTeam(teamid);
		 return sessions;	
	 }
	 
	 @RequestMapping(value="/admin/sessionrec/{sessionid}/{teamid}/{userid}",method = RequestMethod.GET,headers="Accept=application/json")
	 public  SessionRecord getSessionRecordsForTeam(@PathVariable int sessionid, @PathVariable int teamid, @PathVariable int memberid) {	 
		 SessionRecord session=taskmanagerservice.getSessionRecordForMember(sessionid,teamid,memberid);
		 return session;	
	 }
	 
	 @RequestMapping(value="/admin/sessionrec",method = RequestMethod.PUT)
	 public void setSessionRecord(@RequestBody SessionRecord sr) {	 
		 taskmanagerservice.setSessionRecordForMember(sr);	
	 }
	 
	 @RequestMapping(value="/admin/sessionrec",method = RequestMethod.POST,headers="Accept=application/json")
	 public void insertSessionRecord(@RequestBody SessionRecord sr) {	 
		 taskmanagerservice.insertSessionRecordForMember(sr);	
	 }
	 
	 
	 @RequestMapping(value="/admin/user",method = RequestMethod.GET,headers="Accept=application/json")
	 public Worker getUserName(Principal principal) {
		 User activeUser = (User) ((Authentication) principal).getPrincipal();
		 String username = activeUser.getUsername();
		 Worker thisUser = taskmanagerservice.getUserByName(username);
		 return thisUser;	
	 }
	 
	 @RequestMapping(value="/admin/user",method = RequestMethod.PUT)
	 public void updateUser(@RequestBody Worker user) {	 
		 taskmanagerservice.updateUser( user );
	 }
	 
	 @RequestMapping(value="/admin/user",method = RequestMethod.POST)
	 public void addUser(@RequestBody Worker user) {	 
		 taskmanagerservice.addUser( user );
	 }
	 
	 @RequestMapping(value="/admin/password",method = RequestMethod.PUT)
	 public void updateUserPassword(@RequestBody Worker user) {	 
		 taskmanagerservice.updateUserPassword( user );
	 }
	 
	 @RequestMapping(value="/admin/user",method = RequestMethod.DELETE)
	 public void deleteUser(@RequestBody Worker user) {	 
		 taskmanagerservice.deleteUser( user );
	 }
	 
	 @RequestMapping(value="/admin/users",method = RequestMethod.GET,headers="Accept=application/json")
	 public  List<Worker> getAllUsers() 
	 {
		 log.debug("## ->getAllUsers()");
		 List<Worker> users = taskmanagerservice.getAllUsers();
		 log.debug("## <-getAllUsers(): " + users);
		 return users;	
	 }
	 
	 @RequestMapping(value="/mail",method = RequestMethod.POST)
	 public boolean messageUs(@RequestBody EmailMessage msg) 
	 {	 
	      String destination = "secretary@avenueunited.ie";

	      final String username = "secretary@avenueunited.ie";
	      final String password = "UpThe@venue83";

	      Properties props = new Properties();
	      props.put("mail.smtp.auth", "true");
	      props.put("mail.smtp.starttls.enable", "true");
	      props.put("mail.smtp.host", "mail.avenueunited.ie");//"mocha6004.mochahost.com");
	      props.put("mail.smtp.port", "25");
			
	      //props.setProperty("mail.pop3.host","mocha6004.mochahost.com");//"mail.avenueunited.ie");
	     // props.setProperty("mail.pop3.port", "110");
	      //properties.setProperty("mail.smpt.port", "25");
	      //properties.setProperty("mail.imap.port", "143");

	      // Get the default Session object.
	      Session session = Session.getInstance(props,
	    		  new javax.mail.Authenticator() {
	    			protected PasswordAuthentication getPasswordAuthentication() {
	    				return new PasswordAuthentication(username, password);
	    			}
	    		  });
	      
		 try{
	         // Create a default MimeMessage object.
	         MimeMessage message = new MimeMessage(session);

	         // Set From: header field of the header.
	         message.setFrom(new InternetAddress(msg.getSenderAddress()));

	         // Set To: header field of the header.
	         message.addRecipient(Message.RecipientType.TO, new InternetAddress(destination));

	         // Set Subject: header field
	         message.setSubject(msg.getSubject());

	         // Now set the actual message
	         message.setText(msg.getMessage());

	         // Send message
	         Transport.send(message);
	         System.out.println("Sent message successfully....");
	         return true;
	      }catch (MessagingException mex) {
	         mex.printStackTrace();
	         return false;
	      }
	 }
	 
	 @RequestMapping(value="/confirmbooking",method = RequestMethod.POST)
	 public boolean confirmEmail(@RequestBody Booking booking) 
	 {	 
		 EmailMessage msg = new EmailMessage();
		 String destination = booking.getEmail();
		 msg.setSubject("Avenue United: Booking Confirmation - Automated message, do not reply");
		 msg.setMessage("Confirmation of your booking: \n" +
				 		"Name: " + booking.getFirstname() + " " + booking.getSurname() + "\n" +
				 		"Phone: " + booking.getPhone() + "\n" +
				 		"Arrival: " + booking.getArrivalDate() + "\n" +
				 		"Departure: " + booking.getDepartureDate() + "\n" +
				 		"Number of nights: " + booking.getNumberOfNights() + "\n" +
				 		"Number of people: " + booking.getNumberOfPeople() + "\n" +
				 		"Deposit: " + booking.getDeposit() +  "\n" +
				 		"Total Due: " + booking.getTotalCharge()
				 		);
		 msg.setSenderAddress("booking@avenueunited.ie");

	      final String username = "booking@avenueunited.ie";
	      final String password = "UpThe@venue83";

	      Properties props = new Properties();
	      props.put("mail.smtp.auth", "true");
	      props.put("mail.smtp.starttls.enable", "true");
	      props.put("mail.smtp.host", "mail.avenueunited.ie");
	      props.put("mail.smtp.port", "25");

	      // Get the default Session object.
	      Session session = Session.getInstance(props,
	    		  new javax.mail.Authenticator() {
	    			protected PasswordAuthentication getPasswordAuthentication() {
	    				return new PasswordAuthentication(username, password);
	    			}
	    		  });
	      
		 try{
	         // Create a default MimeMessage object.
	         MimeMessage message = new MimeMessage(session);

	         // Set From: header field of the header.
	         message.setFrom(new InternetAddress(msg.getSenderAddress()));

	         // Set To: header field of the header.
	         message.addRecipient(Message.RecipientType.TO, new InternetAddress(destination));

	         // Set Subject: header field
	         message.setSubject(msg.getSubject());

	         // Now set the actual message
	         message.setText(msg.getMessage());

	         // Send message
	         Transport.send(message);
	         System.out.println("Sent message successfully....");
	         return true;
	      }catch (MessagingException mex) {
	         mex.printStackTrace();
	         return false;
	      }
	 }
	 
	 @RequestMapping(value="/admin/manager/{name}",method = RequestMethod.GET,headers="Accept=application/json")
	 public  org.avenue.service.domain.Worker getManagerDetails(@PathVariable String name) 
	 {
		 log.debug("## ->getManagerDetails()");
		 org.avenue.service.domain.Worker user = taskmanagerservice.getUserByName(name);
		 log.debug("## <-getManagerDetails(): " + user);
		 return user;	
	 }
	 
	 @RequestMapping(value="/photos/{cat1}/{cat2}",method = RequestMethod.GET,headers="Accept=application/json")
	 public  List<String> getPhotoMedia(@PathVariable String cat1, @PathVariable String cat2) 
	 {
		 log.debug("## ->getPhotoMedia("+cat1+","+cat2+")");
		 List<String> photos = taskmanagerservice.getPhotoMedia(cat1, cat2);
		 log.debug("## <-getPhotoMedia(): " + photos);
		 return photos;	
	 }
	 
	 @RequestMapping(value="/photos/{cat1}/{cat2}/{cat3}",method = RequestMethod.GET,headers="Accept=application/json")
	 public  List<String> getPhotoMedia(@PathVariable String cat1, @PathVariable String cat2, @PathVariable String cat3) 
	 {
		 log.debug("## ->getPhotoMedia("+cat1+","+cat2+","+cat3+")");
		 List<String> photos = taskmanagerservice.getPhotoMedia(cat1, cat2, cat3);
		 log.debug("## <-getPhotoMedia(): " + photos);
		 return photos;	
	 }
	 
	 @RequestMapping(value="/booking",method = RequestMethod.POST)
	 public void addBookingDetails(@RequestBody Booking booking) {	
		 log.debug("## ->addBookingDetails("+booking+")");
		 taskmanagerservice.addBookingDetails( booking );
		 log.debug("## <-addBookingDetails()");
	 }
	 
	 @RequestMapping(value="/ipn",method = RequestMethod.POST)
	 public void papalIPNlistener(HttpServletRequest req, HttpServletResponse res) {	
		 log.debug("## ->papalIPNlistener()");
		 try {
			taskmanagerservice.paypalIPNhandler( req, res );
		} catch (IpnException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		 log.debug("## <-papalIPNlistener()");
	 }
	 
}
