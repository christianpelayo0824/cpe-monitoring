package com.cpeeventsystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cpeeventsystem.entity.Administrator;
import com.cpeeventsystem.repository.AdministratorRepository;

@Service
public class AdministratorServicesImpl implements AdministratorServices {

	@Autowired
	private AdministratorRepository adminRepo;

	@Override
	public Administrator getAdministratorIfExist(String adminEmail, String password) {
		return adminRepo.getAdministratorIfExist(adminEmail, password);
	}

	@Override
	public List<Administrator> getAllAdministrator() {
		return (List<Administrator>) adminRepo.findAll();
	}

	@Override
	public void createAdministrator(Administrator admin) {
		adminRepo.save(admin);
	}

}
