import { createContext, useState } from "react";

const Notification = ({ message, severity }) => {
    const backgroundGround = {
        success: "#5ED853",
        danger: "tomato",
        warning: "darkOrange",
        default: "#5FBBFF",
    };

    const notificationStyles = {
        position: "absolute",
        top: 100,
        right: 24,
        fontSize: "16px",
        fontWeight: "bold",
        backgroundColor: backgroundGround[severity] || backgroundGround.default,
        color: "white",
        border: "2px solid black",
        borderRadius: "4px",
        padding: "14px",
    };

    if (message === "") return;
    return <div style={notificationStyles}>{message}</div>;
};

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [message, setMessage] = useState("");
    const [severity, setSeverity] = useState("success");

    const setNotification = (sev, msg) => {
        setMessage(msg);
        setSeverity(sev);
        setTimeout(() => {
        setMessage("");
        }, 3000);
    };

    return (
        <NotificationContext.Provider value={{ setNotification }}>
            <Notification message={message} severity={severity} />
            {children}
        </NotificationContext.Provider>
    );
};

