import React from 'react';
import styles from './Section.module.scss';

interface SectionProps {
    title: string;
    children: React.ReactNode;
    id?: string;
    className?: string;
}

export default function Section({ title, children, id, className = '' }: SectionProps) {
    return (
        <section id={id} className={`${styles.section} ${className}`}>
            <div className={styles.header}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.divider}></div>
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </section>
    );
}
