export /**
 * NewsStory
 */
class NewsStory {
    nsid:number;
    category:string;
    title:string;
    description:string;
    story:string;
    image:string;
    thumb:string;
    
    constructor( nsid:number, category:string, title:string, description:string, story:string, image:string ) {
        this.nsid = nsid;
        this.category = category;
        this.title = title;
        this.description = description;
        this.story = story;
        this.image = image;        
    }
}