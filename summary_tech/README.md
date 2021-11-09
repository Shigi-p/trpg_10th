- [備忘録](#備忘録)
  - [環境構築系](#環境構築系)
    - [package.json](#packagejson)
    - [webpack.config.js](#webpackconfigjs)
    - [eslint 系](#eslint-系)
    - [とにかく build が成功しない事件](#とにかく-build-が成功しない事件)
    - [scss の import に正規表現を用いる](#scss-の-import-に正規表現を用いる)
    - [なんかしらないが swiper の scrollbar が動かない問題](#なんかしらないが-swiper-の-scrollbar-が動かない問題)
    - [あたらしいコミットフォーマッターをみつけた](#あたらしいコミットフォーマッターをみつけた)
- [vite で作り無し編](#vite-で作り無し編)

---

# 備忘録

## 環境構築系

### package.json

`npm init`

### webpack.config.js

`webpack init`

node の version によっては動かないこともあるので nodenv で調整

### eslint 系

`eslint init`

**全部 init じゃねーか！！！！**

### とにかく build が成功しない事件

- webpack が 5 系だった
- 5 系から 4 系に戻すと依存関係がごちゃごちゃになる
- 結局 4 系で init しなおす
- 4 系に合うモジュールのバージョンまでちくちく下げて install し直す(アホか？)

### scss の import に正規表現を用いる

`import-glob-loader`というローダーを追加して使う模様。

### なんかしらないが swiper の scrollbar が動かない問題

webpack を使用して使う分には import 文を工夫しないといけないらしい。

悪い例

```
import Swiper from "swiper";
```

良い例

```
import Swiper, { Scrollbar } from "swiper";

Swiper.use([Scrollbar]);
```

[ここ](https://flex-box.net/swiper-npm/)に乗ってた。

### あたらしいコミットフォーマッターをみつけた

[これ](https://dev.classmethod.jp/articles/commitizen/)

自分のやつをこれによせていきたい所存

追記 寄せた

# vite で作り無し編
