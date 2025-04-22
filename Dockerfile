FROM ruby:3.1-alpine AS builder

RUN apk add --no-cache build-base gcc cmake git

WORKDIR /app

COPY Gemfile Gemfile.lock ./

RUN bundle install

COPY . .

RUN bundle exec jekyll build

FROM caddy:alpine

COPY --from=builder /app/_site /usr/share/caddy

EXPOSE 80