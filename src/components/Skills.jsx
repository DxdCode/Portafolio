import { motion } from "framer-motion";
import { GitIcon, TailwindIcon, NodejsIcon, MongoIcon, PostgresIcon, PostmanIcon } from "../components/Icons";

export default function SkillsIcons() {
  return (
    <section className="mt-20 flex flex-wrap justify-center gap-6">
      {/* Frontend */}
      <motion.div whileHover={{ scale: 1.1 }} className="w-12 h-12">
        <TailwindIcon />
      </motion.div>

      {/* Backend */}
      <motion.div whileHover={{ scale: 1.1 }} className="w-12 h-12">
        <NodejsIcon />
      </motion.div>

      {/* Bases de datos */}
      <motion.div whileHover={{ scale: 1.1 }} className="w-12 h-12">
        <MongoIcon />
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} className="w-12 h-12">
        <PostgresIcon />
      </motion.div>

      {/* Otros */}
      <motion.div whileHover={{ scale: 1.1 }} className="w-12 h-12">
        <GitIcon />
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} className="w-12 h-12">
        <PostmanIcon />
      </motion.div>
    </section>
  );
}
