import React, { useMemo } from "react";
import styles from "./styles.module.css";

const ContextBox = ({
    id,
    title,
    context,
    border_purple,
    text_color_white = false,
}) => {
    const borderColor = useMemo(() => {
        return `w-[17px] h-[4px]  laptop:w-[2.2vw] mobile:h-[0.5vw] after:content-[' '] ${
            border_purple ? "bg-purple_custom" : "bg-white"
        } rounded-md `;
    }, [border_purple]);

    const contentColor = useMemo(() => {
        return text_color_white ? "text-white" : "text-black";
    }, [text_color_white]);

    return (
        <div className={styles.context_box_wrapper}>
            <div className={styles.titleWrapper}>
                <div className={`${styles.id} ${contentColor}`}>
                    {id}
                    <div className={borderColor} />
                </div>
                <div className={styles.title}>{title}</div>
            </div>
            <div className={`${styles.content} ${contentColor}`}>{context}</div>
        </div>
    );
};

export default ContextBox;
