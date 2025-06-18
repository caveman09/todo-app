import React, { memo } from 'react';
import type { InputHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const textBoxVariants = cva(
    "type-text rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 " +
    "focus:ring-offset-amber-200 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none",
    {
        variants: {
            variant: {
                primary: "border border-amber-300 bg-white text-gray-800 focus:border-amber-500 focus:ring-amber-500 mx-2 " +
                    "dark:bg-amber-100 dark:text-gray-700 dark:border-amber-200 dark:focus:border-amber-400 dark:focus:ring-amber-400",
                secondary: "border border-gray-300 bg-gray-100 text-gray-700 focus:border-gray-400 focus:ring-gray-400 mx-2" +
                    " dark:bg-gray-200 dark:text-gray-800 dark:border-gray-300 dark:focus:border-gray-500 dark:focus:ring-gray-500",
                ghost: "border border-transparent bg-transparent text-gray-800 focus:border-blue-500 focus:ring-blue-500 mx-2 " +
                    "dark:text-gray-200 dark:focus:border-blue-400 dark:focus:ring-blue-400",
                link: "border border-transparent bg-transparent text-blue-600 hover:bg-blue-100 focus:ring-blue-100 underline mx-2 " +
                    "dark:text-blue-400 dark:hover:bg-blue-200 dark:focus:ring-blue-200"
            },
            textsize: {
                small: "text-sm px-2 py-1",
                medium: "text-base px-3 py-2",
                large: "text-lg px-4 py-3"
            },
            fullWidth: {
                true: "w-full",
                false: "w-auto"
            }
        },
        defaultVariants: {
            variant: "primary",
            textsize: "medium",
            fullWidth: false,
        }
    }
);

interface SimpleTextBoxProps
    extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof textBoxVariants> {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

const SimpleTextBox = memo(({ variant, textsize, fullWidth, leftIcon, rightIcon, disabled, ...props }: SimpleTextBoxProps) => {
    return (
        <>
            {leftIcon && <span className='mr-2'>{leftIcon}</span>}
            <input className={textBoxVariants({ variant, textsize, fullWidth })} disabled={disabled} {...props} />
            {rightIcon && <span className='ml-2'>{rightIcon}</span>}
        </>
    );
});

export default SimpleTextBox;