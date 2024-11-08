# meese.enterprises

[![DeepSource](https://deepsource.io/gh/meese-enterprises/website.svg/?label=active+issues&show_trend=true&token=fIqMM9HkwVxe8orUxktXi7hd)](https://deepsource.io/gh/meese-enterprises/website/?ref=repository-badge)
[![DeepSource](https://deepsource.io/gh/meese-enterprises/website.svg/?label=resolved+issues&show_trend=true&token=fIqMM9HkwVxe8orUxktXi7hd)](https://deepsource.io/gh/meese-enterprises/website/?ref=repository-badge)

The code is based off of the _amazing_ [Gatsby template](https://github.com/EmaSuriano/gatsby-starter-mate) by [@EmaSuriano](https://github.com/EmaSuriano), but the unique look and feel is our own. Here at Meese Enterprises, we have a passion for creating beautiful, functional, and user-friendly websites. We are a small team of developers, designers, and content creators who are dedicated to creating the best possible user experience for our customers, so we wanted to emulate and demonstrate our passions via our landing page.

<!-- TODO: Finish getting this working and implemented before uncommenting.

To reduce the site file size and improve performance, I ran my Chinese font of choice through [Font Squirrel](https://www.fontsquirrel.com/tools/webfont-generator) and specified only the characters that this site uses. The original font is available at `./fonts/Noto.otf`, so if you want to generate your own minimalistic Chinese font you can do so. Eventually I would like to include a Gatsby plugin to generate a subset of a font based on the characters used, but for now I did it by hand because the content is relatively static.

-->

## Technology Suite

### Gatsby

While we love starting projects from scratch _more_ than the next guy, that isn't always the best route to the desired outcome. Gatsby serves as a bootstrapping tool to take a rough starter template and give it a completely unique aesthetic, based on the needs of the client.

Our dedicated design team provides the developers with a mock-up of the site, so the devs can focus on writing the important bits of logic that make a site unique instead of reinventing the wheel and wasting the client's time.

### Contentful

Contentful is a powerful tool that allows us to create and manage content for our site. Any changes that we want to make to the content can be made through the Contentful CMS, allowing us to abstract these modifications from the code so the developers and content creators can work in tandem without having to wait on one another.

### GraphQL

GraphQL allows our site to request only the data that it needs and only when it is needed, keeping information sent over the wire to a minimum and reducing the load on the user's bandwidth.

<!-- IDEA:

	Use `gatsby-source-rss-feed` to create a feed of the blog posts.

	INSPIRATION: https://www.deltacloudsystems.com/
	https://cyberpunkonline.net/
	https://gramadosummit.com/

	IDEAS:
	- https://codepen.io/alvarotrigo/pen/eYEPgON : Hypnotic shape-shifting background pattern
	- https://codepen.io/alvarotrigo/pen/ZEJqLzY : Firefly background effect
	- https://codepen.io/MarcoGuglielmelli/pen/ExGYae : Techy node effect that follows the mouse
	- https://codepen.io/Rowno/pen/EVEgJb : Chameleon background effect
	- https://codepen.io/alexcu21/pen/RYxjme : Animated text gradient
	- https://codepen.io/Yusifalomeri/pen/PabqGO : Shifting geometric background pattern effect
	- https://codepen.io/codycurley/pen/bdqevE : Drawing in text line-by-line
	- VHS filter over entire page with https://i.pinimg.com/originals/5f/74/28/5f7428eb2927783782d5a5d2df8bf986.png

	TODO:
	- Support Drupal and display badge: https://www.drupal.org/association/campaign/become-a-member-2021

-->

## Development

```sh
# Use the correct Node version
nvm install
nvm use

# Install dependencies
yarn install

# Run the development server
yarn run start
```
