import React from 'react';
import styles from './GlitchText.module.scss';

interface GlitchTextProps {
    text: string;
    as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
    className?: string;
}

export default function GlitchText({ text, as: Component = 'span', className = '' }: GlitchTextProps) {
    return (
        <Component className={`${styles.glitch} ${styles.layers} ${className}`} data-text={text}>
            <span>{text}</span>
        </Component>
    );
}
