package com.cpeeventsystem.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.cpeeventsystem.entity.Administrator;

public interface AdministratorRepository extends CrudRepository<Administrator, Integer> {

	@Query(value = "SELECT a FROM Administrator a WHERE a.email = :email AND a.password = :password")
	public Administrator getAdministratorIfExist(@Param("email") String adminEmail, @Param("password") String password);

}
