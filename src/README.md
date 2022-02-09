# Deploy

Follow https://storybook.js.org/tutorials/design-systems-for-developers/react/en/distribute/.

1. [Generate Github Token](https://github.com/settings/tokens)
2. [Generate NPM Token]()
3. Paste the keys in the `.env` file at the root of the project as `GH_TOKEN` and `NPM_TOKEN` respectively.
4. Update Changelog and version number
5. `git add .`
6. `git commit -m "Changelog for vX.X.X [skip ci]"`
7. Publish `npm --allow-same-version version 0.1.0 -m "Bump version to: %s [skip ci]"`
8. `npm publish --access=public`
9. `git push --follow-tags origin main`
10. `yarn auto release`

**Note:** Working on fixing auto-release github action
