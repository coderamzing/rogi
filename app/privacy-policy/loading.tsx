import { Skeleton } from "@/components/ui/skeleton"

export default function PrivacyPolicyLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Skeleton className="h-12 w-3/4 mb-4" />
      <Skeleton className="h-6 w-1/4 mb-8" />
      <Skeleton className="h-24 w-full mb-8" />

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4">
          <Skeleton className="h-64 w-full rounded-lg" />
        </div>

        <div className="lg:w-3/4 space-y-6">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-48 w-full rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  )
}
