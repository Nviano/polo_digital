import { useState, useEffect } from "react";
import { host } from "../../const/host";
import EventsView from "./EventsView";

export default function Events() {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch(`${host}/gestion/eventos`);
        const events = await response.json();
        setEvents(events);
      } catch (error) {
        console.log(error);
      }
    }
    fetchEvents();
  }, []);

  return <EventsView events={events} />;
}
