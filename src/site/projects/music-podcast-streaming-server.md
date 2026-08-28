---
layout: layout-project.html
title: Music & podcast streaming server
description: A personally curated radio & podcast streaming app
icon: music_cast
topics: ["Node.js", "RSS/XML", "Local networking", Javascript, HTML, CSS]
date: 2026-01-05
---
## Context

I wanted an easy way to play my favorite podcasts and radio stations from around the world without having to install an app from an appstore or pay for a subscription.

## Process

I built a Node.js app and configured it on my home server, allowing any client device on my network to stream my curated list of sound streams.

## Outcome

A lightweight streaming solution that eliminates daily friction and cognitive load by consolidating multiple audio streaming sources into a unified, easy-to-use interface. By hosting the service locally, I can stream global radio and podcast feeds from any device. No more context switching between this podcast app and that music station.

## Learnings

I learned about the podcast XML format, how RSS feeds work, and local networking configuration.

## Next steps

Build an authenticated admin panel front-end to manage the list of saved podcasts / radio stations without having to go into the code. Containerize it with Docker. Add a database for "Recently Played" or "Favorites."
