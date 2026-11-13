// 국문/영문 공통 도우미
// - 데이터의 영문 값은 같은 이름 + 'En' 칸에 넣습니다 (예: title → titleEn).
// - 영문 칸이 비어 있으면 국문 값을 대신 보여줍니다.
export type Lang = 'ko' | 'en';

/** obj[key + 'En'] (영문) 또는 obj[key] (국문) */
export function tr(obj: any, key: string, lang: Lang): any {
  if (!obj) return undefined;
  if (lang === 'en') {
    const v = obj[key + 'En'];
    if (v !== undefined && v !== null && v !== '') return v;
  }
  return obj[key];
}

/** 사이트 내부 링크: 영문이면 /en 을 붙임 */
export const href = (lang: Lang, path: string) => (lang === 'en' ? `/en${path}` : path);

/** '54억 원', '연 5억 원', '4.06억 원', '연 1.3–2억 원' → 'KRW 5.4 billion', 'KRW 0.5 billion / year' ... */
export function budgetEn(s?: string): string | undefined {
  if (!s) return s;
  const yearly = s.includes('연 ');
  const m = s.match(/([\d.]+)(?:\s*[–-]\s*([\d.]+))?\s*억/);
  if (!m) return s;
  const f = (x: string) => String(Math.round(Number(x) * 1000) / 10000);
  const v = m[2] ? `${f(m[1])}–${f(m[2])}` : f(m[1]);
  return `KRW ${v} billion${yearly ? ' / year' : ''}`;
}

export const budget = (s: string | undefined, lang: Lang) => (lang === 'en' ? budgetEn(s) : s);

export const statusLabel = (s: string, lang: Lang) =>
  lang === 'en' ? ({ 진행: 'Ongoing', 완료: 'Completed' } as Record<string, string>)[s] ?? s : s;
