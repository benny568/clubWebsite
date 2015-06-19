package org.avenue.service.controller;

import java.text.ParseException;
import java.util.List;

import org.avenue.dao.TaskManagerService;
import org.avenue.service.domain.Member;
import org.avenue.service.domain.Team;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class TaskManagerController {
	
	TaskManagerService taskmanagerservice=new TaskManagerService();
	
	 @RequestMapping(value="/admin/members",method = RequestMethod.GET,headers="Accept=application/json")
	 public List<Member> getAllTasks() {	 
	  List<Member> members=taskmanagerservice.getAllMembers();
	  return members;
	
	 }

	 @RequestMapping(value="/admin/team/{teamId}",method = RequestMethod.GET,headers="Accept=application/json")
	 public List<Member> getMembersByTeam(@PathVariable int teamId) {	 
	  List<Member> members=taskmanagerservice.getMembersByTeam(teamId);
	  return members;
	
	 }
	 
	 @RequestMapping(value="/admin/teams",method = RequestMethod.GET,headers="Accept=application/json")
	 public List<Team> getTeams() {	 
	  List<Team> teams=taskmanagerservice.getAllTeams();
	  return teams;
	
	 }
	 
	 @RequestMapping(value="/team/{teamName}",method = RequestMethod.GET,headers="Accept=application/json")
	 public Team getTeamDetails(@PathVariable String teamName) {	 
	  Team team=taskmanagerservice.getTeamDetails(teamName);
	  return team;
	
	 }
	 
/*	 @RequestMapping(value="/team/{teamName}",method = RequestMethod.GET,headers="Accept=application/json")
	 public int getTeamId(@PathVariable String teamName) {	 
	  int teamId=taskmanagerservice.getTeamId(teamName);
	  return teamId;
	
	 }*/
	 
	 @RequestMapping(value="/admin/tasks/archive/{taskIds}",method = RequestMethod.POST,headers="Accept=application/json")
	 public List<Member> archiveAllTasks(@PathVariable int[] taskIds) {	
		 for(int i=0;i<taskIds.length;i++){
			 //taskmanagerservice.archiveTask(taskIds[i]);	
			 
		 }
	  List<Member> tasks=taskmanagerservice.getAllMembers();
	  return tasks;
	
	 }
	 
	 @RequestMapping(value="/admin/tasks/{taskId}/{taskStatus}",method = RequestMethod.POST,headers="Accept=application/json")
	 public List<Member> changeTaskStatus(@PathVariable int taskId,@PathVariable String taskStatus) throws ParseException {	
		 taskmanagerservice.changeTaskStatus(taskId,taskStatus);		 
		 return taskmanagerservice.getAllMembers();
		 
	 }
	 
	 @RequestMapping(value="/admin/tasks/insert/{name}/{taskDesc}/{team}/{taskStatus}",method = RequestMethod.POST,headers="Accept=application/json")
	 public List<Member> addTask(@PathVariable String name,@PathVariable String taskDesc,@PathVariable int team,@PathVariable String taskStatus) throws ParseException {	
		Member task = new Member();
		task.setName(name);
		task.setAddress(taskDesc);
		task.setTeam(team);
		task.setStatus(taskStatus);
		taskmanagerservice.addTask(task);
		return taskmanagerservice.getAllMembers();
		 
	 }	 	 	 	 
}