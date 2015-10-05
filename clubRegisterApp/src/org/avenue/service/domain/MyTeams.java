package org.avenue.service.domain;

import java.util.ArrayList;

public class MyTeams {
	ArrayList<Integer> teams = null;
	ArrayList<Integer> positions = null;
	
	public MyTeams()
	{
		teams = new ArrayList<Integer>();
		positions = new ArrayList<Integer>();
	}
	public ArrayList<Integer> getTeams() {
		return teams;
	}
	public void setTeams(ArrayList<Integer> teams) {
		this.teams = teams;
	}
	public ArrayList<Integer> getPositions() {
		return positions;
	}
	public void setPositions(ArrayList<Integer> positions) {
		this.positions = positions;
	}
	
	public void addTeam(int team)
	{
		this.teams.add(team);
	}
	public void addPosition(int pos)
	{
		this.positions.add(pos);
	}
	
}
