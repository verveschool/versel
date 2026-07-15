import { redirect } from "next/navigation"

type WritingRedirectPageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function WritingRedirectPage({ params }: WritingRedirectPageProps) {
  const { slug } = await params
  redirect(`/essays/${slug}`)
}
