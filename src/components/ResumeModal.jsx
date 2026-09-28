import React from 'react';
import {
  personalInfo,
  skillsData,
  experienceData,
  projectsData,
  educationData,
  certificationsData,
} from '../data/portfolioData';
import { X, Printer, Mail, Phone, MapPin, Globe, ExternalLink, Award, GraduationCap } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div
        className="relative w-full max-w-4xl bg-[#0d0f18] text-slate-200 border border-white/15 rounded-2xl shadow-2xl shadow-black/80 my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls bar */}
        <div className="p-4 bg-[#090b12] border-b border-white/10 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-indigo-400 font-semibold uppercase tracking-wider">
              Curriculum Vitae Preview • {personalInfo.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-medium text-white transition-colors shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Container */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto print:max-h-none print:overflow-visible space-y-7 bg-[#090a0f] text-slate-200">
          {/* Header */}
          <div className="border-b border-white/15 pb-5">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              {personalInfo.name}
            </h1>
            <p className="text-indigo-400 font-medium text-sm sm:text-base mt-1">
              {personalInfo.role}
            </p>

            {/* Contact details row */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-slate-300 mt-3">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                {personalInfo.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-indigo-400" />
                {personalInfo.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                {personalInfo.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-indigo-400" />
                {personalInfo.socials.linkedin}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Skills Breakdown */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold mb-3">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <span className="text-indigo-300 font-mono block mb-1 font-semibold">Programming Languages:</span>
                <span className="text-slate-200">Python, SQL, Java, C++</span>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <span className="text-indigo-300 font-mono block mb-1 font-semibold">AI/ML Frameworks:</span>
                <span className="text-slate-200">NumPy, Pandas, Scikit-learn, TensorFlow</span>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <span className="text-indigo-300 font-mono block mb-1 font-semibold">Web/Deployment:</span>
                <span className="text-slate-200">HTML, CSS, JavaScript, Flask, REST APIs</span>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <span className="text-indigo-300 font-mono block mb-1 font-semibold">Machine Learning:</span>
                <span className="text-slate-200">Deep Learning, NLP, Model Development</span>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <span className="text-indigo-300 font-mono block mb-1 font-semibold">Databases:</span>
                <span className="text-slate-200">MySQL, PostgreSQL, MongoDB, Firebase, NoSQL</span>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <span className="text-indigo-300 font-mono block mb-1 font-semibold">Data & Visualization:</span>
                <span className="text-slate-200">Power BI, Tableau, Matplotlib, Seaborn</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold mb-4">
              Internship Experience
            </h2>
            <div className="space-y-5">
              {experienceData.map((job, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                    <div>
                      <span className="font-bold text-white">{job.role}</span>
                      <span className="text-indigo-300 ml-1.5 font-medium">@ {job.company}</span>
                    </div>
                    <span className="text-xs font-mono text-slate-400">{job.period}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{job.description}</p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                    {job.achievements.map((item, aIdx) => (
                      <li key={aIdx} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold mb-3 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h2>
            <div className="space-y-3 text-xs">
              {educationData.map((edu, eIdx) => (
                <div key={eIdx} className="p-3 rounded-lg bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="font-bold text-white block">{edu.degree}</span>
                    <span className="text-slate-400">{edu.institution}, {edu.location}</span>
                  </div>
                  <div className="text-left sm:text-right font-mono text-slate-300">
                    <span className="text-emerald-400 font-semibold block">{edu.score}</span>
                    <span className="text-slate-500 text-[11px]">{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold mb-3">
              Key Academic & Engineering Projects
            </h2>
            <div className="space-y-3">
              {projectsData.map((proj, pIdx) => (
                <div key={pIdx} className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs">
                  <div className="flex items-center justify-between font-bold text-white mb-1">
                    <span>{proj.title}</span>
                    <span className="text-emerald-400 font-mono text-[11px]">{proj.metric}</span>
                  </div>
                  <p className="text-slate-400 mb-1.5 leading-relaxed">{proj.description}</p>
                  <div className="text-[11px] font-mono text-indigo-300">
                    Tech: {proj.tech.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="pt-2 border-t border-white/15">
            <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold mb-3 flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>Certifications</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {certificationsData.map((cert, cIdx) => (
                <div key={cIdx} className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-slate-200 font-medium">{cert.title}</span>
                  <span className="text-[11px] font-mono text-indigo-300 ml-2 shrink-0">{cert.issuer}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
