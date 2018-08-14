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

import com.cpeeventsystem.entity.Event;
import com.cpeeventsystem.service.EventServices;
import com.cpeeventsystem.service.StudentServices;

@RestController
@RequestMapping(value = "/event")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class EventResources {

	@Autowired
	private EventServices eventServices;

	@Autowired
	StudentServices studentServices;

	@PostMapping(value = "/createEvent", consumes = MediaType.APPLICATION_JSON_VALUE)
	public void createEvent(@RequestBody Event event) {
		eventServices.createEvent(event);
	}

	@GetMapping(value = "/getAllEvent")
	public List<Event> getAllEvent() {
		return (List<Event>) eventServices.getAllEvent();
	}

	@GetMapping(value = "/getEventById/{eventId}")
	public Optional<Event> getEventById(@PathVariable int eventId) {
		return eventServices.getEventById(eventId);
	}

	@PutMapping(value = "/updateEvent", consumes = MediaType.APPLICATION_JSON_VALUE)
	public void updateEvent(@RequestBody Event event) {
		eventServices.updateEvent(event);
	}

	@DeleteMapping(value = "/deleteEvent/{eventId}")
	public boolean deleteEvent(@PathVariable int eventId) {
		eventServices.deleteEvent(eventId);
		return true;
	}

	@GetMapping(value = "/getNoOfParticipants/{eventId}")
	public int getNoOfParticipants(@PathVariable int eventId) {
		return eventServices.getNoOFParticipantsById(eventId);
	}

	@GetMapping(value = "/getEventStatus/{eventId}")
	public boolean getEventStatus(@PathVariable int eventId) {
		boolean status = false;

		if (eventServices.getNoOFParticipantsById(eventId) > studentServices.countNoOfParticipants(eventId)) {
			status = true;
		} else {
			status = false;
		}
		return status;
	}

}
