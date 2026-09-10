import { Upload, Drive, LinkIcon, File, Sparkle, Activity, Webhook } from '@/components/Icons2';
import { Check } from '@/components/Icons';
import type { Dictionary } from '@/i18n/dictionaries';

const ring = 'grid place-items-center rounded-xl border border-line bg-surface-2';

/* ── 1. Knowledge base: sources in, grounded answer out ───────────── */
export function KnowledgeVisual({ d, locale }: { d: Dictionary; locale: string }) {
  const ar = locale === 'ar';
  const files = ar
    ? [
        { n: 'دليل-المنتج.pdf', s: '2.4\u00a0MB', i: File },
        { n: 'الأسعار.pdf', s: '840\u00a0KB', i: File },
        { n: 'Google Drive', s: ar ? '١٢ ملف' : '12 files', i: Drive },
        { n: 'zaagl.com/faqs', s: ar ? 'رابط موقع' : 'Website URL', i: LinkIcon },
      ]
    : [
        { n: 'product-guide.pdf', s: '2.4 MB', i: File },
        { n: 'pricing.pdf', s: '840 KB', i: File },
        { n: 'Google Drive', s: '12 files', i: Drive },
        { n: 'zaagl.com/faqs', s: 'Website URL', i: LinkIcon },
      ];

  return (
    <div className="card card-sheen relative overflow-hidden p-6 shadow-card sm:p-8">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-semibold">{ar ? 'قاعدة المعرفة' : 'Knowledge base'}</p>
        <span className="inline-flex items-center gap-1.5 rounded-lg bg-[color-mix(in_srgb,var(--ok)_12%,transparent)] px-2 py-1 text-[10.5px] font-semibold text-ok">
          <Sparkle className="h-3 w-3" />
          {ar ? 'مفهرسة' : 'Indexed'}
        </span>
      </div>

      <div className="space-y-2">
        {files.map((f) => (
          <div
            key={f.n}
            className="flex items-center gap-3 rounded-xl border border-line bg-surface-2 px-3 py-2.5"
          >
            <span className={`h-9 w-9 shrink-0 ${ring} text-brand`}>
              <f.i className="h-4 w-4" />
            </span>
            <div className="min-w-0 flex-1 leading-tight">
              <p dir="auto" className="truncate text-[12.5px] font-medium text-ink-2">
                {f.n}
              </p>
              <p dir="ltr" style={{ unicodeBidi: 'isolate' }} className="text-start text-[10.5px] text-muted">{f.s}</p>
            </div>
            <Check className="h-4 w-4 shrink-0 text-ok" strokeWidth={2.4} />
          </div>
        ))}
      </div>

      {/* grounded answer */}
      <div className="mt-5 rounded-xl border border-[var(--brand-ring)] bg-brand-soft p-3.5">
        <p className="text-[12.5px] leading-relaxed text-ink-2">
          {ar
            ? 'تبدأ خططنا من 0 دولار شهرياً للمشاريع الصغيرة.'
            : 'Our plans start at $0 per month for small projects.'}
        </p>
        <p className="mt-2 flex items-center gap-1.5 text-[10.5px] font-medium text-brand">
          <File className="h-3 w-3" />
          {ar ? 'المصدر: الأسعار.pdf' : 'Source: pricing.pdf'}
        </p>
      </div>
    </div>
  );
}

