# Sutairu 0.8.2
Lighweight Sass Framework

[![Code Climate](https://codeclimate.com/github/stefanmos/Sutairu/badges/gpa.svg)](https://codeclimate.com/github/stefanmos/Sutairu)

Website: http://stefanmos.github.io/sutairu/

### Updates:
- SASS improvements
- Selectbox styling
- Extented config
- Mixins are separated now
- Navagation with float sections

### Fixes
- Floating fix with custom semantic buttons

### Build list (To Do):
- Add custom checkboxes
- Add validation errors
- Add sticky sections
- Slider
- NPM install
- Ruby Gem
- Flexbox

### Setup

Included the Sutairu stylesheet and Javascript files

```html
<link rel="stylesheet" href="css/sutairu.css">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
<script src="js/sutairu.js"></script>
```

### Set up the config.sass file

I have included a very basic configuration file to help you set up the desired amount of columns, grid size, breakpoints, colors, fonts, paddings and a few utilities. Set these up to your requirements and run your SASS compiler.

```sass

//Grid
$columns: 12        // Number of columns
$grid-size: 1024px  // Constrained width size

// Breakpoints
$xl: 1440px
$l: 1024px
$m: 768px
$s: 1px

//Fonts
@import url(http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900)

$brand-font: 'Raleway', sans-serif
$font-base: 16px
$global-line-height: 1rem
$paragraph-line-height: 1.6rem

// Colours
$body-color: #8A8A8A
$primary-color: #D670A2
$secondary-color: #E5E5E5

// Notice
$info: #3498db
$verified: #83D699
$warning: #e76e22
$disabled: #8A8A8A

// Borders
$border-style: 1px solid $primary-color
$border-radius: 2px

// Paddings
$content-padding: 0.5rem
$input-padding: 10px

```

### Rows & Columns

To start building a layout add `.row-grid` to create constrained content or `.row-full` to create a full width section. They can also be used together by surrounding `.row-grid` with `row-full` when you want a full-width color background but you still want your content constrained. Afterwards just add your columns eg `col-6-12` and start creating your content.

```html
<div class="row-full">
    <div class="row-grid">  
        <div class="col-4-12">
            <div class="block">column 4 of 12</div>
        </div>
        <div class="col-4-12">
            <div class="block">column 4 of 12</div>
        </div>
        <div class="col-4-12">
            <div class="block">column 4 of 12</div>
        </div>
    </div>
</div>
```

### Typography

```html
<h1>H1 Heading</h1>
<h2>H2 Heading</h2>
<h3>H3 Heading</h3>
<h4>h4 Heading</h4>
<h5>H5 Heading</h5>
<h6>H6 Heading</h6>
<small>Small Text</small>
<p>Lorem Ipsum</p>
```

### Navagation

```html
<nav>
  <ul>
    <li><a href="">About</a></li>
    <li><a href="">Work</a></li>
    <li><a href="">Contact</a></li>
  </ul>
</nav>
```

If you want to separate your logo and you menu items you can apply `.nav-left` and `.nav-right` to float these sections.

```html
<nav>
  <ul class="nav-left">
    <li><a href="#">Logo</a></li>
  </ul>
  <ul class="nav-right">
    <li><a href="">About</a></li>
    <li><a href="">Work</a></li>
    <li><a href="">Contact</a></li>
  </ul>
</nav>
```

### Semantic Buttons

```html
<button class="button-left">button left</button>
<button class="button">button center</button>
<button class="button-right">button right</button>
```

### Link Buttons

```html
<a href="" class="button-left">anchor link button left</a>
<a href="" class="button">anchor link button center</a>
<a href="" class="button-right">anchor link button right</a>
```

### Grouped Buttons

```html
<div class="button-group">
  <a href="" class="button">button</a>
  <a href="" class="button">button</a>
  <a href="" class="button">button</a>
  <a href="" class="button">button</a>
  <a href="" class="button">button</a>
</div>
```

### Dropdown

```html
<div class="dropdown">Dropdown
  <ul>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
  </ul>
</div>
```

### Select Box

```html
<select>
  <option value="Item 1">Item 1</option>
  <option value="Item 2">Item 2</option>
  <option value="Item 3">Item 3</option>
  <option value="Item 4">Item 4</option>
</select>
```

### Tabs

```html
<ul class="tabs">
  <li class="tab-link current" data-tab="tab-1">Tab One</li>
  <li class="tab-link" data-tab="tab-2">Tab Two</li>
  <li class="tab-link" data-tab="tab-3">Tab Three</li>
</ul>

<div id="tab-1" class="tab-content current">
  <h5>Tab 1</h5>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu nisl a eros dignissim imperdiet eget non justo. Mauris tristique imperdiet tortor a auctor. Donec ac aliquet nisl, et vulputate lacus. Phasellus sed augue velit. In vitae maximus ex.</p>
</div>
<div id="tab-2" class="tab-content">
  <h5>Tab 2</h5>
  <p>Proin eu nisl a eros dignissim imperdiet eget non justo. Mauris tristique imperdiet tortor a auctor. Donec ac aliquet nisl, et vulputate lacus. Phasellus sed augue velit. In vitae maximus ex.</p>
</div>
<div id="tab-3" class="tab-content">
  <h5>Tab 3</h5>
  <p>Donec ac aliquet nisl, et vulputate lacus. Phasellus sed augue velit. In vitae maximus ex. Proin eu nisl a eros dignissim imperdiet eget non justo. Mauris tristique imperdiet tortor a auctor.</p>
</div>
```


### Final Words

Sutairu is still in beta but any suggestion, contributions or bugs reports are welcome.
Feel free to follow me on twitter https://twitter.com/stefanmostert
