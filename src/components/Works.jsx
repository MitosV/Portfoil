import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { link } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
    index,
    name,
    description,
    image,
    tags,
    source_code_link,
}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{ max: 45, scale: 1, speed: 450 }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
            >
                <div className="relative w-full h-[180px]">
                    <img
                        src={image}
                        alt={name}
                        className="w-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                        <div
                            onClick={() =>
                                window.open(source_code_link, "_blank")
                            }
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <img
                                src={link}
                                alt="source"
                                className="w-1/2 h-1/2 object-contain"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                    <p className="mt-2 text-secondary text-[14px]">
                        {description}
                    </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <p
                            key={tag.name}
                            className={`text-[14px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};

const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Mi trabajo</p>
                <h2 className={styles.sectionHeadText}>Proyectos.</h2>
            </motion.div>
            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-3 text-secondary leading-[30px]"
                >
                    He trabajado ya en varios Proyectos, en los cuales he
                    aprendido varias cosas, estos son algunos de ellos.
                </motion.p>
            </div>
            <div className="mt-20 flex flex-wrap justify-center gap-7">
                {projects.map((projects, index) => (
                    <ProjectCard
                        key={`project-card-${index}`}
                        index={index}
                        {...projects}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, "works");
