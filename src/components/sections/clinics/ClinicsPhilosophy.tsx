"use client";

import { motion } from "framer-motion";

export function ClinicsPhilosophy() {
  return (
    <section className="py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto prose prose-lg prose-brand prose-p:text-brand-800/80 prose-headings:font-display prose-headings:text-brand-950"
        >
          <p className="text-balance md:text-wrap">
            Regular feedback is vital for continuous improvement. Continuous
            improvement leads to success and growth and keeps a teacher
            invigorated. Instructional coaching is a way to receive that
            feedback and keep moving forward. It is so important, and we must
            seek it out as it's not always easily accessible.
          </p>
          <p className="text-balance md:text-wrap">
            As a student teacher, we receive feedback from our
            cooperating/mentor teachers and our supervising teachers. After a
            class, we debrief and review the positives and negatives. In a core
            class, usually each campus discipline has a Department Head or Dean
            who observes teachers and provides feedback. For music teachers,
            more often than not, there is a single Fine Arts Director for an
            entire district, and this person only sometimes has the time to
            visit campuses and provide feedback regularly. And, when they do,
            it's often "triage" based, leaving those "proficient" and
            "competent" teachers in situations where they may or may not receive
            essential guidance.
          </p>
          <p className="text-balance md:text-wrap">
            At CTJ and now at Vandegrift, I have had multiple "instructional
            coaches" in my career, and this was different from a "clinician whom
            I might bring in once or twice to provide an experience for our
            students and learn by watching them conduct the band."
          </p>
          <p className="text-balance md:text-wrap">
            Each of these coaches watches, or has watched, me teach, and
            provides live feedback for the students and me. They debrief after
            classes, and they regularly discuss how I can improve my job. While
            they give a lot of "band" and "pedagogy" information, they provide
            equal details on procedures, goals, and tools to be more effective
            in rehearsals. They also share information about selecting
            literature, managing culture, and discipline. They are the true
            definition of "Continuing Professional Education." It goes beyond a
            clinic.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
