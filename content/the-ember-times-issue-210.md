---
title: The Ember Times - Issue No. 210
authors:
  - anne-greeth-schot-van-herwijnen # replace with real authors from the author folder (add yourself if you're not there)
date: 2024-04-10T00:00:00.000Z
tags:
  - newsletter
  - '2024'
---

👋 Emberistas! 🐹

News 🗞️, EmberData updates 🛸,  Addons ✨, EmberEurope Q1 videos 🇪🇺, Webpack Subresource Integrity plugin for Embroider 📦, ember-serviceable-helper 🚚, Generate Glint template registry 🗂️ and Gember 🫚
<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>

---

## 🗞️ Noteworthy news

- GitHub now has full support for syntax highlighting the template tag component authoring format. (`.gjs`/`.gts`). Thanks to everyone who contributed by converting their files 👏.
- [Ember's Discord server](https://discord.gg/emberjs) has now an amazing [showcase channel](https://discord.com/channels/480462759797063690/1221113538396028938). The goal of this place is to share amazing apps or addons build with Ember!
- EmberConf is happening in New York City 🗽 on the 31st of May. With this short timeline the [opened CFP](https://forms.gle/k6MDnSomcyB4XZueA) will close on the 17th of April and talks will be accepted on a rolling basis. So do you want to share your Ember story from the Big 🍎, [send your CFP now](https://forms.gle/k6MDnSomcyB4XZueA)!

---

## [🛸 EmberData updates](https://github.com/emberjs/data/releases)

[EmberData](https://github.com/emberjs/data) has made some exciting updates recently. A [TypeScript Guide](https://github.com/emberjs/data/blob/main/guides/index.md) has been added to their in-repo guides, along with badges that show the latest published versions for each active channel to every README. They have also updated the[Compatibility table](https://github.com/emberjs/data?tab=readme-ov-file#compatibility) and made it auto-update versions of associated EmberData channels.

In addition, EmberData has published mirror packages and types packages, which unlock a new migration path. This allows for two completely distinct versions of EmberData in your app at once, making it possible to incrementally migrate smaller regions of your app to new patterns independent from the state in the rest of your app. The mirror package equivalents can be installed alongside the regular packages, and a second store can be configured.

EmberData has also added types for older EmberData versions, allowing experimentation with the native types alphas in older versions of EmberData. The types will match the types for the version number they publish under, but for the most part, they will be more accurate for 4.7+ than the DT types, and nearly exact for 4.12.

Finally, EmberData has released a new v2 addon, [@warp-drive/ember](https://github.com/emberjs/data/blob/main/packages/ember/README.md), containing various utils and components to make it simpler to work with promises and requests reactively. The `<Request />` component will pull `store` from a context if the [library](https://github.com/customerio/ember-provide-consume-context) is present in your app.

If you are looking for a place to contribute, EmberData has opened a [Polaris tracking issue](https://github.com/emberjs/data/issues/9337), so check this out!

---

## ✨ Addon updates

Check out the list of updated addons, and all they bring!

- [ember-power-select (v8.1.0)](https://github.com/cibernox/ember-power-select/releases/tag/v8.1.0) is since v8.0.0 a v2 addon, brings accesibility and type improvements
- [ember-bootstrap (v6.2.0)](https://github.com/ember-bootstrap/ember-bootstrap/releases/tag/v6.2.0) is starting with the effort of converting Ember Bootstrap to Typescript, so it's currently shipping some types, but they are neither complete nor considered stable. Checkout the [TypeScript tracking issue](https://github.com/ember-bootstrap/ember-bootstrap/issues/2053) if you want to help with the effort.
- [ember-popper-modifier (v4.1.0)](https://github.com/adopted-ember-addons/ember-popper-modifier/blob/main/CHANGELOG.md#v410-2024-02-26) migrates the addon to TypeScript and results in published Glint types.
- [ember-mobile-menu (v5.1.1)](https://github.com/nickschot/ember-mobile-menu/blob/master/CHANGELOG.md#release-2024-02-16) is since v5.0.0 a v2 addon, with a plain CSS approach instead of SCSS. It also dropped support for the `mm.LinkTo` component. In v5.1.0 the scroll lock library is added inline, because it's unmaintained and this also opens up fastboot possibilities.
- [ember-cli-deploy-s3 (v5.0.0-beta)](https://github.com/ember-cli-deploy/ember-cli-deploy-s3/releases) is as mentioned a beta release. This version upgrades the `aws-sdk` to v3. In theory, it is not breaking, but in practice, there seem to be some credential setups that have issues. Please try it on your configuration and open issues or PRs so they can get it solid for everyone.
- [ember-native-class-codemode (v4.1.1)](https://github.com/ember-codemods/ember-native-class-codemod/blob/main/CHANGELOG.md#release-2024-02-26) adds the option to run in `NO_TELEMETRY` mode, with the inherent risks. This codemod converts Ember objects to es6 native classes.
- [ember-cli-typescript (v5.3.0)](https://github.com/typed-ember/ember-cli-typescript/releases/tag/v5.3.0) drops support for Node 12, and loosens the version check against ember-cli-babel.
<!-- alex ignore whitelist -->
- [ember-intl-analyzer (v4.6.0)](https://github.com/mainmatter/ember-intl-analyzer/releases/tag/v4.6.0) now supports custom `t` wrappers and a new option to flag redundant whitelist entries.
- [ember-intl (v6.5.3)](https://github.com/ember-intl/ember-intl/releases) fixes a memory leak introduced in v6.3. The [documentation](https://ember-intl.github.io/ember-intl/versions/v6.5.3/docs/quickstart-addons) now also shows who to use ember-intl in your v2 addons. In v6.5 the `intl` service was refactored, it removes unused code and makes what should be private private. This could be breaking if you overwrote a method from the service.

The group of addons below has joined the evergrowing v2 addon ecosystem.

- [ember-basic-dropdown (v8.0.0)](https://github.com/cibernox/ember-basic-dropdown/releases/tag/v8.0.0) is a very minimal dropdown. That means that it is agnostic about what it is going to contain. It is intended to be a building block for more complex components.
- [ember-power-calendar (v1.0.0)](https://github.com/cibernox/ember-power-calendar/releases/tag/v1.0.0) is a customizable calendar component.
- [ember-gesture-modifiers (v6.0.0)](https://github.com/nickschot/ember-gesture-modifiers/blob/master/CHANGELOG.md) is an addon that provides gestures as modifiers.

---

## [🇪🇺 Ember Europe Q1](https://www.youtube.com/playlist?list=PLD-8Z0-VnQIB6dblBSFy4MCXWzggLIlW4)

The first Ember Europe of 2024 is a fact. On the 21st of March a group of Ember enthousiastics gathered remotely to hear the talks of [Alex Matchneer (@matchy)](https://github.com/machty) about[language tooling](https://www.youtube.com/watch?v=6zy4nLHj83g&list=PLD-8Z0-VnQIB6dblBSFy4MCXWzggLIlW4&index=3&pp=iAQB), [Chris Manson](https://github.com/mansona)'s update on [Embroider (and maybe something about Vite 🤫)](https://www.youtube.com/watch?v=SCWpDNE0IaA&list=PLD-8Z0-VnQIB6dblBSFy4MCXWzggLIlW4&index=2&pp=iAQB), and [Isaac Lee (@ijlee2)](https://github.com/ijlee2/) about [CSS modules and internationalization](https://www.youtube.com/watch?v=J64q5SxY8rE&list=PLD-8Z0-VnQIB6dblBSFy4MCXWzggLIlW4&index=1&pp=iAQB).
Join the [Meetup Ember.js Europe group](https://www.meetup.com/ember-europe/) to get updates on the next edition!

---

## [📦 Webpack Subresource Integrity plugin for Embroider](https://github.com/jelhan/webpack-subresource-integrity-embroider)

[Jeldrik Hanschke (@jelhan)](https://github.com/jelhan) published the [Webpack Subresource Integrity plugin for Embroider](https://github.com/jelhan/webpack-subresource-integrity-embroider). The [ember-cli-sri](https://github.com/jonathanKingston/ember-cli-sri) addon provided Subresource Integrity support for Ember applications. With the migrations to Embroider, which uses Webpack as bundler, the ember-cli-sri addon does not work anymore. [This webpack plugin](https://github.com/jelhan/webpack-subresource-integrity-embroider) will make that possible again.

---

## [🚚 ember-serviceable-helper](https://github.com/chancancode/ember-serviceable-helper)

[Godfrey Chan (@chancancode)](https://github.com/chancancode) released an API for writing functions that need access to Ember services. This will help your functions to stay plain, even if they need to access some app-wide global state via services. Checkout the [documentation](https://github.com/chancancode/ember-serviceable-helper/blob/main/ember-serviceable-helper/README.md) to learn more about this convinient helper.

---

## [🗂️ Generate Glint template registry](https://github.com/bertdeblock/generate-template-registry)

[Bert De Block (@bertdeblock)](https://github.com/bertdeblock) released a new package to make [template registry](https://typed-ember.gitbook.io/glint/environments/ember/template-registry) for [Glint](https://typed-ember.gitbook.io/glint) easy.
You can run the package `npx @bertdeblock/generate-template-registry@latest` and it will give you your registry. Be aware that if your app or addon has components, helpers or modifiers with the same name, duplicate template registry entries will be generated, which will need to be fixed manually.

---

## [🫚 Gember](https://github.com/bertdeblock/gember)

[Bert De Block (@bertdeblock)](https://github.com/bertdeblock) release this new package called [gember](https://github.com/bertdeblock/gember). This package allows you to generate components, helpers, modifiers and services in v2 addons. It only supports `.gjs` and `.gts` files for components.

If you are wondering about the 🫚 icon, gember is the Dutch word for ginger.

---

## [👏 Contributors' corner](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/SergeAstapov" rel="noopener noreferrer" target="_blank">Sergey Astapov (@SergeAstapov)</a>, <a href="https://github.com/kellyselden" rel="noopener noreferrer" target="_blank">Kelly Selden (@kellyselden)</a>, <a href="https://github.com/patricklx" rel="noopener noreferrer" target="_blank">Patrick Pircher (@patricklx)</a>, <a href="https://github.com/bitxplora" rel="noopener noreferrer" target="_blank">'Dayo Olutayo (@bitxplora)</a>, <a href="https://github.com/ijlee2" rel="noopener noreferrer" target="_blank">Isaac Lee (@ijlee2)</a>, <a href="https://github.com/elwayman02" rel="noopener noreferrer" target="_blank">Jordan Hawker (@elwayman02)</a>, <a href="https://github.com/chriskrycho" rel="noopener noreferrer" target="_blank">Chris Krycho (@chriskrycho)</a>, <a href="https://github.com/NullVoxPopuli" rel="noopener noreferrer" target="_blank">@NullVoxPopuli</a>, <a href="https://github.com/gitKrystan" rel="noopener noreferrer" target="_blank">Krystan HuffMenne (@gitKrystan)</a>, <a href="https://github.com/sly7-7" rel="noopener noreferrer" target="_blank">Sylvain Mina (@sly7-7)</a>, <a href="https://github.com/VincentHardouin" rel="noopener noreferrer" target="_blank">Vincent Hardouin (@VincentHardouin)</a>, <a href="https://github.com/Baltazore" rel="noopener noreferrer" target="_blank">Kirill Shaplyko (@Baltazore)</a>, <a href="https://github.com/geneukum" rel="noopener noreferrer" target="_blank">Geordan Neukum (@geneukum)</a>, <a href="https://github.com/grayt0r" rel="noopener noreferrer" target="_blank">Ross Grayton (@grayt0r)</a>, <a href="https://github.com/mansona" rel="noopener noreferrer" target="_blank">Chris Manson (@mansona)</a>, <a href="https://github.com/bmish" rel="noopener noreferrer" target="_blank">Bryan Mishkin (@bmish)</a>, <a href="https://github.com/romgere" rel="noopener noreferrer" target="_blank">Jérôme Mestres (@romgere)</a>, <a href="https://github.com/kategengler" rel="noopener noreferrer" target="_blank">Katie Gengler (@kategengler)</a>, <a href="https://github.com/andreyfel" rel="noopener noreferrer" target="_blank">Andrey Fel (@andreyfel)</a>, <a href="https://github.com/IgnaceMaes" rel="noopener noreferrer" target="_blank">Ignace Maes (@IgnaceMaes)</a>, <a href="https://github.com/runspired" rel="noopener noreferrer" target="_blank">Chris Thoburn (@runspired)</a>, <a href="https://github.com/achambers" rel="noopener noreferrer" target="_blank">Aaron Chambers (@achambers)</a>, <a href="https://github.com/MehulKChaudhari" rel="noopener noreferrer" target="_blank">Mehul Kiran Chaudhari (@MehulKChaudhari)</a>, <a href="https://github.com/bertdeblock" rel="noopener noreferrer" target="_blank">Bert De Block (@bertdeblock)</a>, <a href="https://github.com/jaredgalanis" rel="noopener noreferrer" target="_blank">Jared Galanis (@jaredgalanis)</a>, <a href="https://github.com/chancancode" rel="noopener noreferrer" target="_blank">Godfrey Chan (@chancancode)</a>, <a href="https://github.com/MinThaMie" rel="noopener noreferrer" target="_blank">Anne-Greeth Schot-van Herwijnen (@MinThaMie)</a>, <a href="https://github.com/Yelinz" rel="noopener noreferrer" target="_blank">Yelin Zhang (@Yelinz)</a>, <a href="https://github.com/leoeuclids" rel="noopener noreferrer" target="_blank">Leo Euclides (@leoeuclids)</a>, <a href="https://github.com/jahrock" rel="noopener noreferrer" target="_blank">Jah Rock (@jahrock)</a>, <a href="https://github.com/aklkv" rel="noopener noreferrer" target="_blank">Alexey Kulakov (@aklkv)</a>, <a href="https://github.com/dwickern" rel="noopener noreferrer" target="_blank">Derek Wickern (@dwickern)</a>, <a href="https://github.com/kdagnan" rel="noopener noreferrer" target="_blank">Kyle D. (@kdagnan)</a>, <a href="https://github.com/RobbieTheWagner" rel="noopener noreferrer" target="_blank">Robbie Wagner (@RobbieTheWagner)</a>, <a href="https://github.com/gilest" rel="noopener noreferrer" target="_blank">Giles Thompson (@gilest)</a>, and <a href="https://github.com/crypto" rel="noopener noreferrer" target="_blank">Roman Shafigullin (@crypto)</a> for their contributions to Ember and related repositories! 💖</p>

---

## [🤓 Connect with us](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

<div class="blog-row">
  <img class="float-right small transparent padded" alt="Office Hours Tomster Mascot" title="Readers' Questions" src="/images/tomsters/officehours.png" />

  <p>Wondering about something related to Ember, Ember Data, Glimmer, or addons in the Ember ecosystem, but don't know where to ask? Readers’ Questions are just for you!</p>

  <p><strong>Submit your own</strong> short and sweet <strong>question</strong> under <a href="https://bit.ly/ask-ember-core" target="rq">bit.ly/ask-ember-core</a>. And don’t worry, there are no silly questions, we appreciate them all - promise! 🤞</p>

  <p>Want to write for the Ember Times? Have a suggestion for next week's issue? Join us at <a href="https://discordapp.com/channels/480462759797063690/485450546887786506">#support-ember-times</a> on the <a href="https://discord.gg/emberjs">Ember Community Discord</a> or ping us <a href="https://twitter.com/embertimes">@embertimes</a> on Twitter.</p>

  <p>Keep on top of what's been going on in Emberland this week by subscribing to our <a href="https://embertimes.substack.com/">e-mail newsletter</a>! You can also find our posts on the <a href="https://blog.emberjs.com/tag/newsletter">Ember blog</a>. See you in two weeks!</p>
</div>

---

That's another wrap! ✨

Be kind,

The Learning Team
