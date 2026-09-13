# react-native-screens: pushed screen's ScrollView clipped to the form sheet's height

Stock `create-expo-app` (Expo SDK 57, expo-router 57, react-native 0.86, react-native-screens 4.26.0 / 4.27.0), iOS, new architecture.

Three routes in `src/app`:

- `index.tsx` — Home with two buttons.
- `sheet.tsx` — `presentation: "formSheet"`, `sheetAllowedDetents: [0.5]`, a `ScrollView` with two rows.
  Each row does `router.replace("/detail/<id>")`.
- `detail/[id].tsx` — a plain full-height `ScrollView` whose content is present at mount.

## Steps

```bash
npm install
npx expo run:ios
```

1. Tap **Open sheet**.
2. Tap **Open detail 1**.

Expected: the detail screen's scroll view fills the screen and shows rows 0–29 and the "Files row" at the bottom.

Actual: only rows 0–9 are visible; nothing below is painted or tappable and the list does not scroll.
The `UIScrollView` frame is `{0, 0, 440, 464}` on an iPhone 17 Pro Max — the sheet's 0.5 detent height —
while its content view is laid out for the full screen (see `RNSScreen.mm`, `applyFrameCorrectionForDescendantScrollView`).

3. Go back, tap **Push detail 1 directly** — the same screen is full height when no sheet was dismissed in the same transition.
