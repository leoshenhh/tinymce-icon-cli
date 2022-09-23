# 此项目基于 tinymce 自创建图标库

# USAGE
1. `node src/index.js` 将原始svg转为path 输出文件夹为`src/dist`
2. `npx gulp` 打包生成tinymce可用的js文件
3. 如果svg宽高为0 则直接修改 `dist/icons/项目名/icons.js` 将`<svg>` 改为`<svg width="24" height="24">`
