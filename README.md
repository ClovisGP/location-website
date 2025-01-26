# Parceller - Front

Welcome to the repository of the front of the Parceller's solution.

## Table of Content
- [The project](#the-project)
- [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
- [Development](#development)
- [Launch](#launch)

## The project
This repository contains the website for the Parceller project, a solution aimed at managing deliveries for households. I developed this code in my free time, primarily to train myself in these technologies, but also to keep myself occupied, and of course, to have a tool for managing my parcel deliveries.

## Installation
### Prerequisites
- Node.js v20.11.1: [Install Node.js](https://nodejs.org/)
### Setup
To setup the project, please follow this steps:
1. Clone the project
2. At the root of the project, create the ```.env``` file like the following example :
    ```
    NEXT_PUBLIC_EXPRESS_URL=[The USRL of the server - example: http://localhost:4000]
    ```
3. Next is to install the dependencies. In the root of the project, run ```npm install```.

## Development
To run the project in development mode, you need to:
1. On the first launch, you have to run : ```npm run build``` to build the project.
2. Run : ```npm run dev```. You do not need to relaunch the project for each modification.

## Launch
To run the project:
1. Run : ```npm run build``` to build the project.
2. Run : ```npm run start``` to start the project.