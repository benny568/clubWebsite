package org.avenue.service.domain;

public class NewsStory {
	private int nsid;
	private String title;
	private String description;
	private String image;

	
	public int getNsid() {
		return nsid;
	}
	public void setNsid(int nsid) {
		this.nsid = nsid;
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
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}

}
