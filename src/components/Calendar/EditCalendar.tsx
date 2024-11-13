import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { TextareaAutosize } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
interface DeviceEditEvent {
  idevent: number;
  timeOn: string;
  timeOff: string;
  repeatDay: string;
  devicename: string;
  note: string;
  // Add other properties as needed
}

interface DeviceCardProps {
  event: DeviceEditEvent;
}
export default function EditCalendar() {
  const { id } = useParams(); // Get the "id" from the URL

  const [name, setName] = useState(id);
  const [timeOn, setTimeOn] = useState("");
  const [timeOff, setTimeOff] = useState("");
  const [repeatDay, setRepeatDay] = useState("");
  const [note, setNote] = useState("");
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [status, setStatus] = useState("OFF");
  const handleButtonClick = () => {
    setStatus((prevStatus) => (prevStatus === "Yes" ? "No" : "Yes"));
  };
  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //     console.log()
  // };
  return (
    <div className="flex gap-2 mt-10 border">
      <div className="bg-white rounded-lg shadow-lg w-[30%] flex justify-center items-center">
        <div>
          <img
            src="/src/assets/waterpump.png"
            className="w-[175px] h-[175px] rounded-full"
            alt="avatar"
          />
          <h1 className="text-center mt-10 text-xl">Pump {name}</h1>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg mt-5 border w-[70%] ">
        <div className="grid md:grid-cols-1 text-sm self-stretch px-5 py-5 ">
          {/* Title */}
          <div className="flex items-center text-center space-x-2 font-semibold text-green-500 justify-center">
            <span className="tracking-wide text-center text-emerald-600 text-[30px] ">
              Edit The Schedule For Device
            </span>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            {/* Thời gian bật */}
            <div className="grid grid-cols-1">
              <div className="px-3 py-3 font-semibold text-black capitalize leading-7 tracking-wide ">
                Thời gian bật
              </div>
              <input
                className="px-3 py-3 self-stretch bg-white bg-opacity-0 rounded-lg border   "
                value={timeOn}
                placeholder="Input Time Here"
                type="time"
                onChange={(event) => setTimeOn(event.target.value)}
                id="name"
              />
            </div>
            {/* Thời gian tắt: */}
            <div className="grid grid-cols-1">
              <div className="px-3 py-3 font-semibold text-black capitalize leading-7 tracking-wide">
                Thời gian tắt:
              </div>
              <input
                className="px-3 py-3 self-stretch  bg-white bg-opacity-0 rounded-lg border   "
                value={timeOff}
                type="time"
                placeholder="Input Time Here"
                onChange={(event) => setTimeOff(event.target.value)}
                id="phone"
              />
            </div>
            {/* Nhắc nhở:  */}
            <div className="grid grid-cols-1">
              <div className="px-3 py-3 font-semibold text-black capitalize leading-7 tracking-wide flex justify-between items-center">
                Nhắc nhở:
                <button
                  onClick={handleButtonClick}
                  style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    cursor: "pointer",
                    backgroundColor: status === "Yes" ? "#00a859" : "#f5f5f5", // Change colors as needed
                    borderRadius: "10px",
                    transition: "background-color 0.3s ease-in-out",
                  }}
                  className="px-3 py-3 self-stretch bg-white bg-opacity-0 rounded-lg border"
                >
                  {status}
                </button>
              </div>
            </div>

            {/* Password */}
            <div className="grid grid-cols-1 borded mt-1 b-1">
              <div className="px-3 py-3 font-semibold text-black capitalize leading-7 tracking-wide">
                Lặp lại
              </div>
              <input
                className="px-3 py-3 self-stretch  bg-white bg-opacity-0 rounded-lg border   "
                value={repeatDay}
                placeholder="Input password account here..."
                type="text"
                onChange={(event) => setRepeatDay(event.target.value)}
                id="repeatDay"
              />
            </div>
            {/*  Ghi chú */}

            <div className="grid grid-cols-1">
              <div className="px-3 py-3 font-semibold text-black capitalize leading-7 tracking-wide">
                Ghi chú
              </div>
              <TextareaAutosize
                className="px-3 py-3 self-stretch  bg-white bg-opacity-0 rounded-lg border   "
                value={note}
                placeholder="Input email account here..."
                onChange={(event) => setNote(event.target.value)}
                id="note"
              />
            </div>
            {/*  */}
            <div className="grid grid-cols-1">
              {/* Submit button */}
              <div className="flex justify-center mt-5 text-center px-3 py-3">
                <button
                  type="button"
                  className="text-white rounded-xl bg-red-600 py-2 px-4 mr-5 hover:bg-red-800 font-bold"
                >
                  <NavLink to={`/admin/users`}>Cancel</NavLink>
                </button>
                <button
                  onClick={handleClickOpen}
                  className="bg-emerald-600 rounded-xl hover:bg-emerald-700 text-white font-bold py-2 px-4 "
                >
                  Save
                </button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <div className="text-center px-6">
                    <DialogContent className="font-semibold text-lg">
                      <p className="mb-3">
                        {" "}
                        Are you sure you creact the schedule for device?
                      </p>
                      <div className="border rounded-lg p-4 text-justify">
                        <h3 className="text-e-justify">Name Device: {name}</h3>
                        <h3 className="text-e-justify">Time Off: {timeOff}</h3>
                        <h3 className="text-e-justify">Time On: {timeOn}</h3>
                        <h3 className="text-e-justify">Note :{note}</h3>
                      </div>
                    </DialogContent>
                    <DialogContentText
                      id="alert-dialog-description"
                      className="bg-orange-50"
                    >
                      <div className="flex border rounded-lg p-4 text-justify">
                        <ExclamationTriangleIcon className="w-6 h-6 text-red-800" />
                        <p className="flex text-red-800 font-semibold px-2">
                          WARNING: You definitely want to continue
                        </p>
                      </div>
                    </DialogContentText>
                  </div>
                  <DialogActions style={{ justifyContent: "center" }}>
                    <button
                      className="rounded-lg bg-red-700 px-3 py-3 mx-1 my-1 text-white hover:bg-red-900"
                      onClick={handleClose}
                    >
                      Cancel
                    </button>
                    <button
                      className="rounded-lg bg-[#059669] hover:bg-green-900  px-3 py-3 mx-1 my-1 text-white"
                      // onClick={handleSubmit}
                      type="submit"
                    >
                      Agree
                    </button>
                  </DialogActions>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
