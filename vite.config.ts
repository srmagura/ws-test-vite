import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ...VitePluginNode({
      adapter: 'nest',
      appPath: 'src/main.ts',
      tsCompiler: 'swc',
    }),
  ],
  optimizeDeps: {
    // Vite does not work well with optional dependencies, you can mark them as
    // ignored for now
    exclude: [
      '@nestjs/microservices',
      '@nestjs/websockets',
      '@nestjs/graphql',
      'cache-manager',
      'class-transformer',
      'class-validator',
      'fastify-swagger',
    ],
  },
});
