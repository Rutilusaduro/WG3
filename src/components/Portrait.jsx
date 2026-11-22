export function Portrait({ def, stage = 1, size = 'lg' }) {
  const safe = Math.min(12, Math.max(1, stage));
  const t = (safe - 1) / 11;
  const seated = safe >= 8;
  const bed = safe >= 11;
  const width = size === 'sm' ? 86 : 176;
  const bellyRx = 20 + t * 70;
  const bellyRy = 18 + t * (bed ? 28 : 40);
  const hipRx = 26 + t * 48;
  const thigh = 14 + t * 26;
  const breast = 9 + t * 12;
  const drop = seated ? 28 + t * 10 : 0;
  const hair = def.hairStyle;

  return (
    <figure className={`portrait portrait-${size}`} style={{ '--accent': def.accent }} aria-hidden="true">
      <svg viewBox="0 0 220 300" width={width} role="img">
        <title>{`${def.name}, ${safe} of 12`}</title>
        <rect x="8" y="8" width="204" height="284" rx="28" fill="#3a2c28" />
        <rect x="18" y="18" width="184" height="264" rx="22" fill={def.accent} opacity="0.28" />
        {bed && <rect x="28" y="168" width="164" height="92" rx="18" fill="#3a2c28" />}
        {seated && !bed && (
          <path d="M46 176 h128 a16 16 0 0 1 16 16 v46 h-160 v-46 a16 16 0 0 1 16-16z" fill="#3d312c" />
        )}
        <ellipse cx="110" cy={214 + drop * 0.2} rx={hipRx + 8} ry={18 + t * 10} fill="#000" opacity="0.18" />
        <ellipse cx={78 - t * 6} cy={196 + drop * 0.15} rx={thigh} ry={28 + t * 8} fill={def.skin} />
        <ellipse cx={142 + t * 6} cy={196 + drop * 0.15} rx={thigh} ry={28 + t * 8} fill={def.skin} />
        <ellipse cx="110" cy={168 + drop * 0.25} rx={hipRx} ry={24 + t * 12} fill={def.skin} />
        <ellipse cx="110" cy={150 + drop * 0.2} rx={bellyRx} ry={bellyRy} fill={def.skin} />
        <ellipse cx="110" cy={148 + t * 8 + drop * 0.15} rx={bellyRx * 0.72} ry={bellyRy * 0.55} fill={def.blush} opacity="0.35" />
        <ellipse cx={78 - t * 4} cy={112 + drop * 0.3} rx={7 + t * 6} ry={18 + t * 8} fill={def.skin} />
        <ellipse cx={142 + t * 4} cy={112 + drop * 0.3} rx={7 + t * 6} ry={18 + t * 8} fill={def.skin} />
        <ellipse cx={86 - t * 2} cy={104 + t * 6} rx={breast} ry={breast * 0.86} fill={def.skin} />
        <ellipse cx={134 + t * 2} cy={104 + t * 6} rx={breast} ry={breast * 0.86} fill={def.skin} />
        <ellipse cx="110" cy={78 - t * 2} rx={18 + t * 6} ry={20 + t * 4} fill={def.skin} />
        {t > 0.4 && <ellipse cx="110" cy={96 + t * 4} rx={10 + t * 8} ry={6 + t * 4} fill={def.skin} />}
        {hair === 'long' && <path d="M86 70c-8 20-10 70-4 96 18-8 38-8 56 0 6-26 4-76-4-96-12 10-36 10-48 0z" fill={def.hair} />}
        {hair === 'undercut' && (
          <>
            <path d="M92 62c18-16 36-8 40 10 2 18-8 28-22 30-16-2-24-16-18-40z" fill={def.hair} />
            <rect x="128" y="74" width="10" height="22" rx="4" fill={def.hair} opacity="0.85" />
          </>
        )}
        {hair === 'crop' && <path d="M90 66c8-18 36-20 46-2 4 10-2 18-12 22-18 2-36-4-34-20z" fill={def.hair} />}
        {hair === 'clip' && (
          <>
            <path d="M92 70c6-16 32-18 40 0 4 20-6 28-20 28s-26-10-20-28z" fill={def.hair} />
            <rect x="118" y="58" width="16" height="8" rx="2" fill={def.accent} />
          </>
        )}
        {hair === 'curls' && (
          <>
            <circle cx="92" cy="70" r="12" fill={def.hair} />
            <circle cx="110" cy="60" r="13" fill={def.hair} />
            <circle cx="128" cy="70" r="12" fill={def.hair} />
            <circle cx="100" cy="82" r="10" fill={def.hair} />
            <circle cx="122" cy="84" r="10" fill={def.hair} />
          </>
        )}
        <circle cx="103" cy={76 - t} r="1.4" fill="#3a241c" />
        <circle cx="117" cy={76 - t} r="1.4" fill="#3a241c" />
      </svg>
    </figure>
  );
}
