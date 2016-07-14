package org.avenue.service.domain;

public class Booking {
	Integer bookingid;
	String firstname;
	String surname;
	String email;
	String phone;
	String country;
	String arrivalDate;
	String departureDate;
	Integer numberOfNights;
	Integer numberOfPeople;
	Integer parking;
	String vehicalReg;
	Integer totalCharge;
	float deposit;
	Integer tandc;
	
	
	public Integer getBookingid() {
		return bookingid;
	}
	public void setBookingid(Integer bookingid) {
		this.bookingid = bookingid;
	}
	
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getArrivalDate() {
		return arrivalDate;
	}
	public void setArrivalDate(String arrivalDate) {
		this.arrivalDate = arrivalDate;
	}
	public String getDepartureDate() {
		return departureDate;
	}
	public void setDepartureDate(String departureDate) {
		this.departureDate = departureDate;
	}
	public Integer getNumberOfNights() {
		return numberOfNights;
	}
	public void setNumberOfNights(Integer numberOfNights) {
		this.numberOfNights = numberOfNights;
	}
	public Integer getNumberOfPeople() {
		return numberOfPeople;
	}
	public void setNumberOfPeople(Integer numberOfPeople) {
		this.numberOfPeople = numberOfPeople;
	}
	public Integer getParking() {
		return parking;
	}
	public void setParking(Integer parking) {
		this.parking = parking;
	}
	public String getSurname() {
		return surname;
	}
	public void setSurname(String surname) {
		this.surname = surname;
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
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getVehicalReg() {
		return vehicalReg;
	}
	public void setVehicalReg(String vehicalReg) {
		this.vehicalReg = vehicalReg;
	}
	public float getDeposit() {
		return deposit;
	}
	public void setDeposit(float deposit) {
		this.deposit = deposit;
	}
	public Integer getTotalCharge() {
		return totalCharge;
	}
	public void setTotalCharge(Integer totalCharge) {
		this.totalCharge = totalCharge;
	}
	public Integer getTandc() {
		return tandc;
	}
	public void setTandc(Integer tandc) {
		this.tandc = tandc;
	}

}
