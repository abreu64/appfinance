
// Fix: Import React to provide access to the React namespace for type definitions
import React from 'react';

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  tutorial?: string[];
}

export interface Screenshot {
  url: string;
  title: string;
  description: string;
}