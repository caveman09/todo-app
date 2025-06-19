import React, { memo } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const buttonVariants = cva(
    "font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 " +
    "focus:ring-offset-amber-200 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none",
    {
        variants: {
            variant: {
                primary: "bg-amber-500 text-white hover:bg-amber-600 focus:ring-amber-500 " +
                    "dark:bg-amber-400 dark:hover:bg-amber-500 dark:focus:ring-amber-400",
                secondary: "bg-amber-200 text-gray-800 hover:bg-amber-300 focus:ring-amber-300 " +
                    "dark:bg-amber-100 dark:text-gray-700 dark:hover:bg-amber-200 dark:focus:ring-amber-200",
                ghost: "bg-transparent text-gray-800 hover:bg-amber-100 focus:ring-amber-100 " +
                    "dark:text-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-700",
                link: "bg-transparent text-blue-600 hover:bg-blue-100 focus:ring-blue-100 underline " +
                    "dark:text-blue-400 dark:hover:bg-blue-200 dark:focus:ring-blue-200"
            },
            size: {
                small: "px-2 py-1 text-sm",
                medium: "px-4 py-2",
                large: "px-6 py-3 text-lg",
            },
            fullWidth: {
                true: "w-full",
                false: "w-auto",
            }
        },
        defaultVariants: {
            variant: "primary",
            size: "medium",
            fullWidth: false,
        }
    }
);

interface SimpleButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    className?: string;
}

const SimpleButton = memo(({ children, variant, size, fullWidth, leftIcon, rightIcon, disabled, className, ...props }: SimpleButtonProps) => {
    return (
        <button className={cn(buttonVariants({ variant, size, fullWidth }), className)} disabled={disabled} {...props}>
            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </button>
    )
})

export default SimpleButton;