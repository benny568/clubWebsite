package org.avenue.dao;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.tomcat.util.http.fileupload.FileItemIterator;
import org.apache.tomcat.util.http.fileupload.FileItemStream;
import org.apache.tomcat.util.http.fileupload.FileUploadException;
import org.apache.tomcat.util.http.fileupload.servlet.ServletFileUpload;
import org.apache.tomcat.util.http.fileupload.util.Streams;
import org.avenue.service.domain.Member;
import org.avenue.service.domain.NewsStory;
import org.avenue.service.domain.SessionPlan;
import org.avenue.service.domain.SessionRecord;
import org.avenue.service.domain.Team;
import org.avenue.service.domain.User;
import org.avenue.service.utility.DBUtility;

public class TaskManagerService {
	 
	 public List<Member> getAllMembers() {
		  List<Member> members = new ArrayList<Member>();
		  try {
			  	   Connection connection = DBUtility.getConnection();
				   Statement statement = connection.createStatement();
				   ResultSet rs = statement.executeQuery("select * from member");
				   while (rs.next()) 
				   {
					    Member member = new Member();
					    member.setId(rs.getInt("id"));
					    member.setName(rs.getString("name"));
					    member.setAddress(rs.getString("address")); 
					    member.setPhone(rs.getString("phone"));
					    member.setAmount(rs.getString("amount"));
					    member.setTeam(rs.getInt("team"));
					    member.setTeam2(rs.getInt("team2"));
					    member.setTeam3(rs.getInt("team3"));
					    member.setPosition(rs.getInt("position"));
					    member.setStatus(rs.getString("status"));
					    member.setFavplayer(rs.getString("favplayer"));
					    member.setFavteam(rs.getString("favteam"));
					    member.setSappears(rs.getInt("sappears"));
					    member.setSassists(rs.getInt("sassists"));
					    member.setSgoals(rs.getInt("sgoals"));
					    member.setPhoto(rs.getString("photo"));
					    member.setAchievements(rs.getString("achievements"));
					    members.add(member);
				   }
		  } catch (SQLException e) {
		   e.printStackTrace();
		  }
	
		  DBUtility.closeConnection();
		  return members;
	}
	
