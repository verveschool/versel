import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.verveschool.com/sitemap.xml",
    host: "https://www.verveschool.com",
  }
}
