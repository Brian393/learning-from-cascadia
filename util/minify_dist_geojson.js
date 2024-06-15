#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const dir = './dist/geojson/';

function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    return content.slice(1);
  }
  return content;
}

function readDir(_dir) {
  fs.readdir(_dir, function(err, filez) {
    if (err) {
      console.warn('0noz! caught error! dir:', _dir, ' err:', err);
    } else {
      readFilez(filez, _dir);
    }
  });
}

function readFilez(filez, _dir) {
  filez.forEach(function(f) {
    const filePath = path.resolve(_dir, f);
    fs.lstat(filePath, function(err, stats) {
      if (err) {
        console.warn('1noz! caught error! dir:', _dir, ' f:', f, 'err:', err);
      } else if (stats.isDirectory()) {
        readDir(filePath);
      } else {
        fs.readFile(filePath, 'utf-8', function(err, content) {
          if (err) {
            console.warn('2noz! caught error! dir:', _dir, ' f:', f, 'err:', err);
          } else {
            try {
              const strippedContent = stripBOM(content);
              const data = JSON.parse(strippedContent);
              fs.writeFile(filePath, JSON.stringify(data), (err) => {
                if (err) {
                  console.warn('3noz! caught error! ..bad .geoJSON data? dir:', _dir, ' err:', err);
                } else {
                  console.info('minified:', filePath);
                }
              });
            } catch (parseErr) {
              console.warn('4noz! JSON parse error! file:', filePath, 'err:', parseErr);
            }
          }
        });
      }
    });
  });
}

// INIT
readDir(dir);

