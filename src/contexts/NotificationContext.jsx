import { createContext, useState } from "react";

const Notification = ({ message, severity }) => {
    const styles = {
        success: {
            background: "rgba(94, 216, 53, 0.8)",
            border: "rgba(8, 18, 17, 0.8)",
        },
        danger: {
            background: "rgba(255, 72, 52, 0.8)",
            border: "rgba(85, 9, 12, 0.8)",
        },
        warning: {
            background: "rgba(255, 144, 5, 0.8)",
            border: "rgba(255, 144, 1, 0.8)",
        },
        default: {
            background: "rgba(95, 187, 255, 0.8)",
            border: "rgba(11, 8, 53, 0.8)",
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

