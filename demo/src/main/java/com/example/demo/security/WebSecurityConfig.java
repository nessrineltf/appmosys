package com.example.demo.security;

import com.example.demo.security.Jwt.JwtAuthEntryPoint;
import com.example.demo.security.Jwt.JwtAuthTokenFilter;
import com.example.demo.security.services.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(
        prePostEnabled = true
)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    UserDetailsServiceImpl userDetailsService;

    @Autowired
    private JwtAuthEntryPoint unauthorizedHandler;

    @Bean
    public JwtAuthTokenFilter authenticationJwtTokenFilter() {
        return new JwtAuthTokenFilter();
    }

    @Override
    public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
        authenticationManagerBuilder
                .userDetailsService(userDetailsService)
                .passwordEncoder(passwordEncoder());
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable().
                authorizeRequests()
                .antMatchers("/api/auth/**").permitAll()
                .antMatchers("/login/**").permitAll()
                .antMatchers("/api/admin/**").permitAll()
                .antMatchers("/api/upload/**").permitAll()
                .antMatchers("/api/patient/**").permitAll()
                .antMatchers("/api/medecin/**").permitAll()
                .antMatchers("/api/admin/**").permitAll()
                .antMatchers("/api/specialite/**").permitAll()
                .antMatchers("/api/ville/**").permitAll()
                .antMatchers("/api/parapharmacie/**").permitAll()
                .antMatchers("/api/radiologue/**").permitAll()
                .antMatchers("/api/laboratoire/**").permitAll()
                .antMatchers("/api/pharmacie/**").permitAll()
                .antMatchers("/api/hopitale/**").permitAll()
                .antMatchers("/api/clinique/**").permitAll()
                .antMatchers("/api/dossierMedical/**").permitAll()
                .antMatchers("/api/crenauxrdv/**").permitAll()
                .antMatchers("/api/ressourcemateriel/**").permitAll()

                .anyRequest().authenticated()
                .and()
                .exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        http.addFilterBefore(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);
    }
}
