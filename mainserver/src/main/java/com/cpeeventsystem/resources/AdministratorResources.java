package com.cpeeventsystem.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cpeeventsystem.entity.Administrator;
import com.cpeeventsystem.service.AdministratorServices;

@RestController
@RequestMapping(value = "/administrator")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class AdministratorResources {

	@Autowired
	private AdministratorServices adminServices;


	@GetMapping(value = "/getAllAdministrator")
	public List<Administrator> getAllAdministrator() {
		return (List<Administrator>) adminServices.getAllAdministrator();
	}

	@GetMapping(value = "/getAdminByEmail/{adminEmail}/{adminPassword}")
	public Boolean statusOfAdminIfExist(@PathVariable String adminEmail, @PathVariable String adminPassword) {

		boolean status = false;

		if ((Administrator) adminServices.getAdministratorIfExist(adminEmail, adminPassword) != null) {
			status = true;
		} else {
			status = false;
		}

		return status;
	}
	
	@PostMapping(value ="/createAdmin", consumes = MediaType.APPLICATION_JSON_VALUE)
	public void createAdmin(@RequestBody Administrator admin) {
		adminServices.createAdministrator(admin);
	}
}
