import { defineConfig } from 'tsup'

export default defineConfig({
  "dts": true,
  "clean": true,
  "keepNames": true,
  "target": "node14",
  "splitting": false,
  "format": [
    "cjs",
    "esm"
  ]
});
