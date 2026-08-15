import Script from "next/script"

type BreadcrumbItem = {
  name: string
  url: string
}

type BreadcrumbJsonLdProps = {
  id: string
  items: BreadcrumbItem[]
}

export function BreadcrumbJsonLd({ id, items }: BreadcrumbJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <Script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
