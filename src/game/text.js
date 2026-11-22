export function resolveText(value, ctx) {
  if (value == null) return '';
  const raw = typeof value === 'function' ? value(ctx) : value;
  return String(raw)
    .replaceAll('{you}', ctx.playerName || 'you')
    .replaceAll('{name}', ctx.def?.name || '')
    .replaceAll('{stage}', ctx.stageName || '');
}

export function paragraphs(text) {
  return String(text)
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}
