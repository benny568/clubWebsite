package org.avenue.dao;

import java.io.BufferedReader;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Properties;
import java.util.logging.Level;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.net.ssl.HttpsURLConnection;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.paypal.core.LoggingManager;
import com.paypal.ipn.IPNMessage;


import org.apache.tomcat.util.http.fileupload.FileItemIterator;
import org.apache.tomcat.util.http.fileupload.FileItemStream;
import org.apache.tomcat.util.http.fileupload.FileUploadException;
import org.apache.tomcat.util.http.fileupload.servlet.ServletFileUpload;
import org.apache.tomcat.util.http.fileupload.util.Streams;
import org.avenue.config.IpnConfig;
import org.avenue.config.PaypalConfiguration;
import org.avenue.exceptions.IpnException;
import org.avenue.service.domain.Booking;
import org.avenue.service.domain.EmailMessage;
import org.avenue.service.domain.IpnInfo;
import org.avenue.service.domain.Media;
import org.avenue.service.domain.Member;
import org.avenue.service.domain.MyTeams;
import org.avenue.service.domain.NewsStory;
import org.avenue.service.domain.SessionPlan;
import org.avenue.service.domain.SessionRecord;
import org.avenue.service.domain.Team;
import org.avenue.service.domain.Worker;
import org.avenue.service.utility.DBUtility;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.RequestBody;

import com.paypal.ipn.IPNMessage;

import urn.ebay.api.PayPalAPI.PayPalAPIInterfaceServiceService;

public class TaskManagerService {
	//private Log log = LogFactory.getLog(TaskManagerService.class);
	private final Logger log = LoggerFactory.getLogger(TaskManagerService.class);
	@Autowired
	 private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
	
	 public List<Member> getAllMembers() {
		 log.debug("## -> getAllMembers()");
		  List<Member> members = new ArrayList<Member>();
		  try {
			  	   Connection connection = DBUtility.getConnection();
				   Statement statement = connection.createStatement();
				   ResultSet rs = statement.executeQuery("select * from member");
				   log.trace("##    Executed query[select * from member]");
				   while (rs.next()) 
				   {
					    Member member = new Member();
					    member.setId(rs.getInt("id"));
					    member.setName(rs.getString("name"));
					    member.setAddress(rs.getString("address")); 
					    member.setPhone(rs.getString("phone"));
					    member.setPhone(rs.getString("phone2"));
					    member.setDob(convertSqlDateToString((rs.getDate("dob"))));
					    member.setEmail(rs.getString("email"));
					    member.setAmount(rs.getString("amount"));
					    member.setTeam(rs.getInt("team"));
					    member.setTeam2(rs.getInt("team2"));
					    member.setTeam3(rs.getInt("team3"));
					    member.setPosition(rs.getInt("position"));
					    member.setPosition(rs.getInt("position2"));
					    member.setPosition(rs.getInt("position3"));
					    member.setStatus(rs.getString("status"));
					    member.setFavplayer(rs.getString("favplayer"));
					    member.setFavteam(rs.getString("favteam"));
					    member.setSappears(rs.getInt("sappears"));
					    member.setSassists(rs.getInt("sassists"));
					    member.setSgoals(rs.getInt("sgoals"));
					    member.setPhoto(rs.getString("photo"));
					    member.setAchievements(rs.getString("achievements"));
					    members.add(member);
					    log.trace("##    Adding member to list: " + member);
				   }
		  } catch (SQLException e) {
		   e.printStackTrace();
		  }
	
		  DBUtility.closeConnection();
		  log.debug("## <- getAllMembers()");
		  return members;
	}
	
	 public List<Team> getAllTeams() {
		 log.debug("## (TaskManagerService) -> getAllTeams");
		  Connection connection = DBUtility.getConnection();
		  List<Team> teams = new ArrayList<Team>();
		  try {
				   Statement statement = connection.createStatement();
				   ResultSet rs = statement.executeQuery("select * from team");
				   while (rs.next()) 
				   {
					    Team team = new Team();
					    team.setId(rs.getInt("id"));
					    team.setName(rs.getString("name"));
					    team.setLrcode(rs.getInt("lrcode"));
					    team.setLrFixturesCode(rs.getInt("lrFixturesCode"));
					    team.setLrResultsCode(rs.getInt("lrResultsCode"));
					    team.setNoticeboard(rs.getString("noticeboard"));
					    //log.trace("##    Adding team to list: " + team);
					    teams.add(team);
				   }
		  } catch (SQLException e) {
		   e.printStackTrace();
		  }
	
		  DBUtility.closeConnection();
		  log.debug("## (TaskManagerService) <- getAllTeams");
		  return teams;
	}
	 public List<Member> getMembersByTeam(int teamId)
	 {
		 log.debug("## -> getMembersByTeam");
		 List<Member> members = new ArrayList<Member>();
		 try {
			   Connection connection = DBUtility.getConnection();
			   PreparedStatement preparedStatement = connection.prepareStatement("select * from member where team=? or team2=? or team3=?");
			   preparedStatement.setInt(1, teamId);
			   preparedStatement.setInt(2, teamId);
			   preparedStatement.setInt(3, teamId);
			   ResultSet rs = preparedStatement.executeQuery();
			   while (rs.next()) 
			   {
				    Member member = new Member();
				    member.setId(rs.getInt("id"));
				    member.setName(rs.getString("name"));
				    member.setAddress(rs.getString("address")); 
				    member.setPhone(rs.getString("phone"));
				    member.setPhone2(rs.getString("phone2"));
				    member.setEmail(rs.getString("email"));
				    member.setDob(convertSqlDateToString(rs.getDate("dob")));
				    member.setAmount(rs.getString("amount"));
				    member.setTeam(rs.getInt("team"));
				    member.setTeam2(rs.getInt("team2"));
				    member.setTeam3(rs.getInt("team3"));
				    member.setPosition(rs.getInt("position"));
				    member.setPosition2(rs.getInt("position2"));
				    member.setPosition3(rs.getInt("position3"));
				    member.setLid(rs.getInt("lid"));
				    member.setStatus(rs.getString("status"));
				    member.setFavplayer(rs.getString("favplayer"));
				    member.setFavteam(rs.getString("favteam"));
				    member.setSappears(rs.getInt("sappears"));
				    member.setSassists(rs.getInt("sassists"));
				    member.setSgoals(rs.getInt("sgoals"));
				    member.setPhoto(rs.getString("photo"));
				    member.setAchievements(rs.getString("achievements"));
				    log.trace("##    Adding member to list: " + member);
				    members.add(member);
			   }
		  } catch (SQLException e) {
		   e.printStackTrace();
		  }
	
		 DBUtility.closeConnection();
		 log.debug("## <- getMembersByTeam");
		 return members;
	 }
	 
	 public int getTeamId(String teamName)
	 {
		 int teamId = 0;
		 
		 try {
			   Connection connection = DBUtility.getConnection();
			   PreparedStatement preparedStatement = connection.prepareStatement("select id from team where name=?");
			   preparedStatement.setString(1, teamName);
			   ResultSet rs = preparedStatement.executeQuery();
			   while (rs.next()) 
			   {
				   teamId = rs.getInt("id");
			   }
		  } catch (SQLException e) {
			   e.printStackTrace();
			  }
		 
		 DBUtility.closeConnection();
		 return teamId;
	 }
	 
	 public Team getTeamDetails(String teamName)
	 {
		 Team team = new Team();
		 
		 try {
			   Connection connection = DBUtility.getConnection();
			   PreparedStatement preparedStatement = connection.prepareStatement("select * from team where name=?");
			   preparedStatement.setString(1, teamName);
			   ResultSet rs = preparedStatement.executeQuery();
			   while (rs.next()) 
			   {
				   team.setId(rs.getInt("id"));
				   team.setName(rs.getString("name"));
				   team.setLrcode(rs.getInt("lrcode"));
				   team.setLrFixturesCode(rs.getInt("lrFixturesCode"));
				   team.setLrResultsCode(rs.getInt("lrResultsCode"));
				   team.setNoticeboard(rs.getString("noticeboard"));
			   }
		  } catch (SQLException e) {
			   e.printStackTrace();
			  }
		 
		 DBUtility.closeConnection();
		 return team;
	 }
	 
