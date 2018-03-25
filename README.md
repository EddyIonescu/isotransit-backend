# isotransit-backend
Generates isochrones using Valhalla and Bing Maps Isochrone API

## Purpose

To generate isochrones for isotransit.

## Driving - with and without Traffic Data

Bing Maps Isochrone API is the only provider of isochrones generated using live traffic data. Google's and Mapbox's Matrix APIs aren't intended for generating isochrones, as their rate and usage limits are too low for viable use. 

Microsoft does use HERE as their data source, so it works comparable to Google for historical traffic patterns (eg. 5pm vs 9pm on a Friday). As a sidenote, Esri ArcGIS, which is used by many planners and traffic engineers also uses HERE's traffic data for isochrones/networks. Google would have a huge advtantage for making realtime isochrones, but those are outside Isotransit's scope.

## Transit, Walking, Cycling, and Multi-Modal Trips

Microsoft includes Transit and Walking in their Isochrone API - but there are a few issues. It's often down/broken, uses a really slow walking speed, returns nothing if you can't make it onto a transit vehicle, has no cycling/driving to transit support, and has no transperancy in what GTFS data it's using.

A self-hosted instance of Valhalla (developed by Mapzen and now maintained by Mapbox) is used to generate the required isochrones.

## Future Roadmap

- add support for isochrones assuming you cycle to/from transit
- add support for isochrones assuming you drive/rideshare to/from transit
- add ability to share isochrones by generating a sharable link
- generate transit isochrones using AVL (Automatic Vehicle Location - archive of GPS data from buses) (using OpenTransit's API - https://github.com/trynmaps/tryn-api) instead of schedules (via GTFS feeds from Transit.land).

## Getting Started

1. `npm install`
2. Download `isotransit-data` from here (TODO - dropbox link here) and ensure it's in the same parent directory as this repo.
3. Ensure Valhalla's running - https://github.com/valhalla/docker
4. `npm start`

## Deploying

TODO - add Dockerfile
