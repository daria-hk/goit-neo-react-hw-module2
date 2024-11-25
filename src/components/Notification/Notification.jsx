import css from "./Notification.module.css";

const Notification = ({ notif }) => {
  return <p className={css.notification}>{notif}</p>;
};

export default Notification;
