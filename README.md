# Alshami Cafe Content

This public repository owns Alshami Cafe's editable pages, menu, image uploads,
and Decap CMS configuration. The paired private site repository is
`MaherMaker-EmotionHack/AlshamiCafe`.

The paired site repository fetches this repository when developing and building.
Every push to `main` notifies the site repository to rebuild.

## Local CMS

Clone the paired site repository, set `CONTENT_REPOSITORY_PATH` to this
repository's local path, and run `npm start` in its `restaurant/` folder. In a
second terminal run `npm run cms`, then open `http://localhost:4200/admin/`.

## Required GitHub configuration

1. In this repository, set `SITE_REPOSITORY` to
   `MaherMaker-EmotionHack/AlshamiCafe`.
2. Add `SITE_REPOSITORY_DISPATCH_TOKEN`, a fine-grained token permitted to
   dispatch workflows in that site repository.
3. In the site repository, set `CONTENT_REPOSITORY` to
   `MaherMaker-EmotionHack/AlshamiCafe-content`. This repository is public, so
   the site can clone it without a checkout token.

## Enable CMS sign-in

After the **Deploy Decap OAuth Worker** workflow in the site repository
succeeds, replace `REPLACE_WITH_WORKER` in `admin/config.yml` with the deployed
Worker URL. Do not add GitHub OAuth values to this repository.

## Writer access and deployment token

The dispatch token is available to `.github/workflows/notify-site.yml`.
Anyone who can change workflows on the default branch could expose it, so grant
write access only to trusted people who may also trigger deployments of the
paired private site. If that is not acceptable, have a platform maintainer
publish content changes instead.

See the site repository's `docs/template-adoption-guide.md` for the full
onboarding and deployment process.
