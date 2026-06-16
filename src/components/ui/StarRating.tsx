import { Star } from "@/src/components/ui/icons";

export function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex items-center gap-1 text-base text-star" aria-label={`Rated ${rating} out of ${max}`}>
      {Array.from({ length: max }, (_, i) => (
        <Star key={i} filled={i < rating} />
      ))}
    </div>
  );
}
