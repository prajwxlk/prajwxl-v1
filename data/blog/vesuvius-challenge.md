---
title: 'The Vesuvius Challenge'
tags: ['AI']
date: '2023-03-31'
draft: false
summary: ''
---

_Last Updated : April 1, 2023_

![The Vesuvius Challenge](https://scrollprize.org/img/landing/vesuvius.jpg)

This blog is a Work In Progress. I'll keep updating it as I make progress with the Vesuvius Challenge. If you don't know about the Vesuvius Challenge, you can learn more about it [here](https://scrollprize.org/).

I am still learing and reading about this challenge. I shall be sharing the notes I make here + the progress with the code. I am very excited to work on this challenge!

---

The first thing I am doing is going through the resources provided on the website and reading through all the conent they firstly have on their website, post which I'd pick and deep dive into the resources they've provided to us. They also do have a Discord community which I've joined. The objective of the Vesuvius Challenge is to make history by reading an unopened Herculaneum scroll for the very first time. They are providing the people who will solve the challenge first with huge rewards but with that the excitement of unraveling a piece of history is far greater!

Another reason to attempt this challenge, is that it will help me a learn a lot more on Machine Learning. I've to go through the tutorials they've shared on their website but it seems they've provided with a good amount of resources for us to get started with.
I also looked into the Data section of the website and the sizes of the scrolls are huge! The full scroll are 4.7 TB, fragments are 1.6TB in size. Thankfully the Kaggle data is 37 GB (still quite a bit file size TBH) and X-ray scans & images of the Campfire scroll 338 MB in size. This means, that i'll probably start with experimenting the Kaggle & Campfire data. Though we'll know for sure once I go through the tutorials.

So, we've got to build on the current tools and techniques for virtual unwrapping & reading of carbonized papyrus scrolls without opening them. We will have to improve on and build better tools and models.

_The three steps in the process are :_

1. _Scanning: creating a 3D scan of a scroll or fragment using x-ray tomography_
2. _Segmentation and Flattening: finding the layers of the rolled papyrus in the 3D scan and then unrolling them into a flattened "surface volume"_
3. _Ink Detection: identifying the inked regions in the flattened surface volume using a machine learning model_

We have to put together all of these steps and successfully open a Herculaneum Scroll.

For the Herculaneum papyri, the ink is not immediately visible to the naked eye and therefore we will need to use ML model to detect the ink.

### 1. Scanning

The scrolls are scanned using a particle acclerator taking hundreds t othousdans of X-ray photographs from different rotational angles. The X-ray photos are then combined into a 3D volume using one of the number of [tomographic reconstruction](https://en.wikipedia.org/wiki/Tomographic_reconstruction). A volume is a 3D picture made up of 3D pixel cubes called voxels. The voxel size tells us the physical size of the cube, and the value stored in the voxel is an estimate of that location's radiodensity. They provide us with a 3D volume (.tif "image stack"). In the directory of .tif files, each file represents a horizontal crossection or "slice" of the object ("scroll" in this case) starting from the bottom of the object and moving upwards.

> In the case of our full scroll scans, each .tif file is 100MB. For the fragment scans, sizes range from 14MB to 40MB. For the flattened surface volumes, each .tif file can be up to 280MB.

### 2. Segmentation

In this step we will be identify and capturing the 3D shape of each of the rolled papyrus scroll. _Each individual surface in our 3D volume that we are able to identify is called a "segment"._ The process of segmentation is to be applied to both scrolls and fragments.

- Scrolls can be made into one huge segment but that can be hard to distinguish in so we split it up into more mangeable pieces. Also, segmentation of the scrolls is further made more challenging as different layer of the scrols get damaged.
- Fragments are relatively easier to distinguish as they are fairly flat and have exposed surface, though we still need to look for the hidden layers of papyrus which is attached underneath the hidden layer.

The tool sugested, is called Volume Cartographer which is used to mannually annotate a surfce of one of the slices from the image stack which then is extrapolated by the software along the z-axis to other slices. _The result is a 3D mesh (.obj file) called a "segment" which intersects the volume (i.e the mesh coordinates are also volume coordinates)._

### 3. Surface Volumes
