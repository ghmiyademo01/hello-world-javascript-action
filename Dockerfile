FROM node:18-alpine
RUN npm run build
CMD ["node", "dist/index.js"]
