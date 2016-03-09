package org.avenue.service.domain;

public class Media {
	private int mediaid;
	private int type; // Image(0), Video(1), sound(2)
	private String category1;
	private String category2;
	private String location; // Path and filename
	private String title; // Title/name of media
	private String description; // Text description
	
	public int getMediaid() {
		return mediaid;
	}
	public void setMediaid(int mediaid) {
		this.mediaid = mediaid;
	}
	public int getType() {
		return type;
	}
	public void setType(int type) {
		this.type = type;
	}
	
	public String getCategory1() {
		return category1;
	}
	public void setCategory1(String category1) {
		this.category1 = category1;
	}
	public String getCategory2() {
		return category2;
	}
	public void setCategory2(String category2) {
		this.category2 = category2;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

}
