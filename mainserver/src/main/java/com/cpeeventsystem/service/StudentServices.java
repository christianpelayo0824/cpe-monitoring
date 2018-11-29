package com.cpeeventsystem.service;

import java.util.List;
import java.util.Optional;

import com.cpeeventsystem.entity.Student;

public interface StudentServices {

	public List<Student> getAllStudent();

	public Optional<Student> getStudentById(int studentId);

	public void createStudent(Student student);

	public void updateStudent(Student student);
	
	public void deleteStudent(int studentId);
	
	public Student getStudentByEmail(String email);
	
	public int countNoOfParticipants(int eventId);

}
