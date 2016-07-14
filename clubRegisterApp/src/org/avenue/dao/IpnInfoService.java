package org.avenue.dao;

import org.avenue.exceptions.IpnException;
import org.avenue.service.domain.IpnInfo;

public class IpnInfoService {
    /**
     * Store Paypal IPN Notification related information for future use
     *
     * @param ipnInfo {@link IpnInfo}
     * @throws IpnException
     */
    public void log (final IpnInfo ipnInfo) throws IpnException {
        /**
         * Implementation...
         */
    }

    /**
     * Fetch Paypal IPN Notification related information saved earlier
     *
     * @param txnId Paypal IPN Notification's Transaction ID
     * @return {@link IpnInfo}
     * @throws IpnException
     */
    public IpnInfo getIpnInfo (final String txnId) throws IpnException {
        IpnInfo ipnInfo = null;
        /**
         * Implementation...
         */
        return ipnInfo;
    }
}
