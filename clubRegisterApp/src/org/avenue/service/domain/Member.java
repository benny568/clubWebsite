package org.avenue.service.domain;

import java.sql.Date;

public class Member {
	
	 private int id;
	 private String name;
	 private String address;
	 private String phone;
	 private String phone2;
	 private String email;
	 private String dob;
	 private String amount;		// Amount paid to date
	 private String receiptid;
	 private int team;
	 private int team2;			// Can be a member of a second team
	 private int team3;			// Can be a member of a third team
	 private int position;
	 private int position2;
	 private int position3;
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
	public void setDob(String date) {
		
		this.dob = date;
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
	public int getTeam2() {
		return team2;
	}
	public void setTeam2(int team2) {
		this.team2 = team2;
	}
	public int getTeam3() {
		return team3;
	}
	public void setTeam3(int team3) {
		this.team3 = team3;
	}
	public String getReceiptid() {
		return receiptid;
	}
	public void setReceiptid(String receiptid) {
		this.receiptid = receiptid;
	}
	public int getPosition2() {
		return position2;
	}
	public void setPosition2(int position2) {
		this.position2 = position2;
	}
	public int getPosition3() {
		return position3;
	}
	public void setPosition3(int position3) {
		this.position3 = position3;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone2() {
		return phone2;
	}
	public void setPhone2(String phone2) {
		this.phone2 = phone2;
	}
	
}
