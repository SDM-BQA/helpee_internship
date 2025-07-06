import { Button, Flex, Select } from "antd";
import "./Calender.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import { Option } from "antd/es/mentions";

const Calender = () => {
    const [current, setCurrent] = useState<Date>(new Date());

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

    return (
        <Flex
            style={{
                width: "900px",
                margin: "0 auto",
                color: "#fefefe",
                boxShadow: "rgba(225, 225, 244, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
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
                    border:'2px solid gray',
                    padding:'1rem'
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
                    <div
                        key={day.id}
                        style={{
                            width: "14.28%",
                            padding: "2rem 1rem",
                            textAlign: "center",
                            backgroundColor: `${day.isToday ? "#fd7400" : ""}`,
                            color: `${day.weekDay === "Sun"
                                    ? "#d63e55"
                                    : day.weekDay === "Sat"
                                        ? "#6868fe"
                                        : "#ffffff"
                                }`,
                        }}
                        className="day-box"
                    >
                        {day.value}
                    </div>
                ))}
            </Flex>
        </Flex>
    );
};

export default Calender;
