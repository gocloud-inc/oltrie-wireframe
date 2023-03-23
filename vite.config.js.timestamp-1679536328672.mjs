// vite.config.js
import { defineConfig } from "file:///D:/Programs/Web%20Designs/oltrie-wireframe/node_modules/vite/dist/node/index.js";
import htmlMinifier from "file:///D:/Programs/Web%20Designs/oltrie-wireframe/node_modules/html-minifier/src/htmlminifier.js";
import sass from "file:///D:/Programs/Web%20Designs/oltrie-wireframe/node_modules/sass/sass.default.dart.js";
import { resolve } from "path";
import glob from "file:///D:/Programs/Web%20Designs/oltrie-wireframe/node_modules/glob/dist/mjs/index.js";
var __vite_injected_original_dirname = "D:\\Programs\\Web Designs\\oltrie-wireframe";
function minifyHtml() {
  return {
    name: "minify-html",
    transformIndexHtml(html) {
      const minified = htmlMinifier.minify(html, {
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true
      });
      return minified.replace(/<style>(.*?)<\/style>/gis, (match, p1) => {
        return `<style>${htmlMinifier.minify(p1, { minifyCSS: true })}</style>`;
      });
    }
  };
}
function getHtmlEntries() {
  const entries = {};
  const htmlFiles = glob.sync("*.html");
  htmlFiles.forEach((file) => {
    const name = file.replace(".html", "");
    entries[name] = resolve(__vite_injected_original_dirname, file);
  });
  return entries;
}
var vite_config_default = defineConfig({
  base: "",
  resolve: {
    alias: {
      "~bootstrap": resolve(__vite_injected_original_dirname, "node_modules/bootstrap")
    }
  },
  plugins: [
    minifyHtml()
  ],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    minify: "terser",
    brotliSize: true,
    rollupOptions: {
      input: {
        app: "src/js/app.js",
        ...getHtmlEntries()
      },
      output: {
        dir: "dist"
      }
    }
  },
  // Configure the Sass preprocessor
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQcm9ncmFtc1xcXFxXZWIgRGVzaWduc1xcXFxvbHRyaWUtd2lyZWZyYW1lXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxQcm9ncmFtc1xcXFxXZWIgRGVzaWduc1xcXFxvbHRyaWUtd2lyZWZyYW1lXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Qcm9ncmFtcy9XZWIlMjBEZXNpZ25zL29sdHJpZS13aXJlZnJhbWUvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IGh0bWxNaW5pZmllciBmcm9tICdodG1sLW1pbmlmaWVyJztcclxuaW1wb3J0IHNhc3MgZnJvbSAnc2Fzcyc7XHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcclxuaW1wb3J0IGdsb2IgZnJvbSAnZ2xvYic7XHJcblxyXG5mdW5jdGlvbiBtaW5pZnlIdG1sKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiAnbWluaWZ5LWh0bWwnLFxyXG4gICAgICAgIHRyYW5zZm9ybUluZGV4SHRtbChodG1sKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1pbmlmaWVkID0gaHRtbE1pbmlmaWVyLm1pbmlmeShodG1sLCB7XHJcbiAgICAgICAgICAgICAgICBjb2xsYXBzZVdoaXRlc3BhY2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb21tZW50czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1pbmlmeUNTUzogdHJ1ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBtaW5pZmllZC5yZXBsYWNlKC88c3R5bGU+KC4qPyk8XFwvc3R5bGU+L2dpcywgKG1hdGNoLCBwMSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8c3R5bGU+JHtodG1sTWluaWZpZXIubWluaWZ5KHAxLCB7IG1pbmlmeUNTUzogdHJ1ZSB9KX08L3N0eWxlPmA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRIdG1sRW50cmllcygpIHtcclxuICAgIGNvbnN0IGVudHJpZXMgPSB7fTtcclxuICAgIGNvbnN0IGh0bWxGaWxlcyA9IGdsb2Iuc3luYygnKi5odG1sJyk7XHJcbiAgICBodG1sRmlsZXMuZm9yRWFjaChmaWxlID0+IHtcclxuICAgICAgICBjb25zdCBuYW1lID0gZmlsZS5yZXBsYWNlKCcuaHRtbCcsICcnKTtcclxuICAgICAgICBlbnRyaWVzW25hbWVdID0gcmVzb2x2ZShfX2Rpcm5hbWUsIGZpbGUpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZW50cmllcztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICAgIGJhc2U6ICcnLFxyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICAgIGFsaWFzOiB7XHJcbiAgICAgICAgICAgICd+Ym9vdHN0cmFwJzogcmVzb2x2ZShfX2Rpcm5hbWUsICdub2RlX21vZHVsZXMvYm9vdHN0cmFwJyksXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgICBtaW5pZnlIdG1sKCksXHJcbiAgICBdLFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgICBvdXREaXI6ICdkaXN0JyxcclxuICAgICAgICBhc3NldHNEaXI6ICdhc3NldHMnLFxyXG4gICAgICAgIG1pbmlmeTogJ3RlcnNlcicsXHJcbiAgICAgICAgYnJvdGxpU2l6ZTogdHJ1ZSxcclxuICAgICAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgICAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgICAgICAgICBhcHA6ICdzcmMvanMvYXBwLmpzJyxcclxuICAgICAgICAgICAgICAgIC4uLmdldEh0bWxFbnRyaWVzKCksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG91dHB1dDoge1xyXG4gICAgICAgICAgICAgICAgZGlyOiAnZGlzdCcsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gQ29uZmlndXJlIHRoZSBTYXNzIHByZXByb2Nlc3NvclxyXG4gICAgY3NzOiB7XHJcbiAgICAgICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xyXG4gICAgICAgICAgICBzY3NzOiB7XHJcbiAgICAgICAgICAgICAgICBpbXBsZW1lbnRhdGlvbjogc2Fzc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUFvVCxTQUFTLG9CQUFvQjtBQUNqVixPQUFPLGtCQUFrQjtBQUN6QixPQUFPLFVBQVU7QUFDakIsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sVUFBVTtBQUpqQixJQUFNLG1DQUFtQztBQU16QyxTQUFTLGFBQWE7QUFDbEIsU0FBTztBQUFBLElBQ0gsTUFBTTtBQUFBLElBQ04sbUJBQW1CLE1BQU07QUFDckIsWUFBTSxXQUFXLGFBQWEsT0FBTyxNQUFNO0FBQUEsUUFDdkMsb0JBQW9CO0FBQUEsUUFDcEIsZ0JBQWdCO0FBQUEsUUFDaEIsV0FBVztBQUFBLE1BQ2YsQ0FBQztBQUNELGFBQU8sU0FBUyxRQUFRLDRCQUE0QixDQUFDLE9BQU8sT0FBTztBQUMvRCxlQUFPLFVBQVUsYUFBYSxPQUFPLElBQUksRUFBRSxXQUFXLEtBQUssQ0FBQztBQUFBLE1BQ2hFLENBQUM7QUFBQSxJQUNMO0FBQUEsRUFDSjtBQUNKO0FBRUEsU0FBUyxpQkFBaUI7QUFDdEIsUUFBTSxVQUFVLENBQUM7QUFDakIsUUFBTSxZQUFZLEtBQUssS0FBSyxRQUFRO0FBQ3BDLFlBQVUsUUFBUSxVQUFRO0FBQ3RCLFVBQU0sT0FBTyxLQUFLLFFBQVEsU0FBUyxFQUFFO0FBQ3JDLFlBQVEsSUFBSSxJQUFJLFFBQVEsa0NBQVcsSUFBSTtBQUFBLEVBQzNDLENBQUM7QUFDRCxTQUFPO0FBQ1g7QUFFQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFDTCxPQUFPO0FBQUEsTUFDSCxjQUFjLFFBQVEsa0NBQVcsd0JBQXdCO0FBQUEsSUFDN0Q7QUFBQSxFQUNKO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDTCxXQUFXO0FBQUEsRUFDZjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0gsUUFBUTtBQUFBLElBQ1IsV0FBVztBQUFBLElBQ1gsUUFBUTtBQUFBLElBQ1IsWUFBWTtBQUFBLElBQ1osZUFBZTtBQUFBLE1BQ1gsT0FBTztBQUFBLFFBQ0gsS0FBSztBQUFBLFFBQ0wsR0FBRyxlQUFlO0FBQUEsTUFDdEI7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNKLEtBQUs7QUFBQSxNQUNUO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFBQTtBQUFBLEVBRUEsS0FBSztBQUFBLElBQ0QscUJBQXFCO0FBQUEsTUFDakIsTUFBTTtBQUFBLFFBQ0YsZ0JBQWdCO0FBQUEsTUFDcEI7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
