import styles from "./styles.module.css";
import footballPlayerImg from "./assets/images/footballer.png";
import basketBallPlayerImg from "./assets/images/basketball.png";
import ContextBox from "./components/ContextBox/ContextBox";
import sample_content from "./sample_content";
import { useState } from "react";

function App() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [activeSlide_2, setActiveSlide_2] = useState(0);

    const handleDotClick = (index) => {
        setActiveSlide(index);
    };
    const handleDotClick_2 = (index) => {
        setActiveSlide_2(index);
    };

    return (
        <div className={styles.body}>
            <div className={`bg-white ${styles.gridMain}`}>
                <div className={styles.leftFootBallGrid}>
                    <div className={styles.responsivePicture}>
                        <img
                            src={footballPlayerImg}
                            alt="Image"
                            className="max-h-[281px] laptop:max-h-none mobile:max-h-none z-50"
                        />
                    </div>
                    <div className="relative">
                        <div className="absolute top-[-15px] w-full bg-gray_custom laptop:hidden mobile:hidden">
                            <div className="h-full p-5 min-h-[230px] w-full">
                                <ContextBox
                                    id={sample_content[activeSlide].id}
                                    title={sample_content[activeSlide].title}
                                    context={
                                        sample_content[activeSlide].content
                                    }
                                    border_purple={true}
                                    text_color_white={false}
                                />
                                <di className="flex justify-center w-full">
                                    <div className="absolute bottom-2 bg-gray_custom">
                                        {sample_content
                                            .slice(0, 3)
                                            .map((data, index) => (
                                                <button
                                                    key={data.id}
                                                    className={`w-[4vw] h-[4vw] rounded-[50%] my-0 mx-[5px] cursor-pointer bg-[#D8D8D8] ${
                                                        index === activeSlide
                                                            ? "bg-[#5C3CAF]"
                                                            : ""
                                                    }`}
                                                    onClick={() =>
                                                        handleDotClick(index)
                                                    }
                                                ></button>
                                            ))}
                                    </div>
                                </di>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.rightFootBallGrid}>
                    <div className={styles.titleTextWrapper}>
                        <div className={styles.titleText}>ATHLETES</div>
                    </div>
                </div>
            </div>
            <div
                className={`bg-white ${styles.responsiveGroup} ${styles.isHidden}`}
            >
                <div className={styles.leftSide} />
                <div className={styles.rightSide}>
                    <ContextBox
                        id={sample_content[0].id}
                        title={sample_content[0].title}
                        context={sample_content[0].content}
                        border_purple={true}
                        text_color_white={false}
                    />
                </div>
            </div>
            <div
                className={`bg-gray_custom ${styles.responsiveGroup} ${styles.isHidden}`}
            >
                <div className={styles.leftSide} />
                <div className={styles.rightSide}>
                    <ContextBox
                        id={sample_content[1].id}
                        title={sample_content[1].title}
                        context={sample_content[1].content}
                        border_purple={true}
                        text_color_white={false}
                    />
                </div>
            </div>
            <div
                className={`bg-purple_custom ${styles.responsiveGroup} ${styles.isHidden}`}
            >
                <div className={styles.leftSide} />
                <div className={styles.rightSide}>
                    <ContextBox
                        id={sample_content[2].id}
                        title={sample_content[2].title}
                        context={sample_content[2].content}
                        border_purple={false}
                        text_color_white={true}
                    />
                </div>
            </div>

            <div
                className={`bg-white ${styles.gridMain} mt-[200px] laptop:mt-0 mobile:mt-0 laptop:pt-5 mobile:pt-5`}
            >
                <div className={styles.leftBasketBallGrid}>
                    <div className={styles.titleTextWrapper}>
                        <div className={styles.titleText}>PLAYERS</div>
                    </div>
                </div>
                <div className={styles.rightBasketBallGrid}>
                    <div className={styles.responsivePicture}>
                        <img
                            src={basketBallPlayerImg}
                            className="z-50"
                            alt="Image"
                        />
                    </div>
                    <div className="relative">
                        <div className="absolute top-[-15px] w-full bg-gray_custom laptop:hidden mobile:hidden">
                            <div className="h-full p-5 min-h-[230px] w-full">
                                <ContextBox
                                    id={
                                        sample_content.slice(3)[activeSlide_2]
                                            .id
                                    }
                                    title={
                                        sample_content.slice(3)[activeSlide_2]
                                            .title
                                    }
                                    context={
                                        sample_content.slice(3)[activeSlide_2]
                                            .content
                                    }
                                    border_purple={true}
                                    text_color_white={false}
                                />
                                <di className="flex justify-center w-full">
                                    <div className="absolute bottom-2 bg-gray_custom">
                                        {sample_content
                                            .slice(3)
                                            .map((data, index) => (
                                                <button
                                                    key={data.id}
                                                    className={`w-[4vw] h-[4vw] rounded-[50%] my-0 mx-[5px] cursor-pointer bg-[#D8D8D8] ${
                                                        index === activeSlide_2
                                                            ? "bg-[#5C3CAF]"
                                                            : ""
                                                    }`}
                                                    onClick={() =>
                                                        handleDotClick_2(index)
                                                    }
                                                ></button>
                                            ))}
                                    </div>
                                </di>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`bg-white ${styles.responsiveGroup} ${styles.isHidden}`}
            >
                <div className={styles.rightSide}>
                    <ContextBox
                        id={sample_content[3].id}
                        title={sample_content[3].title}
                        context={sample_content[3].content}
                        border_purple={true}
                        text_color_white={false}
                    />
                </div>
                <div className={styles.leftSide} />
            </div>
            <div
                className={`bg-gray_custom ${styles.responsiveGroup} ${styles.isHidden}`}
            >
                <div className={styles.rightSide}>
                    <ContextBox
                        id={sample_content[4].id}
                        title={sample_content[4].title}
                        context={sample_content[4].content}
                        border_purple={true}
                        text_color_white={false}
                    />
                </div>
                <div className={styles.leftSide} />
            </div>
            <div
                className={`bg-navy_custom ${styles.responsiveGroup} ${styles.isHidden}`}
            >
                <div className={styles.rightSide}>
                    <ContextBox
                        id={sample_content[5].id}
                        title={sample_content[5].title}
                        context={sample_content[5].content}
                        border_purple={false}
                        text_color_white={true}
                    />
                </div>
                <div className={styles.leftSide} />
            </div>
        </div>
    );
}

export default App;
