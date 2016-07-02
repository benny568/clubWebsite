System.register(['@angular/core', '@angular/http', '../services/logger.service', '../dao/site-user', '../dao/server-mode', '../dao/team', '../dao/member'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, core_2, http_1, http_2, http_3, logger_service_1, site_user_1, server_mode_1, team_1, member_1;
    var SessionDataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
                http_3 = http_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            },
            function (site_user_1_1) {
                site_user_1 = site_user_1_1;
            },
            function (server_mode_1_1) {
                server_mode_1 = server_mode_1_1;
            },
            function (team_1_1) {
                team_1 = team_1_1;
            },
            function (member_1_1) {
                member_1 = member_1_1;
            }],
        execute: function() {
            SessionDataService = (function () {
                function SessionDataService(lg$, _http) {
                    this.lg$ = lg$;
                    this._http = _http;
                    this.modes = { LOCAL: 0, REMOTE: 1 };
                    this.dsTeamMembers = [];
                    this.logdepth = 3;
                    this.loghdr = "";
                    this.serviceName = 'SessionDataService';
                    this.displayMember = false;
                    this.gAuthenticated = false;
                    this.loghdr = this.setLogHdr(this.logdepth, this.serviceName);
                    var svr = new server_mode_1.ServerMode();
                    this.CurrentServerMode = svr.getServerMode();
                    this.dsAuthenticated = false;
                    this.dsPosition = ['Manager', 'Goalkeeper', 'Full Back', 'Center Half', 'Mid Field', 'CAM', 'Winger', 'Striker', 'Chairman', 'Secretary', 'Treasurer', 'PRO', 'Committee'];
                    this.dsCurrentUser = new site_user_1.User();
                    this.dsCurrentTeam = new team_1.Team();
                    this.dsCurrentMember = new member_1.Member();
                    this.dsTeams = new Array();
                    //this.dsTeamMembers = new Array(500);
                    this.dsCurrentUser = new site_user_1.User();
                    this.dsAllMembers = new Array();
                    this.dsNewsStories = new Array();
                    this.dsSponsors = new Array();
                }
                /**********************************************************
                 * Name:		setCurrentMember()
                 * Description:	Set the current member to the one passed in
                 * Scope:		Externally accessible
                 * Params in:	member: the member in question
                 * Return:
                 **********************************************************/
                SessionDataService.prototype.setCurrentMember = function (member) {
                    console.log("-->" + "setCurrentMember()");
                    this.dsCurrentMember = member;
                    this.displayMember = true;
                };
                /**********************************************************
                 * Name:		hasPermission()
                 * Description:	Check the user's permission to perform the
                 * 				given action
                 * Scope:		Externally accessible
                 * Params in:	action: the action being requested
                 * Return:		true or false depending on the permissions
                 **********************************************************/
                SessionDataService.prototype.hasPermission = function (action, params) {
                    var team = '';
                    var allow = false;
                    var index = 0;
                    console.log("-->" + "hasPermission(" + action + "," + params + ")");
                    if (typeof action === undefined || params === undefined)
                        return false;
                    for (var r = 0; r < this.dsCurrentUser.roles.length; r++) {
                        if (this.dsCurrentUser.roles[r] === "ROLE_SUPER") {
                            // Super user has permissions to do anything
                            //log.trace(loghdr + " -> hasPermission("+action+"): YES");
                            console.log(" -> hasPermission(" + action + "): YES");
                            return true;
                        }
                    }
                    switch (action) {
                        case 'MANAGE_TEAM':
                            team = params;
                            // Check if the user is a manager of this team
                            for (var i = 0; i < this.dsCurrentUser.permissions.teams.length; i++) {
                                for (var t = 0; t < this.dsTeams.length; t++) {
                                    if (this.dsTeams[t].id === this.dsCurrentUser.permissions.teams[i]) {
                                        index = t;
                                        break;
                                    }
                                }
                                if (this.dsTeams[index].name === team) {
                                    if (this.dsCurrentUser.permissions.positions[i] == 0) {
                                        allow = true;
                                        break;
                                    }
                                }
                            }
                            break;
                        case 'ADD_TEAM':
                        case 'EDIT_TEAM':
                            for (var r = 0; r < this.dsCurrentUser.roles.length; r++) {
                                if (this.dsCurrentUser.roles[r] === "ROLE_SUPER") {
                                    // Super user has permissions to do anything
                                    allow = true;
                                    break;
                                }
                                else if (this.dsCurrentUser.roles[r] === "ROLE_EDIT_TEAM") {
                                    allow = true;
                                    break;
                                }
                            }
                            break;
                        case 'DEL_TEAM':
                            for (var r = 0; r < this.dsCurrentUser.roles.length; r++) {
                                if (this.dsCurrentUser.roles[r] === "ROLE_SUPER") {
                                    // Super user has permissions to do anything
                                    allow = true;
                                    break;
                                }
                                else if (this.dsCurrentUser.roles[r] === "ROLE_DEL_TEAM") {
                                    allow = true;
                                    break;
                                }
                            }
                            break;
                        case 'ADD_USER':
                        case 'EDIT_USER':
                        case 'DELETE_USER':
                        case 'VIEW_USERS':
                            for (var r = 0; r < this.dsCurrentUser.roles.length; r++) {
                                if (this.dsCurrentUser.roles[r] === "ROLE_SUPER") {
                                    // Super user has permissions to do anything
                                    allow = true;
                                    break;
                                }
                            }
                            break;
                    }
                    return allow;
                };
                /**********************************************************
                 * Name:		difference()
                 * Description:	Checeks to see if there is a difference
                 *              between two objects
                 * Scope:		Internal
                 * Params in:	None
                 * Return:
                 **********************************************************/
                SessionDataService.prototype.difference = function (m1, m2) {
                    var diff = false;
                    Object.getOwnPropertyNames(m1).forEach(function (val, idx, array) {
                        if (m1[val] != m2[val])
                            diff = true;
                    });
                    return diff;
                };
                /**********************************************************
                 * Name:		applyMemberChange()
                 * Description:	Applies a change to the local data so the
                 *              user sees the change on the view.
                 * Scope:		Internal
                 * Params in:	None
                 * Return:
                 **********************************************************/
                SessionDataService.prototype.applyMemberChange = function (members, member) {
                    var index = SessionDataService.findMemberIndex(members, member);
                    if (index === -1) {
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
                };
                /**********************************************************
                 * Name:		applyMemberDel()
                 * Description:	Applies a change to the local data so the
                 *              user sees the change on the view.
                 * Scope:		Internal
                 * Params in:	None
                 * Return:
                 **********************************************************/
                SessionDataService.prototype.applyMemberDel = function (members, member) {
                    var index = SessionDataService.findMemberIndex(members, member);
                    if (index === -1) {
                        return;
                    }
                    else if (index > -1) {
                        members.splice(index, 1);
                    }
                };
                /**********************************************************
                 * Name:		applyMemberAdd()
                 * Description:	Applies a change to the local data so the
                 *              user sees the change on the view.
                 * Scope:		Internal
                 * Params in:	None
                 * Return:
                 **********************************************************/
                SessionDataService.prototype.applyMemberAdd = function (members, member) {
                    if (this.dsTeamMembers[member.team] === undefined)
                        //getMembers4team(member.team);
                        var index = SessionDataService.findMemberIndex(this.dsTeamMembers[member.team], member);
                    if (index === -1) {
                        members[member.team].push(member);
                    }
                    else if (index > -1) {
                    }
                };
                /**********************************************************
                 * Name:		applyTeamChange()
                 * Description:	Applies a change to the local data so the
                 *              user sees the change on the view.
                 * Scope:		Internal
                 * Params in:	None
                 * Return:
                 **********************************************************/
                SessionDataService.prototype.applyTeamChange = function (teams, thisTeam) {
                    var index = -1;
                    if (this.dsTeams.length === 0) {
                        this.dsGetTeams();
                    }
                    for (var i = 0; i < this.dsTeams.length; i++) {
                        if (this.dsTeams[i].id === thisTeam.id) {
                            index = i;
                            break;
                        }
                    }
                    if (index === -1) {
                    }
                    else if (index > -1) {
                        this.dsTeams[index] = thisTeam;
                    }
                };
                /**********************************************************
                 * Name:		findMemberIndex()
                 * Description:	Find a members index/position in the array
                 *              of members
                 * Scope:		Internal
                 * Params in:	None
                 * Return:		The index value
                 **********************************************************/
                SessionDataService.findMemberIndex = function (members, member) {
                    var index = -1;
                    if (typeof members !== undefined) {
                        for (var i = 0; i < members.length; i++) {
                            if (members[i].id === member.id) {
                                index = i;
                                break;
                            }
                        }
                    }
                    return index;
                };
                /**********************************************************
                 * Name:		convertPosToInt()
                 * Description:	Converts the position name to the integer
                 *              value
                 * Scope:		Internal
                 * Params in:	None
                 * Return:		The position integer value
                 **********************************************************/
                SessionDataService.prototype.convertPosToInt = function (sPos) {
                    return this.dsPosition.indexOf(sPos);
                };
                /**********************************************************
                 * Name:		convertTeamToInt()
                 * Description:	Converts the team name to the integer value
                 * Scope:		Internal
                 * Params in:	None
                 * Return:		The team integer value
                 **********************************************************/
                SessionDataService.prototype.convertTeamToInt = function (sTeam) {
                    for (var i = 0; i < this.dsTeams.length; i++) {
                        if (this.dsTeams[i].name == sTeam) {
                            return this.dsTeams[i].id;
                        }
                    }
                    return 0;
                };
                /**********************************************************
                 * Name:		setCurrentTeamByName()
                 * Description:	Set the current team in memory
                 * Scope:		Internal
                 * Params in:	Team name as a string
                 * Return:		None
                 **********************************************************/
                SessionDataService.prototype.setCurrentTeamByName = function (teamName) {
                    console.log("-->" + "setCurrentTeamByName(" + teamName + ")");
                    // Ensure the teams information has been loaded
                    if (this.dsTeams.length < 1)
                        this.dsGetTeams();
                    // Pick out this team and set it as the current one
                    for (var _i = 0, _a = this.dsTeams; _i < _a.length; _i++) {
                        var team = _a[_i];
                        if (team.name == teamName) {
                            this.dsCurrentTeam = team;
                            console.log("-->" + "setCurrentTeamByName(): Team set to " + teamName);
                            break;
                        }
                    }
                };
                /**********************************************************
                 * Name:		loadNewsStories()
                 * Description:	Retrieves a list of Newws from the server
                 * Scope:		Internal
                 * Params in:	None
                 * Return:		Sets dsNewsStories
                 **********************************************************/
                SessionDataService.prototype.loadNewsStories = function () {
                    console.log("-->" + "loadNewsStories()..");
                    var url = this.getHome();
                    return this._http.get(url + '/stories')
                        .map(function (response) { return response.json(); });
                    /*.subscribe(
                        data => this.dsNewsStories = data,
                        error => this.handleError(error), //console.log("===> Error getting news from server: " + error),
                        () => console.log(" <=== Received news from server. <====")
                    );*/
                };
                SessionDataService.prototype.setNews = function (data) {
                    console.log("->" + "setNews()...recieved news stories: " + data);
                    this.dsNewsStories = data;
                };
                SessionDataService.prototype.handleError = function (error) {
                    // In a real world app, we might use a remote logging infrastructure
                    // We'd also dig deeper into the error to get a better message
                    var errMsg = (error.message) ? error.message :
                        error.status ? error.status + " - " + error.statusText : 'Server error';
                    console.error(errMsg); // log to console instead
                    //return Observable.throw(errMsg);
                };
                /**********************************************************
                 * Name:		getHome()
                 * Description:	Returns the _home URL so that it can be used
                 * 				as a local or remote app.
                 * Scope:		Externally accessible
                 * Params in:	none
                 * Return:		_home URL
                 **********************************************************/
                SessionDataService.prototype.getHome = function () {
                    var _home;
                    //log.debug(loghdr + "-> getHome()");
                    if (this.CurrentServerMode == this.modes.LOCAL) {
                        //log.debug(loghdr + "     | _home is LOCAL");
                        _home = 'http://localhost:8080/clubRegisterApp';
                    }
                    else if (this.CurrentServerMode == this.modes.REMOTE) {
                        //log.debug(loghdr + "     | _home is REMOTE");
                        _home = 'http://www.avenueunited.ie';
                    }
                    return _home;
                };
                /**********************************************************
                 * Name:		dsGetTeams()
                 * Description:	Retrieves a list of teams from the server
                 * Scope:		Internal
                 * Params in:	None
                 * Return:		Sets dsNewsStories
                 **********************************************************/
                SessionDataService.prototype.dsGetTeams = function () {
                    var _this = this;
                    console.log("-->" + " dsGetTeams()..");
                    var url = this.getHome();
                    return this._http.get(url + '/teams')
                        .map(function (response) { return response.json(); })
                        .subscribe(function (data) { return _this.dsSetTeams(data); }, function (err) { return console.error("DataService: ERROR reading teams from server!"); }, function () { return console.log(" <== Teams received from server <=="); });
                };
                /**********************************************************
                 * Name:		dsSetTeams()
                 * Description:	Set the current member to the one passed in
                 * Scope:		Externally accessible
                 * Params in:	member: the member in question
                 * Return:
                 **********************************************************/
                SessionDataService.prototype.dsSetTeams = function (data) {
                    console.log("-->" + "dsSetTeams()");
                    this.dsTeams = data;
                };
                /**********************************************************
                 * Name:		loadCurrentTeamMembersByName()
                 * Description:	Load the current team's details and members
                 * Scope:		Externally accessible
                 * Params in:	teamName: the name of the team in question
                 * Return:
                 **********************************************************/
                SessionDataService.prototype.loadCurrentTeamMembersByName = function (teamName) {
                    console.log("-->" + "loadCurrentTeamMembersByName(" + teamName + ")");
                    if ((this.dsTeamMembers.length !== 0) && (this.dsCurrentTeam.name == teamName)) {
                        console.log("-->" + "loadCurrentTeamByName():" + "Members already loaded not loading again!");
                        return;
                    }
                    else {
                        // Clear out the TeamMembers array first
                        this.dsTeamMembers.length = 0;
                        var url = this.getHome();
                        this._http.get(url + '/team/' + teamName)
                            .map(function (response) { return response.json(); });
                    }
                };
                /// TEMP FUNCTION TO SIM REST CALL TO SERVER
                SessionDataService.prototype.getTeamDetailsSim = function (teamName) {
                    return this.dsCurrentTeam; // = this._sds.getTeamDetailsByName(teamName);
                };
                /**********************************************************
                 * Name:		loadCurrentSponsors()
                 * Description:	Load the current sponsors details
                 * Scope:		Externally accessible
                 * Params in:	None
                 * Return:      Array of sponsor objects
                 **********************************************************/
                SessionDataService.prototype.loadCurrentSponsors = function () {
                    console.log("-->" + "loadCurrentSponsors()");
                    this.dsSponsors = [{ name: "Enzo's Takeaway", image: "resources/images/adverts/enzos.png" },
                        { name: "Rochford's Pharmacy", image: "resources/images/adverts/main-sponsor.png" },
                        { name: "Ennis Cabs", image: "resources/images/adverts/ec.png" }
                    ];
                    return this.dsSponsors;
                };
                /**********************************************************
                 * Name:		clearCurrentMember()
                 * Description:	Clear out the dsCurrentMember
                 * Scope:		Externally accessible
                 * Params in:	None
                 * Return:      None
                 **********************************************************/
                SessionDataService.prototype.clearCurrentMember = function () {
                    this.dsCurrentMember = null;
                };
                /**********************************************************
                 * Name:		loadPhotoDetails()
                 * Description:	Retrieves a list of photos from the server
                 * Scope:		Internal
                 * Params in:	None
                 * Return:		Sets
                 **********************************************************/
                SessionDataService.prototype.loadPhotoDetails = function (url) {
                    console.log("-->" + "loadPhotoDetails(" + url + ")");
                    // ToDo: If we have already loaded the news just return
                    // Read the list of files from the server
                    return this._http.get(url)
                        .map(function (response) { return response.json(); });
                };
                /**********************************************************
                 * Name:		authenticate()
                 * Description:	Authenticates the user with the server
                 * Scope:		Internal
                 * Params in:
                 * Return:
                 **********************************************************/
                SessionDataService.prototype.authenticate = function (username, password) {
                    console.log("-->" + "authenticate(" + username + "," + password + ")");
                    var creds = "j_username=" + username + "&j_password=" + password;
                    var body = JSON.stringify({ creds: creds });
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_3.RequestOptions({ headers: headers });
                    return this._http.post(this.getHome() + '/j_spring_security_check?' + creds, body, options);
                };
                SessionDataService.prototype.getUser = function (username) {
                    console.log("-->" + "getUser(" + username + ")");
                    return this._http.get(this.getHome() + '/admin/user').map(function (response) { return response.json(); });
                };
                /**********************************************************
                 * Name:		logout()
                 * Description:	Invalidates the user session with the server
                 * Scope:		Internal
                 * Params in:
                 * Return:
                 **********************************************************/
                SessionDataService.prototype.logout = function () {
                    this.dsAuthenticated = false;
                    return this._http.get(this.getHome() + '/j_spring_security_logout');
                };
                /**********************************************************
                 * Name:		dsGetAllMembers()
                 * Description:	Get all members from the server
                 * Scope:		Internal
                 * Params in:
                 * Return:
                 **********************************************************/
                SessionDataService.prototype.dsGetAllMembers = function () {
                    var _this = this;
                    console.log("-->" + "dsGetAllMembers()");
                    var url = this.getHome();
                    return this._http.get(url + "/admin/members")
                        .map(function (response) { return response.json(); })
                        .subscribe(function (data) { return _this.dsAllMembers = data; }, function (err) { return console.log("ERROR getting members from server!"); }, function () { return console.log("<== Finished getting all members from server <=="); });
                };
                /**********************************************************
                 * Name:		getTeamNameFrmId()
                 * Description:	Convert a team name to it's id
                 * Scope:		Externally accessible via the service
                 * Params in:	scope: The parents scope
                 *
                 * Return:		The team id
                 **********************************************************/
                SessionDataService.prototype.getTeamNameFrmId = function (iTeam) {
                    var sTeamId = "";
                    for (var i = 0; i < this.dsTeams.length; i++) {
                        if (iTeam == i) {
                            sTeamId = this.dsTeams[i - 1].name;
                            return sTeamId;
                        }
                    }
                    return sTeamId;
                };
                SessionDataService.prototype.saveJwt = function (jwt) {
                    if (jwt) {
                        localStorage.setItem('id_token', jwt);
                    }
                };
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
                SessionDataService.prototype.setLogHdr = function (logdepth, moduleName) {
                    console.log("** [Logger Service] Setting log header for [" + moduleName + "]");
                    var i = 0;
                    var depth = logdepth * 4;
                    var moduleSpace = 25;
                    var hdr = "## " + moduleName;
                    // Make sure the field width is the standard, pad if necessary
                    if (hdr.length < moduleSpace) {
                        var diff = moduleSpace - hdr.length;
                        var i_1 = 0;
                        for (i_1 = 0; i_1 < diff; i_1++)
                            hdr += ' ';
                    }
                    // (1) Set the indentation according to the depth
                    for (i = 0; i < depth; i++) {
                        hdr += " ";
                    }
                    // (2) Add on call stack indicator
                    hdr += "|-";
                    return hdr;
                };
                SessionDataService = __decorate([
                    core_1.Injectable(),
                    __param(0, core_2.Inject(http_1.Http)), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService, http_1.Http])
                ], SessionDataService);
                return SessionDataService;
            }());
            exports_1("SessionDataService", SessionDataService);
        }
    }
});
//# sourceMappingURL=session-data.service.js.map