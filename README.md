# jquery-minimalist-collapse
It's an easy collapse plugin with beautiful style inspired on Google Inbox.

<h2>Plugin requirements</h2>
<p>The simplist jQuery Minimalist Collapse plugin needs jQuery library to work. So, if you don't call on footer in your common page just get here (<a href="http://code.jquery.com/jquery-latest.min.js">http://code.jquery.com/jquery-latest.min.js</a>).</p>

<h2>About classes and attributes</h2>
<p>We just need add some classes and attributes in your HTML structure to work.</p>
<ul>
    <li><strong>.minimalist-collapse</strong> the container to rule them all</li>
    <li><strong>data-collapse</strong> is used to get where was clicked</li>
    <li><strong>data-target</strong> get the content target to show it</li>
    <li><strong>.m-collapse</strong> is our content to show</li>
</ul>

<p>You could use the same classes and attributes anywhere that you want. It's a magic and flexible stand alone component.</p>
<p>Be sure to match data-target value with the ID content where your content will appear.</p>
<p>Exemple: if your content to appear has ID "faq-5" your trigger title needs value "faq-5" to data-target.</p>

```html
  <div class='minimalist-collapse'>
    <dl class='m-result'>
      <dt data-collapse='m-collapse' data-target='#content-1'>Title #1</dt>
      <dd class='m-collapse' id='content-1'>Content #1</dd>
    </dl>

    <dl class='m-result'>
      <dt data-collapse='m-collapse' data-target='#content-2'>Title #2</dt>
      <dd class='m-collapse' id='content-2'>Content #2</dd>
    </dl>

    <dl class='m-result'>
      <dt data-collapse='m-collapse' data-target='#content-3'>Title #3</dt>
      <dd class='m-collapse' id='content-3'>Content #3</dd>
    </dl>

    <dl class='m-result'>
      <dt data-collapse='m-collapse' data-target='#content-4'>Title #4</dt>
      <dd class='m-collapse' id='content-4'>Content #4</dd>
    </dl>
  </div>
```

<h2>Installing</h2>
<p>Will be really easy to use.</p>

<p>1. First of all: call the jQuery Minimalist Collapse plugin after your jQuery called.</p>

```html
<script src="jquery.minimalist.collapse.js"></script>
```

<p>2. Usage via JavaScript:</p>
```javascript
$('.minimalist-collapse').mcollapse();
```

<h2>Options</h2>
<p>Options can be passed via JavaScript. It's easy and fun, I promess:</p>
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>shadowEffect</th>
            <td>boolean</td>
            <td>true</td>
            <td></td>
        </tr>
        <tr>
            <th>contentFocus</th>
            <td>boolean</td>
            <td>true</td>
            <td></td>
        </tr>
        <tr>
            <th>delay</th>
            <td>string</td>
            <td>"walker"</td>
            <td></td>
        </tr>
    </tbody>
</table>

```javascript
$('.minimalist-collapse').mcollapse({
    shadowEffect: true,
    contentFocus: true,
    delay: 'walker'
});
```