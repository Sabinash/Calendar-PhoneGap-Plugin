"use strict";
function Calendar() {
}

Calendar.prototype.createCalendar = function (calendarName, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "Calendar", "createCalendar", [{
    "calendarName": calendarName
  }]);
};

Calendar.prototype.deleteCalendar = function (calendarName, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "Calendar", "deleteCalendar", [{
    "calendarName": calendarName
  }]);
};

Calendar.prototype.createEvent = function (title, location, notes, startDate, endDate, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "Calendar", "createEvent", [{
    "title": title,
    "location": location,
    "notes": notes,
    "startTime": startDate instanceof Date ? startDate.getTime() : null,
    "endTime": endDate instanceof Date ? endDate.getTime() : null
  }])
};

/**
 * This method was added to not break backwards compatibility with current usages of createEvent.
 * The options JS object can have these values (others are ignored):
 * TODO: expose options object, with defaults
 *
 * options {
 *   'calendarName: 'testcal',   // planned
 *   'firstReminderMinutes': 60, // supported
 *   'secondReminderMinutes': 5, // planned
 *   'recurs': 'weekly'          // planned
 * }
 */
Calendar.prototype.createEventWithOptions = function (title, location, notes, startDate, endDate, options, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "Calendar", "createEventWithOptions", [{
    "title": title,
    "location": location,
    "notes": notes,
    "startTime": startDate instanceof Date ? startDate.getTime() : null,
    "endTime": endDate instanceof Date ? endDate.getTime() : null,
    // TODO pass options object later, but for a quick API change, just pass the param
    "firstReminderMinutes": options.firstReminderMinutes
  }])
};

Calendar.prototype.createEventInteractively = function (title, location, notes, startDate, endDate, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "Calendar", "createEventInteractively", [{
    "title": title,
    "location": location,
    "notes": notes,
    "startTime": startDate instanceof Date ? startDate.getTime() : null,
    "endTime": endDate instanceof Date ? endDate.getTime() : null
  }])
};

Calendar.prototype.createEventInNamedCalendar = function (title, location, notes, startDate, endDate, calendarName, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "Calendar", "createEventInNamedCalendar", [{
    "title": title,
    "location": location,
    "notes": notes,
    "startTime": startDate instanceof Date ? startDate.getTime() : null,
    "endTime": endDate instanceof Date ? endDate.getTime() : null,
    "calendarName": calendarName
  }])
};

Calendar.prototype.deleteEvent = function (title, location, notes, startDate, endDate, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "Calendar", "deleteEvent", [{
    "title": title,
    "location": location,
    "notes": notes,
    "startTime": startDate instanceof Date ? startDate.getTime() : null,
    "endTime": endDate instanceof Date ? endDate.getTime() : null
  }])
};

Calendar.prototype.deleteEventFromNamedCalendar = function (title, location, notes, startDate, endDate, calendarName, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "Calendar", "deleteEventFromNamedCalendar", [{
    "title": title,
    "location": location,
    "notes": notes,
    "startTime": startDate instanceof Date ? startDate.getTime() : null,
    "endTime": endDate instanceof Date ? endDate.getTime() : null,
    "calendarName": calendarName
  }])
};

Calendar.prototype.findEvent = function (title, location, notes, startDate, endDate, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "Calendar", "findEvent", [{
    "title": title,
    "location": location,
    "notes": notes,
    "startTime": startDate instanceof Date ? startDate.getTime() : null,
    "endTime": endDate instanceof Date ? endDate.getTime() : null
  }])
};

Calendar.prototype.findAllEventsInNamedCalendar = function (calendarName, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "Calendar", "findAllEventsInNamedCalendar", [{
    "calendarName": calendarName
  }]);
};

Calendar.prototype.modifyEvent = function (title, location, notes, startDate, endDate, newTitle, newLocation, newNotes, newStartDate, newEndDate, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "Calendar", "modifyEvent", [{
    "title": title,
    "location": location,
    "notes": notes,
    "startTime": startDate instanceof Date ? startDate.getTime() : null,
    "endTime": endDate instanceof Date ? endDate.getTime() : null,
    "newTitle": newTitle,
    "newLocation": newLocation,
    "newNotes": newNotes,
    "newStartTime": newStartDate instanceof Date ? newStartDate.getTime() : null,
    "newEndTime": newEndDate instanceof Date ? newEndDate.getTime() : null
  }])
};

Calendar.prototype.modifyEventInNamedCalendar = function (title, location, notes, startDate, endDate, newTitle, newLocation, newNotes, newStartDate, newEndDate, calendarName, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "Calendar", "modifyEventInNamedCalendar", [{
    "title": title,
    "location": location,
    "notes": notes,
    "startTime": startDate instanceof Date ? startDate.getTime() : null,
    "endTime": endDate instanceof Date ? endDate.getTime() : null,
    "newTitle": newTitle,
    "newLocation": newLocation,
    "newNotes": newNotes,
    "newStartTime": newStartDate instanceof Date ? newStartDate.getTime() : null,
    "newEndTime": newEndDate instanceof Date ? newEndDate.getTime() : null,
    "calendarName": calendarName
  }])
};

Calendar.prototype.listEventsInRange = function (startDate, endDate, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "Calendar", "listEventsInRange", [{
    "startTime": startDate instanceof Date ? startDate.getTime() : null,
    "endTime": endDate instanceof Date ? endDate.getTime() : null
  }])
};

Calendar.prototype.listCalendars = function (successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "Calendar", "listCalendars", []);
};

Calendar.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.calendar = new Calendar();
  return window.plugins.calendar;
};

cordova.addConstructor(Calendar.install);
