import React from 'react';
import { achievementsData, certificationsData } from '../data/portfolioData';
import { Award, CheckCircle2, Sparkles, GraduationCap, ShieldCheck } from 'lucide-react';

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>ACADEMIC & INDUSTRY RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Credentials, Awards & Milestones
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Verified industry certifications, academic distinctions, and specialized technical milestones in AI/ML and software engineering.
          </p>
        </div>

        {/* Top 4 Highlights Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {achievementsData.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between border-white/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-xs border border-amber-500/20">
                    <Sparkles className="w-4 h-4" />
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-white/5 text-amber-300 border border-white/10">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">{item.title}</h3>
                <p className="text-xs text-indigo-300 font-mono mb-2">{item.organization}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Banner */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10">
          <div className="flex items-center gap-2 mb-6">
            <ShieldCheck className="w-5 h-5 text-indigo-400" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Verified Professional Certificates
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {certificationsData.map((cert, cIdx) => (
              <div
                key={cIdx}
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all flex items-center justify-between"
              >
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white">{cert.title}</h4>
                  <span className="text-xs text-slate-400">{cert.issuer}</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0 ml-2">
                  {cert.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
