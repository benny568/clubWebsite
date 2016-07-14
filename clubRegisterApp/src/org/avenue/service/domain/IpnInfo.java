package org.avenue.service.domain;

public class IpnInfo {
	// Payment Information
	
	private String paymentType;
	private String paymentDate;
	private String paymentStatus;
	private String pendingReason;
	
	// Buyer Information
	private String addressStatus;
	private String payerStatus;
	private String firstName;
	private String lastName;
	private String payerEmail;
	private String payerId;	
	private String addressName;
	private String addressCountry;
	private String addressCountryCode;
	private String addressZip;
	private String addressState;
	private String addressCity;
	private String addressStreet;
	
	// Basic Info
	private String business;
	private String receiverEmail;
	private String receiverId;
	private String residenceCountry;
    private String itemName;
    private String itemNumber;
    private Integer quantity;    
    private String shipping;
    private String tax;
    
    // Currency and Currrency Exchange
    private String paymentCurrency; //mcCurrency;
    private String mcFee;
    private String paymentAmount; //mc_gross;
    private String mcHandling;
    private String mcShipping;
    
    // Transaction Fields
    
    private String txnType;
	private String txnId;
	private String notifyVersion;
	private String parentTxnId;
	private String reasonCode;
	private String receiptId;
	
	// eBay Auction - Not doing this right now => omitted.
	
	// Advanced and Custom Information
	private String custom;
	private String invoice;
	
	// Other info not PayPal
    private String response;
    private String requestParams;
    private String error;
    private Long logTime;

    
    
 
    public String getPaymentType() {
		return paymentType;
	}

	public void setPaymentType(String paymentType) {
		this.paymentType = paymentType;
	}

	public String getPaymentDate() {
		return paymentDate;
	}

	public void setPaymentDate(String paymentDate) {
		this.paymentDate = paymentDate;
	}

	public String getPaymentStatus() {
		return paymentStatus;
	}

	public void setPaymentStatus(String paymentStatus) {
		this.paymentStatus = paymentStatus;
	}

	public String getPendingReason() {
		return pendingReason;
	}

	public void setPendingReason(String pendingReason) {
		this.pendingReason = pendingReason;
	}

	public String getAddressStatus() {
		return addressStatus;
	}

	public void setAddressStatus(String addressStatus) {
		this.addressStatus = addressStatus;
	}

	public String getPayerStatus() {
		return payerStatus;
	}

