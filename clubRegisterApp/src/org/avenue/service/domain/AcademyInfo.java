package org.avenue.service.domain;

public class AcademyInfo {
	private String allergies;
	private String asthma;
	private String diabetes;
	private String medication;
	private String notes;
	
	public String getAllergies() {
		return allergies;
	}
	public void setAllergies(String allergies) {
		this.allergies = allergies;
	}
	public String getAsthma() {
		return asthma;
	}
	public void setAsthma(String asthma) {
		this.asthma = asthma;
	}
	public String getDiabetes() {
		return diabetes;
	}
	public void setDiabetes(String diabetes) {
		this.diabetes = diabetes;
	}
	public String getMedication() {
		return medication;
	}
	public void setMedication(String medication) {
		this.medication = medication;
	}
	public String getNotes() {
		return notes;
	}
	public void setNotes(String notes) {
		this.notes = notes;
	}

}
