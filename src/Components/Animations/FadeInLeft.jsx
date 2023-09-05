import { motion } from "framer-motion";

function FadeInLeft({children}){
    return(
        <motion.div
        initial={{ x: -500, opacity: 1 }}
        whileInView={{ x: 0, opacity: 1}}
        transition={{ duration: 1.5 }}
        >
            {children}
        </motion.div>
    )
}

export default FadeInLeft