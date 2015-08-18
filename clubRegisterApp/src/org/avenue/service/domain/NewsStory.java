package org.avenue.service.domain;

import java.io.Serializable;

public class NewsStory implements Serializable {
	private int nsid;
	private String category;
	private String title;
	private String description;
	private String story;
	private String image;
	private String thumb;
	
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
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getStory() {
		return story;
	}
	public void setStory(String story) {
		this.story = story;
	}
	public String getThumb() {
		return thumb;
	}
	public void setThumb(String thumb) {
		this.thumb = thumb;
	}

}