package com.cpeeventsystem.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cpeeventsystem.entity.Student;
import com.cpeeventsystem.repository.StudentRepository;

@Service
public class StudentServicesImpl implements StudentServices {

	@Autowired
	private StudentRepository studentRepo;

	@Override
	public List<Student> getAllStudent() {
		return (List<Student>) studentRepo.findAll();
	}

	@Override
	public Optional<Student> getStudentById(int studentId) {
		return (Optional<Student>) studentRepo.findById(studentId);
	}

	@Override
	public void createStudent(Student student) {
		studentRepo.save(student);
	}

	@Override
	public void updateStudent(Student student) {
		studentRepo.save(student);
	}

	@Override
	public void deleteStudent(int studentId) {
		studentRepo.deleteById(studentId);
	}

	@Override
	public Student getStudentByEmail(String email) {
		return studentRepo.getStudentByEmail(email);
	}

	@Override
	public int countNoOfParticipants(int eventId) {
		return studentRepo.countByEvent(eventId);
	}

}
