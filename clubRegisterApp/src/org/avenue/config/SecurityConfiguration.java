package org.avenue.config;

import javax.servlet.http.HttpServletRequest;
import javax.sql.DataSource;

//import org.avenue.security.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.security.web.util.matcher.RequestMatcher;
 
@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity( prePostEnabled = true )
public class SecurityConfiguration extends WebSecurityConfigurerAdapter
{
    @Autowired
    private DataSource dataSource;
    
    @Autowired
    public void configureGlobal( AuthenticationManagerBuilder auth ) throws Exception
    {
      auth
          .jdbcAuthentication()
          .dataSource( dataSource )
          .passwordEncoder(passwordEncoder())
          .usersByUsernameQuery( "select name,password, enabled from user where name=?" )
          .authoritiesByUsernameQuery( "select name, role from user_roles where name =?" );
    }
 
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
 
 
    @Override
    protected void configure( HttpSecurity http ) throws Exception
    {
    	// Build the request matcher for CSFR protection
        RequestMatcher csrfRequestMatcher = new RequestMatcher() {

          // Disable CSFR protection on the following urls:
          private AntPathRequestMatcher[] requestMatchers = {
              new AntPathRequestMatcher("/login"),
              new AntPathRequestMatcher("/logout"),
              new AntPathRequestMatcher("/**")
          };

          @Override
          public boolean matches(HttpServletRequest request) {
            // If the request match one url the CSFR protection will be disabled
            for (AntPathRequestMatcher rm : requestMatchers) {
              if (rm.matches(request)) { return false; }
            }
            return true;
          } // method matches

        }; // new RequestMatcher
    	
        http
//        .httpBasic()
//	      .and()
	    // Enable csrf only on some request matches
	    .csrf()
	      .requireCsrfProtectionMatcher(csrfRequestMatcher)
	      .and()
        .authorizeRequests()
	        .antMatchers( "/admin/**" ).hasRole( "ADMIN" )
            .antMatchers( "/**" ).permitAll()
            .anyRequest().authenticated()
        	.and()
        .formLogin()
        	.loginPage("/login")
        	.loginProcessingUrl("/j_spring_security_check")
        	.usernameParameter("j_username")
        	.passwordParameter("j_password")
        	.and()
        .logout()
            .logoutRequestMatcher( new AntPathRequestMatcher( "/j_spring_security_logout" ) )
            .logoutSuccessUrl( "/" )
            .deleteCookies( "JSESSIONID" )
            .invalidateHttpSession( true );
        
    }
 
}


// See http://codehustler.org/blog/spring-security-tutorial-form-login-java-config/ for more details on this tutorial