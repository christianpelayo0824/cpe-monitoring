package com.cpeeventsystem.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cpeeventsystem.entity.Student;

@Repository
public interface StudentRepository extends CrudRepository<Student, Integer> {

	@Query("SELECT s FROM Student s WHERE s.email = :email")
	public Student getStudentByEmail(@Param("email") String student);
	
	public int countByEvent(int event);

}
