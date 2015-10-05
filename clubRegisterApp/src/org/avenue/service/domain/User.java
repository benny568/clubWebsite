package org.avenue.service.domain;

import java.sql.Date;
import java.util.ArrayList;

// REM: User is someone with admin rights to the site as opposed to
// a member who is just a club member, e.g. a player.

public class User {
	private int userId;
	private String username;
	private String password;
	private String address;
	private String email;
	private String phone;
	private Date dob;
	private String avatar;
	private int enabled;
	private ArrayList<String> roles;
	private MyTeams permissions;
	
	
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	public String getAvatar() {
		return avatar;
	}
	public void setAvatar(String avatar) {
		this.avatar = avatar;
	}
	public String getName() {
		return username;
	}
	public void setName(String name) {
		this.username = name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public int getEnabled() {
		return enabled;
	}
	public void setEnabled(int enabled) {
		this.enabled = enabled;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public ArrayList<String> getRoles() {
		return roles;
	}
	public void setRoles(ArrayList<String> roles) {
		this.roles = roles;
	}
	
	public MyTeams getPermissions() {
		return permissions;
	}
	public void setPermissions(MyTeams permissions) {
		this.permissions = permissions;
	}
	
}
