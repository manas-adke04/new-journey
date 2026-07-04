---
description: Verify the placement portal codebase compiles cleanly and executes without issues
---

This workflow runs TypeScript checks and Vite build diagnostics to ensure no syntax or module import errors exist.

// turbo
1. Run local build checks to compile all React and TypeScript files
   ```bash
   npm run build
   ```

2. Check the output logs to ensure there are no bundling or target compatibility errors.
