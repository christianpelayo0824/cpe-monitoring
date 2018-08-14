package com.cpeeventsystem.mainserver;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.cpeeventsystem.repository.StudentRepository;

@SpringBootApplication(scanBasePackages = { "com.cpeeventsystem" })
@EnableJpaRepositories(basePackages = { "com.cpeeventsystem.repository" })
@EntityScan(basePackages = { "com.cpeeventsystem.entity" })
public class MainserverApplication {

	@Autowired
	StudentRepository studentRepo;

	public static void main(String[] args) {
		SpringApplication.run(MainserverApplication.class, args);
	}

}
