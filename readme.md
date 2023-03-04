# bl-nk

You are probably here because you miss the `<blink></blink>` tag like crazy. Well, miss no more. Just turn the `i` sideways, and you're back in the 90s. Don't believe me? Check out https://matthiaskainer.github.io/bl-nk/ and go aaaall the way back!

Blinking is not enough? Weeeeell, that's why this increadibly useful thing also brings back classic rainbows!

The only thing left to you is add the "Welcome to my Homepage" text... You can do it.

And never forget what the Doctor said to Sally Sparrow: 

> Don't blink

## Usage

```html
  <script src="index.js"></script>
  <bl-nk interval="100ms" color="red" size="35px">Welcome to my homepage</bl-nk>
```

## Recommended Usage

You should totally add the free rainbow effects and spice with the good ol marquee tag!

```html
<style>
    header {
        background-image: var(--rainbow-horizontal);
    }
  </style>
<header>
    <marquee direction="down" width="100%" height="100" behavior="alternate">
        <marquee behavior="alternate">
            <bl-nk interval="100ms" color="red" size="35px">
                Welcome to my homepage
            </bl-nk>
        </marquee>
    </marquee>
</header>
```

Pörfäct! (That's a german saying perfect in english)