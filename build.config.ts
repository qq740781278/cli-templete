import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
  ],
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
  },
})
