# Restaurant/Cafe Content Template

This repository owns one venue's editable material: `content/`, uploaded media
in `public/uploads/`, and the Decap CMS in `admin/`. It intentionally contains
no Angular application code.

It is a **public** template: do not commit credentials, private customer data,
or production OAuth values. Replace every `REPLACE_WITH_...` configuration
placeholder before enabling the CMS for a venue.

The paired site repository fetches this repository when developing and building.
Every push to `main` notifies the site repository to rebuild.

## Local CMS

Clone the paired site repository, set `CONTENT_REPOSITORY_PATH` to this
repository's local path, and run `npm start` in its `restaurant/` folder. In a
second terminal run `npm run cms`, then open `http://localhost:4200/admin/`.

## Required GitHub configuration

1. In this repository, set the `SITE_REPOSITORY` repository variable to the
   paired `owner/repository` name.
2. Add `SITE_REPOSITORY_DISPATCH_TOKEN`, a fine-grained token permitted to
   dispatch workflows in that site repository.
3. In the site repository, set `CONTENT_REPOSITORY`. This repository is public,
   so the site can clone it without a checkout token.

## Writer access and deployment token

The dispatch token is available to `.github/workflows/notify-site.yml`.
Anyone who can change workflows on the default branch could expose it, so grant
write access only to trusted people who may also trigger deployments of the
paired private site. If that is not acceptable, have a platform maintainer
publish content changes instead.

See the site repository's `docs/template-adoption-guide.md` for the full
onboarding and deployment process.
