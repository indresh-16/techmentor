
import { ArrowUpRight, BriefcaseBusiness, MapPin } from 'lucide-react';
import Badge from '../../../components/ui/Badge';

function JobCard({ job }) {
  return (
    <article className="surface-card p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-violet-400/10 text-violet-300">
          <BriefcaseBusiness size={22} />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-white">{job.title}</h3>
          <p className="mt-1 text-sm text-slate-400">{job.company}</p>
        </div>

        <Badge color={job.type === 'Internship' ? 'green' : 'cyan'}>
          {job.type}
        </Badge>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
        <span className="flex items-center gap-1.5">
          <MapPin size={14} /> {job.location}
        </span>
        <span>{job.mode}</span>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/[0.07] pt-4">
        <span className="text-sm font-medium text-slate-300">{job.pay}</span>
        <a
          href={job.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-300 hover:text-violet-200"
        >
          View opportunity <ArrowUpRight size={15} />
        </a>
      </div>
    </article>
  );
}

export default JobCard;
