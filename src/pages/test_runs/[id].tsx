import { useRouter } from 'next/router'

export default function TestRun() {
  const router = useRouter()
  const { id } = router.query

  return (
    <main className="main-container container-fluid">
      <h1>Test Run { id }</h1>
    </main>
  )
}