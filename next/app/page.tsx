export default async function Home() {
  try {
    const res = await fetch(`http://auth:4000`, { 
      next: { revalidate: 10 },
    });
    const responseJson = await res.json()

    return (
      <main className="flex flex-col items-center justify-between min-h-screen p-24">
        {responseJson.body}
      </main>
    )
    
  } catch (error) {
    console.log("error", error)
  }

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      loading
    </main>
  )
}
