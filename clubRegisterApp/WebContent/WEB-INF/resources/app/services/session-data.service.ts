import { Component }      from '@angular/core';
import { Injectable }     from '@angular/core';
import { Inject }         from '@angular/core';
import { Http }           from '@angular/http';
import { Headers }        from '@angular/http';
import { RequestOptions } from '@angular/http';
import { LoggerService }  from '../services/logger.service';
import { ToolBox }        from '../utilities/toolbox';
import { User }           from '../dao/site-user';
import { ServerMode }     from '../dao/server-mode';
import { Team }           from '../dao/team';
import { Member }         from '../dao/member';
import { NewsStory }      from '../dao/news-story';
import { Sponsor }        from "../dao/sponsor";

@Injectable()
export class SessionDataService {
    
	dsAuthenticated:boolean;
    modes = { LOCAL:0, REMOTE:1};
    CurrentServerMode:number;
    dsTeams : Array<Team>;
    dsTeamMembers = [];
    dsCurrentTeam:Team;
    dsCurrentMember:Member;
    dsCurrentUser:User;
    // dsSessionPlans = [];
    // dsTrainingRecords = [];
    // dsTrainingPerMember = [];
    dsAllMembers : Array<Member>;
    dsNewsStories : Array<NewsStory>;
    dsPosition : Array<string>;
    dsSponsors : Array<Sponsor>;
    
    logdepth = 3;
    loghdr = "";
    serviceName = 'SessionDataService';
    displayMember = false;
    gAuthenticated = false;

     constructor ( @Inject(Http) private lg$: LoggerService, private _http: Http ) {
    	 this.loghdr = this.setLogHdr(this.logdepth, this.serviceName);
        
        var svr = new ServerMode();
        this.CurrentServerMode = svr.getServerMode();
        this.dsAuthenticated = false;
        this.dsPosition = [ 'Manager','Goalkeeper','Full Back','Center Half','Mid Field','CAM','Winger','Striker', 'Chairman', 'Secretary', 'Treasurer', 'PRO', 'Committee'];
        this.dsCurrentUser = new User();
        this.dsCurrentTeam = new Team();
        this.dsCurrentMember = new Member();
        this.dsTeams = new Array<Team>();
        //this.dsTeamMembers = new Array(500);
        this.dsCurrentUser = new User();
        this.dsAllMembers = new Array<Member>();
        this.dsNewsStories = new Array<NewsStory>();
        this.dsSponsors = new Array<Sponsor>();

    }
 
       
    /**********************************************************
     * Name:		setCurrentMember()
     * Description:	Set the current member to the one passed in
     * Scope:		Externally accessible
     * Params in:	member: the member in question
     * Return:		
     **********************************************************/
     setCurrentMember( member:Member )
     {
         console.log("-->" + "setCurrentMember()");
         this.dsCurrentMember = member;
         this.displayMember = true;
     }
     
