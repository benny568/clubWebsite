import { MyTeams } from './my-teams';

export /**
 * name
 */
class User {
    id:number;
    username:string;
    password:string;
    address:string;
    email:string;
    phone:string;
    dob:string;
    avatar:string;
    enabled:number;
    roles:ArrayLike<string>;
    permissions:MyTeams;

}