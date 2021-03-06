package org.avenue.config.initializer;

import org.avenue.config.ApplicationConfiguration;
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;
 
public class SpringConfigurationInitializer extends AbstractAnnotationConfigDispatcherServletInitializer
{
    @Override
    protected Class<?>[] getRootConfigClasses()
    {
        return new Class[] { ApplicationConfiguration.class };
    }
 
    @Override
    protected Class<?>[] getServletConfigClasses()
    {
        return null;
    }
 
    @Override
    protected String[] getServletMappings()
    {
        return new String[] { "/" };
    }
 
}
