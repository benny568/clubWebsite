package org.avenue.service.domain;

public class Team {

	private int id;
	private String name;
	private int lrcode;
	private int lrFixturesCode;
	private int lrResultsCode;
	private String noticeboard;
	
	
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
	public int getLrcode() {
		return lrcode;
	}
	public void setLrcode(int lrcode) {
		this.lrcode = lrcode;
	}
	public int getLrFixturesCode() {
		return lrFixturesCode;
	}
	public void setLrFixturesCode(int lrFixturesCode) {
		this.lrFixturesCode = lrFixturesCode;
	}
	public int getLrResultsCode() {
		return lrResultsCode;
	}
	public void setLrResultsCode(int lrResultsCode) {
		this.lrResultsCode = lrResultsCode;
	}
	public String getNoticeboard() {
		return noticeboard;
	}
	public void setNoticeboard(String noticeboard) {
		this.noticeboard = noticeboard;
	}
}
