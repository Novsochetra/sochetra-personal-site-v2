---
to: src/<%= name  %>/<%= name %>.container.tsx
---

import React from 'react'
import { <%= name %>Props } from './<%= name %>.interfaces'
import { <%= name %>Presentation } from './<%= name %>.presentation'

export const <%= name %>: React.FC<<%= name %>Props> = () => {
  return <<%= name %>Presentation />
}
