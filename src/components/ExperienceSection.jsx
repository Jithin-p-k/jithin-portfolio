import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Work Experience & Milestones
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mt-3 text-sm sm:text-base">
            Demonstrated track record of shipping performant code, scaling infrastructure, and leading engineering efforts.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-32 space-y-12">
          {experienceData.map((job, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8 group">
              {/* Timeline Node Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#090a0f] border-2 border-indigo-500 group-hover:border-cyan-400 group-hover:scale-125 transition-all shadow-md shadow-indigo-500/30" />

              {/* Date tag for large screens on the left */}
              <div className="sm:absolute sm:-left-36 sm:top-1 text-xs font-mono text-indigo-400 font-semibold mb-2 sm:mb-0 sm:text-right sm:w-28">
                {job.period}
              </div>

              {/* Experience Card */}
              <div className="glass-panel glass-panel-hover p-6 rounded-2xl border-white/10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {job.role}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <span className="text-slate-200 font-medium">{job.company}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      {job.location}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {job.description}
                </p>

                {/* Key Achievements */}
                <div className="space-y-2 mb-5">
                  {job.achievements.map((item, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                  {job.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-0.5 rounded-md bg-white/5 text-[11px] font-mono text-slate-300 border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
