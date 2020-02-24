# american-genius

In October of 2018, rapper and self-proclaimed "genius" Kanye West met with the 46th American president and leader of the free world, Donald Trump. The following media frenzy was a half-hour long bizarre spiel of Mr. West ranting about pretty much anything that came to his mind. The usually-verbose President Trump sat dead-silent, apparently taking it all in as if any of West's thoughts resembled any vestige of coherent sense. Sometimes reality is stranger than fiction, and this meeting was no exception.  

This is the world we live in, and the standard of intelligence and moral compass (or complete lack thereof) to which we now laud our public figures. Both men are still well-respected in their own rights, and will be for the forseeable future. Welcome to America in the 21st century.

This webapp is en homage to this (in)famous incident, and will be using two APIs to generate (in)famous quotes from both West and Trump, as if they were having a disjointed conversation about nothing. Honestly, this won't be too far from what actually happened during that meeting and might even make more sense for all we know.

## The game plan:

Planned React components (in no particular order):
- Header/Nav Bar
- Main/Home (this will act as the container)
- Footer
- Kanye Quote (generated by kanye.rest API)
- Trump Quote category selector (generated by tronaldump.io API) - this will act as the Trump container
- Trump Quote selected category meme (also generated by tronaldump.io)

## APIs and how they'll be used:

The kanye.rest API only has one endpoint and returns requests in pure text format, which makes it pretty easy to generate random quotes. After all, the genius of Kanye West cannot be categorized, as it is endless and all-encompassing compared to our mere un-gifted, pedestrian minds. This obviously makes total sense.

The tronaldump.io API however is a bit heavier, and can get requests by category, ID, date, etc. This API is based on President Trump's twitter, and we all know how much of a content goldmine these tweets have become over the years. Basically, there's a *ton* more material to work with. This API also produces branded memes with quotes already printed on them, and you bet your ass I will be making full use of this excellent feature.

## Post-MVP goals:
- Including the Youtube React component so I can autoplay the viral video of the Kanye/Donald chat that serves as the inspiration of this very webapp
- Include the Open Legal Code API so users can search and view exactly what laws & bills Prez46 has passed or vetoed during his presidency, for better or (mostly) worse.
- Heck, maybe even include access to a Charity or Non-Profit finder API so users can donate to causes dedicated to the important things our Commander in Chief defunded and/or destroyed.
- I've just learned that Genius (heh) has an API that can find and display Kanye lyrics. This might need to happen.

Disclaimer: I have nothing to do with either Kanye West or Donald Trump, nor do I plan on profiting from this open-source project using free, publicly-available APIs that provide documented quotes from both men with verifiable sources. If you are a representative from either of these estates, please don't sue me. If you aren't associated with West or Trump, please, for the love of god, stop making stupid people famous. And perhaps most importantly, please vote for literally anybody else in the next election so we don't have to go through the last 4 years AGAIN. Thanks for your support, and an even bigger thanks to the amazing fellow Americans who created the kanye.rest and tronaldump APIs <3
