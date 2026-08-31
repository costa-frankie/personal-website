---
layout: layouts/layout-project.html
title: Pi-hole network-wide ad blocker
description: A home network-wide ad blocker for ad-free browsing on all devices
icon: router
topics: ["local networking", DNS, DHCP]
date: 2026-01-02
---
## Context

I love to cook, but I absolutely hate recipe websites with all of the ads. I wanted a way to easily browse recipes and websites without constantly having to dismiss ads.

## Process

I used a Raspberry Pi and configured Pi-hole, a network-wide ad blocker, that acts as a Domain Name System-sinkhole and protects all of your network devices from unwanted ad content without having to install any client-side software.

## Outcome

As a result, over 27% of queries have been blocked on our network since configuring the pi-hole. Network performance has improved due to the fact that ads are blocked before they are even downloaded.

## Learnings

I learned more about the Domain Name System (DNS) and how our devices depend on it. I also got more comfortable making changes in my router's admin panel, such as assigning static IPs to specific devices using Dynamic Host Configuration Protocol (DHCP). Finally, I learned the importance of redundancy because the moment my Pi goes down, our whole internet will stop working!

## Next steps

Purchase another Raspberry Pi and setup pi-hole to that we have a back-up in place if the main pi-hole goes down.
