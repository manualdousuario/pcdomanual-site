FROM ruby:3.1-slim AS builder

RUN apt-get update && apt-get install -y \
    build-essential \
    git \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY Gemfile Gemfile.lock ./

RUN bundle config set --local path 'vendor/bundle' && \
    bundle install --jobs 4 --retry 3

COPY . .

RUN bundle exec jekyll build --verbose

FROM caddy:2.7-alpine

COPY --from=builder /app/_site /usr/share/caddy

EXPOSE 80