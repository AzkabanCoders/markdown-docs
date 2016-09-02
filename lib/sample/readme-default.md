# AzkabanStore.com webstore builder

This repository has a set of build configurations and all of your source consists in submodules repositories.

Actually, we have the follow teams composing the webstore build:
* Storefront
* Checkout
* My-account
* Self-help
* Services
* Wishlist

All teams listed above are owner of parts of Webstore. In case of a inner-source contributing you should to send a merge request to the target team repository.

## Webstore assets tree

The webstore assets structure tree is divided in follow parts:

| Section    | Repository permissions                                          |
|:-----------|:----------------------------------------------------------------|
| base       | all teams                                                       |
| components | Each team will have your component submodule inside this folder |
| legacy     | Storefront                                                      |
| pages      | Each team will have your pages submodule inside this folder     |


Follow bellow a **structure example** of assets directory.

```
assets
├── base
│   ├── desktop
│   └── mobile
├── components
│   ├── storefront
│   │   ├── footer
│   │   ├── product-review
│   │   ├── product-review-form
│   │   └── topbar
│   └── checkout
│       └── minicart
├── legacy
│   ├── desktop
│   │   ├── README.md
│   │   ├── static
│   │   ├── template
│   │   └── tests
│   └── mobile
│       ├── README.md
│       ├── static
│       ├── template
│       └── tests
└── pages
    ├── storefront
    │   ├── brand
    │   ├── call-center
    │   ├── category
    │   ├── category-custom
    │   ├── department
    │   ├── department-mosaic
    │   ├── home
    │   ├── installment
    │   ├── keywordpage
    │   ├── landingpage
    │   ├── lightboxSellers
    │   ├── product
    │   └── taxes-on-products
    ├── search
    ├── self-help
    ├── services
    │   ├── seller
    │   └── warranty
    ├── wishlist
    │   ├── seller
    │   └── wishlist
    └── my-account
        ├── login
        ├── sign-complement
        ├── sign-in
        ├── sign-out
        └── sign-up
```

## Some tips

### Clonning repository

To clone the main repository and all of your submodules, type the code on terminal:

```sh
mkdir -p /app/AzkabanStore-frontend/
cd /app/AzkabanStore-frontend/
git clone --recursive https://gitlab.wmxp.com.br/webstore-frontend/webstore.git
```

### Adding a new submodule
```sh
git submodule add <repository.git> <target path>
git add <target path>
git commit -m "Creating your commit message for a new submodule"
```

### Remove a submodule
* Delete the section from the .gitmodules file. Like this:
```
[submodule "vendor"]
	path = vendor
	url = git://repo.com/some-project/some-repo.git
```
* Stage the .gitmodules changes.
```sh
git add .gitmodules
```

* Delete the section from .git/config. Like this:
```
[submodule "vendor"]
	url = git://repo.com/some-project/some-repo.git
```
* Remove cache from .git
```sh
git rm --cached path/to/submodule .
```
* Remove module from .git
```sh
.git/modules/submodule_name
```
* Commit the changes
* Delete the untracked submodule files
```sh
rm -rf path/to/submodule
```

### Updating submodules
```sh
cd /app/AzkabanStore-frontend/webstore
git submodule update --init --recursive
```

### Updating submodules flow
* Make the commit on submodule repository and push it to remote branch
* Create npm tag on submodule repository (semver)
* Go to webstore repository (/app/AzkabanStore-frontend/webstore) and commit (and push) the new submodule commit reference

```sh
cd /app/AzkabanStore-frontend/webstore/assets/components/checkout
git add some-file.js
git commit -m "Creating your commit message"
git push origin master
cd ../../../
git status
git add assets/components/checkout
git commit -m "Creating your commit message"
git push origin master
```
