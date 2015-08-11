package org.avenue.service.controller;

import java.io.IOException;
import java.security.Principal;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.avenue.dao.TaskManagerService;
import org.avenue.service.domain.Member;
import org.avenue.service.domain.NewsStory;
import org.avenue.service.domain.SessionPlan;
import org.avenue.service.domain.SessionRecord;
import org.avenue.service.domain.Team;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class TaskManagerController {
	
	TaskManagerService taskmanagerservice=new TaskManagerService();
	
	 @RequestMapping(value="/admin/members",method = RequestMethod.GET,headers="Accept=application/json")
	 public List<Member> getAllTasks() {
		 System.out.println("## [TaskManagerController]->getAllTasks()..");
	  List<Member> members=taskmanagerservice.getAllMembers();
	  return members;
	
	 }

	 @RequestMapping(value="/admin/team/{teamId}",method = RequestMethod.GET,headers="Accept=application/json")
	 public List<Member> getMembersByTeam(@PathVariable int teamId) {
		 System.out.println("## [TaskManagerController]->getMembersByTeam(" + teamId + ")");
		 List<Member> members=taskmanagerservice.getMembersByTeam(teamId);
		 return members;
	
	 }
	 
	 @RequestMapping(value="/admin/teams",method = RequestMethod.GET,headers="Accept=application/json")
	 public List<Team> getTeams() {
		 System.out.println("## [TaskManagerController]->getTeams()..");
		 List<Team> teams=taskmanagerservice.getAllTeams();
		 return teams;
	
	 }
	 
	 @RequestMapping(value="/team/{teamName}",method = RequestMethod.GET,headers="Accept=application/json")
	 public Team getTeamDetails(@PathVariable String teamName) {
		 System.out.println("## [TaskManagerController]->getTeamDetails(" + teamName + ")..");
		 Team team=taskmanagerservice.getTeamDetails(teamName);
		 return team;
	
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
	 
	 @RequestMapping(value="/admin/member",method = RequestMethod.PUT)
	 public void updateMemberDetails(@RequestBody Member member) {	 
		 taskmanagerservice.updateMemberDetails( member );
	 }
	 
	 @RequestMapping(value="/admin/member",method = RequestMethod.DELETE)
	 public void deleteMemberDetails(@RequestBody int memberId) {	 
		 taskmanagerservice.deleteMemberDetails( memberId );	
	 }
	 
	 @RequestMapping(value="/admin/news",method = RequestMethod.GET,headers="Accept=application/json")
	 public List<NewsStory> getNewsStories() {
		 System.out.println("## [TaskManagerController]->getNewsStories()..");
		 List<NewsStory> stories=taskmanagerservice.getNewsStories();
		 System.out.println("## [TaskManagerController]->getNewsStories()..returning(" + stories.size() + ") stories.");
		 return stories;
	 }
	 
	 @RequestMapping(value="/admin/member",method = RequestMethod.POST)
	 public void addMember(@RequestBody Member member) {	 
		 taskmanagerservice.addMember( member );	
	 }
	 
	 @RequestMapping(value="/admin/upload",method = RequestMethod.POST)
	 public void uploadNewsPic(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException
	 {
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
	 
	 @RequestMapping(value="/admin/user",method = RequestMethod.GET,headers="Accept=application/json")
	 public org.avenue.service.domain.User getUserName(Principal principal) {
		 User activeUser = (User) ((Authentication) principal).getPrincipal();
		 String username = activeUser.getUsername();
		 org.avenue.service.domain.User thisUser = taskmanagerservice.getUserByName(username);
		 return thisUser;	
	 }
	 
	 @RequestMapping(value="/admin/user",method = RequestMethod.PUT)
	 public void updateUser(@RequestBody org.avenue.service.domain.User user) {	 
		 taskmanagerservice.updateUser( user );
	 }
}