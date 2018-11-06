/* This file contains references to the vendor libraries in this project
this is used by webpack production build only.
All the libraries referenced here will be written to vendor.js so they can be cached
until one of them changes. This avoids the users having to download a huge JS file
anytime a line of code changes.
Any files not referenced here will be bundled into main.js for the production build.
*/

/* eslint-disable no-unused-vars */

import fetch from 'whatwg-fetch';
