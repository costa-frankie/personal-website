---
layout: layouts/layout-project.html
title: Aircraft Tracker 1.0
description: Leverages APIs to fetch data about what aircrafts are flying overhead and presents it in an easy-to-use map interface
icon: travel
topics: [React, CSS, "MapLibre GL JS", "Node.js", Express, "OAuth 2.0", "OpenSky API", webpack, "npm scripts"]
date: 2026-01-03
---
## Context

We live by a busy international airport and other small regional airfields, so we hear the frequent sound of air traffic overhead. I'm naturally curious and found myself contantly wondering, "Where is that plane coming from? Where is it going? What is it transporting? People? Cargo? Who owns the plane?" So I set out to build a React app that fetches live aircraft data and displays their position on an interactive map with details like their altitude, heading, and velocity.

## Process

This was one of my first experiments with React, so I did regretfully lean more heavily on Claude to help wire up the app. I used webpack and npm scripts for the build setup. The app fetches live data from the OpenSky API and renders them on a MapLibre GL map. I also leveraged the callsign returned from the API to construct a FlightAware URL, giving users a clickable link to more flight details. Authentication with OpenSky is handled via OAuth using a clientID and secret, which are stored in a .env file.

## Outcome

I now have a React app that runs locally and when I hear a plane fly over head, I can quickly learn all about it.

## Learnings

This project deepened my understanding of React, webpack, and npm scripts. I also got hands-on experience with MapLibre GL for map rendering, DOM manipulation and OAuth authentication flows.

## Next steps

Overlay local airport boundaries on the map so users can distinguish between aircraft flying overhead from those taxiing on the runway. I'd also like to explore a lookup feature that allows users to track a specific inbound flight and estimate the ideal time to depart the house for airport pickups.
