// import DashBoardHeader from "../components/Header/DashBoardHeader";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import multiMonthPlugin from "@fullcalendar/multimonth";
import allLocales from "@fullcalendar/core/locales-all.js";

export default function CalendarDecive() {
  const getTitle = (date: { getFullYear: () => any; getMonth: () => any }) => {
    const monthNames = [
      "Tháng 1",
      "Tháng 2",
      "Tháng 3",
      "Tháng 4",
      "Tháng 5",
      "Tháng 6",
      "Tháng 7",
      "Tháng 8",
      "Tháng 9",
      "Tháng 10",
      "Tháng 11",
      "Tháng 12",
    ];

    const year = date.getFullYear();
    const month = date.getMonth();
    const capitalizedMonth = monthNames[month];

    return `Tháng ${capitalizedMonth} năm ${year}`;
  };
  return (
    <div>
      {/* Calendar */}
      <div className="flex-1 justify-between">
        <div></div>
        <div>
          <FullCalendar
            height="75vh"
            locales={allLocales}
            locale="vi"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
              multiMonthPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            views={{
              moth: {
                titleFormat: "Tháng MM",
              },
              dayGridMonth: {
                titleFormat: { year: "numeric", month: "long" },
              },
            }}
            initialView="dayGridMonth"
            // editable={true}
            selectable={true}
            selectMirror={true}
            initialEvents={[
              {
                id: "12315",
                title: "All-day event",
                date: "2023-11-16",
              },
              {
                id: "5123",
                title: "Timed event",
                date: "2023-11-28",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
