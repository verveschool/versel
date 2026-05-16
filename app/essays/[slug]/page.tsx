import { redirect } from "next/navigation"

type EssaysRedirectPageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function EssaysRedirectPage({ params }: EssaysRedirectPageProps) {
  const { slug } = await params
  redirect(`/writing/${slug}`)
}