	 public ArrayList<NewsStory> getNewsItems()
	 {
		 ArrayList<NewsStory> newsItems = new ArrayList<NewsStory>();
		 
		  try {
			   Connection connection = DBUtility.getConnection();
			   PreparedStatement preparedStatement = connection.
			     prepareStatement("select * from newsstory");
			   ResultSet rs = preparedStatement.executeQuery();
			   
			   while(rs.next()) {
				   NewsStory ns = new NewsStory();
				   ns.setNsid(rs.getInt("nsid"));
				   ns.setTitle(rs.getString("title"));
				   ns.setDescription(rs.getString("description"));
				   ns.setImage((rs.getString("image")==null)?"":rs.getString("image"));
				   newsItems.add(ns);
			   }	
			  } catch (SQLException e) {
			   e.printStackTrace();
			  }
	
		  DBUtility.closeConnection();
		  return newsItems;
	 }
	 
	 public ArrayList<NewsStory> getAcademyNews()
	 {
		 ArrayList<NewsStory> newsItems = new ArrayList<NewsStory>();
		 
		  try {
			   Connection connection = DBUtility.getConnection();
			   PreparedStatement preparedStatement = connection.
			     prepareStatement("select * from newsstory where category=?");
			   preparedStatement.setString(1, "A");
			   ResultSet rs = preparedStatement.executeQuery();
			   
			   while(rs.next()) {
				   NewsStory ns = new NewsStory();
				   ns.setNsid(rs.getInt("nsid"));
				   ns.setCategory(rs.getString("category"));
				   ns.setTitle(rs.getString("title"));
				   ns.setDescription(rs.getString("description"));
				   ns.setStory(rs.getString("story"));
				   ns.setImage(rs.getString("image"));
				   newsItems.add(ns);
			   }	
			  } catch (SQLException e) {
			   e.printStackTrace();
			  }
	
		  DBUtility.closeConnection();
		  return newsItems;
	 }
	 
	 public void submitNewsStory(NewsStory newsStory)
	 {
		 
		  try {
			   Connection connection = DBUtility.getConnection();
			   PreparedStatement preparedStatement = connection.prepareStatement("INSERT INTO newsstory ( category, title, description, story, image ) VALUES 	(?, ?, ?, ?, ?)");
			   preparedStatement.setString(1, newsStory.getCategory());
			   preparedStatement.setString(2, newsStory.getTitle());
			   preparedStatement.setString(3, newsStory.getDescription());
			   preparedStatement.setString(4, newsStory.getStory());
			   preparedStatement.setString(5, newsStory.getImage());
			   preparedStatement.executeUpdate();
		
			  } catch (SQLException e) {
			   e.printStackTrace();
			  }
		  
		  DBUtility.closeConnection();
		  return;
	 }
	 
	 public void updateNewsStory(NewsStory newsStory)
	 {
		 
		  try {
			   Connection connection = DBUtility.getConnection();
			   PreparedStatement preparedStatement = connection.prepareStatement("update newsstory set category=?, title=?, description=?, story=?, image=? where nsid=?");
			   preparedStatement.setString(1, newsStory.getCategory());
			   preparedStatement.setString(2, newsStory.getTitle());
			   preparedStatement.setString(3, newsStory.getDescription());
			   preparedStatement.setString(4, newsStory.getStory());
			   preparedStatement.setString(5, newsStory.getImage());
			   preparedStatement.setInt(6, newsStory.getNsid());
			   preparedStatement.executeUpdate();
		
			  } catch (SQLException e) {
			   e.printStackTrace();
			  }
		  
		  DBUtility.closeConnection();
		  return;
	 }
	 
	 public void deleteNewsStory(NewsStory newsStory)
	 {
		 
		  try {
			   Connection connection = DBUtility.getConnection();
			   PreparedStatement preparedStatement = connection.prepareStatement("delete from newsstory where nsid = ?");
			   preparedStatement.setInt(1, newsStory.getNsid());
			   preparedStatement.executeUpdate();
		
			  } catch (SQLException e) {
			   e.printStackTrace();
			  }
		  
		  DBUtility.closeConnection();
		  return;
	 }
	 
	 public void updateMemberDetails(Member member)
	 {
		 java.sql.Date sqlDate = null;
		 sqlDate = convertStringToSqlDate(member.getDob());
		 
		  try {
			   Connection connection = DBUtility.getConnection();
			   PreparedStatement preparedStatement = connection.prepareStatement("update member set name=?, address=?, phone=?, phone2=?, dob=?, email=?,"
			   																	+ "amount=?, receiptid=?, team=?, team2=?, team3=?, position=?, position2=?, "
			   																	+ "position3=?, lid=?, favteam=?, favplayer=?, sappears=?, sassists=?, sgoals=?, "
			   																	+ "photo=?, achievements=?, status=? where id=?");
			   preparedStatement.setString(1, member.getName());
			   preparedStatement.setString(2, member.getAddress());
			   preparedStatement.setString(3, member.getPhone());
			   preparedStatement.setString(4, member.getPhone2());
			   preparedStatement.setDate(5, sqlDate);
			   preparedStatement.setString(6, member.getEmail());
			   preparedStatement.setString(7, member.getAmount());
			   preparedStatement.setString(8, member.getReceiptid());
			   preparedStatement.setInt(9, member.getTeam());
			   preparedStatement.setInt(10, member.getTeam2());
			   preparedStatement.setInt(11, member.getTeam3());
			   preparedStatement.setInt(12, member.getPosition());
			   preparedStatement.setInt(13, member.getPosition2());
			   preparedStatement.setInt(14, member.getPosition3());
			   preparedStatement.setInt(15, member.getLid());			   
			   preparedStatement.setString(16, member.getFavteam());
			   preparedStatement.setString(17, member.getFavplayer());
			   preparedStatement.setInt(18, member.getSappears());
			   preparedStatement.setInt(19, member.getSassists());
			   preparedStatement.setInt(20, member.getSgoals());
			   preparedStatement.setString(21, member.getPhoto());
			   preparedStatement.setString(22, member.getAchievements());
			   preparedStatement.setString(23, member.getStatus());
			   preparedStatement.setInt(24, member.getId());			   			   
			   preparedStatement.executeUpdate();
		
			  } catch (SQLException e) {
			   e.printStackTrace();
			  }
		  
		  DBUtility.closeConnection();
		  return;
	 }
	 
	 public String truncateDate(String date)
	 {
		 String newDate = null;
		 if(date.length() > 10)
		 {
			 newDate = date.substring(0,10);
		 }
			
		 return newDate;
	 }
	 
	 public void deleteMemberDetails(int memberId)
	 {
		 
		  try {
			   Connection connection = DBUtility.getConnection();
			   PreparedStatement preparedStatement = connection.prepareStatement("delete from member where id=?");
			   preparedStatement.setInt(1, memberId);
			   preparedStatement.executeUpdate();
		
			  } catch (SQLException e) {
			   e.printStackTrace();
			  }
		  
		  DBUtility.closeConnection();
		  return;
	 }
	 
	 public ArrayList<NewsStory> getNewsStories()
	 {
		 ArrayList<NewsStory> newsItems = new ArrayList<NewsStory>();
		 log.debug("           |-> getNewsStories()");
		 
		  try 
		  {
			   Connection connection = DBUtility.getConnection();
			   PreparedStatement preparedStatement = connection.
					prepareStatement("select * from newsstory");
			     //prepareStatement("select * from newsstory where category=?");
			   //preparedStatement.setString(1, "G");
			   ResultSet rs = preparedStatement.executeQuery();
			   log.debug("          | -- running db select: select * from newsstory");
			   
			   while(rs.next()) 
			   {
				   NewsStory ns = new NewsStory();
				   ns.setNsid(rs.getInt("nsid"));
				   ns.setCategory(rs.getString("category"));
				   ns.setTitle(rs.getString("title"));
				   ns.setDescription(rs.getString("description"));
				   ns.setStory(rs.getString("story"));
				   ns.setImage(rs.getString("image"));
				   log.debug("          | -- Adding news story: " + ns);
				   newsItems.add(ns);
			   }	
		  } 
		  catch (SQLException e)
		  {
			  System.out.println("## CONNECTION CLOSED ?????????");
			  System.err.println("## CONNECTION CLOSED ?????????");
			  e.printStackTrace();
		  }
		  
		  DBUtility.closeConnection();
		  log.debug("           |<- getNewsStories()");
		  return newsItems;
	 }
	 
