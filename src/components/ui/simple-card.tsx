import { memo } from 'react'
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const cardVariants = cva(
    " bg-white dark:bg-zinc-800 rounded-lg shadow-md p-4 transition-colors " +
    "hover:bg-gray-50 dark:hover:bg-[#2b2b2e] focus:outline-none focus:ring-2 focus:ring-offset-2 " +
    "focus:ring-offset-amber-200 focus:ring-amber-500",
    {
        variants: {
            variant: {
                outlined: "border border-gray-300 dark:border-gray-700",
                filled: "bg-gray-100 dark:bg-gray-700",
                elevated: "shadow-lg dark:shadow-gray-900",
            }
        },
        defaultVariants: {
            variant: "outlined",
        }
    }
)

interface SimpleCardProps extends VariantProps<typeof cardVariants> {
    children?: React.ReactNode;
    className?: string;
}

const SimpleCard = memo(({ children, variant, className }: SimpleCardProps) => {
    return (
        <div className={cn(cardVariants({ variant }), className)}>
            {children}
        </div>
    )
})

export default SimpleCard;