    /**********************************************************
     * Name:		hasPermission()
     * Description:	Check the user's permission to perform the
     * 				given action
     * Scope:		Externally accessible
     * Params in:	action: the action being requested
     * Return:		true or false depending on the permissions
     **********************************************************/
    hasPermission(action, params)
    {
        var team = '';
        var allow = false;
        var index = 0;
        
        console.log("-->" + "hasPermission("+action+","+params+")");

        if( typeof action === undefined || params === undefined )
            return false;

        for( var r=0; r<this.dsCurrentUser.roles.length; r++ )
        {
            if( this.dsCurrentUser.roles[r] === "ROLE_SUPER" )
            {
                // Super user has permissions to do anything
                //log.trace(loghdr + " -> hasPermission("+action+"): YES");
            	console.log(" -> hasPermission("+action+"): YES");
                return true;
            }
        }
        switch(action)
        {
            case 'MANAGE_TEAM':
                team = params;
                // Check if the user is a manager of this team
                for( var i=0; i<this.dsCurrentUser.permissions.teams.length; i++ )
                {
                    for( var t=0; t<this.dsTeams.length; t++ )
                    {
                        if( this.dsTeams[t].id === this.dsCurrentUser.permissions.teams[i] )
                        {
                            index = t;
                            break;
                        }
                    }

                    if( this.dsTeams[index].name === team )
                    {
                        if( this.dsCurrentUser.permissions.positions[i] == 0 )
                        {
                            allow = true;
                            break;
                        }
                    }
                }
                break;
                
            case 'ADD_TEAM':
            case 'EDIT_TEAM':
                for( var r=0; r<this.dsCurrentUser.roles.length; r++ )
                {
                    if( this.dsCurrentUser.roles[r] === "ROLE_SUPER" )
                    {
                        // Super user has permissions to do anything
                        allow = true;
                        break;
                    }
                    else if( this.dsCurrentUser.roles[r] === "ROLE_EDIT_TEAM" )
                    {
                        allow = true;
                        break;
                    }
                }
                break;
            case 'DEL_TEAM':
                for( var r=0; r<this.dsCurrentUser.roles.length; r++ )
                {
                    if( this.dsCurrentUser.roles[r] === "ROLE_SUPER" )
                    {
                        // Super user has permissions to do anything
                        allow = true;
                        break;
                    }
                    else if( this.dsCurrentUser.roles[r] === "ROLE_DEL_TEAM" )
                    {
                        allow = true;
                        break;
                    }
                }
                break;
                
            case 'ADD_USER':
            case 'EDIT_USER':
            case 'DELETE_USER':
            case 'VIEW_USERS':
                for( var r=0; r<this.dsCurrentUser.roles.length; r++ )
                {
                     if( this.dsCurrentUser.roles[r] === "ROLE_SUPER" )
                    {
                        // Super user has permissions to do anything
                        allow = true;
                        break;
                    }
                }
                break;
        }

        return allow;
    }
    
    /**********************************************************
     * Name:		difference()
     * Description:	Checeks to see if there is a difference
     *              between two objects
     * Scope:		Internal
     * Params in:	None
     * Return:		
     **********************************************************/
    difference(m1, m2) 
    {
	    var diff = false;
	    Object.getOwnPropertyNames(m1).forEach(function(val, idx, array) {
	    	if( m1[val] != m2[val] )
	    		  diff = true;
	    });
	        
	    return diff;
	}
    
    /**********************************************************
     * Name:		applyMemberChange()
     * Description:	Applies a change to the local data so the 
     *              user sees the change on the view.
     * Scope:		Internal
     * Params in:	None
     * Return:		
     **********************************************************/
    applyMemberChange(members, member)
	{
		var index:number = SessionDataService.findMemberIndex( members, member );

		if( index === -1 )
		{
			return;
		}
		
		members[index].name = member.name;
		members[index].address = member.address;
		members[index].phone = member.phone;
		members[index].dob = member.dob;
		members[index].email = member.email;
		members[index].amount = member.amount;
		members[index].team = member.team;
		members[index].position = member.position;
		members[index].lid = member.lid;
		members[index].favteam = member.favteam;
		members[index].favplayer = member.favplayer;
		members[index].sappears = member.sappears;
		members[index].sassists = member.sassists;
		members[index].sgoals = member.sgoals;
		members[index].photo = member.photo;
		members[index].achievments = member.achievments;
	}
    
    /**********************************************************
     * Name:		applyMemberDel()
     * Description:	Applies a change to the local data so the 
     *              user sees the change on the view.
     * Scope:		Internal
     * Params in:	None
     * Return:		
     **********************************************************/
    applyMemberDel( members, member )
	{
		var index:number = SessionDataService.findMemberIndex( members, member );

		if( index === -1 )
		{
			return;
		}		
		else if( index > -1 ) 
		{   // Delete the member at index
		    members.splice(index, 1);
		}
	}
    
    /**********************************************************
     * Name:		applyMemberAdd()
     * Description:	Applies a change to the local data so the 
     *              user sees the change on the view.
     * Scope:		Internal
     * Params in:	None
     * Return:		
     **********************************************************/
    applyMemberAdd( members, member )
	{
		if( this.dsTeamMembers[member.team] === undefined )
			//getMembers4team(member.team);

		var index = SessionDataService.findMemberIndex( this.dsTeamMembers[member.team], member );

		if( index === -1 )
		{// Add the member if it doesn't exits
		    members[member.team].push( member );
		}		
		else if( index > -1 ) 
		{
			//log.debug(loghdr + "###### ERROR: applyMemberAdd - member not found!");
		}
	}
    