	 public List<Team> getAllTeams() {
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
					    team.setNoticeboard(rs.getString("noticeboard"));
					    teams.add(team);
				   }
		  } catch (SQLException e) {
		   e.printStackTrace();
		  }
	
		  DBUtility.closeConnection();
		  return teams;
	}
	 public List<Member> getMembersByTeam(int teamId)
	 {
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
				    member.setDob(rs.getString("dob"));
				    member.setAmount(rs.getString("amount"));
				    member.setTeam(rs.getInt("team"));
				    member.setTeam2(rs.getInt("team2"));
				    member.setTeam3(rs.getInt("team3"));
				    member.setPosition(rs.getInt("position"));
				    member.setLid(rs.getInt("lid"));
				    member.setStatus(rs.getString("status"));
				    member.setFavplayer(rs.getString("favplayer"));
				    member.setFavteam(rs.getString("favteam"));
				    member.setSappears(rs.getInt("sappears"));
				    member.setSassists(rs.getInt("sassists"));
				    member.setSgoals(rs.getInt("sgoals"));
				    member.setPhoto(rs.getString("photo"));
				    member.setAchievements(rs.getString("achievements"));
				    members.add(member);
			   }
		  } catch (SQLException e) {
		   e.printStackTrace();
		  }
	
		 DBUtility.closeConnection();
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
				   ns.setImage(rs.getString("image"));
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
	 
	 public void updateMemberDetails(Member member)
	 {
		 
		  try {
			   Connection connection = DBUtility.getConnection();
			   PreparedStatement preparedStatement = connection.prepareStatement("update member set name=?, address=?, phone=?, dob=?,"
			   																	+ "amount=?, team=?, team2=?, position=?, lid=?, status=?, favteam=?,"
			   																	+ "favplayer=?, sappears=?, sassists=?, sgoals=?, photo=?,"
			   																	+ "achievements=? where id=?");
			   preparedStatement.setString(1, member.getName());
			   preparedStatement.setString(2, member.getAddress());
			   preparedStatement.setString(3, member.getPhone());
			   preparedStatement.setString(4, member.getDob());
			   preparedStatement.setString(5, member.getAmount());
			   preparedStatement.setInt(6, member.getTeam());
			   preparedStatement.setInt(7, member.getTeam2());
			   preparedStatement.setInt(8, member.getTeam2());
			   preparedStatement.setInt(9, member.getPosition());
			   preparedStatement.setInt(10, member.getLid());
			   preparedStatement.setString(11, member.getStatus());
			   preparedStatement.setString(12, member.getFavteam());
			   preparedStatement.setString(13, member.getFavplayer());
			   preparedStatement.setInt(14, member.getSappears());
			   preparedStatement.setInt(15, member.getSassists());
			   preparedStatement.setInt(16, member.getSgoals());
			   preparedStatement.setString(17, member.getPhoto());
			   preparedStatement.setString(18, member.getAchievements());
			   preparedStatement.setInt(19, member.getId());
			   preparedStatement.executeUpdate();
		
			  } catch (SQLException e) {
			   e.printStackTrace();
			  }
		  
		  DBUtility.closeConnection();
		  return;
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
		 
		  try 
		  {
			   Connection connection = DBUtility.getConnection();
			   PreparedStatement preparedStatement = connection.
			     prepareStatement("select * from newsstory where category=?");
			   preparedStatement.setString(1, "G");
			   ResultSet rs = preparedStatement.executeQuery();
			   
			   while(rs.next()) 
			   {
				   NewsStory ns = new NewsStory();
				   ns.setNsid(rs.getInt("nsid"));
				   ns.setCategory(rs.getString("category"));
				   ns.setTitle(rs.getString("title"));
				   ns.setDescription(rs.getString("description"));
				   ns.setStory(rs.getString("story"));
				   ns.setImage(rs.getString("image"));
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
		  return newsItems;
	 }
	 
	 public void addMember(Member member)
	 {
		 
		  try {
			  Connection connection = DBUtility.getConnection();
			  PreparedStatement preparedStatement = connection.prepareStatement("INSERT INTO member ( name, address, phone, "
			   																	+ "dob, amount, team, team2, team3, position, lid, favteam, "
			   																	+ "favplayer, sappears, sassists, sgoals, photo, "
			   																	+ "achievements, status ) VALUES (?, ?, ?, ?, "
			   																	+ "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
			  preparedStatement.setString(1, member.getName());
			   preparedStatement.setString(2, member.getAddress());
			   preparedStatement.setString(3, member.getPhone());
			   preparedStatement.setString(4, member.getDob());
			   preparedStatement.setString(5, member.getAmount());
			   preparedStatement.setInt(6, member.getTeam());
			   preparedStatement.setInt(7, member.getTeam2());
			   preparedStatement.setInt(8, member.getTeam3());
			   preparedStatement.setInt(9, member.getPosition());
			   preparedStatement.setInt(10, member.getLid());
			   preparedStatement.setString(11, member.getFavteam());
			   preparedStatement.setString(12, member.getFavplayer());
			   preparedStatement.setInt(13, member.getSappears());
			   preparedStatement.setInt(14, member.getSassists());
			   preparedStatement.setInt(15, member.getSgoals());
			   preparedStatement.setString(16, member.getPhoto());
			   preparedStatement.setString(17, member.getAchievements());
			   preparedStatement.setString(18, member.getStatus());
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
		//String savePath = "C:\\avenue\\clubWebsite\\clubRegisterApp\\WebContent\\WEB-INF\\resources\\news";
		String savePath = "jvm\\apache-tomcat-8.0.9\\domains\\avenueunited.ie\\ROOT\\WEB-INF\\resources\\news";
		
		try {
			Connection connection = DBUtility.getConnection();
			iter = upload.getItemIterator(request);
		
			 while (iter.hasNext()) 
			 {
			     FileItemStream item = iter.next();
			     String name = item.getFieldName();
			     InputStream stream = item.openStream();
			     if (item.isFormField()) 
			     {
			    	 value = Streams.asString(stream);
	
			         System.out.println("Form field " + name + " with value "
			             + value + " detected.");
			         addParamToNS( ns, name, value );
			         
			     } 
			     else 
			     {
			         System.out.println("File field " + name + " with file name "
			             + item.getName() + " detected.");
			         // Process the input stream
			         byte[] b = new byte[10000000];
			         String fileName = item.getName();
			         int read = 0;
			         FileOutputStream out = new FileOutputStream(new File(savePath + File.separator + fileName));
			         System.out.println("## [TaksManagerService]->(uploadNews): Opened output stream to: " + savePath + File.separator + fileName);
			         
			         while ((read = stream.read(b)) != -1) 
			         {
			             out.write(b, 0, read);
			         }
			         if (out != null)
			             out.close();
			         if (stream != null)
			        	 stream.close();
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
		DBUtility.closeConnection();
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
				   sp.setDate(rs.getString("date"));
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
			  preparedStatement.setString(2, session.getDate());
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
	
	public User getUserByName( String name )
	{
		User thisUser = new User();
		try {
			Connection connection = DBUtility.getConnection();   
			PreparedStatement preparedStatement = connection.
			     prepareStatement("select * from user where username = ?");
			   preparedStatement.setString(1, name);
			   ResultSet rs = preparedStatement.executeQuery();
			   
			   while(rs.next()) {
				   thisUser.setUserId(rs.getInt("userId"));
				   thisUser.setName(rs.getString("username"));
				   thisUser.setPassword(rs.getString("password"));
				   thisUser.setAddress(rs.getString("address"));
				   thisUser.setEmail(rs.getString("email"));
				   thisUser.setPhone(rs.getString("phone"));
				   thisUser.setDob(rs.getDate("dob"));
				   thisUser.setAvatar(rs.getString("avatar"));
				   thisUser.setEnabled(rs.getInt("enabled"));
			   }	
		  } catch (SQLException e) {
		   e.printStackTrace();
		  }
	
		DBUtility.closeConnection();
		return thisUser;
	}
	
	public void updateUser(User user)
	 {
		 
		  try {
			    Connection connection = DBUtility.getConnection();
			  	PreparedStatement preparedStatement = connection.prepareStatement("UPDATE user set username=?,password=?,address=?,phone=?,email=?,dob=?,avatar=?,enabled=? where userid = ?");
			  	preparedStatement.setString(1, user.getName());
			  	preparedStatement.setString(2, user.getPassword());
			  	preparedStatement.setString(3, user.getAddress());
			  	preparedStatement.setString(4, user.getPhone());
			  	preparedStatement.setString(5, user.getEmail());
			  	preparedStatement.setDate(6, user.getDob());
			  	preparedStatement.setString(7, user.getAvatar());
			  	preparedStatement.setInt(8, user.getEnabled());
			  	preparedStatement.setInt(9, user.getUserId());
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

}
