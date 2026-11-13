// 소식 게시물: src/content/news/*.md 파일을 읽어 날짜 역순으로 정렬
// 날짜 표시는 date 값에서 자동으로 'YYYY.MM' 형식으로 만듭니다.
type Front = { title: string; date: string | Date; category: string; image?: string; imageFit?: 'cover' | 'contain'; imageCredit?: string; summary?: string };
type Mod = { frontmatter: Front; Content: any; file: string };

const mods = import.meta.glob<Mod>('../content/news/*.md', { eager: true });

const iso = (d: string | Date) => (d instanceof Date ? d.toISOString().slice(0, 10) : String(d));

export const news = Object.entries(mods)
  .map(([path, m]) => {
    const date = iso(m.frontmatter.date);
    return {
      slug: path.split('/').pop()!.replace(/\.md$/, ''),
      ...m.frontmatter,
      date,
      dateLabel: date.slice(0, 7).replace('-', '.'),
      Content: m.Content,
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date) || b.slug.localeCompare(a.slug));

export const photoNews = news.filter((n) => n.image);

export type NewsItem = (typeof news)[number];
