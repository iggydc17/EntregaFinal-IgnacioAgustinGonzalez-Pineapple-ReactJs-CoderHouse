import { createContext, useState } from "react";

const Notification = ({ message, severity }) => {
    const styles = {
        success: {
            background: "#5ED853",
            border: "#081211",
        },
        danger: {
            background: "tomato",
            border: "#55090C",
        },
        warning: {
            background: "#FF9008",
            border: "#EC4133",
        },
        default: {
            background: "#5FBBFF",
            border: "#0B0835",
        },
    };
    const notificationStyles = {
        position: "absolute",
        top: 86,
        right: 24,
        width: "18%",
        height: "auto",
        fontSize: "16px",
        fontWeight: "bold",
        lineHeight: "1.5rem",
        textAlign: "center",
        backgroundColor: styles[severity]?.background || styles.default.background,
        color: "white",
        border: `1px solid ${styles[severity]?.border || styles.default.border}`,
        borderRadius: "4px",
        padding: "10px 14px",
        zIndex: 1000,
    };

    if (!message) return null;
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

