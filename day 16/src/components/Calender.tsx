import { Button, Flex } from "antd";
import "./Calender.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaCalendar, FaPlus } from "react-icons/fa";
import { toast } from "react-toast";
import { FaXmark } from "react-icons/fa6";

const Calender = () => {
  const [current, setCurrent] = useState<Date>(new Date());
  const [visibleSideBar, setVisibleSideBar] = useState(false);
  const [visibleContextMenu, setVisibleContextMenu] = useState(false);
  const [visibleAddEvent, setVisibleAddEvent] = useState(false);
  const [visibleAddNote, setVisibleAddNote] = useState(false);
  const [eventTracker, setEventTracker] = useState([]);
  const [filterEventTracker, setFilterEventTracker] = useState([]);
  const [filterNoteTracker, setFilterNoteTracker] = useState([]);
  const [noteTracker, setNoteTracker] = useState([]);
  const [xPosition, setXPosition] = useState(0);
  const [yPosition, setYPosition] = useState(0);
  const [dayId, setDayId] = useState(0);

  const [eventName, setEventName] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [noteName, setNoteName] = useState("");

  //   Handle click on menu
  const handleContextMenuClick = (eventName: string) => {
    if (eventName === "event") setVisibleAddEvent(true);
    if (eventName === "note") setVisibleAddNote(true);
  };
  // add event and note
  const handleAddEvent = () => {
    if (!eventName && eventTime) {
      toast.error("Please fill in both event title and time.");
      return;
    }
    const selectedDayId = `${dayId} ${currentMonth[0].name}, ${currentYear}`;

    setEventTracker((prev) => [
      ...prev,
      {
        dayId: selectedDayId,
        eventTitle: eventName,
        eventTime: eventTime,
      },
    ]);
    toast.success(`Event added: ${eventName}, ${eventTime}`);
    setEventName("");
    setEventTime("");
    setVisibleContextMenu(false);
    setVisibleAddEvent(false);
  };

  const handleAddNote = () => {
    if (!noteName) {
      toast.error("Please enter a note title.");
      return;
    }
    const selectedDayId = `${dayId} ${currentMonth[0].name}, ${currentYear}`;

    setNoteTracker((prev) => [
      ...prev,
      {
        dayId: selectedDayId,
        noteTitle: noteName,
      },
    ]);
    toast.success(`Event added: ${noteName}`);
    setVisibleAddNote(false);
    setVisibleContextMenu(false);
    setNoteName("");
    console.log(noteTracker);
  };

  const weekDaysName = [
    { id: 0, name: "Sun" },
    { id: 1, name: "Mon" },
    { id: 2, name: "Tue" },
    { id: 3, name: "Wed" },
    { id: 4, name: "Thu" },
    { id: 5, name: "Fri" },
    { id: 6, name: "Sat" },
  ];
  const monthNames = [
    { id: 0, name: "January" },
    { id: 1, name: "February" },
    { id: 2, name: "March" },
    { id: 3, name: "April" },
    { id: 4, name: "May" },
    { id: 5, name: "June" },
    { id: 6, name: "July" },
    { id: 7, name: "August" },
    { id: 8, name: "September" },
    { id: 9, name: "October" },
    { id: 10, name: "November" },
    { id: 11, name: "December" },
  ];

  const date = current;

  const currentDate = date.getDate();

  const currentMonth = monthNames.filter(
    (month) => month.id === date.getMonth()
  );

  const currentYear = date.getFullYear();

  const getDaysInMonth = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  const firstDayOfMonth = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const startDay = firstDayOfMonth(date);

  const weekDays = Array.from({ length: getDaysInMonth(date) }, (_, i) => {
    const day = i + 1;
    const fullDate = new Date(current.getFullYear(), current.getMonth(), day);
    const weekDayName = weekDaysName[fullDate.getDay()].name;
    return {
      id: day,
      value: day,
      isToday: day === current.getDate(),
      weekDay: weekDayName,
    };
  });

  weekDays.map((day) => {
    if (day.value === currentDate) {
      day.isToday = true;
    }
  });

  document.addEventListener("contextmenu", (event) => event.preventDefault());

  useEffect(() => {
    const handleMouseDown = (e) => {
      if (e.button === 0 && e.target.id) {
        console.log("left");
        setVisibleSideBar(true);

        const day = `${e.target.id} ${currentMonth[0].name}, ${currentYear}`;
        setFilterEventTracker(() =>
          eventTracker.filter((eventName) => eventName.dayId === day)
        );
        setFilterNoteTracker(() =>
          noteTracker.filter((noteName) => noteName.dayId === day)
        );

        if (visibleContextMenu) setVisibleContextMenu(false);
      } else if (e.button === 2 && e.target.id) {
        setXPosition(e.clientX);
        setYPosition(e.clientY);
        setDayId(e.target.id);
        if (visibleSideBar) setVisibleSideBar(false);
        setVisibleContextMenu(true);
      }
    };

    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, [
    eventTracker,
    noteTracker,
    visibleContextMenu,
    currentMonth,
    currentYear,
  ]);

  return (
    <div style={{ position: "relative" }}>
      <Flex
        style={{
          width: "900px",
          margin: "0 auto",
          color: "#fefefe",
          boxShadow:
            "rgba(225, 225, 244, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
        }}
        align="center"
        vertical={true}
      >
        {/* main header */}
        <Flex
          style={{
            width: "100%",
            fontSize: "2rem",
            backgroundColor: "transparent",
            border: "2px solid gray",
            padding: "1rem",
          }}
          align="center"
          justify="space-between"
          // gap={"1rem"}
        >
          {/* Month */}
          <Flex align="center" gap={".5rem"}>
            <Button
              className="month-change-icon"
              icon={<MdKeyboardArrowLeft size={50} />}
              onClick={() => {
                setCurrent(
                  new Date(current.getFullYear(), current.getMonth() - 1, 1)
                );
              }}
            ></Button>
            <span
              style={{
                fontSize: "2rem",
                flex: "1",
                padding: ".5rem",
                borderRadius: "1rem",
              }}
            >
              {currentMonth[0].name}
            </span>
            <Button
              className="month-change-icon"
              icon={<MdKeyboardArrowRight size={50} />}
              onClick={() => {
                setCurrent(
                  new Date(current.getFullYear(), current.getMonth() + 1, 1)
                );
              }}
            ></Button>
          </Flex>

          {/* Today */}
          <Flex>
            <span
              style={{
                fontSize: "1.5rem",
                flex: "1",
                border: "1px solid gray",
                padding: ".5rem 2rem",
                cursor: "pointer",
                borderRadius: "2rem",
                color: "#6868fe",
              }}
              onClick={() => setCurrent(new Date())}
            >
              Today
            </span>
          </Flex>

          {/* Year */}
          <Flex align="center" gap={".5rem"}>
            <Button
              className="month-change-icon"
              icon={<MdKeyboardArrowLeft size={50} />}
              onClick={() => {
                setCurrent(
                  new Date(current.getFullYear() - 1, current.getMonth(), 1)
                );
              }}
            ></Button>
            <span
              style={{
                fontSize: "2rem",
                flex: "1",
                padding: ".5rem",
              }}
            >
              {currentYear}
            </span>
            <Button
              className="month-change-icon"
              icon={<MdKeyboardArrowRight size={50} />}
              onClick={() => {
                setCurrent(
                  new Date(current.getFullYear() + 1, current.getMonth(), 1)
                );
              }}
            ></Button>
          </Flex>
        </Flex>

        {/* weekday header */}
        <Flex
          style={{
            width: "100%",
            border: "1px solid",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          }}
          justify="space-between"
        >
          {weekDaysName.map((day) => (
            <div
              style={{
                textAlign: "center",
                padding: "1rem",
                backgroundColor: "#ffffff",
                color: "#000000",
                width: "100%",
              }}
              key={day.id}
            >
              {day.name}
            </div>
          ))}
        </Flex>

        {/* days */}
        <Flex
          wrap="wrap"
          style={{
            border: "1px solid #000",
            width: "100%",
          }}
        >
          {Array.from({ length: startDay }, (_, i) => (
            <div
              key={i}
              style={{
                width: "14.28%",
                padding: "2rem 1rem",
                textAlign: "center",
              }}
              className="day-box"
            />
          ))}

          {weekDays.map((day) => (
            <Flex
              id={day.id.toString()}
              key={day.id}
              style={{
                width: "14.28%",
                padding: "2rem 1rem",
                textAlign: "center",
                backgroundColor: `${day.isToday ? "#fd7400" : ""}`,
                color: `${
                  day.weekDay === "Sun"
                    ? "#d63e55"
                    : day.weekDay === "Sat"
                    ? "#6868fe"
                    : "#ffffff"
                }`,
              }}
              align="center"
              justify="space-between"
              className="day-box"
            >
              {/* event note indicator */}
              <Flex vertical gap={"1rem"}>
                {eventTracker
                  .filter(
                    (eve) =>
                      eve.dayId ===
                      `${day.id} ${currentMonth[0].name}, ${currentYear}`
                  )
                  .map((index) => (
                    <FaCalendar
                      key={`event-${index}`}
                      size={15}
                      color="#00dd00"
                    />
                  ))}

                {noteTracker
                  .filter(
                    (note) =>
                      note.dayId ===
                      `${day.id} ${currentMonth[0].name}, ${currentYear}`
                  )
                  .map((index) => (
                    <FaPlus key={`note-${index}`} size={15} color="#dd33ee" />
                  ))}
              </Flex>
              {day.value}
            </Flex>
          ))}
        </Flex>
      </Flex>

      {/* CONTEXT MENU */}
      <div
        style={{
          position: "fixed",
          width: "13rem",
          backgroundColor: "#fefefe",
          top: `${yPosition}px`,
          left: `${xPosition}px`,
          display: `${visibleContextMenu ? "block" : "none"}`,
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px",
          border: "1px solid gray",
          borderRadius: ".5rem",
          padding: ".5rem",
          zIndex: "999",
        }}
      >
        <Flex
          align="center"
          justify="space-between"
          vertical={true}
          gap={".8rem"}
        >
          {!visibleAddEvent && !visibleAddNote && (
            <>
              <Flex>
                <span
                  style={{
                    width: "100%",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    padding: ".5rem",
                    borderBottom: "1px solid gray",
                  }}
                >
                  Add Events & Notes
                </span>
              </Flex>

              <Flex
                align="center"
                gap={".5rem"}
                justify="center"
                style={{
                  cursor: "pointer",
                  padding: ".2rem",
                  width: "100%",
                  borderRadius: "1.5rem",
                }}
                className="context-menu"
                onClick={() => handleContextMenuClick("event")}
              >
                <span>
                  <FaCalendar size={20} />
                </span>
                <span style={{ fontSize: "1rem" }}>Add Events</span>
              </Flex>
              {/*  */}
              <Flex
                align="center"
                gap={".5rem"}
                justify="center"
                style={{
                  cursor: "pointer",
                  padding: ".2rem",
                  width: "100%",
                  borderRadius: "1.5rem",
                }}
                className="context-menu"
                onClick={() => handleContextMenuClick("note")}
              >
                <span>
                  <FaPlus size={18} />
                </span>
                <span style={{ fontSize: "1rem" }}>Add Notes</span>
              </Flex>
            </>
          )}

          {/* Add event */}
          {visibleAddEvent && (
            <Flex vertical={true} gap={".3rem"}>
              <Flex align="center" justify="space-between">
                <span>
                  <FaArrowLeft
                    size={20}
                    style={{ cursor: "pointer" }}
                    onClick={() => setVisibleAddEvent(false)}
                  />
                </span>
                <span
                  style={{
                    width: "100%",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    padding: ".5rem",
                    borderBottom: "1px solid gray",
                    textAlign: "center",
                  }}
                >
                  Add Events
                </span>
              </Flex>
              <Flex>
                <Flex
                  align="center"
                  gap={".5rem"}
                  justify="center"
                  style={{
                    cursor: "pointer",
                    padding: ".2rem",
                    width: "100%",
                    borderRadius: "1.5rem",
                  }}
                  vertical={true}
                >
                  <Flex
                    vertical={true}
                    gap={".5rem"}
                    justify="center"
                    align="center"
                  >
                    <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                      Event Title:
                    </span>
                    <input
                      value={eventName}
                      onChange={(e) => setEventName(e.target.value)}
                      type="text"
                      name=""
                      id=""
                      style={{
                        width: "100%",
                        padding: ".2rem",
                        fontSize: "1rem",
                        outline: "none",
                        border: "1px solid gray",
                        color: "gray",
                      }}
                      placeholder="Event Title"
                    />
                  </Flex>
                  <Flex
                    vertical={true}
                    gap={".5rem"}
                    justify="center"
                    align="center"
                  >
                    <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                      Event Time:
                    </span>
                    <input
                      onChange={(e) => setEventTime(e.target.value)}
                      value={eventTime}
                      type="time"
                      name=""
                      id=""
                      style={{
                        width: "100%",
                        padding: ".2rem",
                        fontSize: "1rem",
                        outline: "none",
                        border: "1px solid gray",
                      }}
                    />
                  </Flex>
                  <Flex
                    vertical={true}
                    gap={".5rem"}
                    justify="center"
                    align="center"
                  >
                    <Button
                      style={{
                        fontSize: "1rem",
                        fontWeight: "bold",
                        marginTop: ".8rem",
                        padding: "1rem",
                      }}
                      onClick={handleAddEvent}
                    >
                      Add Event
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          )}

          {/* add note */}
          {visibleAddNote && (
            <Flex vertical={true} gap={".3rem"}>
              <Flex align="center" justify="space-between">
                <span>
                  <FaArrowLeft
                    size={20}
                    style={{ cursor: "pointer" }}
                    onClick={() => setVisibleAddNote(false)}
                  />
                </span>
                <span
                  style={{
                    width: "100%",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    padding: ".5rem",
                    borderBottom: "1px solid gray",
                    textAlign: "center",
                  }}
                >
                  Add Notes
                </span>
              </Flex>
              <Flex>
                <Flex
                  align="center"
                  gap={".5rem"}
                  justify="center"
                  style={{
                    cursor: "pointer",
                    padding: ".2rem",
                    width: "100%",
                    borderRadius: "1.5rem",
                  }}
                  vertical={true}
                >
                  <Flex
                    vertical={true}
                    gap={".5rem"}
                    justify="center"
                    align="center"
                  >
                    <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                      Note Title:
                    </span>
                    <input
                      value={noteName}
                      onChange={(e) => setNoteName(e.target.value)}
                      type="text"
                      name=""
                      id=""
                      style={{
                        width: "100%",
                        padding: ".2rem",
                        fontSize: "1rem",
                        outline: "none",
                        border: "1px solid gray",
                        color: "gray",
                      }}
                      placeholder="Note Title"
                    />
                  </Flex>
                  <Flex
                    vertical={true}
                    gap={".5rem"}
                    justify="center"
                    align="center"
                  >
                    <Button
                      style={{
                        fontSize: "1rem",
                        fontWeight: "bold",
                        marginTop: ".8rem",
                        padding: "1rem",
                      }}
                      onClick={handleAddNote}
                    >
                      Add Note
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          )}
        </Flex>
      </div>

      {/* SIDEBAR */}
      <Flex>
        <div
          style={{
            width: "18rem",
            height: "100vh",
            backgroundColor: "white",
            position: "absolute",
            top: "-130px",
            right: "-385px",
            transition: "all .5s ease",
            display: `${visibleSideBar ? "block" : "none"}`,
            padding: "1rem",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px",
          }}
        >
          <Flex
            style={{
              width: "100%",
              padding: ".5rem",
              height: "100%",
            }}
            gap={"1rem"}
            align="center"
            // justify="center"
            vertical={true}
          >
            <div style={{cursor:'pointer'}} onClick={()=>setVisibleSideBar(false)}><FaXmark color="red" size={25}/></div>
            {/* event details */}
            <Flex
              vertical={true}
              style={{
                width: "100%",
                marginBottom: "10rem",
              }}
            >
              <Flex
                align="center"
                justify="center"
                gap={".5rem"}
                style={{
                  borderBottom: "1px solid gray",
                  padding: ".5rem",
                  fontWeight: "600",
                }}
              >
                <FaCalendar size={20} />
                <span>Event Details</span>
              </Flex>
              {filterEventTracker.length === 0 && (
                <Flex
                  style={{
                    fontSize: "1rem",
                    color: "gray",
                    fontStyle: "italic",
                    padding: ".8rem",
                  }}
                  justify="center"
                >
                  No Event to show...
                </Flex>
              )}
              <Flex
                vertical={true}
                gap={"1rem"}
                style={{ marginTop: "1rem", width: "100%" }}
              >
                {filterEventTracker.map((eventDetails, index) => (
                  <Flex
                    key={index}
                    vertical
                    gap={"1rem"}
                    style={{ width: "100%" }}
                  >
                    <Flex
                      vertical
                      justify="center"
                      gap={".5rem"}
                      style={{
                        borderBottom: "1px solid gray",
                        paddingBottom: ".8rem",
                      }}
                    >
                      <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                        Event: {eventDetails.eventTitle}
                      </span>
                      <Flex justify="space-between" style={{ width: "100%" }}>
                        <span style={{ fontSize: "1rem" }}>
                          <span style={{ color: "gray", fontSize: ".9rem" }}>
                            Date:
                          </span>{" "}
                          {eventDetails.dayId}
                        </span>
                        <span style={{ fontSize: "1rem" }}>
                          <span style={{ color: "gray", fontSize: ".9rem" }}>
                            Time:
                          </span>{" "}
                          {eventDetails.eventTime}
                        </span>
                      </Flex>
                    </Flex>
                  </Flex>
                ))}
              </Flex>
            </Flex>
            {/* End Event Details */}
            {/* NOTE Details */}
            <Flex
              vertical={true}
              style={{
                width: "100%",
              }}
            >
              <Flex
                align="center"
                justify="center"
                gap={".5rem"}
                style={{
                  borderBottom: "1px solid gray",
                  padding: ".5rem",
                  fontWeight: "600",
                  marginBottom: "1rem",
                }}
              >
                <FaCalendar size={20} />
                <span>Notes Details</span>
              </Flex>
              {filterNoteTracker.length === 0 && (
                <Flex
                  style={{
                    fontSize: "1rem",
                    color: "gray",
                    fontStyle: "italic",
                    padding: ".8rem",
                  }}
                  justify="center"
                >
                  No Notes to show...
                </Flex>
              )}
              <Flex vertical={true} gap={"1rem"}>
                {filterNoteTracker.map((noteDetails, id) => (
                  <Flex
                    key={id}
                    vertical={true}
                    gap={"1rem"}
                    style={{ width: "100%" }}
                  >
                    <Flex
                      vertical={true}
                      justify="center"
                      gap={".5rem"}
                      style={{
                        borderBottom: "1px solid gray",
                        paddingBottom: ".8rem",
                      }}
                    >
                      <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                        Note: {noteDetails.noteTitle}
                      </span>
                      <Flex justify="space-between" style={{ width: "100%" }}>
                        <span style={{ fontSize: "1rem" }}>
                          <span style={{ color: "gray", fontSize: ".9rem" }}>
                            Date:
                          </span>{" "}
                          {noteDetails.dayId}
                        </span>
                      </Flex>
                    </Flex>
                  </Flex>
                ))}
              </Flex>
            </Flex>
            {/* END NOTE */}
          </Flex>
        </div>
      </Flex>
    </div>
  );
};

export default Calender;
