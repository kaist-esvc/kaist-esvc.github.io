// @ts-check
import { defineConfig } from 'astro/config';

// 배포 주소: 우선 GitHub Pages(kaist-esvc.github.io), KAIST 도메인 발급 후 교체
export default defineConfig({
  site: 'https://kaist-esvc.github.io',
  trailingSlash: 'always',
});
