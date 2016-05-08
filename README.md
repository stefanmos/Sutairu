# Sutairu 0.6.2
Lighweight Sass Framework

<a href="https://codeclimate.com/github/stefanmos/Sutairu"><img src="https://codeclimate.com/github/stefanmos/Sutairu/badges/gpa.svg" /></a>

Website: http://stefanmos.github.io

### Updates:
- I've spend quite a lot of time on restructuring and indexing
- Removed external animation librairies
- Config files has a few new varibles
- Mixins are separated now
- Fonts are all changes from em to rem with base as 1px

### Build list (To Do):
- Create new buttons
- Add custom checkboxes
- Add validation errors
- Add sticky sections
- Install as Ruby Gem
- Install with npm

### Setup

Included the Sutairu stylesheet and Javascript files

```html
<link rel="stylesheet" href="css/style.css">

<script src='js/jquery.min.js'></script>
<script src="js/sutairu.js"></script>
```

### Set up the config.sass file

I have included a very basic configuration file to help you set up the desired amount of columns, grid size, breakpoints, colors, fonts, paddings and a few utilities. Set these up to your requirements and run your SASS compiler.

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

### Grids & Columns

To start building a layout add `.grid` to create constrained content or `.grid-fill` to create a full width section. They can also be used together by surrounding `.grid` with `.grid-fill` when you want a full-width color background but you still want your content constrained. Afterwards just add your columns eg `column-6-12` and start creating your content.

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

### UI

I will shortly write this section as soon as I have completed the above to do's.

### Final Words

Sutairu is still in beta but any suggestion, contributions or bugs reports are welcome.
Feel free to follow me on twitter https://twitter.com/stefanmostert
