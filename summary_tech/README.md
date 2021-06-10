- [備忘録](#備忘録)
  - [環境構築系](#環境構築系)
    - [package.json](#packagejson)
    - [webpack.config.js](#webpackconfigjs)
    - [eslint系](#eslint系)
    - [とにかくbuildが成功しない事件](#とにかくbuildが成功しない事件)
    - [scssのimportに正規表現を用いる](#scssのimportに正規表現を用いる)
    - [なんかしらないがswiperのscrollbarが動かない問題](#なんかしらないがswiperのscrollbarが動かない問題)

---

# 備忘録

## 環境構築系

### package.json

```npm init```

### webpack.config.js

```webpack init```

nodeのversionによっては動かないこともあるのでnodenvで調整

### eslint系

```eslint init```

**全部initじゃねーか！！！！**

### とにかくbuildが成功しない事件

- webpackが5系だった
- 5系から4系に戻すと依存関係がごちゃごちゃになる
- 結局4系でinitしなおす
- 4系に合うモジュールのバージョンまでちくちく下げてinstallし直す(アホか？)

### scssのimportに正規表現を用いる

`import-glob-loader`というローダーを追加して使う模様。

### なんかしらないがswiperのscrollbarが動かない問題

webpackを使用して使う分にはimport文を工夫しないといけないらしい。

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