    /**********************************************************
     * Name:		applyTeamChange()
     * Description:	Applies a change to the local data so the 
     *              user sees the change on the view.
     * Scope:		Internal
     * Params in:	None
     * Return:		
     **********************************************************/
    applyTeamChange(teams, thisTeam)
    {
        var index:number = -1;

        if( this.dsTeams.length === 0 )
        {
            this.dsGetTeams();
        }
            
    
        for( var i=0; i<this.dsTeams.length; i++ )
        {
            if( this.dsTeams[i].id === thisTeam.id )
            {
                index = i;
                break;
            }
        }


        if( index === -1 )
        {
            //log.debug(loghdr + "###### ERROR: applyTeamChange - team not found!");
        }		
        else if( index > -1 ) 
        {
            this.dsTeams[index] = thisTeam;
            //log.debug(loghdr + " -> applyTeamChange - team updated: " + thisTeam.name );
        }
    }
    
    /**********************************************************
     * Name:		findMemberIndex()
     * Description:	Find a members index/position in the array
     *              of members 
     * Scope:		Internal
     * Params in:	None
     * Return:		The index value
     **********************************************************/
    static findMemberIndex( members, member )
	{
		var index = -1;
		
		if( typeof members !== undefined )
		{
			for( var i=0; i<members.length; i++ )
			{
				if( members[i].id === member.id )
				{
					index = i;
					break;
				}
			}
		}

		return index;
	}
    
    /**********************************************************
     * Name:		convertPosToInt()
     * Description:	Converts the position name to the integer 
     *              value
     * Scope:		Internal
     * Params in:	None
     * Return:		The position integer value
     **********************************************************/
    convertPosToInt( sPos )
	{
		return this.dsPosition.indexOf(sPos);
	}
    
    /**********************************************************
     * Name:		convertTeamToInt()
     * Description:	Converts the team name to the integer value
     * Scope:		Internal
     * Params in:	None
     * Return:		The team integer value
     **********************************************************/
    convertTeamToInt( sTeam:string )
	{
		for( var i=0; i<this.dsTeams.length; i++ )
		{
			if( this.dsTeams[i].name == sTeam )
			{
				return this.dsTeams[i].id;
			}
		}
		return 0;
	}

    /**********************************************************
     * Name:		setCurrentTeamByName()
     * Description:	Set the current team in memory
     * Scope:		Internal
     * Params in:	Team name as a string
     * Return:		None
     **********************************************************/
    setCurrentTeamByName( teamName: string)
    {
    	console.log("-->" + "setCurrentTeamByName(" + teamName + ")");

        // Ensure the teams information has been loaded
        if( this.dsTeams.length < 1 )
            this.dsGetTeams();

        // Pick out this team and set it as the current one
        for( var team of this.dsTeams )
        {
            if( team.name == teamName ) {
                this.dsCurrentTeam = team;
                console.log( "-->" + "setCurrentTeamByName(): Team set to " + teamName);
                break;
            }
        }
    }
    
    /**********************************************************
     * Name:		loadNewsStories()
     * Description:	Retrieves a list of Newws from the server
     * Scope:		Internal
     * Params in:	None
     * Return:		Sets dsNewsStories
     **********************************************************/
    loadNewsStories()
    {
        console.log("-->" + "loadNewsStories()..");
        var url = this.getHome();
        
        return this._http.get( url + '/stories' )
            			.map(response => response.json());
            /*.subscribe(
            	data => this.dsNewsStories = data,
            	error => this.handleError(error), //console.log("===> Error getting news from server: " + error),
            	() => console.log(" <=== Received news from server. <====")
            );*/

     }
    
