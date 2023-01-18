# GitHub Language Buttons

## About

An API that generates GitHub-button-themed SVGs that show the percentage of a language in public repositories

Inspired by [GitHub Readme Stats](https://github.com/anuraghazra/github-readme-stats) and [Shields.io](https://github.com/badges/shields)

## Preview

Light themes (default, high contrast, Protanopia & Deuteranopia, Tritanopia)

![Preview (light default)](https://github-language-buttons.vercel.app/api?language=TI%20Program&theme=light) ![Preview (light high contrast)](https://github-language-buttons.vercel.app/api?language=Java&theme=light_high_contrast) ![Preview (light Protanopia & Deuteranopia)](https://github-language-buttons.vercel.app/api?language=Processing&theme=light_colorblind) ![Preview (light Tritanopia)](https://github-language-buttons.vercel.app/api?language=C%2b%2b&theme=light_tritanopia)

Dark themes (default, high contrast, Protanopia & Deuteranopia, Tritanopia, dimmed)

![Preview (dark default)](https://github-language-buttons.vercel.app/api?language=Python) ![Preview (dark high contrast)](https://github-language-buttons.vercel.app/api?language=JavaScript&theme=dark_high_contrast) ![Preview (dark Protanopia & Deuteranopia)](https://github-language-buttons.vercel.app/api?language=VBScript&theme=dark_colorblind) ![Preview (dark Tritanopia)](https://github-language-buttons.vercel.app/api?language=PowerShell&theme=dark_tritanopia) ![Preview (dark dimmed)](https://github-language-buttons.vercel.app/api?language=AutoHotkey&theme=dark_dimmed)

## How to use

1. [Fork this repository](https://github.com/yehwankim23/github-language-buttons/fork)
2. [Generate a GitHub personal access token](https://github.com/settings/tokens/new) with `public_repo` permission

![How to use (GitHub personal access token)](how-to-use-2.png)

3. Go to [Vercel](https://vercel.com/login) and `Continue with GitHub`

![How to use (Continue with GitHub)](how-to-use-3.png)

4. Click `Add New...` > `Project`

![How to use (Add New... > Project)](how-to-use-4.png)

5. Find your repository and click `Import`

![How to use (Import)](how-to-use-5.png)

6. Click `Environment Variables` and add `GLB_TOKEN` and `GLB_USERNAME`

![How to use (Environment Variables)](how-to-use-6.png)

7. (Optional) Add languages that you want to ignore as comma-separated values

> [Supported languages](/src/languages.js)

![How to use (ignore)](how-to-use-7.png)

8. Click `Deploy`
9. Click `Continue to Dashboard`
10. Check your domains under `DOMAINS`

![How to use (ignore)](how-to-use-10.png)

11. Copy and paste the following Markdown and change `DOMAIN`, `LANGUAGE`, and `THEME`

> [Supported languages](/src/languages.js)

> [Supported themes](/src/themes.js)

```md
[![GitHub Language Button](DOMAIN/api?language=LANGUAGE&theme=THEME)](https://github.com/yehwankim23/github-language-buttons)
```

Example

- `DOMAIN` → `https://github-language-buttons.vercel.app`
- `LANGUAGE` → `Visual%20Basic%20%2eNET` ([Percent-encoded](#percent-encoding) "Visual Basic .NET")
- `THEME` → `dark`

```md
[![GitHub Language Button](https://github-language-buttons.vercel.app/api?language=Visual%20Basic%20%2eNET&theme=dark)](https://github.com/yehwankim23/github-language-buttons)
```

![GitHub Language Button](https://github-language-buttons.vercel.app/api?language=Visual%20Basic%20%2eNET)

### Percent-encoding

| ASCII | 2x  | ASCII | 3x  | ASCII | 4x  | ASCII | 5x  | ASCII | 6x  | ASCII | 7x  |
| ----- | --- | ----- | --- | ----- | --- | ----- | --- | ----- | --- | ----- | --- |
| space | %20 | :     | %3a | @     | %40 | [     | %5b | `     | %60 | {     | %7b |
| !     | %21 | ;     | %3b |       |     | \     | %5c |       |     | \|    | %7c |
| "     | %22 | <     | %3c |       |     | ]     | %5d |       |     | }     | %7d |
| #     | %23 | =     | %3d |       |     | ^     | %5e |       |     | ~     | %7e |
| $     | %24 | >     | %3e |       |     | \_    | %5f |
| %     | %25 | ?     | %3f |
| &     | %26 |
| '     | %27 |
| (     | %28 |
| )     | %29 |
| \*    | %2a |
| +     | %2b |
| ,     | %2c |
| -     | %2d |
| .     | %2e |
| /     | %2f |
