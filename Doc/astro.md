# Astro 注意事項

- 画像パスやリンクなどは絶対パスで記述する
  - 内部的にはページ遷移していないことがあり、相対パスだと上手く表示できないことがある
  - OK: `/imageFile/sample.png`
  - NG: `imageFile/sample.png`