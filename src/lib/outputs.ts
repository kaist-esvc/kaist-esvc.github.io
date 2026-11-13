// 논문·특허 데이터와 과제 연결 도우미
import pubsData from '../data/publications.json';
import patentsData from '../data/patents.json';
import projects from '../data/projects.json';

export interface Pub {
  id: string; type: 'journal' | 'conference'; authors: string; title: string; venue: string;
  volume?: string; pages?: string; year: number; month?: number; link?: string; projects?: string[];
}
export interface Patent {
  id: string; title: string; country: string; status: '출원' | '등록'; inventors: string;
  appNo?: string; appDate?: string; regNo?: string; regDate?: string; link?: string; projects?: string[];
}

const byDate = (a: { year: number; month?: number }, b: { year: number; month?: number }) =>
  b.year - a.year || (b.month ?? 0) - (a.month ?? 0);

export const pubs = (pubsData as Pub[]).slice().sort(byDate);
export const patents = (patentsData as Patent[]).slice().sort((a, b) =>
  (b.regDate ?? b.appDate ?? '').localeCompare(a.regDate ?? a.appDate ?? ''));

export const pubsOf = (pid: string) => pubs.filter((p) => p.projects?.includes(pid));
export const patentsOf = (pid: string) => patents.filter((p) => p.projects?.includes(pid));

export const projectName = (pid: string) => {
  const p = projects.find((x) => x.id === pid) as any;
  return p?.short ?? p?.title ?? pid;
};
