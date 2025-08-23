import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { container, fadeUp, scaleIn } from "../utils/animations";
import img from "../assets/my-Img-.png"; // Adjust the import path as necessary
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Rocket,
  Cpu,
  MousePointer2,
  Download,
  Sparkles,
  Star,
} from "lucide-react";
import GlowBlob from "./GlowBlob";
import NeonTag from "./NeonTag";
import ProgressBar from "./ProgressBar";
import Nav from "./Nav";
import Section from "./Section";
import BadgeCloud from "./BadgeCloud";
import ProjectCard from "./ProjectCard";
import { profile, skills, projects, experience, testimonials } from "../data/Profile";
import emailjs from "@emailjs/browser";


export default function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "./public/manish.pdf"; // Ensure this path is correct
  link.download = "manish.pdf";
  link.click();
};

 const handleSubmit = (e) => {
  e.preventDefault();
  emailjs.sendForm(
    "service_n2flw9g",    // EmailJS Service ID
    "template_6yc7ggg",   // EmailJS Template ID
    e.target,             // form element
    "RcgDUCoCl1efpRnqV"        // EmailJS User ID
  ).then(
    (result) => {
      console.log(result.text);
      alert("Message sent successfully!");
      e.target.reset();    // form reset after send
    },
    (error) => {
      console.log(error.text);
      alert("Failed to send message. Try again!");
    }
  );
};

  return (
    <div className="relative min-h-screen scroll-smooth bg-[#05060a] text-white antialiased">
      {/* global gradient + neon blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.12),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.12),transparent_40%)]" />
        <GlowBlob className="top-[-10%] left-[5%] h-[420px] w-[420px] bg-cyan-500/30" />
        <GlowBlob className="bottom-[-10%] right-[0%] h-[520px] w-[520px] bg-fuchsia-500/20" />
      </div>

      <ProgressBar />
      <Nav />

      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 pt-28 pb-20 sm:pt-36">
          <motion.div
            initial="hidden"
            animate="show"
            variants={container}
            className="grid items-center gap-10 md:grid-cols-2"
          >
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                <Sparkles className="size-4" /> Available for freelance & full-time
              </div>
              <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-300 drop-shadow">{profile.name}</span>
                <br />
                <span className="text-white/80 text-xl sm:text-2xl font-medium">{profile.role}</span>
              </h1>
              <p className="mt-4 text-white/70 max-w-xl">
                {profile.blurb}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a 
  onClick={handleDownload}
  className="group inline-flex items-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm hover:bg-cyan-400/20 transition shadow-[0_0_30px_rgba(34,211,238,0.25)]"
>
  <Download className="size-4" /> Download CV
  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
</a>

                <a href={profile.socials.github} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm hover:bg-white/15 transition">
                  <Github className="size-4" /> GitHub
                </a>
                <a href={profile.socials.linkedin} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm hover:bg-white/15 transition">
                  <Linkedin className="size-4" /> LinkedIn
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/70">
                <span className="inline-flex items-center gap-2"><MapPin className="size-4" /> {profile.location}</span>
                <span className="inline-flex items-center gap-2"><Mail className="size-4" /> {profile.email}</span>
                <span className="inline-flex items-center gap-2"><Phone className="size-4" /> {profile.phone}</span>
              </div>
            </motion.div>


              {/*Image container*/}
            <motion.div variants={scaleIn} className="relative order-first md:order-none">
              <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-3xl  p-1 shadow-[0_0_60px_rgba(168,85,247,0.16)]">
                    <img src={img} alt="image" />            
                </div>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* ABOUT */}
      <Section id="about" title="About" icon={Cpu} subtitle="A quick intro to what I love building.">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 md:grid-cols-2"
        >
          <motion.p variants={fadeUp} className="text-white/80 leading-relaxed">
           This portfolio is a reflection of my journey — from building strong technical skills to completing projects that challenge and inspire me.
Each work here represents dedication, problem-solving, and the growth I’ve achieved through hands-on experience.
Now, as a graduate, I’m ready to bring my skills, creativity, and determination into the professional world and make an impact.
          </motion.p>
          <motion.div variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-[0_0_60px_rgba(56,189,248,0.12)]">
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2"><Star className="size-4" />Turning curiosity into code</li>
              <li className="flex items-center gap-2"><Star className="size-4" /> Performance‑first mindset</li>
              <li className="flex items-center gap-2"><Star className="size-4" /> Strong with React + APIs</li>
            </ul>
          </motion.div>
        </motion.div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" title="Skills" icon={MousePointer2} subtitle="Tech I use daily & love.">
        <BadgeCloud items={skills} />
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Projects" icon={Rocket} subtitle="A few things I’ve built recently.">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {projects.map((p, i) => (
            <ProjectCard key={i} p={p} />
          ))}
        </motion.div>
      </Section>

     

     

      {/*Contact*/}
   <Section id="contact" title="Contact" icon={Mail} subtitle="Let’s build something great together.">
  <motion.form
    variants={container}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    onSubmit={handleSubmit}   // EmailJS submit
    className="mx-auto max-w-3xl space-y-4 rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-[0_0_60px_rgba(168,85,247,0.12)]"
  >
    <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-2">
      <input
        name="name"  // must match EmailJS template
        placeholder="Your name"
        className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none placeholder:text-white/50 focus:ring-2 focus:ring-cyan-400/40"
      />
      <input
        name="email" // must match EmailJS template
        placeholder="Email"
        className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none placeholder:text-white/50 focus:ring-2 focus:ring-cyan-400/40"
      />
    </motion.div>
    <motion.textarea
      name="message"  // must match EmailJS template
      variants={fadeUp}
      placeholder="Message"
      rows={5}
      className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none placeholder:text-white/50 focus:ring-2 focus:ring-fuchsia-400/40"
    />
    <motion.button
      variants={fadeUp}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 text-sm font-medium hover:bg-cyan-400/20 transition shadow-[0_0_35px_rgba(34,211,238,0.25)]"
    >
      <Mail className="size-4" /> Send Message
    </motion.button>
  </motion.form>
</Section>


      {/* FOOTER */}
      <footer className="relative py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white/60">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
            <div className="flex items-center gap-3">
              <a className="rounded-xl border border-white/10 bg-white/10 px-3 py-1.5 text-sm hover:bg-white/15 transition inline-flex items-center gap-2" href={profile.socials.github}><Github className="size-4" /> GitHub</a>
              <a className="rounded-xl border border-white/10 bg-white/10 px-3 py-1.5 text-sm hover:bg-white/15 transition inline-flex items-center gap-2" href={profile.socials.linkedin}><Linkedin className="size-4" /> LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
