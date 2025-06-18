import React, { memo } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const textBoxVariants = cva(
    "type-text",
    {
        variants: {},
        defaultVariants: {}
    }
);

interface SimpleTextBoxProps
    extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof textBoxVariants> {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

const SimpleTextBox = memo(({ }: SimpleTextBoxProps) => {
    return (
        <input className={textBoxVariants()} />
    );
});

export default SimpleTextBox;