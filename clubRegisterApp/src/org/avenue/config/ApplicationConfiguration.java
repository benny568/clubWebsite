package org.avenue.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
 
@Configuration
@ComponentScan({ "org.avenue.*" })
@Import({ MvcConfiguration.class, RepositoryConfiguration.class, SecurityConfiguration.class })
public class ApplicationConfiguration
{
}
