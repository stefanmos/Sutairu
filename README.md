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

### How to use

To start building a layout add `.grid` to define the content width or `.grid-fill` to create a full  width section. They can also be used together by surrounding `.grid` with `.grid-fill` when you want a full-width color background but you still want your content constrained. Afterwards just add your column widths and you have a responsive page structure.

```css
<div class="grid-fill">
    <div class="grid">  
        <div class="column-1-1">
            <div class="block">column-1-1</div>
        </div>
        <div class="column-2-1"> 
            <div class="block">column-2-1</div>
        </div>
        <div class="column-2-1">
            <div class="block">column-2-1</div>
        </div>
    </div>
</div>
```


