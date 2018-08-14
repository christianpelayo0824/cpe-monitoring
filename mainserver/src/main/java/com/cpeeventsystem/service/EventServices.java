package com.cpeeventsystem.service;

import java.util.List;
import java.util.Optional;

import com.cpeeventsystem.entity.Event;

public interface EventServices {

	public List<Event> getAllEvent();

	public Optional<Event> getEventById(int EventId);

	public void createEvent(Event event);

	public void updateEvent(Event event);

	public void deleteEvent(int eventId);

	public int getNoOFParticipantsById(int eventId);
	
	public String getEventTitleByid(int eventId);

}
