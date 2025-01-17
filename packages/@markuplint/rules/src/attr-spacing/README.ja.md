---
title: 属性間のスペース (attr-spacing)
---

# 属性間のスペース (`attr-spacing`)

要素間のスペース・改行の有無や数に対して警告します。

**🔧 自動補正可能**

## ルールの詳細

👎 間違ったコード例

<!-- prettier-ignore-start -->
```html
<img src="path/to"src="path/to2">
```
<!-- prettier-ignore-end -->

👍 正しいコード例

<!-- prettier-ignore-start -->
```html
<img src="path/to" src="path/to2">
```
<!-- prettier-ignore-end -->

### 設定値

型: `boolean`

### オプション

#### `lineBreak`

型: `"either" | "always" | "never"`

| 設定値     | デフォルト | 解説                           |
| ---------- | ---------- | ------------------------------ |
| `"either"` | ✓          | 改行に関して警告をしません。   |
| `"always"` |            | 改行をしていないと警告します。 |
| `"never"`  |            | 改行をしていると警告します。   |

#### `width`

型: `number | false`

| 設定値  | デフォルト | 解説                                                     |
| ------- | ---------- | -------------------------------------------------------- |
| [数値]  | ✓ `1`      | スペースの幅が設定した数値になっていなければ警告します。 |
| `false` |            | スペースの幅に関して警告をしません。                     |

### デフォルトの警告の厳しさ

`warning`
