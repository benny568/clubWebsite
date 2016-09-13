import { Component }      from '@angular/core';
import { Injectable }     from '@angular/core';
import { Inject }         from '@angular/core';
import { ServerMode }     from '../dao/server-mode';


@Injectable()
export class CommonService {

    modes = { LOCAL:0, REMOTE:1};
    CurrentServerMode:number;

    logdepth = 3;
    loghdr = "";
    serviceName = 'CommonService';

     constructor () {

        var svr = new ServerMode();
        this.CurrentServerMode = svr.getServerMode();
     }

    /**********************************************************
     * Name:		getHome()
     * Description:	Returns the _home URL so that it can be used
     * 				as a local or remote app.
     * Scope:		Externally accessible
     * Params in:	none
     * Return:		_home URL
     **********************************************************/
    getHome() : string {
        var _home:string;

        if ( this.CurrentServerMode === this.modes.LOCAL )
        {
            _home = 'http://localhost:8080/clubRegisterApp';
        } else if ( this.CurrentServerMode === this.modes.REMOTE )
        {
            _home = 'http://www.avenueunited.ie';
        }

        return _home;
    }
    
    /**********************************************************
     * Name:		isValidName()
     * Description:	Checks that there are one or more words in
     * 				the name
     * Params in:	The name entered
     * Return:		true or false
     **********************************************************/
    isValidName( name ) : boolean
	{
		//this.lg$.log("----> checkName(" + name + ")");
		
		if ( ( name !== undefined ) && ( name !== '' ) )
		{
			return /^\w+/.test(name);
		} else
		{
			//this.lg$.log("----> checkName(" + name + ") undefined or blank!");
			return false;
		}
	}
	
    /**********************************************************
     * Name:		isValidEmail()
     * Description:	Checks that the entered text matches the
     * 				basic rules to be an email address.
     * Params in:	The email entered
     * Return:		true or false
     **********************************************************/
	isValidEmail( email ) : boolean
	{
		//this.lg$.log("----> checkEmail(" + email + ")");
		console.log("----> checkEmail(" + email + ")");
		
		if ( ( email !== undefined ) && ( email !== '' ) )
		{
			return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(email);
		} else
		{
			console.log("----> checkEmail(" + email + ") undefined or blank!");
			return false;
		}
	}
	
	/**********************************************************
     * Name:		isValidPhone()
     * Description:	Checks that the entered text matches the
     * 				basic rules to be an Irish phone number.
     * Params in:	The email entered
     * Return:		true or false
     **********************************************************/
	isValidPhone( phone ) : boolean
	{
		console.log("----> checkPh(" + phone + ")");
		console.log("== " + /^\d{10}$/.test(phone) );
		console.log("== " + /^\+\d{12}$/.test(phone) );
		
		if ( ( phone !== undefined ) && ( phone !== '' ) )
		{
			if ( (/^\d{10}$/.test(phone)) || (/^\+\d{12}$/.test(phone)) )
			{
				return true;
			} else
			{
				return false;
			}
			
		} else
		{
			//this.lg$.log("----> checkPh(" + phone + ") undefined or blank!");
			return false;
		}
	}
	
	/**********************************************************
     * Name:		isValidDob()
     * Description:	Checks that the dob is not empty
     * Params in:	The name entered
     * Return:		true or false
     **********************************************************/
    isValidDob( name ) : boolean
	{
		//this.lg$.log("----> checkName(" + name + ")");
		
		if ( ( name !== undefined ) && ( name !== '' ) )
		{
			return /^\w+/.test(name);
		} else
		{
			//this.lg$.log("----> checkName(" + name + ") undefined or blank!");
			return false;
		}
	}
    
    /**********************************************************
     * Name:		isEmpty()
     * Description:	Checks if a field is empty empty
     * Params in:	The field entered
     * Return:		true or false
     **********************************************************/
    isEmpty( field ) : boolean
	{
		if ( ( field === undefined ) || ( field === '' ) )
		{
			return false;
		} else
		{
			return true;
		}
	}

}