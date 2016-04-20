# Satairu 0.0.3
Lighweight SASS Framework

<a href="https://codeclimate.com/github/stefanmos/Sutairu"><img src="https://codeclimate.com/github/stefanmos/Sutairu/badges/gpa.svg" /></a>

Website: http://stefanmos.github.io

### Updates:
- Added Animate.css
- Added Vendor Prefixes for animations
- Restructured a lot of the SASS
- Bug Fixes

### To Do:
- Add -moz properties in Animate.css (This is currently killing my GPA, I might just remove this)
- Create new buttons
- Add custom checkboxes
- Add validation errors
- Add sticky sections
- Create Sutairu Ruby Gem
- Install wit npm

### Setup

Included these two stylesheets to use Sutairu

```html
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/animate.css">
```

### Set up the config.sass file

I have included a very basic configuration file to help you set up the desired amount of columns, grid size, breakpoints, colors, fonts, paddings and a few utilities. Just set up as desired and run your sass compiler

```sass
// Set the number of columns
$columns: 12
$grid-size: 800px

// Breakpoints
$desktop: 1100px
$tablet: 700px
$mobile: 480px
...
```

### How to use

To start building a layout add `.grid` to create constrained content or `.grid-fill` to create a full width section. They can also be used together by surrounding `.grid` with `.grid-fill` when you want a full-width color background but you still want your content constrained. Afterwards just add your columns like `column-6-12` and you have a responsive page structure.

```html
<div class="grid-fill">
    <div class="grid">  
        <div class="column-4-12">
            <div class="block">column-4-12</div>
        </div>
        <div class="column-4-12">
            <div class="block">column-4-12</div>
        </div>
        <div class="column-4-12">
            <div class="block">column-4-12</div>
        </div>
    </div>
</div>
```


