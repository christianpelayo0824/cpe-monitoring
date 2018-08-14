package com.cpeeventsystem.service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.cpeeventsystem.entity.Student;

import ch.qos.logback.classic.Logger;

@Service
public class SendEmailServicesImpl implements SendEmailServices {

	private Logger logger = (Logger) LoggerFactory.getLogger(SendEmailServicesImpl.class);

	@Autowired
	private JavaMailSender javaMailSender;

	@Autowired
	private EventServices eventServices;

	@Override
	public void sendEmailToStudent(Student student) {

		MimeMessage message = javaMailSender.createMimeMessage();
		MimeMessageHelper helper;

		try {
			String body = "Hello " + student.getFirstname() + "!" + " Thankyou for registering on this event ( "
					+ eventServices.getEventTitleByid(student.getevent()) + " ). See you and have fun!";

			helper = new MimeMessageHelper(message, true);
			helper.setSubject("Ticket for the Seminar");
			helper.setTo(student.getEmail());
			helper.setText(body, true);
			javaMailSender.send(message);
			System.out.println("Mail Sent");
		} catch (MessagingException e) {
			logger.info("Error Sending Email: " + e.getMessage());
		}

	}

}
