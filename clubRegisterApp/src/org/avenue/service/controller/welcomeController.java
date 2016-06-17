package org.avenue.service.controller;

import java.security.Principal;
import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.avenue.dao.TaskManagerService;
import org.avenue.service.domain.NewsStory;
import org.avenue.service.domain.Team;
import org.avenue.service.domain.Worker;
import org.avenue.service.utility.FileUtilities;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class welcomeController {

	TaskManagerService taskmanagerservice=new TaskManagerService();
	private final Logger log = LoggerFactory.getLogger(welcomeController.class);
	private String loghdr = "################################ ## [welcomeController]->";
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String homePage(HttpServletRequest request)
	{
		log.trace(loghdr+"root mapping..");
		HttpSession session = request.getSession();  	 
        ArrayList<NewsStory> stories = new ArrayList<NewsStory>();

        stories = taskmanagerservice.getNewsItems();
        log.trace(loghdr+"got news stories from getNewsItems: " + stories);
        session.setAttribute("stories", stories);

		return "home";
	}

	@RequestMapping(value = "/home", method = RequestMethod.GET)
	public String home( ModelMap model ){return "home";}
	
	@RequestMapping("/user")
	public Principal user(Principal user) {
		return user;
	}
	
	@RequestMapping(value = "/admin**", method = RequestMethod.GET)
	public String adminPage( HttpServletRequest request, ModelMap model, Principal principal )
	{
		log.debug(loghdr+"/admin** mapping..");
		String name = principal.getName();
		log.debug(loghdr+"user name: " + name);
		Worker user = new Worker();
		HttpSession session = request.getSession();
		
		user = taskmanagerservice.getUserByName(name);
		log.debug("## [welcomeController]->getUserByName returned: " + user);
		session.setAttribute("user", user);
		
		log.trace(loghdr+"root mapping: returning view of home");
		return "home";
	}

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String login( HttpServletRequest request, ModelMap model, Principal principal )
	{
		return "admin";
	}
	
	
	//public String login( ModelMap model ){return "login";}
	
	@RequestMapping(value = "/loginfailed", method = RequestMethod.GET)
	public String loginfailed( ModelMap model ){
		model.addAttribute("error", "true");
		return "login"; 
	}
	
	@RequestMapping(value = "/logout", method = RequestMethod.GET)
	public String logout( ModelMap model ){return "logout";}

	@RequestMapping(value = "/UploadNewsStory", method = RequestMethod.GET)
	public String UploadNewsStory( ModelMap model ){return "UploadNewsStory";}
	
	@RequestMapping(value = "/MemberRegister", method = RequestMethod.GET)
	public String MemberRegister( ModelMap model ){return "MemberRegister";}
	
	@RequestMapping(value = "/AdminTutorials", method = RequestMethod.GET)
	public String AdminTutorials( ModelMap model ){return "AdminTutorials";}
	
	@RequestMapping(value = "/AdminOverview", method = RequestMethod.GET)
	public String AdminOverview( ModelMap model ){return "AdminOverview";}
	
	@RequestMapping(value = "/AllMembersAdmin", method = RequestMethod.GET)
	public String AllMembersAdmin( ModelMap model ){return "AllMembersAdmin";}
	
	@RequestMapping(value = "/ManageTeamJA", method = RequestMethod.GET)
	public String ManageTeamJA( ModelMap model ){return "ManageTeamJA";}
	
	@RequestMapping(value = "/ManageTeamJB", method = RequestMethod.GET)
	public String ManageTeamJB( ModelMap model ){return "ManageTeamJB";}
	
	@RequestMapping(value = "/ManageTeamU18", method = RequestMethod.GET)
	public String ManageTeamU18( ModelMap model ){return "ManageTeamU18";}
	
	@RequestMapping(value = "/ManageTeamU17", method = RequestMethod.GET)
	public String ManageTeamU17( ModelMap model ){return "ManageTeamU17";}
	
	@RequestMapping(value = "/ManageTeamU16", method = RequestMethod.GET)
	public String ManageTeamU16( ModelMap model ){return "ManageTeamU16";}
	
	@RequestMapping(value = "/ManageTeamU15", method = RequestMethod.GET)
	public String ManageTeamU15( ModelMap model ){return "ManageTeamU15";}
	
	@RequestMapping(value = "/ManageTeamU15B", method = RequestMethod.GET)
	public String ManageTeamU15B( ModelMap model ){return "ManageTeamU15B";}
	
	@RequestMapping(value = "/ManageTeamU14", method = RequestMethod.GET)
	public String ManageTeamU14( ModelMap model ){return "ManageTeamU14";}
	
	@RequestMapping(value = "/ManageTeamU13", method = RequestMethod.GET)
	public String ManageTeamU13( ModelMap model ){return "ManageTeamU13";}
	
	@RequestMapping(value = "/ManageTeamU13B", method = RequestMethod.GET)
	public String ManageTeamU13B( ModelMap model ){return "ManageTeamU13B";}
	
	@RequestMapping(value = "/ManageTeamU12", method = RequestMethod.GET)
	public String ManageTeamU12( ModelMap model ){return "ManageTeamU12";}
	
	@RequestMapping(value = "/ManageTeamU12B", method = RequestMethod.GET)
	public String ManageTeamU12B( ModelMap model ){return "ManageTeamU12B";}
	
	@RequestMapping(value = "/ManageTeamU12C", method = RequestMethod.GET)
	public String ManageTeamU12C( ModelMap model ){return "ManageTeamU12C";}
	
	@RequestMapping(value = "/ManageTeamU11", method = RequestMethod.GET)
	public String ManageTeamU11( ModelMap model ){return "ManageTeamU11";}
	
	@RequestMapping(value = "/ManageTeamU11B", method = RequestMethod.GET)
	public String ManageTeamU11B( ModelMap model ){return "ManageTeamU11B";}
	
	@RequestMapping(value = "/ManageTeams", method = RequestMethod.GET)
	public String ManageTeams( ModelMap model ){return "ManageTeams";}
	
	@RequestMapping(value = "/MyProfile", method = RequestMethod.GET)
	public String MyProfile( ModelMap model ){return "MyProfile";}
	
	@RequestMapping(value = "/ChangePassword", method = RequestMethod.GET)
	public String ChangePassword( ModelMap model ){return "ChangePassword";}
}
