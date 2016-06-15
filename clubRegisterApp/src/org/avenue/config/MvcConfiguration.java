package org.avenue.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
 
@EnableWebMvc
@Configuration
public class MvcConfiguration extends WebMvcConfigurerAdapter
{
 
    @Override
    public void configureDefaultServletHandling( DefaultServletHandlerConfigurer configurer )
    {
        configurer.enable();
    }
    
    @Override
    public void addResourceHandlers(final ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/resources/**").addResourceLocations("/WEB-INF/resources/");
    }
    
/*    @Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**");
	}*/
 
    @Bean
    public InternalResourceViewResolver getInternalResourceViewResolver()
    {
        InternalResourceViewResolver resolver = new InternalResourceViewResolver();
        resolver.setPrefix("/");
        resolver.setSuffix(".jsp");
        return resolver;
    }

}
