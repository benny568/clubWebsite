package org.avenue.service.domain;

public class Member {
	
	 private int id;
	 private String name;
	 private String address;
	 private String phone;
	 private String amount;		// Amount paid to date
	 private int team;
	 private int position;
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

}