/* ── 2. One script ────────────────────────────────────────────────── */
export function ScriptVisual({ d, locale }: { d: Dictionary; locale: string }) {
  const ar = locale === 'ar';
  const lines: Array<Array<[string, string]>> = [
    [['<script', 'tag'], [' src', 'attr'], ['=', 'p'], ['"https://cdn.zaagl.com/agent.js"', 'str']],
    [['  data-agent-id', 'attr'], ['=', 'p'], ['"ag_9f2c41"', 'str']],
    [['  defer', 'attr'], ['></script>', 'tag']],
  ];
  const cls: Record<string, string> = {
    tag: 'text-brand',
    attr: 'text-info',
    str: 'text-ok',
    p: 'text-muted',
  };

  return (
    <div className="card card-sheen relative overflow-hidden p-6 shadow-card sm:p-8">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-semibold">{ar ? 'السكريبت' : 'The script'}</p>
        <span className="rounded-lg border border-line bg-surface-2 px-2 py-1 text-[10.5px] text-muted">
          index.html
        </span>
      </div>

      <div dir="ltr" className="overflow-x-auto rounded-xl border border-line bg-surface-2 p-4">
        <pre className="tnum text-[11.5px] leading-relaxed">
          <code>
            {lines.map((line, i) => (
              <div key={i} className="flex gap-3">
                <span className="w-4 shrink-0 select-none text-end text-muted opacity-50">{i + 1}</span>
                <span className="whitespace-pre">
                  {line.map(([t, k], j) => (
                    <span key={j} className={cls[k]}>
                      {t}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {(ar
          ? ['انسخ', 'الصق', 'شغّال']
          : ['Copy', 'Paste', 'Live']
        ).map((s, i) => (
          <div
            key={s}
            className={`flex flex-col items-center gap-1.5 rounded-xl border p-3 ${
              i === 2
                ? 'border-[color-mix(in_srgb,var(--ok)_32%,transparent)] bg-[color-mix(in_srgb,var(--ok)_9%,transparent)]'
                : 'border-line bg-surface-2'
            }`}
          >
            <span
              className={`grid h-7 w-7 place-items-center rounded-full text-[11px] font-bold ${
                i === 2 ? 'bg-ok text-white' : 'bg-surface-3 text-muted'
              }`}
            >
              {i === 2 ? <Check className="h-3.5 w-3.5" strokeWidth={2.6} /> : i + 1}
            </span>
            <span className={`text-[11.5px] font-medium ${i === 2 ? 'text-ok' : 'text-muted'}`}>
              {s}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── 3. Dashboard analytics + sentiment ───────────────────────────── */
export function AnalyticsVisual({ d, locale }: { d: Dictionary; locale: string }) {
  const ar = locale === 'ar';
  const bars = [38, 55, 44, 70, 62, 84, 96];
  const sentiments = ar
    ? [
        { l: 'إيجابي', v: 72, c: 'var(--ok)' },
        { l: 'محايد', v: 21, c: 'var(--warn)' },
        { l: 'سلبي', v: 7, c: 'var(--danger)' },
      ]
    : [
        { l: 'Positive', v: 72, c: 'var(--ok)' },
        { l: 'Neutral', v: 21, c: 'var(--warn)' },
        { l: 'Negative', v: 7, c: 'var(--danger)' },
      ];

  return (
    <div className="card card-sheen relative overflow-hidden p-6 shadow-card sm:p-8">
      <div className="mb-5 flex items-center justify-between">
        <div className="leading-tight">
          <p className="text-sm font-semibold">{ar ? 'المحادثات' : 'Conversations'}</p>
          <p className="text-[11px] text-muted">{ar ? 'آخر ٧ أيام' : 'Last 7 days'}</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface-2 px-2.5 py-1.5 text-[11px] text-ink-2">
          <Activity className="h-3.5 w-3.5 text-brand" />
          {ar ? 'مباشر' : 'Live'}
        </span>
      </div>

      <div className="flex h-24 items-end gap-2 rounded-xl border border-line bg-surface-2 p-3">
        {bars.map((h, i) => (
          <span
            key={i}
            className="flex-1 rounded-sm"
            style={{
              height: `${h}%`,
              background:
                i === bars.length - 1
                  ? 'var(--brand)'
                  : 'color-mix(in srgb, var(--brand) 48%, var(--surface-3))',
            }}
          />
        ))}
      </div>

      <div className="mt-5">
        <p className="mb-3 text-[11px] font-semibold text-muted">
          {ar ? 'تحليل المشاعر' : 'Sentiment analysis'}
        </p>
        <div className="flex h-2.5 overflow-hidden rounded-full border border-line">
          {sentiments.map((s) => (
            <span key={s.l} style={{ width: `${s.v}%`, background: s.c }} />
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
          {sentiments.map((s) => (
            <span key={s.l} className="flex items-center gap-1.5 text-[11.5px] text-muted">
              <span className="h-2 w-2 rounded-full" style={{ background: s.c }} />
              {s.l}
              <span dir="ltr" className="font-semibold text-ink-2">
                {s.v}%
              </span>
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2.5 rounded-xl border border-line bg-surface-2 px-3.5 py-3">
        <span className={`h-8 w-8 shrink-0 ${ring} text-brand`}>
          <Webhook className="h-4 w-4" />
        </span>
        <p className="text-[12px] text-muted">
          {ar ? 'تتبع الأحداث عبر Webhook مفعّل' : 'Event tracking via Webhook enabled'}
        </p>
        <Check className="ms-auto h-4 w-4 text-ok" strokeWidth={2.4} />
      </div>
    </div>
  );
}