    setNews(data)
    {
    	console.log("->" + "setNews()...recieved news stories: " + data);
    	this.dsNewsStories = data;
    }
    
    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        //return Observable.throw(errMsg);
      }

    /**********************************************************
     * Name:		getHome()
     * Description:	Returns the _home URL so that it can be used
     * 				as a local or remote app.
     * Scope:		Externally accessible
     * Params in:	none
     * Return:		_home URL
     **********************************************************/
    getHome() : string
    {
        var _home:string;
        //log.debug(loghdr + "-> getHome()");
        if( this.CurrentServerMode == this.modes.LOCAL )
        {
            //log.debug(loghdr + "     | _home is LOCAL");
            _home = 'http://localhost:8080/clubRegisterApp';
            //_home = 'http://localhost:3000/';
        }
        else if( this.CurrentServerMode == this.modes.REMOTE )
        {
        	//log.debug(loghdr + "     | _home is REMOTE");
            _home = 'http://www.avenueunited.ie';
        }
        
        return _home;
    }


    /**********************************************************
     * Name:		dsGetTeams()
     * Description:	Retrieves a list of teams from the server
     * Scope:		Internal
     * Params in:	None
     * Return:		Sets dsNewsStories
     **********************************************************/
    dsGetTeams()
    {
        console.log("-->" + " dsGetTeams()..");
        var url = this.getHome();
        
        return this._http.get( url + '/teams' )
			.map(response => response.json())
			.subscribe( data => this.dsSetTeams(data),
						err  => console.error("DataService: ERROR reading teams from server!"),
						()   => console.log(" <== Teams received from server <==")
					);
     }
    

    /**********************************************************
     * Name:		dsSetTeams()
     * Description:	Set the current member to the one passed in
     * Scope:		Externally accessible
     * Params in:	member: the member in question
     * Return:		
     **********************************************************/
    dsSetTeams( data )
     {
         console.log("-->" + "dsSetTeams()");
         this.dsTeams = data;
     }
     
    /**********************************************************
     * Name:		loadCurrentTeamMembersByName()
     * Description:	Load the current team's details and members
     * Scope:		Externally accessible
     * Params in:	teamName: the name of the team in question
     * Return:
     **********************************************************/
    loadCurrentTeamMembersByName( teamName:string )
    {
        console.log("-->" + "loadCurrentTeamMembersByName(" + teamName + ")");

       if( (this.dsTeamMembers.length !== 0) && (this.dsCurrentTeam.name == teamName) )
       {
           console.log("-->" + "loadCurrentTeamByName():" + "Members already loaded not loading again!");
           return;
       }
       else {
           // Clear out the TeamMembers array first
            this.dsTeamMembers.length = 0;
            var url = this.getHome();

            this._http.get( url + '/team/' + teamName )
                .map(response => response.json());
        }
    }


    /// TEMP FUNCTION TO SIM REST CALL TO SERVER
    getTeamDetailsSim( teamName:string ) : Team {
        return this.dsCurrentTeam;// = this._sds.getTeamDetailsByName(teamName);
    }

    /**********************************************************
     * Name:		loadCurrentSponsors()
     * Description:	Load the current sponsors details
     * Scope:		Externally accessible
     * Params in:	None
     * Return:      Array of sponsor objects
     **********************************************************/
    loadCurrentSponsors() : Array<Sponsor>
    {
        console.log("-->" + "loadCurrentSponsors()");

        this.dsSponsors = [ {name:"Enzo's Takeaway", image:"resources/images/adverts/enzos.png"},
                            {name:"Rochford's Pharmacy", image: "resources/images/adverts/main-sponsor.png"},
                            {name:"Ennis Cabs", image: "resources/images/adverts/ec.png"}
                        ];
        return this.dsSponsors;
    }

    /**********************************************************
     * Name:		clearCurrentMember()
     * Description:	Clear out the dsCurrentMember
     * Scope:		Externally accessible
     * Params in:	None
     * Return:      None
     **********************************************************/
    clearCurrentMember()
    {
        this.dsCurrentMember = null;
    }
    
    /**********************************************************
     * Name:		loadPhotoDetails()
     * Description:	Retrieves a list of photos from the server
     * Scope:		Internal
     * Params in:	None
     * Return:		Sets 
     **********************************************************/
    loadPhotoDetails( url ) 
    {
        console.log("-->" + "loadPhotoDetails(" + url + ")");

        // ToDo: If we have already loaded the news just return


        // Read the list of files from the server
       return this._http.get( url )
            .map(response => response.json());
    }
    
    /**********************************************************
     * Name:		authenticate()
     * Description:	Authenticates the user with the server
     * Scope:		Internal
     * Params in:	
     * Return:		 
     **********************************************************/    
    authenticate(username, password) 
    {
    	console.log("-->" + "authenticate(" + username + "," + password + ")");
    	
    	var creds = "j_username=" + username + "&j_password=" + password;   	
		let body = JSON.stringify({ creds  });
	    let headers = new Headers({ 'Content-Type': 'application/json' });
	    let options = new RequestOptions({ headers: headers });

        return this._http.post( this.getHome() + '/j_spring_security_check?'+creds, body, options);
    }
    
    getUser(username)
    {
    	console.log("-->" + "getUser(" + username + ")");
    	return this._http.get(this.getHome() + '/admin/user').map(response => response.json());
    }
    
    /**********************************************************
     * Name:		logout()
     * Description:	Invalidates the user session with the server
     * Scope:		Internal
     * Params in:	
     * Return:		 
     **********************************************************/
    logout()
    {
    	this.dsAuthenticated = false;
    	return this._http.get(this.getHome() + '/j_spring_security_logout');
    }
    
    
    /**********************************************************
     * Name:		dsGetAllMembers()
     * Description:	Get all members from the server
     * Scope:		Internal
     * Params in:	
     * Return:		 
     **********************************************************/
    dsGetAllMembers()
    {
    	console.log("-->" + "dsGetAllMembers()");
    	var url = this.getHome();
    	
    	return this._http.get(url + "/admin/members")
    		.map(response => response.json())
    		.subscribe(
    					data => this.dsAllMembers = data,
    					err => console.log("ERROR getting members from server!"),
    					() => console.log("<== Finished getting all members from server <==")
    					);
    }
    
    
    /**********************************************************
	 * Name:		getTeamNameFrmId()
	 * Description:	Convert a team name to it's id
	 * Scope:		Externally accessible via the service
	 * Params in:	scope: The parents scope
	 * 				
	 * Return:		The team id
	 **********************************************************/
    getTeamNameFrmId(iTeam)
    {
    	var sTeamId = "";
    	
    	for( var i=0; i<this.dsTeams.length; i++ )
    	{
    		if( iTeam == i )
    		{
    			sTeamId = this.dsTeams[i - 1].name;
    			return sTeamId;
    		}
    	}
    	
    	return sTeamId;
    } 
    
    
    
    
    
    
    
    
    
    
    
    

	saveJwt(jwt) {
	  if(jwt) {
	    localStorage.setItem('id_token', jwt)
	  }
	}
	
	
	
	
	/*WriteCookie()
    {
       if( document.myform.customer.value == "" ){
          alert("Enter some value!");
          return;
       }
       cookievalue= escape(document.myform.customer.value) + ";";
       document.cookie="name=" + cookievalue;
       document.write ("Setting Cookies : " + "name=" + cookievalue );
    }
	
	ReadCookie()
    {
       var allcookies = document.cookie;
       document.write ("All Cookies : " + allcookies );
       
       // Get all the cookies pairs in an array
       cookiearray = allcookies.split(';');
       
       // Now take key value pair out of this array
       for(var i=0; i<cookiearray.length; i++){
          name = cookiearray[i].split('=')[0];
          value = cookiearray[i].split('=')[1];
          document.write ("Key is : " + name + " and Value is : " + value);
       }
    }*/
	
	
	
	/**********************************************************
     * Name:		setLogHdr()
     * Description:	Sets up the correct indentation and header
     * 				information for the log messages.
     * Scope:		Internal
     * Params in:	
     * Return:		 
     **********************************************************/
	setLogHdr(logdepth, moduleName)
	{
		console.log("** [Logger Service] Setting log header for [" + moduleName +"]");
		let i = 0;
		let depth = logdepth * 4;
		let moduleSpace = 25;
		let hdr:string = "## " +  moduleName;
		
		// Make sure the field width is the standard, pad if necessary
		if( hdr.length < moduleSpace )
		{
			let diff = moduleSpace - hdr.length;
			let i = 0;
			for( i=0; i<diff; i++ )
				hdr += ' ';
		}
	
		// (1) Set the indentation according to the depth
		for( i=0; i<depth; i++ )
		{
			hdr += " ";
		}
		
		// (2) Add on call stack indicator
		hdr += "|-";
		
		return hdr;
	}
}