import React from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { notificationSlice } from "../../store/reducers/NotificationSlice";
import "./style.scss";

const Notification = React.memo(() => {
  const dispatch = useDispatch();
  const { alarm, message } = useSelector((state) => state.notificationReducer);

  if (alarm) {
    setTimeout(() => {
      dispatch(notificationSlice.actions.stop());
    }, 3000);
  }

  const a = ["warning", "success"];
  let type = a[1];
  const width = window.innerWidth;
  const height = window.innerHeight;
  let mobil = false;
  if (width <= 450) {
    mobil = true;
  }

  return (
    <div
      style={{ top: height - 75 }}
      className={classNames("notification", {
        warning: type === "warning",
        success: type === "success",
        mobil: mobil,
        active: alarm,
      })}
    >
      <div className="notification__exit">
        <div className="exit"></div>
      </div>
      <div className="notification__body"> {message} </div>
    </div>
  );
});

export default Notification;
