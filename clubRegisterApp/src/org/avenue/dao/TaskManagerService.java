package org.avenue.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;

import org.avenue.service.domain.Member;
import org.avenue.service.domain.NewsStory;
import org.avenue.service.domain.Team;
import org.avenue.service.utility.DBUtility;
public class TaskManagerService {
 
 private Connection connection;

 public TaskManagerService() {
  connection = DBUtility.getConnection();
 }
 
 public List<Member> getAllMembers() {
	  List<Member> members = new ArrayList<Member>();
	  try {
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
				    member.setPosition(rs.getInt("position"));
				    member.setStatus(rs.getString("status"));
				    members.add(member);
			   }
	  } catch (SQLException e) {
	   e.printStackTrace();
	  }

	  return members;
}

 public List<Team> getAllTeams() {
	  List<Team> tasks = new ArrayList<Team>();
	  try {
			   Statement statement = connection.createStatement();
			   ResultSet rs = statement.executeQuery("select * from team");
			   while (rs.next()) 
			   {
				    Team team = new Team();
				    team.setId(rs.getInt("id"));
				    team.setName(rs.getString("name"));
				    tasks.add(team);
			   }
	  } catch (SQLException e) {
	   e.printStackTrace();
	  }

	  return tasks;
}
 public List<Member> getMembersByTeam(int teamId)
 {
	 List<Member> members = new ArrayList<Member>();
	 try {
		   PreparedStatement preparedStatement = connection.prepareStatement("select * from member where team=?");
		   preparedStatement.setInt(1, teamId);
		   ResultSet rs = preparedStatement.executeQuery();
		   while (rs.next()) 
		   {
			    Member member = new Member();
			    member.setId(rs.getInt("id"));
			    member.setName(rs.getString("name"));
			    member.setAddress(rs.getString("address")); 
			    member.setPhone(rs.getString("phone"));
			    member.setAmount(rs.getString("amount"));
			    member.setTeam(rs.getInt("team"));
			    member.setPosition(rs.getInt("position"));
			    member.setStatus(rs.getString("status"));
			    members.add(member);
		   }
	  } catch (SQLException e) {
	   e.printStackTrace();
	  }

  return members;
 }
 
 public int getTeamId(String teamName)
 {
	 int teamId = 0;
	 
	 try {
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
	 
	 return teamId;
 }
 
 public Team getTeamDetails(String teamName)
 {
	 Team team = new Team();
	 
	 try {
		   PreparedStatement preparedStatement = connection.prepareStatement("select * from team where name=?");
		   preparedStatement.setString(1, teamName);
		   ResultSet rs = preparedStatement.executeQuery();
		   while (rs.next()) 
		   {
			   team.setId(rs.getInt("id"));
			   team.setName(rs.getString("name"));
			   team.setLrcode(rs.getInt("lrcode"));
		   }
	  } catch (SQLException e) {
		   e.printStackTrace();
		  }
	 
	 return team;
 }

 public void addTask(Member task) {
  try {
   PreparedStatement preparedStatement = connection
     .prepareStatement("insert into member(name,address,team,status) values (?, ?, ?,?)");
   System.out.println("Task:"+task.getName());
   preparedStatement.setString(1, task.getName());
   preparedStatement.setString(2, task.getAddress());   
   preparedStatement.setInt(3, task.getTeam());
   preparedStatement.setString(4, task.getStatus());

   preparedStatement.executeUpdate();

  } catch (SQLException e) {
   e.printStackTrace();
  }
 }
 
 
 public void updateTask(Member task) throws ParseException {
  try {
   PreparedStatement preparedStatement = connection
     .prepareStatement("update member set name=?, address=?, team=?,status=?" +
       "where id=?");
   preparedStatement.setString(1, task.getName());
   preparedStatement.setString(2, task.getAddress());  
   preparedStatement.setInt(3, task.getTeam());
   preparedStatement.setString(4, task.getStatus());
   preparedStatement.setInt(4, task.getId());
   preparedStatement.executeUpdate();

  } catch (SQLException e) {
   e.printStackTrace();
  }
 }
 
 public void changeTaskStatus(int taskId,String status) throws ParseException {
   try {
    PreparedStatement preparedStatement = connection
      .prepareStatement("update task_list set task_status=? where task_id=?");
    preparedStatement.setString(1,status);
    preparedStatement.setInt(2, taskId);
    preparedStatement.executeUpdate();

   } catch (SQLException e) {
    e.printStackTrace();
   }
  }

 
 public Member getTaskById(int taskId) {
  Member task = new Member();
  try {
   PreparedStatement preparedStatement = connection.
     prepareStatement("select * from task_list where task_id=?");
   preparedStatement.setInt(1, taskId);
   ResultSet rs = preparedStatement.executeQuery();
   
   if (rs.next()) {
     task.setId(rs.getInt("id"));
     task.setName(rs.getString("name"));
     task.setAddress(rs.getString("address"));    
     task.setTeam(rs.getInt("team"));
     task.setStatus(rs.getString("status"));
   }
  } catch (SQLException e) {
   e.printStackTrace();
  }

  return task;
 }
 
 public ArrayList<NewsStory> getNewsItems()
 {
	 ArrayList<NewsStory> newsItems = new ArrayList<NewsStory>();
	 
	  try {
		   PreparedStatement preparedStatement = connection.
		     prepareStatement("select * from newsitem");
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

		  return newsItems;
 }
}