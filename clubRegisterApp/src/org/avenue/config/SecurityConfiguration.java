package org.avenue.config;

import javax.sql.DataSource;

//import org.avenue.security.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
 
@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity( prePostEnabled = true )
public class SecurityConfiguration extends WebSecurityConfigurerAdapter
{
   // @Autowired
    //private LoginService loginService;
 
    @Autowired
    private DataSource dataSource;
 
    @Autowired
    public void configureGlobal( AuthenticationManagerBuilder auth ) throws Exception
    {
      auth
          .jdbcAuthentication()
          .dataSource( dataSource )
          .usersByUsernameQuery( "select username,password, enabled from user where username=?" )
          .authoritiesByUsernameQuery( "select username, role from user_roles where username =?" );
    }
 
 
/*    @Override
    public void configure( WebSecurity web ) throws Exception
    {
        // This is here to ensure that the static content (JavaScript, CSS, etc)
        // is accessible from the login page without authentication
        web
            .ignoring()
                .antMatchers( "/static/**" );
    }*/
 
 
    @Override
    protected void configure( HttpSecurity http ) throws Exception
    {
        http
 
            // access-denied-page: this is the page users will be
            // redirected to when they try to access protected areas.
            .exceptionHandling()
                .accessDeniedPage( "/403" )
                .and()
 
            // The intercept-url configuration is where we specify what roles are allowed access to what areas.
            // We specifically force the connection to https for all the pages, although it could be sufficient
            // just on the login page. The access parameter is where the expressions are used to control which
            // roles can access specific areas. One of the most important things is the order of the intercept-urls,
            // the most catch-all type patterns should at the bottom of the list as the matches are executed
            // in the order they are configured below. So /** (anyRequest()) should always be at the bottom of the list.
            .authorizeRequests()
                .antMatchers( "/admin/**" ).hasRole( "ADMIN" )
                .antMatchers( "/**" ).permitAll()
                //.anyRequest().authenticated()
                .and()
            //.requiresChannel()
              //  .anyRequest().requiresSecure()
                //.and()
 
            // This is where we configure our login form.
            // login-page: the page that contains the login screen
            // login-processing-url: this is the URL to which the login form should be submitted
            // default-target-url: the URL to which the user will be redirected if they login successfully
            // authentication-failure-url: the URL to which the user will be redirected if they fail login
            // username-parameter: the name of the request parameter which contains the username
            // password-parameter: the name of the request parameter which contains the password
            .formLogin()
                .loginPage( "/login" )
                .loginProcessingUrl( "/j_spring_security_check" )
                .defaultSuccessUrl( "/admin" )
                .failureUrl( "/login?err=1" )
                .usernameParameter( "j_username" )
                .passwordParameter( "j_password" )
                .and()
 
            // This is where the logout page and process is configured. The logout-url is the URL to send
            // the user to in order to logout, the logout-success-url is where they are taken if the logout
            // is successful, and the delete-cookies and invalidate-session make sure that we clean up after logout
            .logout()
                .logoutRequestMatcher( new AntPathRequestMatcher( "/j_spring_security_logout" ) )
                .logoutSuccessUrl( "/" )
                .deleteCookies( "JSESSIONID" )
                .invalidateHttpSession( true );
            //    .and()
 
            // The session management is used to ensure the user only has one session. This isn't
            // compulsory but can add some extra security to your application.
            //.sessionManagement()
            //    .invalidSessionUrl( "/login?time=1" )
            //    .maximumSessions( 1 );
    }
 
}


// See http://codehustler.org/blog/spring-security-tutorial-form-login-java-config/ for more details on this tutorial