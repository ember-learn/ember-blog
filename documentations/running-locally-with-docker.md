# Running locally with Docker (recommended)

This is the recommended method to run the website app locally.
Although the website is built with Ruby, most work is done in Markdown files.
You don't need to know Ruby or install its dependencies to help out. Follow
the Docker container instructions below to install and run locally.

First, install [Docker and Compose](https://store.docker.com/search?offering=community&type=edition) and leave it running.

Next, the commands below will install all necessary dependencies for the website
app and start a server. This will take a little while to run,
possibly a few minutes. The dependencies will be installed inside a Docker
container, and do not affect your normal developer environment.

```sh
git clone git://github.com/emberjs/website.git
cd website
docker-compose build
docker-compose up
```

Subsequent runs will be much faster once all the dependencies are installed.

You can view the site locally at [http://localhost:4567](http://localhost:4567)