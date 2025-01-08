// vite.config.ts
import { reactRouter } from "file:///E:/projects/pranesh%20dadu/royal-bd/node_modules/@react-router/dev/dist/vite.js";
import autoprefixer from "file:///E:/projects/pranesh%20dadu/royal-bd/node_modules/autoprefixer/lib/autoprefixer.js";
import tailwindcss from "file:///E:/projects/pranesh%20dadu/royal-bd/node_modules/tailwindcss/lib/index.js";
import { defineConfig } from "file:///E:/projects/pranesh%20dadu/royal-bd/node_modules/vite/dist/node/index.js";
import tsconfigPaths from "file:///E:/projects/pranesh%20dadu/royal-bd/node_modules/vite-tsconfig-paths/dist/index.js";
var vite_config_default = defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer]
    }
  },
  plugins: [reactRouter(), tsconfigPaths()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxwcm9qZWN0c1xcXFxwcmFuZXNoIGRhZHVcXFxccm95YWwtYmRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXHByb2plY3RzXFxcXHByYW5lc2ggZGFkdVxcXFxyb3lhbC1iZFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovcHJvamVjdHMvcHJhbmVzaCUyMGRhZHUvcm95YWwtYmQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyByZWFjdFJvdXRlciB9IGZyb20gXCJAcmVhY3Qtcm91dGVyL2Rldi92aXRlXCI7XG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gXCJhdXRvcHJlZml4ZXJcIjtcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tIFwidGFpbHdpbmRjc3NcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tIFwidml0ZS10c2NvbmZpZy1wYXRoc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBjc3M6IHtcbiAgICBwb3N0Y3NzOiB7XG4gICAgICBwbHVnaW5zOiBbdGFpbHdpbmRjc3MsIGF1dG9wcmVmaXhlcl0sXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW3JlYWN0Um91dGVyKCksIHRzY29uZmlnUGF0aHMoKV0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBK1IsU0FBUyxtQkFBbUI7QUFDM1QsT0FBTyxrQkFBa0I7QUFDekIsT0FBTyxpQkFBaUI7QUFDeEIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxtQkFBbUI7QUFFMUIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsS0FBSztBQUFBLElBQ0gsU0FBUztBQUFBLE1BQ1AsU0FBUyxDQUFDLGFBQWEsWUFBWTtBQUFBLElBQ3JDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUyxDQUFDLFlBQVksR0FBRyxjQUFjLENBQUM7QUFDMUMsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K