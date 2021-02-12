---
to: src/<%= name  %>/<%= name %>.stories.tsx
---

import React from 'react'
import { <%= name %> as <%= name %>Component } from '.'
import "./<%= name %>.module.css"

export default { title: '<%= name %>' }

export const <%= name %> = (): React.ReactElement => {
  return <<%= name %>Component />
}
