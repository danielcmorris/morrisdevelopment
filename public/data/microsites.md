## Integrating Angular Microsite with .Net
While a lot of people are rewriting entire sites, in our industry, incremental releases are much easier to handle. One succesful method has been to create small stand-alone website that are simply hosted in a directory of the existing website.

For example, if you have a directory called “Purchasing”, where you have a PO list, PO Editor, Vendor List and a Vendor Editor – and all the subpages and widgets that they entail, you can simply make a new Angular Website to handle just those items, then compile it and run it in that directory.

This sounds easy, but Angular is finicky. I’m going to try to cover a few things here that are critical. There is a lot more and you all have your own favorite ways to do things, but this has been the absolute easiest for us.

## Critical Points
* Setting up a development environment
- Enabling deep linking into that site on a website hosted by IIS
- Publishing to a remote server
- Setup for Developing
- I use Visual Studio 2020 for .Net development, but I use VS Code for Angular.

Normally, you will have your big website open locally and you’re running it via the Visual Studio engine in the browser. Here’s one that I wrote decades ago when .Net WebForms was the hot thing. (yikes!)

![alt text](/data/microsites1.png "Title")