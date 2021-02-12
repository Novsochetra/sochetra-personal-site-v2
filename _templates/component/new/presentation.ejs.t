---
to: src/<%= name  %>/<%= name %>.presentation.tsx
---

import React from 'react'
import { <%= name %>PresentationProps } from './<%= name %>.interfaces'

export const <%= name %>Presentation: React.FC<<%= name %>PresentationProps> = () => {
  return <>Hello <%= name %></>
}
