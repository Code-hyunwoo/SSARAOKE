function MyPageBG() {
    
    var vw = window.innerWidth;
    var vh = window.innerHeight;

    var textures = document.querySelectorAll(".star");
    var main = document.querySelector("main");
    var frag = document.createDocumentFragment();

    var appearMin = 0.3;
    var appearMax = 0.8;

    var delayMin = 2;
    var delayMax = 6;

    var durationMin = 0.3;
    var durationMax = 1;

    var numAnimations = 50;
    var numStars = 300;

    var stars = [];
    var eases = [];

    for (var i = 0; i < numAnimations; i++) {if (window.CP.shouldStopExecution(0)) break;

    // var ease = new RoughEase({
    //     template: Linear.easeNone,
    //     strength: random(1, 3),
    //     points: random(50, 200) | 0,
    //     taper: "both",
    //     randomize: true,
    //     clamp: true });


    // eases.push(ease);
    }

    // Wait for images to load
    window.CP.exitedLoop(0);window.addEventListener("load", onLoad);

    function onLoad() {

    for (var i = 0; i < numStars; i++) {if (window.CP.shouldStopExecution(1)) break;
        stars.push(createStar());
    }window.CP.exitedLoop(1);

    main.appendChild(frag);
    }

    function createStar() {

    var index = random(textures.length) | 0;
    var star = textures[index].cloneNode(true);
    frag.appendChild(star);

    // TweenLite.set(star, {
    //     rotation: random(360),
    //     xPercent: -50,
    //     yPercent: -50,
    //     scale: 0,
    //     x: random(vw),
    //     y: random(vh) });


    // var tl = new TimelineMax({ repeat: -1, yoyo: true });

    for (var i = 0; i < numAnimations; i++) {if (window.CP.shouldStopExecution(2)) break;

        var ease1 = eases[random(numAnimations) | 0];
        var ease2 = eases[random(numAnimations) | 0];

        var alpha = random(0.7, 1);
        var scale = random(0.15, 0.4);

        var appear = "+=" + random(appearMin, appearMax);
        var delay = "+=" + random(delayMin, delayMax);
        var duration1 = random(durationMin, durationMax);
        var duration2 = random(durationMin, durationMax);

        // tl.to(star, duration1, { autoAlpha: alpha, scale: scale, ease: ease1 }, delay).
        // to(star, duration2, { autoAlpha: 0, scale: 0, ease: ease2 }, appear);
    }window.CP.exitedLoop(2);

    // tl.progress(random(1));

    return {
        element: star,
        // timeline: tl 
    };

    }

    function random(min, max) {
    if (max == null) {max = min;min = 0;}
    if (min > max) {var tmp = min;min = max;max = tmp;}
    return min + (max - min) * Math.random();
    }

    return(
        <div>
            <main></main>

            <aside style="display:none">
                <img class="star" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/neon-star6.png" />
                <img class="star" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/neon-star7.png" />
                <img class="star" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/neon-star8.png" />
                <img class="star" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/neon-star9.png" />
                <img class="star" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/neon-star10.png" />
            </aside>

        </div>

    )
}
export default MyPageBG;