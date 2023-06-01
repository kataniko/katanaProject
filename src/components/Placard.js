import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";

const Placard = () => {
    return (
        <motion.div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <motion.div
                initial={{ x: "-200%" }}
                animate={{ x: "150%" }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            >
                <Typography sx={{ fontFamily: "Jura", color: "white", width: "100vw" }} >
                    Our History
                </Typography>
            </motion.div>
        </motion.div>
    );
};

export default Placard;
