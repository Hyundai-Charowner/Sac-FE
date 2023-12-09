const customModalStyles = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        width: "100%",
        height: "100vh",
        zIndex: "10",
        position: "fixed",
        top: "0",
        left: "0",
    },
    content: {
        width: "fit-content",
        height: "fit-content",
        padding: "2rem 5rem",
        zIndex: "999",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "16px",
        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
        backgroundColor: "white",
        justifyContent: "center",
        overflow: "auto",
    },
    button: {
        display: "none",
    },
};

export default customModalStyles;