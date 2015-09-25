package org.avenue.config;

import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

 
@Configuration
public class RepositoryConfiguration
{
    @Bean
    public DataSource getDataSource()
    {
        DriverManagerDataSource driverManagerDataSource = new DriverManagerDataSource();
        driverManagerDataSource.setDriverClassName( "com.mysql.jdbc.Driver" );
        driverManagerDataSource.setUrl( "jdbc:mysql://mysql1001.mochahost.com:3306/odalybr_register" );
        driverManagerDataSource.setUsername( "odalybr_root" );
        driverManagerDataSource.setPassword( "Merr10nAvenue83" );
        return driverManagerDataSource;
    }
}
