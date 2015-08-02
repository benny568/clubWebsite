package org.avenue.service.controller;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.avenue.dao.TaskManagerService;
import org.avenue.service.domain.NewsStory;
import org.avenue.service.utility.FileUtilities;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class welcomeController {

	@RequestMapping(value = { "/", "/public**" }, method = RequestMethod.GET)
	public String homePage(HttpServletRequest request)
	{
		HttpSession session = request.getSession();  	 
        FileUtilities fileUtilities = new FileUtilities();
        ArrayList<NewsStory> stories = new ArrayList<NewsStory>();
        TaskManagerService taskmanagerservice=new TaskManagerService();
 
        //final String directoryLinuxMac ="/Users/loiane/test";
 
        //Windows directory example
        final String directoryWindows ="C://Brendan O'Daly//prj//clubRegisterApp//WebContent//WEB-INF//resources//news";
 
        // Need to read in the news details and pass them to the page for display
        //stories = fileUtilities.readXMLFile("C://Brendan O'Daly//prj//clubRegisterApp//WebContent//WEB-INF//resources//news2/news.xml");
        stories = taskmanagerservice.getNewsItems();

        session.setAttribute("stories", stories);

		return "home";
	}

	@RequestMapping(value = "/home", method = RequestMethod.GET)
	public String home( ModelMap model ){return "home";}
	
	@RequestMapping(value = "/admin**", method = RequestMethod.GET)
	public String adminPage(){return "/WEB-INF/resources/viewParts/adminHome";}

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

	@RequestMapping(value = "/news", method = RequestMethod.GET)
	public String news( ModelMap model ){return "LatestNews";}
	
	@RequestMapping(value = "/juniorApage", method = RequestMethod.GET)
	public String juniorApage( ModelMap model ){return "teamViewJA";}
	
	@RequestMapping(value = "/juniorBpage", method = RequestMethod.GET)
	public String juniorBpage( ModelMap model ){return "teamViewJB";}
	
	@RequestMapping(value = "/u14page", method = RequestMethod.GET)
	public String u14page( ModelMap model ){return "teamViewU14";}
	
	@RequestMapping(value = "/u11Rpage", method = RequestMethod.GET)
	public String u11Rpage( ModelMap model ){return "teamViewU11Red";}
	
	@RequestMapping(value = "/u11Ypage", method = RequestMethod.GET)
	public String u11Ypage( ModelMap model ){return "teamViewU11Yellow";}
	
	@RequestMapping(value = "/u18page", method = RequestMethod.GET)
	public String u18page( ModelMap model ){return "teamViewU18";}
	
	@RequestMapping(value = "/u17page", method = RequestMethod.GET)
	public String u17page( ModelMap model ){return "teamViewU17";}
	
	@RequestMapping(value = "/u16page", method = RequestMethod.GET)
	public String u16page( ModelMap model ){return "teamViewU16";}
	
	@RequestMapping(value = "/AcademyHome", method = RequestMethod.GET)
	public String AcademyHome( ModelMap model ){return "AcademyHome";}
	
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
	
	@RequestMapping(value = "/ManageTeamU18", method = RequestMethod.GET)
	public String ManageTeamU18( ModelMap model ){return "ManageTeamU18";}
	
	@RequestMapping(value = "/ManageTeamU14", method = RequestMethod.GET)
	public String ManageTeamU14( ModelMap model ){return "ManageTeamU14";}
	
	@RequestMapping(value = "/ManageTeams", method = RequestMethod.GET)
	public String ManageTeams( ModelMap model ){return "ManageTeams";}
	
	@RequestMapping(value = "/MyProfile", method = RequestMethod.GET)
	public String MyProfile( ModelMap model ){return "MyProfile";}
}
