package com.cpeeventsystem.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cpeeventsystem.entity.Event;
import com.cpeeventsystem.repository.EventRepository;

@Service
public class EventServicesImpl implements EventServices {

	@Autowired
	private EventRepository eventRepo;

	@Override
	public void createEvent(Event event) {
		eventRepo.save(event);
	}

	@Override
	public List<Event> getAllEvent() {
		return (List<Event>) eventRepo.findAll();
	}

	@Override
	public Optional<Event> getEventById(int eventId) {
		return eventRepo.findById(eventId);
	}

	@Override
	public void updateEvent(Event event) {
		eventRepo.save(event);

	}

	@Override
	public void deleteEvent(int eventId) {
		eventRepo.deleteById(eventId);

	}

	@Override
	public int getNoOFParticipantsById(int eventId) {
		return eventRepo.getNoOfParticipantsById(eventId);
	}

	@Override
	public String getEventTitleByid(int eventId) {
		return eventRepo.getEventTitleById(eventId);
	}

	@Override
	public String getEventDateByid(int eventId) {
		return eventRepo.getEventDateById(eventId);
	}

}
