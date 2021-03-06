package org.avenue.dao;

import java.io.IOException;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.avenue.config.PaypalConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.paypal.core.LoggingManager;
import com.paypal.ipn.IPNMessage;
//@RestController
//@RequestMapping(value="/ipnlistener",method = RequestMethod.POST)
public class IPNListenerServlet extends HttpServlet {

        /**
         *
         */
        private static final long serialVersionUID = 1L;

        /*
         * receiver for PayPal ipn call back.
         */
        protected void doPost(HttpServletRequest request,
                        HttpServletResponse response) throws ServletException, IOException {

                // For a full list of configuration parameters refer in wiki page.
                // (https://github.com/paypal/sdk-core-java/wiki/SDK-Configuration-Parameters)
                Map<String,String> configurationMap =  PaypalConfiguration.getConfig();
                IPNMessage      ipnlistener = new IPNMessage(request,configurationMap);
                boolean isIpnVerified = ipnlistener.validate();
                String transactionType = ipnlistener.getTransactionType();
                Map<String,String> map = ipnlistener.getIpnMap();

                LoggingManager.info(IPNListenerServlet.class, "******* IPN (name:value) pair : "+ map + "  " +
                                "######### TransactionType : "+transactionType+"  ======== IPN verified : "+ isIpnVerified);
        }
}

