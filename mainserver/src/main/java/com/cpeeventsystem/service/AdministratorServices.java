package com.cpeeventsystem.service;

import java.util.List;

import com.cpeeventsystem.entity.Administrator;

public interface AdministratorServices {

	public List<Administrator> getAllAdministrator();

	public void createAdministrator(Administrator admin);

	public Administrator getAdministratorIfExist(String adminEmail, String password);

}
