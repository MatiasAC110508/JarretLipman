"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export function AboutBiography() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Bio Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <div className="sticky top-28 rounded-2xl overflow-hidden shadow-2xl shadow-brand-900/10 border border-brand-100 p-2 bg-white">
              <div className="rounded-xl overflow-hidden relative aspect-[3/4]">
                <img
                  src="/bio_photo.jpg"
                  alt="Jarrett Lipman"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-medium text-lg leading-tight drop-shadow-md">
                    Jarrett Lipman
                  </p>
                  <p className="text-brand-200 text-sm">CEO of Bandworx</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3 prose prose-lg prose-brand max-w-none prose-headings:font-display prose-headings:text-brand-950"
          >
            <h2 className="text-3xl font-display font-bold text-brand-950 mb-6 text-balance">
              Biography
            </h2>

            <div className="space-y-6 text-brand-800/80 leading-relaxed text-lg">
              <p>
                Jarrett Lipman is the Director of Bands at Vandegrift High
                School in Austin, Texas. Mr. Lipman joined the Vandegrift
                community in the spring of 2024 and is so excited to be a part
                of such an incredible team of students, teachers, parents, and
                administrators. Mr. Lipman also works with the incredible Boston
                Crusaders Drum Corps performers, where he serves as the Brass
                Caption Manager. Jarrett's students have described him as an
                empathetic teacher who cares greatly for their welfare while
                holding them accountable to the highest standard of excellence.
              </p>
              <p>
                From 2008-2023, Mr. Lipman served the students and community at
                Claudia Taylor "Lady Bird" Johnson High School (CTJ) in San
                Antonio, Texas. During his fifteen years at CTJ, Mr. Lipman
                established a tradition of excellence on the concert stage and
                the marching field. Mr. Lipman was a part of the inaugural staff
                of CTJ in 2008 as an Assistant Band Director before his
                promotion to Head Director in 2010. Under his leadership, the
                CTJ Wind ensemble was a consistent Texas State Honor Band
                Finalist and performed at the 2019 Mid-West Clinic. On the
                field, the CTJ Marching Band was named the 2020 UIL 6A State
                Marching Champions and was a multi-time Grand National Finalist
                and BOA Regional Champion.
              </p>
              <p>
                Currently, Mr. Lipman is studying for a Ph.D. in Education
                Leadership, Planning, and Policy at The University of Texas at
                Austin. He has worked as a part-time lecturer at Texas State
                University in the Music Education program. From 2010-2016, Mr.
                Lipman was a Cadets Drum and Bugle Corps Brass Staff member.
              </p>
              <p>
                In partnership with PBSL-USA, the Docentus Group, Educational
                Travel Adventures, and TMF, Mr. Lipman's company, BandworX,
                specializes in instructional coaching for band directors and
                music teachers. He also regularly presents professional
                development sessions focusing on creating a culture of
                excellence, recruiting and retaining students, and building
                relationships. He is passionate about sharing ideas and
                investing in the growth of other directors in our profession.
              </p>
              <p>
                Born into a family of teachers and farmers, Jarrett learned the
                value of service early in his life and has dedicated himself to
                preparing the next generation of young Americans. Jarrett
                graduated from Rutgers University in 2007 and earned his
                Master's in Public Administration with a Certificate in Urban
                and Regional Planning from the University of Texas at San
                Antonio in 2022. He was a candidate for San Antonio City Council
                District 9 in 2023 and remains active in local government
                organizations in Central Texas. Outside of band and politics, he
                enjoys spending time by the water, either the river or the
                shore, and loves hiking around the Texas state and national
                parks.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="https://jarrettlipman.com/wp-content/uploads/2025/10/CV-UT-Austin-JL-9-30-25-1.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-50 hover:bg-brand-100 text-brand-900 rounded-xl font-medium transition-colors border border-brand-200"
              >
                <Download className="w-5 h-5" /> View Curriculum Vitae (PDF)
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
