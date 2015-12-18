package org.avenue.service.domain;

import java.util.ArrayList;
import java.util.Date;

// REM: User is someone with admin rights to the site as opposed to
// a member who is just a club member, e.g. a player.

public class Worker {
	private int userId;
	private String name;
	private String password;
	private String address;
	private String email;
	private String phone;
	private String dob;
	private String avatar;
	private int enabled;
	private ArrayList<String> roles;
	private MyTeams permissions;
	
	public Worker()
	{
		roles = new ArrayList<String>();
		permissions = new MyTeams();
	}
	
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
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getAvatar() {
		return avatar;
	}
	public void setAvatar(String avatar) {
		this.avatar = avatar;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
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