	public void setPayerStatus(String payerStatus) {
		this.payerStatus = payerStatus;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getPayerEmail() {
		return payerEmail;
	}

	public void setPayerEmail(String payerEmail) {
		this.payerEmail = payerEmail;
	}

	public String getPayerId() {
		return payerId;
	}

	public void setPayerId(String payerId) {
		this.payerId = payerId;
	}

	public String getAddressName() {
		return addressName;
	}

	public void setAddressName(String addressName) {
		this.addressName = addressName;
	}

	public String getAddressCountry() {
		return addressCountry;
	}

	public void setAddressCountry(String addressCountry) {
		this.addressCountry = addressCountry;
	}

	public String getAddressCountryCode() {
		return addressCountryCode;
	}

	public void setAddressCountryCode(String addressCountryCode) {
		this.addressCountryCode = addressCountryCode;
	}

	public String getAddressZip() {
		return addressZip;
	}

	public void setAddressZip(String addressZip) {
		this.addressZip = addressZip;
	}

	public String getAddressState() {
		return addressState;
	}

	public void setAddressState(String addressState) {
		this.addressState = addressState;
	}

	public String getAddressCity() {
		return addressCity;
	}

	public void setAddressCity(String addressCity) {
		this.addressCity = addressCity;
	}

	public String getAddressStreet() {
		return addressStreet;
	}

	public void setAddressStreet(String addressStreet) {
		this.addressStreet = addressStreet;
	}

	public String getBusiness() {
		return business;
	}

	public void setBusiness(String business) {
		this.business = business;
	}

	public String getReceiverEmail() {
		return receiverEmail;
	}

	public void setReceiverEmail(String receiverEmail) {
		this.receiverEmail = receiverEmail;
	}

	public String getReceiverId() {
		return receiverId;
	}

	public void setReceiverId(String receiverId) {
		this.receiverId = receiverId;
	}

	public String getResidenceCountry() {
		return residenceCountry;
	}

	public void setResidenceCountry(String residenceCountry) {
		this.residenceCountry = residenceCountry;
	}

	public String getItemName() {
		return itemName;
	}

	public void setItemName(String itemName) {
		this.itemName = itemName;
	}

	public String getItemNumber() {
		return itemNumber;
	}

	public void setItemNumber(String itemNumber) {
		this.itemNumber = itemNumber;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public String getShipping() {
		return shipping;
	}

	public void setShipping(String shipping) {
		this.shipping = shipping;
	}

	public String getTax() {
		return tax;
	}

	public void setTax(String tax) {
		this.tax = tax;
	}

	public String getPaymentCurrency() {
		return paymentCurrency;
	}

	public void setPaymentCurrency(String paymentCurrency) {
		this.paymentCurrency = paymentCurrency;
	}

	public String getMcFee() {
		return mcFee;
	}

	public void setMcFee(String mcFee) {
		this.mcFee = mcFee;
	}

	public String getPaymentAmount() {
		return paymentAmount;
	}

	public void setPaymentAmount(String paymentAmount) {
		this.paymentAmount = paymentAmount;
	}

	public String getMcHandling() {
		return mcHandling;
	}

	public void setMcHandling(String mcHandling) {
		this.mcHandling = mcHandling;
	}

	public String getMcShipping() {
		return mcShipping;
	}

	public void setMcShipping(String mcShipping) {
		this.mcShipping = mcShipping;
	}

	public String getTxnType() {
		return txnType;
	}

	public void setTxnType(String txnType) {
		this.txnType = txnType;
	}

	public String getTxnId() {
		return txnId;
	}

	public void setTxnId(String txnId) {
		this.txnId = txnId;
	}

	public String getNotifyVersion() {
		return notifyVersion;
	}

	public void setNotifyVersion(String notifyVersion) {
		this.notifyVersion = notifyVersion;
	}

	public String getParentTxnId() {
		return parentTxnId;
	}

	public void setParentTxnId(String parentTxnId) {
		this.parentTxnId = parentTxnId;
	}

	public String getReasonCode() {
		return reasonCode;
	}

	public void setReasonCode(String reasonCode) {
		this.reasonCode = reasonCode;
	}

	public String getReceiptId() {
		return receiptId;
	}

	public void setReceiptId(String receiptId) {
		this.receiptId = receiptId;
	}

	public String getCustom() {
		return custom;
	}

	public void setCustom(String custom) {
		this.custom = custom;
	}

	public String getInvoice() {
		return invoice;
	}

	public void setInvoice(String invoice) {
		this.invoice = invoice;
	}


	public String getResponse() {
		return response;
	}

	public void setResponse(String response) {
		this.response = response;
	}

	public String getRequestParams() {
		return requestParams;
	}

	public void setRequestParams(String requestParams) {
		this.requestParams = requestParams;
	}

	public String getError() {
		return error;
	}

	public void setError(String error) {
		this.error = error;
	}

	public Long getLogTime() {
		return logTime;
	}

	public void setLogTime(Long logTime) {
		this.logTime = logTime;
	}


	@Override
    public String toString() {
        return "txn_id = " + this.getTxnId()
                + ", response = " + this.getResponse()
                + ", payment_status = " + this.getPaymentStatus()
                + ", payer_email = " + this.getPayerEmail()
                + ", item_name = " + this.getItemName()
                + ", item_number = " + this.getItemNumber()
                + ", payment_amount = " + this.getPaymentAmount()
                + ", payment_currency = " + this.getPaymentCurrency()
                + ", receiver_email = " + this.getReceiverEmail()
                + ", request_params = " + this.getRequestParams()
                + ", log_time = " + this.getLogTime()
                + ", error = " + this.getError();
    }

}
