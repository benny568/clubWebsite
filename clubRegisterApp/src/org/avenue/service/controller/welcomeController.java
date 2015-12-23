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
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class welcomeController {

	TaskManagerService taskmanagerservice=new TaskManagerService();
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String homePage(HttpServletRequest request)
	{
		HttpSession session = request.getSession();  	 
        ArrayList<NewsStory> stories = new ArrayList<NewsStory>();

        stories = taskmanagerservice.getNewsItems();
        session.setAttribute("stories", stories);

		return "home";
	}

	@RequestMapping(value = "/home", method = RequestMethod.GET)
	public String home( ModelMap model ){return "home";}
	
	@RequestMapping(value = "/admin**", method = RequestMethod.GET)
	public String adminPage( HttpServletRequest request, ModelMap model, Principal principal )
	{
		String name = principal.getName();
		Worker user = new Worker();
		HttpSession session = request.getSession();
		
		user = taskmanagerservice.getUserByName(name);
		session.setAttribute("user", user);
		
		return "home";
	}

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String login( ModelMap model ){return "login";}
	
	@RequestMapping(value = "/loginfailed", method = RequestMethod.GET)
	public String loginfailed( ModelMap model ){
		model.addAttribute("error", "true");
		return "login"; 
	}
	
	@RequestMapping(value = "/logout", method = RequestMethod.GET)
	public String logout( ModelMap model ){return "logout";}

	@RequestMapping(value = "/ClubHistory", method = RequestMethod.GET)
	public String history( ModelMap model ){return "ClubHistory";}
	
	@RequestMapping(value = "/ContactUs", method = RequestMethod.GET)
	public String contact( ModelMap model ){return "ContactUs";}
	
	@RequestMapping(value = "/MessageUs", method = RequestMethod.GET)
	public String messageus( ModelMap model ){return "MessageUs";}
	
	@RequestMapping(value = "/FindUs", method = RequestMethod.GET)
	public String findus( ModelMap model ){return "FindUs";}
	
	@RequestMapping(value = "/Downloads", method = RequestMethod.GET)
	public String Downloads( ModelMap model ){return "Downloads";}
	
	@RequestMapping(value = "/Links", method = RequestMethod.GET)
	public String Links( ModelMap model ){
		
		String password = "corina";
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String hashedPassword = passwordEncoder.encode(password);

		System.out.println("@@@ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ @@@");
		System.out.println("@@@ THE ENCRYPTED PASSWORD IS: [" + hashedPassword + "] @@@");
		System.out.println("@@@ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ @@@");
		
		return "Links";}

	@RequestMapping(value = "/news", method = RequestMethod.GET)
	public String news( ModelMap model ){return "LatestNews";}
	
	@RequestMapping(value = "/juniorApage", method = RequestMethod.GET)
	public String juniorApage( ModelMap model ){return "teamViewJA";}
	
	@RequestMapping(value = "/juniorBpage", method = RequestMethod.GET)
	public String juniorBpage( ModelMap model ){return "teamViewJB";}
	
	@RequestMapping(value = "/u18page", method = RequestMethod.GET)
	public String u18page( ModelMap model ){return "teamViewU18";}
	
	@RequestMapping(value = "/u17page", method = RequestMethod.GET)
	public String u17page( ModelMap model ){return "teamViewU17";}
	
	@RequestMapping(value = "/u16page", method = RequestMethod.GET)
	public String u16page( ModelMap model ){return "teamViewU16";}
	
	@RequestMapping(value = "/u16Bpage", method = RequestMethod.GET)
	public String u16Bpage( ModelMap model ){return "teamViewU16B";}
	
	@RequestMapping(value = "/u15page", method = RequestMethod.GET)
	public String u15page( ModelMap model ){return "teamViewU15";}
	
	@RequestMapping(value = "/u15Bpage", method = RequestMethod.GET)
	public String u15Bpage( ModelMap model ){return "teamViewU15B";}
	
	@RequestMapping(value = "/u14page", method = RequestMethod.GET)
	public String u14page( ModelMap model ){return "teamViewU14";}
	
	@RequestMapping(value = "/u14Bpage", method = RequestMethod.GET)
	public String u14Bpage( ModelMap model ){return "teamViewU14B";}
	
	@RequestMapping(value = "/u13page", method = RequestMethod.GET)
	public String u13page( ModelMap model ){return "teamViewU13";}
	
	@RequestMapping(value = "/u13Bpage", method = RequestMethod.GET)
	public String u13Bpage( ModelMap model ){return "teamViewU13B";}
	
	@RequestMapping(value = "/u12page", method = RequestMethod.GET)
	public String u12page( ModelMap model ){return "teamViewU12";}
	
	@RequestMapping(value = "/u12Bpage", method = RequestMethod.GET)
	public String u12Bpage( ModelMap model ){return "teamViewU12B";}
	
	@RequestMapping(value = "/u12Cpage", method = RequestMethod.GET)
	public String u12Cpage( ModelMap model ){return "teamViewU12C";}

	@RequestMapping(value = "/u11Rpage", method = RequestMethod.GET)
	public String u11Rpage( ModelMap model ){return "teamViewU11Red";}
	
	@RequestMapping(value = "/u11Ypage", method = RequestMethod.GET)
	public String u11Ypage( ModelMap model ){return "teamViewU11Yellow";}
	
	@RequestMapping(value = "/farViewJA", method = RequestMethod.GET)
	public String farViewJA( HttpServletRequest request )
	{
		HttpSession session = request.getSession();
		Team team=taskmanagerservice.getTeamDetails("Junior A");
		session.setAttribute("team", team);
		return "farView";
	}
	@RequestMapping(value = "/farViewJB", method = RequestMethod.GET)
	public String farViewJB( HttpServletRequest request )
	{
		HttpSession session = request.getSession();
		Team team=taskmanagerservice.getTeamDetails("Junior B");
		session.setAttribute("team", team);
		return "farView";
	}
	@RequestMapping(value = "/farViewU18", method = RequestMethod.GET)
	public String farViewU18( HttpServletRequest request )
	{
		HttpSession session = request.getSession();
		Team team=taskmanagerservice.getTeamDetails("U18");
		session.setAttribute("team", team);
		return "farView";
	}
	@RequestMapping(value = "/farViewU17", method = RequestMethod.GET)
	public String farViewU17( HttpServletRequest request )
	{
		HttpSession session = request.getSession();
		Team team=taskmanagerservice.getTeamDetails("U17");
		session.setAttribute("team", team);
		return "farView";
	}
	@RequestMapping(value = "/farViewU16", method = RequestMethod.GET)
	public String farViewU16( HttpServletRequest request )
	{
		HttpSession session = request.getSession();
		Team team=taskmanagerservice.getTeamDetails("U16A");
		session.setAttribute("team", team);
		return "farView";
	}
	@RequestMapping(value = "/farViewU15", method = RequestMethod.GET)
	public String farViewU15( HttpServletRequest request )
	{
		HttpSession session = request.getSession();
		Team team=taskmanagerservice.getTeamDetails("U15A");
		session.setAttribute("team", team);
		return "farView";
	}
	@RequestMapping(value = "/farViewU15B", method = RequestMethod.GET)
	public String farViewU15B( HttpServletRequest request )
	{
		HttpSession session = request.getSession();
		Team team=taskmanagerservice.getTeamDetails("U15B");
		session.setAttribute("team", team);
		return "farView";
	}
	@RequestMapping(value = "/farViewU14", method = RequestMethod.GET)
	public String farViewU14( HttpServletRequest request )
	{
		HttpSession session = request.getSession();
		Team team=taskmanagerservice.getTeamDetails("U14A");
		session.setAttribute("team", team);
		return "farView";
	}
	@RequestMapping(value = "/farViewU13", method = RequestMethod.GET)
	public String farViewU13( HttpServletRequest request )
	{
		HttpSession session = request.getSession();
		Team team=taskmanagerservice.getTeamDetails("U13 Red");
		session.setAttribute("team", team);
		return "farView";
	}
	@RequestMapping(value = "/farViewU13B", method = RequestMethod.GET)
	public String farViewU13B( HttpServletRequest request )
	{
		HttpSession session = request.getSession();
		Team team=taskmanagerservice.getTeamDetails("U13 Yellow");
		session.setAttribute("team", team);
		return "farView";
	}
	@RequestMapping(value = "/farViewU12", method = RequestMethod.GET)
	public String farViewU12( HttpServletRequest request )
	{
		HttpSession session = request.getSession();
		Team team=taskmanagerservice.getTeamDetails("U12 Yellow");
		session.setAttribute("team", team);
		return "farView";
	}
	@RequestMapping(value = "/farViewU12B", method = RequestMethod.GET)
	public String farViewU12B( HttpServletRequest request )
	{
		HttpSession session = request.getSession();
		Team team=taskmanagerservice.getTeamDetails("U12 Red");
		session.setAttribute("team", team);
		return "farView";
	}
	@RequestMapping(value = "/farViewU12C", method = RequestMethod.GET)
	public String farViewU12C( HttpServletRequest request )
	{
		HttpSession session = request.getSession();
		Team team=taskmanagerservice.getTeamDetails("U12 Black");
		session.setAttribute("team", team);
		return "farView";
	}
	@RequestMapping(value = "/farViewU11R", method = RequestMethod.GET)
	public String farViewU11R( HttpServletRequest request )
	{
		HttpSession session = request.getSession();
		Team team=taskmanagerservice.getTeamDetails("U11 Red");
		session.setAttribute("team", team);
		return "farView";
	}
	@RequestMapping(value = "/farViewU11Y", method = RequestMethod.GET)
	public String farViewU11Y( HttpServletRequest request )
	{
		HttpSession session = request.getSession();
		Team team=taskmanagerservice.getTeamDetails("U11 Yellow");
		session.setAttribute("team", team);
		return "farView";
	}

	
	@RequestMapping(value = "/AcademyHome", method = RequestMethod.GET)
	public String AcademyHome( ModelMap model ){return "AcademyHome";}
	
	@RequestMapping(value = "/AcademyOverview", method = RequestMethod.GET)
	public String AcademyOverview( ModelMap model ){return "AcademyOverview";}
	
	@RequestMapping(value = "/AcademyRegistration", method = RequestMethod.GET)
	public String AcademyRegistration( ModelMap model ){return "AcademyRegistration";}
	
	@RequestMapping(value = "/AcademyCoaches", method = RequestMethod.GET)
	public String AcademyCoaches( ModelMap model ){return "AcademyCoaches";}
	
	@RequestMapping(value = "/AcademySchedule", method = RequestMethod.GET)
	public String AcademySchedule( ModelMap model ){return "AcademySchedule";}
	
	@RequestMapping(value = "/AcademyPhotos", method = RequestMethod.GET)
	public String AcademyPhotos( ModelMap model ){return "AcademyPhotos";}
	
	@RequestMapping(value = "/MerchandiseHome", method = RequestMethod.GET)
	public String MerchandiseHome( ModelMap model ){return "MerchandiseHome";}
	
	@RequestMapping(value = "/juniorAfnr", method = RequestMethod.GET)
	public String juniorAfnr( ModelMap model ){return "juniorAfnr";}
	
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
