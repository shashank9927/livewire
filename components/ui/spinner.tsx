import { Loader2Icon } from "lucide-react"
import * as React from "react"

import { cn } from "@/lib/utils"

export interface SpinnerProps extends React.ComponentProps<"svg"> {
  size?: "small" | "medium" | "large"
}

const sizeClasses = {
  small: "size-4",
  medium: "size-6",
  large: "size-12"
}

function Spinner({ className, size = "medium", ...props }: SpinnerProps) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn(sizeClasses[size], "animate-spin", className)}
      {...props}
    />
  )
}

export { Spinner }
