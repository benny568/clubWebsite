package org.avenue.service.domain;

public class Member {
	
	 private int id;
	 private String name;
	 private String address;
	 private String phone;
	 private String dob;
	 private String amount;		// Amount paid to date
	 private int team;
	 private int position;
	 private int lid;
	 private String favteam;
	 private String favplayer;
	 private int sappears;
	 private int sassists;
	 private int sgoals;
	 private String photo;
	 private String achievements;
	 private String status;
	 
	
	 public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
	  return name;
	 }
	 public void setName(String name) {
	  this.name = name;
	 }
	 public String getAddress() {
	  return address;
	 }
	 public void setAddress(String address) {
	  this.address = address;
	 }
	 
	 
	 public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getAmount() {
		return amount;
	}
	public void setAmount(String amount) {
		this.amount = amount;
	}
	public int getTeam() {
	  return team;
	 }
	 public void setTeam(int team) {
	  this.team = team;
	 }
	 		
	 public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public int getPosition() {
		return position;
	}
	public void setPosition(int position) {
		this.position = position;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public int getLid() {
		return lid;
	}
	public void setLid(int lid) {
		this.lid = lid;
	}
	public String getFavteam() {
		return favteam;
	}
	public void setFavteam(String favteam) {
		this.favteam = favteam;
	}
	public String getFavplayer() {
		return favplayer;
	}
	public void setFavplayer(String favplayer) {
		this.favplayer = favplayer;
	}
	public int getSappears() {
		return sappears;
	}
	public void setSappears(int sappears) {
		this.sappears = sappears;
	}
	public int getSassists() {
		return sassists;
	}
	public void setSassists(int sassists) {
		this.sassists = sassists;
	}
	public int getSgoals() {
		return sgoals;
	}
	public void setSgoals(int sgoals) {
		this.sgoals = sgoals;
	}
	public String getPhoto() {
		return photo;
	}
	public void setPhoto(String photo) {
		this.photo = photo;
	}
	public String getAchievements() {
		return achievements;
	}
	public void setAchievements(String achievements) {
		this.achievements = achievements;
	} 
	
}
