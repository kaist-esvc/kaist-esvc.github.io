// 소식 게시물: src/content/news/*.md 파일을 읽어 날짜 역순으로 정렬
type Front = { title: string; date: string; dateLabel?: string; category: string; image?: string; summary?: string };
type Mod = { frontmatter: Front; Content: any; file: string };

const mods = import.meta.glob<Mod>('../content/news/*.md', { eager: true });

export const news = Object.entries(mods)
  .map(([path, m]) => ({
    slug: path.split('/').pop()!.replace(/\.md$/, ''),
    ...m.frontmatter,
    Content: m.Content,
  }))
  .sort((a, b) => String(b.date).localeCompare(String(a.date)));

export type NewsItem = (typeof news)[number];
