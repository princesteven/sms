import React from "react";

export interface Menu {
    label: React.ReactNode;
    key: string;
    icon: React.ReactNode;
    children?: Omit<Menu, 'icon'>[]
}