	 public void addMember(Member member)
	 {
		 java.sql.Date sqlDate = null;
		 sqlDate = convertStringToSqlDate(member.getDob());
		 
		  try {
			  Connection connection = DBUtility.getConnection();
			  PreparedStatement preparedStatement = connection.prepareStatement("INSERT INTO member ( name, address, phone, phone2, email,"
			   																	+ "dob, amount, team, team2, team3, position, lid, favteam, "
			   																	+ "favplayer, sappears, sassists, sgoals, photo, "
			   																	+ "achievements, status ) VALUES (?, ?, ?, ?, ?, ?,"
			   																	+ "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
			  preparedStatement.setString(1, member.getName());
			   preparedStatement.setString(2, member.getAddress());
			   preparedStatement.setString(3, member.getPhone());
			   preparedStatement.setString(4, member.getPhone2());
			   preparedStatement.setString(5, member.getEmail());
			   preparedStatement.setDate(6, sqlDate);
			   preparedStatement.setString(7, member.getAmount());
			   preparedStatement.setInt(8, member.getTeam());
			   preparedStatement.setInt(9, member.getTeam2());
			   preparedStatement.setInt(10, member.getTeam3());
			   preparedStatement.setInt(11, member.getPosition());
			   preparedStatement.setInt(12, member.getLid());
			   preparedStatement.setString(13, member.getFavteam());
			   preparedStatement.setString(14, member.getFavplayer());
			   preparedStatement.setInt(15, member.getSappears());
			   preparedStatement.setInt(16, member.getSassists());
			   preparedStatement.setInt(17, member.getSgoals());
			   preparedStatement.setString(18, member.getPhoto());
			   preparedStatement.setString(19, member.getAchievements());
			   preparedStatement.setString(20, member.getStatus());
			   preparedStatement.executeUpdate();
		
			  } catch (SQLException e) {
			   e.printStackTrace();
			  }
		  
		  DBUtility.closeConnection();
		  return;
	 }
	 
	 public void uploadNews(HttpServletRequest request, HttpServletResponse res)
	 {
		// Check that we have a file upload request
		if( !ServletFileUpload.isMultipartContent(request) )
		{
			System.out.println("Upload was not multipart form!");
			return;
		}
		 
		// Create a new file upload handler
		ServletFileUpload upload = new ServletFileUpload();

	
		// Parse the request
		FileItemIterator iter;
		NewsStory ns = new NewsStory();
		String value = new String();
		//String savePath = "/home/odalybr/jvm/apache-tomcat-8.0.9/domains/avenueunited.ie/";
		String savePath = "/home/odalybr/jvm/apache-tomcat-8.0.9/domains/avenueunited.ie/ROOT/WEB-INF/resources/news";
		
		System.out.println("## ############################################################## ##");
		System.out.println("## ^^^^^^^^^^^^^^^^^^^ PROCESSING NEWS UPLOAD ^^^^^^^^^^^^^^^^^^^ ##");
		System.out.println("## ############################################################## ##");
		System.out.println("## ############################################################## ##");
		System.out.println("## ^^^^^^^^^^^^^^^^^^^ PROCESSING NEWS UPLOAD ^^^^^^^^^^^^^^^^^^^ ##");
		System.out.println("## ############################################################## ##");
		System.out.println("## ############################################################## ##");
		System.out.println("## ^^^^^^^^^^^^^^^^^^^ PROCESSING NEWS UPLOAD ^^^^^^^^^^^^^^^^^^^ ##");
		System.out.println("## ############################################################## ##");
		
		
		try {
			iter = upload.getItemIterator(request);
		
			 while (iter.hasNext()) 
			 {
			     FileItemStream item = iter.next();
			     String name = item.getFieldName();
			     InputStream stream = item.openStream();
			     if (item.isFormField()) 
			     {
			    	 value = Streams.asString(stream);
	
			         System.out.println("Form field [" + name + "] with value ["
			             + value + "] detected.");
			         System.out.println("## [TaksManagerService]->(uploadNews): Adding " + name + " to NS.");
			         addParamToNS( ns, name, value );
			         
			     } 
			     else 
			     {
			         System.out.println("File field [" + name + "] with file name ["
			             + item.getName() + "] detected.");       
			         
			         // Process the input stream
			         byte[] b = new byte[10000000];
			         String fileName = item.getName();
			         int read = 0;
			         FileOutputStream out = new FileOutputStream(new File(savePath + '/' + fileName));
			         System.out.println("## [TaksManagerService]->(uploadNews): Opened output stream to: " + savePath + '/' + fileName);
			         
			         while ((read = stream.read(b,0,b.length)) != -1) 
			         {
			             out.write(b, 0, read);
			             read = 0;
			         }
			         if (out != null)
			             out.close();
			         if (stream != null)
			        	 stream.close();
			         System.out.println("## [TaksManagerService]->(uploadNews): Adding image to NS: " + fileName);
			         addParamToNS( ns, "image", "resources/news/" + fileName );
			     }
			 }
		} catch (FileUploadException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		submitNewsStory(ns);
	 }
	 
	 public void addParamToNS( NewsStory ns, String paramName, String paramValue )
	 {
		 switch( paramName )
		 {
			 case "title":
				 ns.setTitle(paramValue);
				 System.out.println("## [TaskManagerService]->(addParamToNS) Added title to news story: " + paramValue);
				 break;
			 case "description":
				 ns.setDescription(paramValue);
				 System.out.println("## [TaskManagerService]->(addParamToNS) Added description to news story: " + paramValue);
				 break;
			 case "story":
				 ns.setStory(paramValue);
				 System.out.println("## [TaskManagerService]->(addParamToNS) Added story to news story: " + paramValue);
				 break;
			 case "image":
				 ns.setImage(paramValue);
				 System.out.println("## [TaskManagerService]->(addParamToNS) Added image to news story: " + paramValue);
				 break;
			 case "category":
				 ns.setCategory(paramValue);
				 System.out.println("## [TaskManagerService]->(addParamToNS) Added category to news story: " + paramValue);
				 break;
			 default:
				 break;
		 }
	 }
	
	 public void addTeam(Team team)
	 {
		 
		  try {
			  Connection connection = DBUtility.getConnection();
			  PreparedStatement preparedStatement = connection.prepareStatement("INSERT INTO team ( name, lrcode ) VALUES (?, ?)");
			  preparedStatement.setString(1, team.getName());
			  preparedStatement.setInt(2, team.getLrcode());
			  preparedStatement.executeUpdate();
		
		 	} catch (SQLException e) {
				  e.printStackTrace();
			}
		  
		  DBUtility.closeConnection();
		  return;
	 }
	 
	 public void updateTeam(Team team)
	 {
		 
		  try {
			    Connection connection = DBUtility.getConnection();
			  	PreparedStatement preparedStatement 
			  	= connection.prepareStatement("UPDATE team set name=?, lrcode=?, lrFixturesCode=?, lrResultsCode=?, noticeboard=? where id = ?");
			  	preparedStatement.setString(1, team.getName());
			  	preparedStatement.setInt(2, team.getLrcode());
			  	preparedStatement.setInt(3, team.getLrFixturesCode());
			  	preparedStatement.setInt(4, team.getLrResultsCode());
			  	preparedStatement.setString(5, team.getNoticeboard());
			  	preparedStatement.setInt(6, team.getId());
			  	preparedStatement.executeUpdate();
		
			  } catch (SQLException e) {
				  e.printStackTrace();
			  }
		  
		  DBUtility.closeConnection();
		  return;
	 }
	 
	 public void deleteTeam(int teamId)
	 {
		 
		  try {
			    Connection connection = DBUtility.getConnection();
			  	PreparedStatement preparedStatement = connection.prepareStatement("DELETE FROM team where id = ?");
			  	preparedStatement.setInt(1, teamId);
			  	preparedStatement.executeUpdate();
		
			  } catch (SQLException e) {
				  e.printStackTrace();
			  }
		  
		  DBUtility.closeConnection();
		  return;
	 }
	
	public List<SessionPlan> getTrainingSessionsForTeam(int teamId) {
		ArrayList<SessionPlan> sessions = new ArrayList<SessionPlan>();
		 
		  try {
			   Connection connection = DBUtility.getConnection();
			   PreparedStatement preparedStatement = connection.
			     prepareStatement("select * from sessionPlan where teamId = ?");
			   preparedStatement.setInt(1, teamId);
			   ResultSet rs = preparedStatement.executeQuery();
			   
			   while(rs.next()) {
				   SessionPlan sp = new SessionPlan();
				   sp.setSessionId(rs.getInt("sessionId"));
				   sp.setTeamId(rs.getInt("teamId"));
				   sp.setDate(convertSqlDateToString(rs.getDate("date")));
				   sp.setDetails(rs.getString("details"));
	
				   sessions.add(sp);
			   }	
			  } catch (SQLException e) {
			   e.printStackTrace();
			  }
	
		  DBUtility.closeConnection();
		  return sessions;
	}
	
	public SessionPlan getOneTrainingSession(int sessionId) {
		SessionPlan sp = new SessionPlan();
		 
		  try {
			   Connection connection = DBUtility.getConnection();
			   PreparedStatement preparedStatement = connection.
			     prepareStatement("select * from SessionPlan where sessionId = ?");
			   preparedStatement.setInt(1, sessionId);
			   ResultSet rs = preparedStatement.executeQuery();
			   
			   while(rs.next()) {
				   sp.setSessionId(rs.getInt("sessionId"));
				   sp.setTeamId(rs.getInt("teamId"));
				   sp.setDate(rs.getString("date"));
				   sp.setDetails(rs.getString("details"));
	
			   }	
		  } catch (SQLException e) {
		   e.printStackTrace();
		  }
	
		  DBUtility.closeConnection();
		  return sp;
	}
	
	 public void addTrainingSessionPlan(SessionPlan session)
	 {
		 
		  try {
			  Connection connection = DBUtility.getConnection();
			  PreparedStatement preparedStatement = connection.prepareStatement("INSERT INTO sessionPlan ( teamId, date, details ) VALUES (?, ?, ?)");
			  preparedStatement.setInt(1, session.getTeamId());
			  preparedStatement.setDate(2, convertStringToSqlDate(session.getDate()));
			  preparedStatement.setString(3, session.getDetails());
			  preparedStatement.executeUpdate();
		
		 	} catch (SQLException e) {
				  e.printStackTrace();
			}
		  
		  DBUtility.closeConnection();
		  return;
	 }
	
	public List<SessionRecord> getSessionRecords() 
	{
		ArrayList<SessionRecord> records = new ArrayList<SessionRecord>();
		 
		  try {
			   Connection connection = DBUtility.getConnection();
			   PreparedStatement preparedStatement = connection.
			     prepareStatement("select * from sessionRecord");
			   ResultSet rs = preparedStatement.executeQuery();
			   
			   while(rs.next()) {
				   SessionRecord sr = new SessionRecord();
				   sr.setRecId(rs.getInt("recId"));
				   sr.setTeamId(rs.getInt("teamId"));
				   sr.setMemberId(rs.getInt("memberId"));
				   sr.setSessionId(rs.getInt("sessionId"));
				   sr.setStatus(rs.getBoolean("status"));
	
				   records.add(sr);
			   }	
		  } catch (SQLException e) {
		   e.printStackTrace();
		  }
	
		  DBUtility.closeConnection();
		  return records;
	}
	
	public SessionRecord getOneSessionRecord(int srecid) {
		SessionRecord sr = new SessionRecord();
		 
		  try {
			   Connection connection = DBUtility.getConnection();
			   PreparedStatement preparedStatement = connection.
			     prepareStatement("select * from sessionRecord where sessionId = ?");
			   preparedStatement.setInt(1, srecid);
			   ResultSet rs = preparedStatement.executeQuery();
			   
			   while(rs.next()) {
				   sr.setRecId(rs.getInt("recId"));
				   sr.setTeamId(rs.getInt("teamId"));
				   sr.setMemberId(rs.getInt("memberId"));
				   sr.setSessionId(rs.getInt("sessionId"));
				   sr.setStatus(rs.getBoolean("status"));	
			   }	
		  } catch (SQLException e) {
		   e.printStackTrace();
		  }
	
		  DBUtility.closeConnection();
		  return sr;
	}

	public List<SessionRecord> getSessionRecordsForTeam(int teamid) {
		ArrayList<SessionRecord> records = new ArrayList<SessionRecord>();
		 
		  try {
			   Connection connection = DBUtility.getConnection();
			   PreparedStatement preparedStatement = connection.
			     prepareStatement("select * from sessionRecord where teamId = ?");
			   preparedStatement.setInt(1, teamid);
			   ResultSet rs = preparedStatement.executeQuery();
			   
			   while(rs.next()) {
				   SessionRecord sr = new SessionRecord();
				   sr.setRecId(rs.getInt("recId"));
				   sr.setTeamId(rs.getInt("teamId"));
				   sr.setMemberId(rs.getInt("memberId"));
				   sr.setSessionId(rs.getInt("sessionId"));
				   sr.setStatus(rs.getBoolean("status"));
	
				   records.add(sr);
			   }	
		  } catch (SQLException e) {
		   e.printStackTrace();
		  }
	
		  DBUtility.closeConnection();
		  return records;
	}
	
	public Worker getUserByName( String name )
	{
		Worker thisUser = new Worker();
		MyTeams myteams = new MyTeams();
		ArrayList<String> roles = new ArrayList<String>();
		DateFormat df = new SimpleDateFormat("dd/MM/yyyy");
		
		
		try {
			Connection connection = DBUtility.getConnection();   
			PreparedStatement preparedStatement = connection.
			     prepareStatement("select * from user where name = ?");
			   preparedStatement.setString(1, name);
			   ResultSet rs = preparedStatement.executeQuery();
			   
			   while(rs.next()) {
				   thisUser.setUserId(rs.getInt("userId"));
				   thisUser.setName(rs.getString("name"));
				   thisUser.setPassword(rs.getString("password"));
				   thisUser.setAddress(rs.getString("address"));
				   thisUser.setEmail(rs.getString("email"));
				   thisUser.setPhone(rs.getString("phone"));
				   thisUser.setDob(df.format(rs.getDate("dob")));
				   thisUser.setAvatar(rs.getString("avatar"));
				   thisUser.setEnabled(rs.getInt("enabled"));
			   }
			   
			   // (2) Get the user's roles from the user_roles table
			   preparedStatement = connection.prepareStatement("select * from user_roles where name = ?");
			   preparedStatement.setString(1, name);
			   rs = preparedStatement.executeQuery();
			   
			   while(rs.next()){
				   roles.add(rs.getString("ROLE"));
			   }
			   thisUser.setRoles(roles);
			   
			   // (3) Get the user's permissions for the teams from the members table
			   preparedStatement = connection.prepareStatement("select team, team2, team3, position, position2, position3 from member where email = ?");
			   preparedStatement.setString(1, thisUser.getEmail());
			   rs = preparedStatement.executeQuery();
			   
			   while(rs.next()){
				  myteams.addTeam(rs.getInt("team"));
				  myteams.addTeam(rs.getInt("team2"));
				  myteams.addTeam(rs.getInt("team3"));
				  myteams.addPosition(rs.getInt("position"));
				  myteams.addPosition(rs.getInt("position2"));
				  myteams.addPosition(rs.getInt("position3"));
			   }
			   thisUser.setPermissions(myteams);
			   
		  } catch (SQLException e) {
		   e.printStackTrace();
		  }
	
		DBUtility.closeConnection();
		return thisUser;
	}
	
	public void updateUser(Worker user)
	 {
        java.sql.Date sqlDate = null;
        SimpleDateFormat dateFormater = new SimpleDateFormat("dd/MM/yyyy");
        try {
			sqlDate = new java.sql.Date(dateFormater.parse(user.getDob()).getTime());
		 } catch (ParseException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
		 }
		 
		  try {
			    Connection connection = DBUtility.getConnection();
			  	PreparedStatement preparedStatement = connection.prepareStatement("UPDATE user set name=?,address=?,phone=?,email=?,dob=?,avatar=?,enabled=? where userid = ?");
			  	preparedStatement.setString(1, user.getName());
			  	//preparedStatement.setString(2, user.getPassword());
			  	preparedStatement.setString(2, user.getAddress());
			  	preparedStatement.setString(3, user.getPhone());
			  	preparedStatement.setString(4, user.getEmail());
			  	preparedStatement.setDate(5, sqlDate);
			  	preparedStatement.setString(6, user.getAvatar());
			  	preparedStatement.setInt(7, user.getEnabled());
			  	preparedStatement.setInt(8, user.getUserId());
			  	preparedStatement.executeUpdate();
			  	
			  	// (2) Update the user_roles table
				   
			  	// (2.1) We need to read the current roles to compare them
			  	ArrayList<Role> roles = new ArrayList<Role>();
			  	preparedStatement = connection.prepareStatement("select * from user_roles where userid=?");
			  	preparedStatement.setInt(1, user.getUserId());
			  	ResultSet rs = preparedStatement.executeQuery();
				   
			  	while(rs.next()) {
					Role role = new Role();
					role.setRoleid(rs.getInt("user_role_id"));
					role.setUserid(rs.getInt("userid"));
					role.setName(rs.getString("name"));
					role.setRole(rs.getString("role"));
					roles.add(role);
				}
			  	
			  	// (3) Compare the existing roles with the passed in ones to see if there are updates
			  	ArrayList<String> rolesToAdd = new ArrayList<String>();
			  	boolean found = false;
			  	for( int i=0; i<user.getRoles().size(); i++ )
			  	{
			  		for( int n=0; n<roles.size(); n++ )
			  		{
			  			if( user.getRoles().get(i).contentEquals(roles.get(n).getRole()) )
			  			{
			  				found = true;
			  				continue;
			  			}
			  		}
			  		if( !found )
			  		{
			  			rolesToAdd.add(user.getRoles().get(i));
			  			System.out.println("#### GOT ONE #######: " + user.getRoles().get(i));
			  		}
			  		found = false;
			  	}
			   
			   // (2.2) Prep the SQL statement
			  preparedStatement = connection.prepareStatement("INSERT INTO user_roles ( userid, name, role ) VALUES (?, ?, ? )");
			   
			   // (2.3) For each role, add a row to the user_roles table
			   for( int i=0; i<rolesToAdd.size(); i++ )
			   {
				   preparedStatement.setInt(1, user.getUserId());
				   preparedStatement.setString(2, user.getName());
				   preparedStatement.setString(3, rolesToAdd.get(i));
				   preparedStatement.executeUpdate();
			   }
		
			  } catch (SQLException e) {
				  e.printStackTrace();
			  }
		  
		  DBUtility.closeConnection();
		  return;
	 }

	public void updateUserPassword(Worker user)
	 {
		 
		  try {
			    Connection connection = DBUtility.getConnection();
			  	PreparedStatement preparedStatement = connection.prepareStatement("UPDATE user set password=? where userid = ?");
			  	preparedStatement.setString(1, passwordEncoder.encode(user.getPassword()));
			  	preparedStatement.setInt(2, user.getUserId());
			  	preparedStatement.executeUpdate();
		
			  } catch (SQLException e) {
				  e.printStackTrace();
			  }
		  
		  DBUtility.closeConnection();
		  return;
	 }
	
	public void deleteUser(Worker user)
	 {
		 
		  try {
			  	// (1) Open the db connection
			    Connection connection = DBUtility.getConnection();
			    
			    // (2) Start the transaction
			    PreparedStatement preparedStatement = connection.prepareStatement("BEGIN WORK");
			  	preparedStatement.executeUpdate();
			    
			    // (3) Need to delete the user roles first from the user_roles table
			  	preparedStatement = connection.prepareStatement("DELETE from user_roles where userid = ?");
			  	preparedStatement.setInt(1, user.getUserId());
			  	preparedStatement.executeUpdate();
			  	
			  	// (4) Delete the user from the user table
			  	preparedStatement = connection.prepareStatement("DELETE from user where userid = ?");
			  	preparedStatement.setInt(1, user.getUserId());
			  	preparedStatement.executeUpdate();
			  	
			  	// (5) Commit the transaction
			  	preparedStatement = connection.prepareStatement("COMMIT");
			  	preparedStatement.executeUpdate();
		
			  } catch (SQLException e) {
				  e.printStackTrace();
			  }
		  
		  DBUtility.closeConnection();
		  return;
	 }

	public SessionRecord getSessionRecordForMember(int sessionid, int teamid, int memberid) 
	{

		SessionRecord sr = new SessionRecord();
			 
		try {
			   Connection connection = DBUtility.getConnection();
			   PreparedStatement preparedStatement = connection.
			     prepareStatement("select * from sessionRecord where sessionid = ? and teamid = ? and memberid = ?");
			   preparedStatement.setInt(1, sessionid);
			   preparedStatement.setInt(2, teamid);
			   preparedStatement.setInt(3, memberid);
			   ResultSet rs = preparedStatement.executeQuery();
			   
			   while(rs.next()) {
				   sr.setRecId(rs.getInt("recId"));
				   sr.setTeamId(rs.getInt("teamId"));
				   sr.setMemberId(rs.getInt("memberId"));
				   sr.setSessionId(rs.getInt("sessionId"));
				   sr.setStatus(rs.getBoolean("status"));
		
			   }	
		  } catch (SQLException e) {
		   e.printStackTrace();
		  }
		
		  DBUtility.closeConnection();
		  return sr;
	}

	public void setSessionRecordForMember(SessionRecord sr) 
	{	
		boolean bGotRec = false;
		
		try {
			   Connection connection = DBUtility.getConnection();
			   
			   /* (1) First things first, check if the member already has a record for the particular session */
			   PreparedStatement preparedStatement = connection.
			     prepareStatement("select * from sessionRecord where sessionid = ? and teamid = ? and memberid = ?");
			   preparedStatement.setInt(1, sr.getSessionId());
			   preparedStatement.setInt(2, sr.getTeamId());
			   preparedStatement.setInt(3, sr.getMemberId());
			   ResultSet rs = preparedStatement.executeQuery();
			   
			   while(rs.next()) {
				   /* OK, we have an existing record so we just need to update it. */
				   sr.setRecId(rs.getInt("recId"));
				   bGotRec = true;
				   
				   // Close the db connection as each method opens it's own
				   DBUtility.closeConnection();
				   
				   // Update the record
				   updateSessionRecForUser(sr);
			   }

			   if(!bGotRec)
			   {
				   System.out.println("## [TaskManagerService]->setSessionRecordForMember(): Record not found so need to add it...");
				   insertSessionRecordForMember(sr);
			   }
		
			   	
		  } catch (SQLException e) {
		   e.printStackTrace();
		  }
		
		  DBUtility.closeConnection();
	}
	
	public void updateSessionRecForUser(SessionRecord sr)
	 {
		 
		  try {
			    Connection connection = DBUtility.getConnection();
			  	PreparedStatement preparedStatement = connection.prepareStatement("UPDATE sessionrecord set status = ? where teamId = ? and memberId = ? and sessionid = ?");
			  	preparedStatement.setBoolean(1, sr.getStatus());
			  	preparedStatement.setInt(2, sr.getTeamId());
			  	preparedStatement.setInt(3, sr.getMemberId());
			  	preparedStatement.setInt(4, sr.getSessionId());
			  	preparedStatement.executeUpdate();
		
			  } catch (SQLException e) {
				  e.printStackTrace();
			  }
		  
		  DBUtility.closeConnection();
		  return;
	 }

	public void insertSessionRecordForMember(SessionRecord sr) 
	{
		  try {
			    Connection connection = DBUtility.getConnection();
			  	PreparedStatement preparedStatement = connection.prepareStatement("INSERT INTO sessionRecord (teamid, memberid, sessionid, status) VALUES (?,?,?,?)");
			  	preparedStatement.setInt(1, sr.getTeamId());
			  	preparedStatement.setInt(2, sr.getMemberId());
			  	preparedStatement.setInt(3, sr.getSessionId());
			  	preparedStatement.setBoolean(4, sr.getStatus());
			  	preparedStatement.executeUpdate();
		
			  } catch (SQLException e) {
				  e.printStackTrace();
			  }
		  
		  DBUtility.closeConnection();
		  return;
	 }
	
	 public List<Worker> getAllUsers() {
		  log.debug("## -> getAllUsers()");
		  List<Worker> users = new ArrayList<Worker>();
		  
		  try {
			  	   Connection connection = DBUtility.getConnection();
				   Statement statement = connection.createStatement();
				   //ResultSet rs = statement.executeQuery("select * from user");
				   ResultSet rs = statement.executeQuery("select * from user");
				   log.trace("##    Executed query[select * from user]");
				   while (rs.next()) 
				   {
					    Worker user = new Worker();
					    user.setUserId(rs.getInt("userid"));
					    user.setName(rs.getString("name"));
					    user.setPassword(rs.getString("password"));
					    user.setAddress(rs.getString("address")); 
					    user.setPhone(rs.getString("phone"));
					    user.setEmail(rs.getString("email"));
					    //user.setDob(df.format(rs.getDate("dob")));
					    user.setDob(convertSqlDateToString(rs.getDate("dob")));
					    user.setAvatar(rs.getString("avatar"));
					    users.add(user);
					    log.trace("##    Adding user to list: " + user);
				   }
				   
				   rs = statement.executeQuery("select * from user_roles");
				   log.trace("##    Executed query[select * from user_roles]");
				   List<Role> roles = new ArrayList<Role>();
				   while (rs.next()) 
				   {
					    Role role = new Role();
					    role.setRoleid(rs.getInt("user_role_id"));
					    role.setUserid(rs.getInt("userid"));
					    role.setName(rs.getString("name"));
					    role.setRole(rs.getString("role"));
					    roles.add(role);
					    log.trace("##    Adding role to list: " + role);
				   }
				   // Add the roles to the user
				   for( int i=0; i<users.size(); i++ )
				   {
					   for( int a=0; a<roles.size(); a++ )
					   {
						   if( users.get(i).getUserId() == roles.get(a).userid )
						   {
							   users.get(i).getRoles().add(roles.get(a).role);
							   log.trace("##    Added role to user: " + users.get(i).getName() + ": " + roles.get(a).role);
						   }
					   }
				   }
				   
		  } catch (SQLException e) {
		   e.printStackTrace();
		  }
	
		  DBUtility.closeConnection();
		  log.debug("## <- getAllUsers()");
		  return users;
	}

	 public void addUser(Worker user)
	 {
		 java.sql.Date sqlDate = convertStringToSqlDate(user.getDob());

		  try {
			  Connection connection = DBUtility.getConnection();
			  
			  
			// (1) Add the entry in the users table
			  
			// (1.1) Prep the SQL statement
			  PreparedStatement preparedStatement = connection.prepareStatement("INSERT INTO user ( name, password, address, phone, email,"
			   																	+ "dob, avatar ) VALUES (?, ?, ?, ?, ?, ?, ? )");
			   preparedStatement.setString(1, user.getName());
			   preparedStatement.setString(2, passwordEncoder.encode(user.getPassword()));
			   preparedStatement.setString(3, user.getAddress());
			   preparedStatement.setString(4, user.getPhone());
			   preparedStatement.setString(5, user.getEmail());
			   preparedStatement.setDate(6, sqlDate);
			   preparedStatement.setString(7, user.getAvatar());
			   preparedStatement.executeUpdate();
			   
			   
			   // (2) Add the entry to the user_roles table
			   
			   // (2.1) We need the user id to write the roles
			   Worker u = getUserByName(user.getName());
			   
			   // (2.2) Prep the SQL statement
			   preparedStatement = connection.prepareStatement("INSERT INTO user_roles ( userid, name, role ) VALUES (?, ?, ? )");
			   
			   // (2.3) For each role, add a row to the user_roles table
			   for( int i=0; i<user.getRoles().size(); i++ )
			   {
				   preparedStatement.setInt(1, u.getUserId());
				   preparedStatement.setString(2, user.getName());
				   preparedStatement.setString(3, user.getRoles().get(i));
				   preparedStatement.executeUpdate();
			   }
			   
		
			  } catch (SQLException e) {
			   e.printStackTrace();
			  }
		  
		  DBUtility.closeConnection();
		  return;
	 }
	 
	 public java.sql.Date convertStringToSqlDate( String sDate )
	 {
		 java.sql.Date sqlDate = null;
		 DateFormat df = new SimpleDateFormat("dd/MM/yyyy");
		 
		 Date parsed = null;
		try {
			if( sDate != null && !sDate.isEmpty() )
				parsed = df.parse(sDate);
			else
				parsed = df.parse("01/01/1900");
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		sqlDate = new java.sql.Date(parsed.getTime());
		 
		 return sqlDate;
	 }
	 
	 public String convertSqlDateToString( java.sql.Date sqlDate )
	 {
		 String sDate = null;
		 DateFormat df = new SimpleDateFormat("dd/MM/yyyy");

		 
		 if( sqlDate == null )
			 sDate = "";
		 else
			 sDate = df.format(sqlDate);
		 
		 return sDate;
	 }
	 
	 class Role
	 {
		 int roleid;
		 int userid;
		 String name;
		 String role;
		 
		public int getRoleid() {
			return roleid;
		}
		public void setRoleid(int roleid) {
			this.roleid = roleid;
		}
		public int getUserid() {
			return userid;
		}
		public void setUserid(int userid) {
			this.userid = userid;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getRole() {
			return role;
		}
		public void setRole(String role) {
			this.role = role;
		}
		 
	 }

	 public List<Media> getAllMedia() {
		 log.debug("## -> getAllMedia()");
		  List<Media> medias = new ArrayList<Media>();
		  try {
			  	   Connection connection = DBUtility.getConnection();
				   Statement statement = connection.createStatement();
				   ResultSet rs = statement.executeQuery("select * from media");
				   log.trace("##    Executed query[select * from media]");
				   while (rs.next()) 
				   {
					    Media media = new Media();
					    media.setMediaid(rs.getInt("mediaid"));
					    media.setType(rs.getInt("type"));
					    media.setTitle(rs.getString("title"));
					    media.setLocation(rs.getString("location"));
					    media.setDescription(rs.getString("description"));				    
					    medias.add(media);
					    log.trace("##    Adding media to list: " + media);
				   }
		  } catch (SQLException e) {
		   e.printStackTrace();
		  }
	
		  DBUtility.closeConnection();
		  log.debug("## <- getAllMedia()");
		  return medias;
		 
	 }
	 
	 public List<String> getPhotoMedia(String cat1, String cat2) {
		 log.debug("## -> getPhotoMedia(" + cat1 + "," + cat2 + ")");
		 
		 return getPhotoMedia(cat1, cat2, null);
	 }
	 public List<String> getPhotoMedia(String cat1, String cat2, String cat3) {
		 log.debug("## -> getPhotoMedia(" + cat1 + "," + cat2 + "," + cat3 + ")");
		  List<String> photos = new ArrayList<String>();
		  //String rootDir = "/home/odalybr/workspace/clubWebsite/clubRegisterApp/WebContent/WEB-INF/resources/galleries/";
		  String rootDir = "/home/odalybr/jvm/apache-tomcat-8.0.9/domains/avenueunited.ie/ROOT/WEB-INF/resources/galleries/";
		  
		  try {
			  
			  	// Read the file system for the gallery photos
			  	// cat1 & cat2 are used as directories in the path	

				File folder = cat3 == null ? new File(rootDir + cat1 + "/" + cat2) : new File(rootDir + cat1 + "/" + cat2 + "/" + cat3);
				File[] listOfFiles = folder.listFiles();
				
				if( listOfFiles == null )
					return photos;
								
				for (File file : listOfFiles) {
				    if( file.isFile() && (fileIsImage(file.getName())) ) {
				    	photos.add(file.getName());
					    log.trace("##    Adding photo to list: " + file.getName());
				    }
				}
				Collections.sort(photos);
			  } catch (Exception e) {
		   e.printStackTrace();
		  }
	
		  log.debug("## <- getPhotoMedia(): " + photos);
		  return photos;
	 }
		 
	 
	 public List<Media> getVideoMedia() {
		 log.debug("## -> getVideoMedia()");
		  List<Media> medias = new ArrayList<Media>();
		  try {
			  	   Connection connection = DBUtility.getConnection();
				   Statement statement = connection.createStatement();
				   ResultSet rs = statement.executeQuery("select * from media where type = 1");
				   log.trace("##    Executed query[select * from media where type = 1]");
				   while (rs.next()) 
				   {
					    Media media = new Media();
					    media.setMediaid(rs.getInt("mediaid"));
					    media.setType(rs.getInt("type"));
					    media.setTitle(rs.getString("title"));
					    media.setLocation(rs.getString("location"));
					    media.setDescription(rs.getString("description"));				    
					    medias.add(media);
					    log.trace("##    Adding media to list: " + media);
				   }
		  } catch (SQLException e) {
		   e.printStackTrace();
		  }
	
		  DBUtility.closeConnection();
		  log.debug("## <- getVideoMedia()");
		  return medias;
		 
	 }
	 
	 public List<Media> getSoundMedia() {
		 log.debug("## -> getSoundMedia()");
		  List<Media> medias = new ArrayList<Media>();
		  try {
			  	   Connection connection = DBUtility.getConnection();
				   Statement statement = connection.createStatement();
				   ResultSet rs = statement.executeQuery("select * from media where type = 2");
				   log.trace("##    Executed query[select * from media where type = 2]");
				   while (rs.next()) 
				   {
					    Media media = new Media();
					    media.setMediaid(rs.getInt("mediaid"));
					    media.setType(rs.getInt("type"));
					    media.setTitle(rs.getString("title"));
					    media.setLocation(rs.getString("location"));
					    media.setDescription(rs.getString("description"));				    
					    medias.add(media);
					    log.trace("##    Adding media to list: " + media);
				   }
		  } catch (SQLException e) {
		   e.printStackTrace();
		  }
	
		  DBUtility.closeConnection();
		  log.debug("## <- getSoundMedia()");
		  return medias;
		 
	 }
	 
	 boolean fileIsImage( String filename )
	 {
		 boolean isImage = false;
		 
		 if( filename.endsWith(".jpg")
			 || filename.endsWith(".JPG")
			 || filename.endsWith(".png") )
		 {
			 isImage = true;
		 }
		 
		 return isImage;
	 }
	 
	 
	 public void addBookingDetails(Booking booking)
	 {
		 java.sql.Date arrivalDate = null;
		 java.sql.Date departureDate = null;
		 arrivalDate = convertStringToSqlDate(booking.getArrivalDate());
		 departureDate = convertStringToSqlDate(booking.getDepartureDate());
		 
		  try {
			  Connection connection = DBUtility.getConnection();
			  PreparedStatement preparedStatement = connection.prepareStatement("INSERT INTO booking ( firstname, surname, email, phone, "
			   																	+ "country, arrivaldate, departuredate, numberofnights, "
			   																	+ "numberofpeople, parking, vehicalreg, totalcharge, "
			   																	+ "deposit, tandc ) VALUES (?, ?, ?, ?, ?, ?,"
			   																	+ "?, ?, ?, ?, ?, ?, ?, ?)");
			  preparedStatement.setString(1, booking.getFirstname());
			  preparedStatement.setString(2, booking.getSurname());
			  preparedStatement.setString(3, booking.getEmail());
			  preparedStatement.setString(4, booking.getPhone());
			  preparedStatement.setString(5, booking.getCountry());
			  preparedStatement.setDate(6, arrivalDate);
			  preparedStatement.setDate(7, departureDate);
			  preparedStatement.setInt(8, booking.getNumberOfNights());
			  preparedStatement.setInt(9, booking.getNumberOfPeople());
			  preparedStatement.setInt(10, booking.getParking());
			  preparedStatement.setString(11, booking.getVehicalReg());
			  preparedStatement.setInt(12, booking.getTotalCharge());
			  preparedStatement.setFloat(13, booking.getDeposit());
			  preparedStatement.setInt(14, booking.getTandc());
			  preparedStatement.executeUpdate();
			  
			  log.debug("## ADDED BOOKING DETALS: ", preparedStatement);
		
			  } catch (SQLException e) {
			   e.printStackTrace();
			  }
		  
		  DBUtility.closeConnection();
		  return;
	 }
    
	    
		 public boolean sendConfirmationEmail(IpnInfo ipi) 
		 {	 
			 EmailMessage msg = new EmailMessage();
			 String destination = ipi.getPayerEmail();
			 msg.setSubject("Avenue United: Booking Confirmation - Automated message, do not reply");
			 msg.setMessage("Avenue United Fleadh 2016 Official Campsite Booking\n\n" +
					 		"Confirmation of your booking: \n" +
					 		"Name: " + ipi.getFirstName() + " " + ipi.getLastName() + "\n" +
					 		"Address: "+ ipi.getAddressCity() + "," + ipi.getAddressStreet() + "\n" +
					 		//"Phone: " + booking.getPhone() + "\n" +
					 		//"Arrival: " + booking.getArrivalDate() + "\n" +
					 		//"Departure: " + booking.getDepartureDate() + "\n" +
					 		//"Number of nights: " + booking.getNumberOfNights() + "\n" +
					 		//"Number of people: " + booking.getNumberOfPeople() + "\n" +
					 		"Deposit Payed: " + ipi.getPaymentAmount() +  "\n" +
					 		"Payment Date: "+ ipi.getPaymentDate() + "\n\n\n" +
					 		//"Total Due: " + booking.getTotalCharge() + "\n" +
					 		
							"Thank you for booking your Fleadh 2016 Campsite place at Avenue United Grounds.\n" +
							"Please retain this receipt as it may be required at check-in.\n\n" +
							
							"We are located behind the Roslevan Shopping Centre, Tulla Road, Ennis, Co Clare\n" +
							"This is just off EXIT 13 on the M18 Motorway for really easy access and exit. Simply follow the signs!\n" +
							"We will be serviced by the official Fleadh Shuttle Bus service to and from the town centre.\n\n" +
							
							"INFORMATION & RULES:\n" +
							"Campsite Opens 1pm on Wed August 17th\n" +
							"Tents & Cars only. NO Caravans or Campervans, sorry.\n" +
							"STRICTLY NO GLASS BOTTLES ALLOWED ON SITE. \n" +
							"NO noise after Midnight\n" +
							"Toilets & Showers are Provided.\n" +
							"Anyone under 18 MUST be accompanied by an adult\n" +
							"NO PETS (except guide / assistive dogs)\n" +
							"Balance must be paid on arrival. You will NOT be admitted until balance is paid.\n" +
							"No Sterling accepted for balance. EURO cash only. No refunds for early departure.\n" +
							"No electrical connections are available. Bring plenty batteries!\n" +
							"STRICTLY NO GLASS BOTTLES ALLOWED ON SITE. This is our soccer pitch where our kids play matches. \n" +
							"NO Glass means NO Glass. Plastic only. This WILL be enforced.\n" +
							"You must be vacated by 1pm on Mon 22 Aug.\n" +
							"For enquiries phone: 086 8120055 (between 6pm and 9pm)\n\n" +
							
							"Welcome to \'the Fleadh Down in Ennis\'. We hope you enjoy your stay!"
							
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
		 
		
		 
		 public IpnInfo paypalIPNhandler( HttpServletRequest request, HttpServletResponse response ) throws IpnException
		 {
			 
			 Map<String,String> configMap = new HashMap<String,String>();
			 IpnInfo ipni = null;

			 // Endpoints are varied depending on whether sandbox OR live is chosen for mode
			 configMap.put("mode", "live");

			 // Connection Information. These values are defaulted in SDK. If you want to override default values, uncomment it and add your value.
			 // configMap.put("http.ConnectionTimeOut", "5000");
			 // configMap.put("http.Retry", "2");
			 // configMap.put("http.ReadTimeOut", "30000");
			 // configMap.put("http.MaxConnection", "100");
			 
			 
			 // For a full list of configuration parameters refer in wiki page.
             // (https://github.com/paypal/sdk-core-java/wiki/SDK-Configuration-Parameters)
			 
             Map<String,String> configurationMap =  PaypalConfiguration.getConfig();
             IPNMessage      ipnlistener = new IPNMessage(request,configurationMap);
             boolean isIpnVerified = ipnlistener.validate();
             String transactionType = ipnlistener.getTransactionType();
             Map<String,String> map = ipnlistener.getIpnMap();

             LoggingManager.info(TaskManagerService.class, "******* IPN (name:value) pair : "+ map + "  " +
                             "######### TransactionType : "+transactionType+"  ======== IPN verified : "+ isIpnVerified);
             
             if( isIpnVerified )
             {
            	 LoggingManager.info(TaskManagerService.class, "******* IPN verified, populating IpnInfo to send confirmation email.");
            	 ipni = populateIpnInfoFromMap( ipnlistener.getIpnMap() );  
            	 LoggingManager.info(TaskManagerService.class, "******* IPN verified, sending confirmation email.");
            	 sendConfirmationEmail(ipni);
            	 LoggingManager.info(TaskManagerService.class, "******* IPN VERIRIED, saving IPN info to db.");
            	 storeIPN(ipni);
             }
             else
             {
            	 LoggingManager.info(TaskManagerService.class, "******* IPN NOT VERIRIED, but will send email anyway!");
            	 ipni = populateIpnInfoFromMap( ipnlistener.getIpnMap() );  
            	 sendConfirmationEmail(ipni);
            	 LoggingManager.info(TaskManagerService.class, "******* IPN NOT VERIRIED, saving IPN info to db.");
            	 storeIPN(ipni);
             }
			 
			 return ipni;
			 
			 //http://www.avenueunited.ie/#/success?token=76V53786FN483351C&amt=0.01&cc=EUR&item_name=Testing&st=Completed&tx=14H46935U12975918
			 
		 }
		 
		 IpnInfo populateIpnInfoFromMap( Map<String,String> map )
		 {
			 IpnInfo ipni = new IpnInfo();			 
			 Iterator<Entry<String, String>> it = map.entrySet().iterator();
			 String thisKey = null;
        	 
        	 while( it.hasNext() )
        	 {
        		 Map.Entry pair = (Map.Entry)it.next();
        	     thisKey = (String) pair.getKey();
        	     
        	     switch( thisKey )
        	     {
        	     	case "payment_type":
        	     		ipni.setPaymentType(pair.getValue().toString());
        	     		break;
	        	    case "payment_date":
	        	    	ipni.setPaymentDate(pair.getValue().toString());
	        	    case "payment_status":
	        	    	ipni.setPaymentStatus(pair.getValue().toString());
	        	    case "pending_reason":
	        	    	ipni.setPendingReason(pair.getValue().toString());
	        	    	break;
	        	 	
	        	    case "address_status":
	        	    	ipni.setPaymentStatus(pair.getValue().toString());
	        	    	break;
	        	    case "payer_status":
	        	    	ipni.setPayerStatus(pair.getValue().toString());
	        	    	break;
	        	    case "first_name":
	        	    	ipni.setFirstName(pair.getValue().toString());
	        	    	break;
	        	    case "last_name":
	        	    	ipni.setLastName(pair.getValue().toString());
	        	    	break;
	        	    case "payer_email":
	        	    	ipni.setPayerEmail(pair.getValue().toString());
	        	    	break;
	        	    case "payer_id":
	        	    	ipni.setPayerId(pair.getValue().toString());
	        	    	break;	
	        	    case "address_name":
	        	    	ipni.setAddressName(pair.getValue().toString());
	        	    	break;
	        	    case "address_country":
	        	    	ipni.setAddressCountry(pair.getValue().toString());
	        	    	break;
	        	    case "address_country_code":
	        	    	ipni.setAddressCountryCode(pair.getValue().toString());
	        	    	break;
	        	    case "address_zip":
	        	    	ipni.setAddressZip(pair.getValue().toString());
	        	    	break;
	        	    case "address_state":
	        	    	ipni.setAddressState(pair.getValue().toString());
	        	    	break;
	        	    case "address_city":
	        	    	ipni.setAddressCity(pair.getValue().toString());
	        	    	break;
	        	    case "address_street":
	        	    	ipni.setAddressStreet(pair.getValue().toString());
	        	    	break;
	        	 	// Basic Information
	        	    case "business":
	        	    	ipni.setBusiness(pair.getValue().toString());
	        	    	break;
	        	    case "receiver_email":
	        	    	ipni.setReceiverEmail(pair.getValue().toString());
	        	    	break;
	        	    case "receiver_id":
	        	    	ipni.setReceiverId(pair.getValue().toString());
	        	    	break;
	        	    case "residence_country":
	        	    	ipni.setResidenceCountry(pair.getValue().toString());
	        	    	break;
	        	    case "item_name":
	        	    	ipni.setItemName(pair.getValue().toString());
	        	    	break;
	        	    case "item_number":
	        	    	ipni.setItemNumber(pair.getValue().toString());
	        	    	break;
	        	    case "quantity":
	        	    	ipni.setQuantity( Integer.parseInt(pair.getValue().toString()) );
	        	    	break;   
	        	    case "shipping":
	        	    	ipni.setShipping(pair.getValue().toString());
	        	    	break;
	        	    case "tax":
	        	    	ipni.setTax(pair.getValue().toString());
	        	    	break;
	        	    	
	        	    // Currency and Currrency Exchange
	        	    case "mc_currency":
	        	    	ipni.setPaymentCurrency(pair.getValue().toString());
	        	    	break;
	        	    case "mc_fee":
	        	    	ipni.setMcFee(pair.getValue().toString());
	        	    	break;
	        	    case "mc_gross":
		        	    ipni.setPaymentAmount(pair.getValue().toString());
	        	    	break;
	        	    case "mc_handling":
	        	    	ipni.setMcHandling(pair.getValue().toString());
	        	    	break;
	        	    case "mc_shipping":
	        	    	ipni.setMcShipping(pair.getValue().toString());
	        	    	break;
	        	    	
	        	    // Transaction Fields
	        	    case "txn_type":
	        	    	ipni.setTxnType(pair.getValue().toString());
	        	    	break;
	        	    case "txn_id":
	        	    	ipni.setTxnId(pair.getValue().toString());
	        	    	break;
	        	    case "notify_version":
	        	    	ipni.setNotifyVersion(pair.getValue().toString());
	        	    	break;
	        	    case "parent_txn_id":
	        	    	ipni.setParentTxnId(pair.getValue().toString());
	        	    	break;
	        	    case "reason_code":
	        	    	ipni.setReasonCode(pair.getValue().toString());
	        	    	break;
	        	    case "receipt_id":
	        	    	ipni.setReceiptId(pair.getValue().toString());
	        	    	break;
	        	    	
	        	    // Advanced and Custom Information
	        	    case "custom":
	        	    	ipni.setCustom(pair.getValue().toString());
	        	    	break;
	        	    case "invoice":
	        	    	ipni.setInvoice(pair.getValue().toString());
	        	    	break;
        	     }

        	 }
			 
			 return ipni;
		 }
		 
		 void storeIPN( IpnInfo ipni )
		 {
			 
			  try {
				  Connection connection = DBUtility.getConnection();
				  PreparedStatement preparedStatement = connection.prepareStatement("INSERT INTO ipn ( paymentType, paymentDate, paymentStatus, "
				   																	+ "addressStatus, payerStatus, firstName, "
				   																	+ "lastName, payerEmail, payerId, addressName, "
				   																	+ "addressCountry, addressCountryCode, addressZip, "
				   																	+ "addressState, addressCity, addressStreet, business, "
				   																	+ "receiverEmail, receiverId, residenceCountry, itemName, "
				   																	+ "itemNumber, quantity, shipping, tax, paymentCurrency, "
				   																	+ "mcFee, paymentAmount, txnType, "
				   																	+ "txnId, notifyVersion, logTime ) VALUES (?, ?, ?, ?, ?, ?,"
				   																	+ "?, ?, ?, ?, ?, ?, ?, ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?, "
				   																	+ "?,?,? )");
				  preparedStatement.setString(1, ipni.getPaymentType());
				  preparedStatement.setString(2, ipni.getPaymentDate());
				  preparedStatement.setString(3, ipni.getPaymentStatus());
				  preparedStatement.setString(4, ipni.getAddressStatus());
				  preparedStatement.setString(5, ipni.getPayerStatus());
				  preparedStatement.setString(6, ipni.getFirstName());
				  preparedStatement.setString(7, ipni.getLastName());
				  preparedStatement.setString(8, ipni.getPayerEmail());
				  preparedStatement.setString(9, ipni.getPayerId());
				  preparedStatement.setString(10, ipni.getAddressName());
				  preparedStatement.setString(11, ipni.getAddressCountry());
				  preparedStatement.setString(12, ipni.getAddressCountryCode());
				  preparedStatement.setString(13, ipni.getAddressZip());
				  preparedStatement.setString(14, ipni.getAddressState());
				  preparedStatement.setString(15, ipni.getAddressCity());
				  preparedStatement.setString(16, ipni.getAddressStreet());
				  preparedStatement.setString(17, ipni.getBusiness());
				  preparedStatement.setString(18, ipni.getReceiverEmail());
				  preparedStatement.setString(19, ipni.getReceiverId());
				  preparedStatement.setString(20, ipni.getResidenceCountry());
				  preparedStatement.setString(21, ipni.getItemName());
				  preparedStatement.setString(22, ipni.getItemNumber());
				  preparedStatement.setInt(23, ipni.getQuantity());
				  preparedStatement.setString(24, ipni.getShipping());
				  preparedStatement.setString(25, ipni.getTax());
				  preparedStatement.setString(26, ipni.getPaymentCurrency());
				  preparedStatement.setString(27, ipni.getMcFee());
				  preparedStatement.setString(28, ipni.getPaymentAmount());
				  preparedStatement.setString(29, ipni.getTxnType());
				  preparedStatement.setString(30, ipni.getTxnId());
				  preparedStatement.setString(31, ipni.getNotifyVersion());
				  preparedStatement.setString(32, new Date().toString());
				  
				  preparedStatement.executeUpdate();
				  
				  log.debug("## ADDED IPN DETALS");
			
				  } catch (SQLException e) {
				   e.printStackTrace();
				  }
			  
			  DBUtility.closeConnection();
			  return;
		 }

}
