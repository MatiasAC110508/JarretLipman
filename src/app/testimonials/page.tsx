"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    author: "Joe Dixon",
    role: "Joe Dixon Studio",
    quote:
      "Jarrett Lipman is an exemplary musician, educator, and communicator. His work as a director, clinician, and brass instructor are a model of excellence. Jarrett is an inspiring, supportive mentor for a new generation of superb, talented educators.",
  },
  {
    author: "Jordan English",
    role: "Director of Bands, Carter Riverside High School, Ft. Worth, TX",
    quote:
      "Jarrett Lipman is held in the highest regard as a music educator, mentor, and human being. There are few people out there as genuine as he is. Jarrett has been an anchor for me as a music teacher. All that I'm doing for my current students, I learned from him. Jarrett looks further than just music when it comes to education. He teaches all of us to work hard, be team players, and to strive to the highest level that we can push ourselves to contribute to society!",
  },
  {
    author: "Aldo Morales",
    role: "Director of Bands, Del Rio High School, Del Rio, TX",
    quote:
      "Jarrett Lipman is a fantastic motivator and one of the finest educators I have ever met. His impact on our program has been monumental! He started working with us in the Fall of 2015 which resulted in us receiving straight 1st-division ratings at the UIL Marching Contest for the first time in 10 years. By the Fall of 2016, our band advanced to the UIL Area Finals for the first time in school history!",
  },
  {
    author: "Bethany Smith",
    role: "Asst. Director of Bands, Claudia Taylor Johnson High School, San Antonio, TX",
    quote:
      "Over the last twelve years, I have come to know Jarrett Lipman as a band director, mentor, and friend. I have never met someone with such a strong charisma and passion for excellence as him — as seen in his success with building the CTJ high school band program in its first 15 years, his state and national recognitions in music education, and his continuous perseverance in finding ways to serve his community. I owe many of my experiences and professional achievements to his constant example of grit and determination, his leadership, and his guidance.",
  },
  {
    author: "Samantha DiMatteo",
    role: "Asst. Director of Bands, Seguin High School, Seguin, TX",
    quote:
      "For almost ten years now Jarrett Lipman has been the biggest mentor for me as a growing educator. He has always been someone that is both honest and helpful with his feedback on my teaching in a positive way. While under Jarrett's guidance, he has found solutions to help me be successful in my environment, as well as find my strengths to help make my teaching style shine. Every sectional, rehearsal, and clinic I've watched him teach at throughout these last ten years has been only the most top-tier professional development for me.",
  },
  {
    author: "Ian Young",
    role: "Director of Bands, Weiss High School, Pflugerville, TX",
    quote:
      "Since the start of this school year, Jarrett has been coming out to help our program and his ability to come in and provide immediate feedback for our students and staff is incredible. He has become more than just a clinician for my program, but a true mentor to me as I work toward building my band program. Jarrett truly cares about the success of my students and program as we continue to grow.",
  },
  {
    author: "Matt Wood",
    role: "Asst. Director of Bands, Rouse High School, Leander, TX",
    quote:
      "Jarrett is a dynamic servant leader who has an uncompromising commitment to fostering success in students and educators. He has served as a constant means of support for me in my beginning years as an educator. He will bring positivity and a fresh outlook to your students and staff alike!",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="py-24 bg-brand-50 min-h-screen relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full opacity-50 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-100/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-200/50 text-brand-800 text-sm font-medium tracking-wide mb-6">
            Testimonials
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-brand-950 mb-6 tracking-tight">
            What Directors Are Saying
          </h1>
          <div className="w-24 h-1 bg-accent-400 mx-auto rounded-full" />
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="break-inside-avoid mb-8 inline-block w-full bg-white rounded-3xl p-8 shadow-xl shadow-brand-900/5 border border-brand-100 relative group"
            >
              <div className="mb-6 w-12 h-12 bg-brand-100 text-brand-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                <Quote className="w-6 h-6 fill-current" />
              </div>
              <p className="text-brand-800/90 leading-relaxed text-lg mb-8">
                "{t.quote}"
              </p>
              <div className="pt-6 border-t border-brand-50 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-display font-bold shrink-0">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-display font-bold text-brand-950 leading-tight mb-1">
                    {t.author}
                  </h4>
                  <p className="text-sm text-brand-600 leading-snug">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
