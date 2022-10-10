<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="wrapper">
        <dl>
            <dt>RWD</dt>
            <dd>Responsive Web Design</dd>
            <dt>URL</dt>
            <dd>Uniform Resource Locator</dd>
        </dl>
        <hr>
        <figure>
            <blockquote cite="https://www.huxley.net/bnw/four.html">
                <p>Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.</p>
            </blockquote>
            <figcaption>—Aldous Huxley, <cite>Brave New World</cite></figcaption>
        </figure>
        <hr>
        <menu>
            <!-- Keine on... Attribute verwenden!!! -->
            <!-- OnClick wird nicht mehr verwendet! auch wenn dies noch funktioniert -->
            <li><button onclick="copy()">Copy</button></li>
            <li><button onclick="cut()">Cut</button></li>
            <li><button onclick="paste()">Paste</button></li>
        </menu>

        <!-- strong, em, del und ins sind bedeutsamer, da diese von Suchmaschinen gefunden werden können.
            Semantische Tags-->
        <p><b>Ich bin einfach nur ein fetter Text.  b</b></p>
        <p><strong>Ich bin bedeutsamer fetter Text. strong</strong></p>
        <p><i>Ich bin ein kursiver Text. i</i></p>
        <p><em>Ich bin bedeutsamer kursiver Text. em</em></p>
        <p><s>Ich bin ein durchgestrichener Text. s</s></p>
        <p><del>Ich bin vom Editor durchgestrichener Text. del</del></p>
        <p><u>Ich bin unterstrichener Text. u</u></p>
        <p><ins>Mich hat der Editor hinzugefügt. ins</ins></p>
        <p>H<sub>2</sub>O</p>
        <p>m<sup>3</sup></p>
        <!-- span zum späteren stylen eines Textes innerhalb von span -->
        <p><samp>let i = 0</samp></p>
        <p><code>let i = 0</code></p>
        <p><abbr title="what">WHATWG</abbr></p>
        <p><mark>Lorem Ipsum</mark></p>
        <p>New Products:</p>
        <ul>
            <li><data value="398">Mini Ketchup</data></li>
            <li><data value="399">Jumbo Ketchup</data></li>
            <li><data value="400">Mega Jumbo Ketchup</data></li>
        </ul>
    </div>    
</body>
</html>