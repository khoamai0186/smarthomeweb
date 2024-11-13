import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@mui/material";
  import { NavLink, useParams } from "react-router-dom";
  
  import {    
    PencilSquareIcon,
    TrashIcon,
  } from "@heroicons/react/24/outline";
  
  export default function TableCalendar() {
    const { id } = useParams(); // Get the "id" from the URL
    const events = [
      { idevents: 1, dayadd: "10-11-2023", dayon: "7h", dayoff: "8h"/* other event properties */ },
      { idevents: 2, dayadd: "10-11-2023", dayon: "7h", dayoff: "8h"/* other event properties */ },
      { idevents: 3, dayadd: "10-11-2023", dayon: "7h", dayoff: "8h"/* other event properties */ },
    ];
  
    return (
      <div className="w-full max-w-full rounded-xl mt-10">
        <TableContainer
          component={Paper}
          sx={{ border: "1px solid rgba(0, 0, 0, 0.4)" }}
        >
          <Table className="w-full text-sm text-center text-gray-500 dark:text-gray-400 ">
            <TableHead className="w-full text-xs text-center text-gray-700 bg-teal-600 text-[1px]">
              <TableRow>
                <TableCell
                  scope="col"
                  className="px-1 py-1"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  ID
                </TableCell>
                <TableCell
                  scope="col"
                  className="px-1 py-1"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  Ngày thêm
                </TableCell>
                <TableCell
                  scope="col"
                  className="px-1 py-1"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  Thời gian bật
                </TableCell>
                <TableCell
                  scope="col"
                  className="px-1 py-1"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  Thời gian tắt
                </TableCell>
                <TableCell
                  scope="col"
                  className="px-1 py-1"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  Chỉnh sửa
                </TableCell>              
              </TableRow>
            </TableHead>
            <TableBody>
              {events.map(event => (
                <TableRow key={event.idevents}>
                  <TableCell
                    scope="row"
                    className="px-1 py-1 font-medium text-gray-900 whitespace-nowrap"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {event.idevents}
                  </TableCell>
                  <TableCell
                    scope="row"
                    className="px-1 py-1 font-medium text-gray-900 whitespace-nowrap"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {event.dayadd}
                  </TableCell>
                  <TableCell
                    scope="row"
                    className="px-1 py-1 font-medium text-gray-900 whitespace-nowrap"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {event.dayon}
                  </TableCell> 
                  <TableCell
                    scope="row"
                    className="px-1 py-1 font-medium text-gray-900 whitespace-nowrap"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {event.dayoff}
                  </TableCell>
                  <TableCell
                    scope="row"
                    className="px-1 py-1 font-medium text-gray-900 whitespace-nowrap"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    <button>
                      <NavLink
                        to={`/eventsdevice/${event.idevents}/edit`}
                        onClick={() => {}}
                      >
                        <PencilSquareIcon className="relative flex items-center justify-center w-5 h-5 gap-2 rounded-lg" />
                      </NavLink>
                    </button>
                    <button>
                      <NavLink
                        to={``}
                        onClick={() => {}}
                      >
                        <TrashIcon className="relative flex items-center justify-center w-5 h-5 gap-2 rounded-lg" />
                      </NavLink>
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>     
      </div>
    );
  }
  