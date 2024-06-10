import Clamp from '../clamp'

function DotWithLine() {
  return (
    <div className="relative w-1/6">
      <div className="h-full w-1/2 border-r"></div>
      <div className="absolute left-0 top-0 flex size-full items-center justify-center">
        <div className="size-12 rounded-full border bg-background"></div>
      </div>
    </div>
  )
}

export default function CVPage() {
  return (
    <main className="flex-auto">
      <Clamp className="flex flex-col gap-16 py-12">
        <div className="flex w-full flex-col">
          <div className="w-1/6 gradient-mask-t-0">
            <div className="h-24 w-1/2 border-r"></div>
          </div>

          <div className="flex flex-row">
            <DotWithLine></DotWithLine>
            <div className="my-2 w-5/6 rounded-3xl border p-4">
              <h1 className="text-2xl font-medium">Leonard Schwennesen</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                ex beatae eius nemo alias cumque eum illo quisquam nihil impedit
                placeat molestias distinctio vitae, libero, obcaecati, cum
                adipisci! Consequuntur, expedita!
              </p>
            </div>
          </div>

          <div className="flex flex-row">
            <DotWithLine></DotWithLine>
            <div className="my-2 w-5/6 rounded-3xl border p-4">
              <h1 className="text-2xl font-medium">Leonard Schwennesen</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                ex beatae eius nemo alias cumque eum illo quisquam nihil impedit
                placeat molestias distinctio vitae, libero, obcaecati, cum
                adipisci! Consequuntur, expedita!
              </p>
            </div>
          </div>

          <div className="flex flex-row">
            <DotWithLine></DotWithLine>
            <div className="my-2 w-5/6 rounded-3xl border p-4">
              <h1 className="text-2xl font-medium">Leonard Schwennesen</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                ex beatae eius nemo alias cumque eum illo quisquam nihil impedit
                placeat molestias distinctio vitae, libero, obcaecati, cum
                adipisci! Consequuntur, expedita!
              </p>
            </div>
          </div>

          <div className="flex flex-row">
            <DotWithLine></DotWithLine>
            <div className="my-2 w-5/6 rounded-3xl border p-4">
              <h1 className="text-2xl font-medium">Leonard Schwennesen</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                ex beatae eius nemo alias cumque eum illo quisquam nihil impedit
                placeat molestias distinctio vitae, libero, obcaecati, cum
                adipisci! Consequuntur, expedita!
              </p>
            </div>
          </div>

          <div className="w-1/6 gradient-mask-b-0">
            <div className="h-24 w-1/2 border-r"></div>
          </div>
        </div>
      </Clamp>
    </main>
  )
}
