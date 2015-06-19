package org.avenue.service.utility;

import java.io.File;
import java.util.ArrayList;
import java.io.File;

import org.avenue.service.domain.NewsStory;
import org.w3c.dom.*;

import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.DocumentBuilder;

import org.xml.sax.SAXException;
import org.xml.sax.SAXParseException;

public class FileUtilities {
    /**
     * List all the files and folders from a directory
     * @param directoryName to be listed
     */
    public File[] listFilesAndFolders(String directoryName){
 
        File directory = new File(directoryName);
 
        //get all the files from a directory
        File[] fList = directory.listFiles();
 
        for (File file : fList){
            System.out.println(file.getName());
        }
        
        return fList;
    }
 
    /**
     * List all the files under a directory
     * @param directoryName to be listed
     */
    public String listFiles(String directoryName){
 
        File directory = new File(directoryName);
        String s = "[";
 
        //get all the files from a directory
        File[] fObjs = directory.listFiles();
        ArrayList<String> fList = new ArrayList<String>();
 
        for(int i=0; i<fObjs.length; i++)
        {
            if (fObjs[i].isFile())
            {
                fList.add(fObjs[i].getName());
            }
        }
        
        for( int i=0; i< fList.size(); i++ )
        {
        	s += "\"" + fList.get(i) + "\"";
        	if(i<(fList.size()-1))
        		s += ",";
        	else
        		s += "]";
        }
        
        System.out.println("String formed is: " + s );
        return s;
    }
 
    /**
     * List all the folder under a directory
     * @param directoryName to be listed
     */
    public void listFolders(String directoryName){
 
        File directory = new File(directoryName);
 
        //get all the files from a directory
        File[] fList = directory.listFiles();
 
        for (File file : fList){
            if (file.isDirectory()){
                System.out.println(file.getName());
            }
        }
    }
 
    /**
     * List all files from a directory and its subdirectories
     * @param directoryName to be listed
     */
    public void listFilesAndFilesSubDirectories(String directoryName){
 
        File directory = new File(directoryName);
 
        //get all the files from a directory
        File[] fList = directory.listFiles();
 
        for (File file : fList){
            if (file.isFile()){
                System.out.println(file.getAbsolutePath());
            } else if (file.isDirectory()){
                listFilesAndFilesSubDirectories(file.getAbsolutePath());
            }
        }
    }
    

    public  ArrayList<NewsStory> readXMLFile( String xmlFileName )
    {
    	ArrayList<NewsStory> stories = new ArrayList<NewsStory>();
    	
	    try {
	
		    DocumentBuilderFactory docBuilderFactory = DocumentBuilderFactory.newInstance();
		    DocumentBuilder docBuilder = docBuilderFactory.newDocumentBuilder();
		    Document doc = docBuilder.parse (new File(xmlFileName));
		
		    // normalize text representation
		    doc.getDocumentElement().normalize ();
		    //System.out.println ("Root element of the doc is " + doc.getDocumentElement().getNodeName());
		
		
		    NodeList listOfStories = doc.getElementsByTagName("story");
		    int totalStories = listOfStories.getLength();
		    //System.out.println("Total no of stories : " + totalStories);
		
		    for(int s=0; s<listOfStories.getLength() ; s++)
		    {		
		    	NewsStory story = new NewsStory();
			    Node firstStoryNode = listOfStories.item(s);
			    if(firstStoryNode.getNodeType() == Node.ELEMENT_NODE)
			    {						
				    Element firstStoryElement = (Element)firstStoryNode; 
				
				    //-------
				    NodeList titleList = firstStoryElement.getElementsByTagName("title");
				    Element titleElement = (Element)titleList.item(0);
				
				    NodeList textTtlList = titleElement.getChildNodes();
				    story.setTitle(((Node)textTtlList.item(0)).getNodeValue().trim());
				    //System.out.println("Title : " + story.getTitle());
				
				    //------- 
				    NodeList descriptionList = firstStoryElement.getElementsByTagName("description");
				    Element descriptionElement = (Element)descriptionList.item(0);
				
				    NodeList textDescList = descriptionElement.getChildNodes();
				    story.setDescription(((Node)textDescList.item(0)).getNodeValue().trim());
				    //System.out.println("Description : " + story.getDescription());
				
				    //----
				    NodeList imageList = firstStoryElement.getElementsByTagName("image");
				    Element imageElement = (Element)imageList.item(0);
				
				    NodeList textAgeList = imageElement.getChildNodes();
				    story.setImage(((Node)textAgeList.item(0)).getNodeValue().trim());
				    //System.out.println("image : " + story.getImage());
				
			    }//end of if clause
			    
			    stories.add(story);
		
		    }//end of for loop with s var
	
	
	    }
	   catch (SAXParseException err) 
	    {
		    System.out.println ("** Parsing error" + ", line " + err.getLineNumber () + ", uri " + err.getSystemId ());
		    System.out.println(" " + err.getMessage ());
	
	    }catch (SAXException e) 
	    {
		    Exception x = e.getException ();
		    ((x == null) ? e : x).printStackTrace ();	
	    }catch (Throwable t) 
	    {
	    	t.printStackTrace ();
	    }
	    
		return stories;
    }


}
