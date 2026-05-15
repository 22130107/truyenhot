import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin/",
          "/api/",
          "/profile",
          "/library",
          "/topup",
        ],
      },
      // Chặn bot crawl trang admin riêng
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: [
          "/admin/",
          "/api/",
          "/profile",
          "/library",
          "/topup",
        ],
      },
    ],
    sitemap: "https://truyenhot.online/sitemap.xml",
  };
}
