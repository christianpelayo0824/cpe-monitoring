package com.cpeeventsystem.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cpeeventsystem.entity.Event;

@Repository
public interface EventRepository extends CrudRepository<Event, Integer> {

	@Query("SELECT e.noOfParticipants FROM Event e WHERE e.id = :eventId")
	public int getNoOfParticipantsById(@Param("eventId") int eventId);

	@Query("SELECT e.title FROM Event e WHERE e.id = :eventId")
	public String getEventTitleById(@Param("eventId") int eventId);

}
