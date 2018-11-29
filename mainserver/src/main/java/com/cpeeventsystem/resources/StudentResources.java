package com.cpeeventsystem.resources;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cpeeventsystem.entity.Student;
import com.cpeeventsystem.service.SendEmailServices;
import com.cpeeventsystem.service.StudentServices;

@RestController
@RequestMapping(value = "/student")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class StudentResources {

	@Autowired
	private StudentServices studentServices;
	
	@Autowired
	private SendEmailServices sendEmailServices;
	
	@GetMapping(value = "/getAllStudent")
	public List<Student> getAllStudent() {
		return (List<Student>) studentServices.getAllStudent();
	}

	@GetMapping(value = "/getStudentById/{studentId}")
	public Optional<Student> getStudentById(@PathVariable int studentId) {
		return (Optional<Student>) studentServices.getStudentById(studentId);
	}

	@PostMapping(value = "/createStudent", consumes = MediaType.APPLICATION_JSON_VALUE)
	public void createStudent(@RequestBody Student student) {
		studentServices.createStudent(student);
		
		//Send Email
		sendEmailServices.sendEmailToStudent(student);
	}

	@PutMapping(value = "/updateStudent", consumes = MediaType.APPLICATION_JSON_VALUE)
	public void updateStudent(@RequestBody Student student) {
		studentServices.updateStudent(student);
	}

	@DeleteMapping(value = "/deleteStudent/{studentId}")
	public boolean deleteStudent(@PathVariable int studentId) {
		studentServices.deleteStudent(studentId);
		return true;
	}
	
	@GetMapping(value ="/getStudentByEmail/{email}")
	public Student getStudentByEmail(@PathVariable String email) {
		return studentServices.getStudentByEmail(email);
	}
	
	@GetMapping(value="/getNoOfParicipants/{eventId}")
	public int getNoOfParticipants(@PathVariable int eventId) {
		return studentServices.countNoOfParticipants(eventId);
	}
}
