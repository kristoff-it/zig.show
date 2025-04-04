---
title: ""
layout: speak
draft: false
---
<style type="text/css">
	#logo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transform: scale(0.5);
    }
	#question-container {
	  min-width: 60vw;
	  max-width: min(90vw, 500px);
	}

  #question-container p {
    text-transform: none;
  }

	details {
	    font-family: sans-serif;
	    font-size: 1.5rem;
	    border-radius: 4px;
	    padding: .5em .5em 0;
	    margin-bottom: 2rem;
	}

	summary {
	    cursor: pointer;
	    font-family: 'Press Start 2P', cursive;
	    line-height: 1.4rem;
	    font-weight: bold;
	    margin: -.5em -.5em 0;
	    padding: .5em;
	    border: 1px solid #aaa;
	    font-size: 1.2rem;
	    letter-spacing: 1px;
	    /* Works on Chrome, but not Firefox.
	       SHAMEFUL DISPLAY.       
	    display: flex;
	    flex-direction: row-reverse;
	    justify-content: space-between;
	    align-items: center;
	    */
	}

	details[open] {
	    padding: .5em;
	    color: white;
	}

	details[open] summary {
	    border-bottom: 1px solid #aaa;
	    margin-bottom: .5em;
	}

	details > summary::-webkit-details-marker {
	  display: none;
	}

	details a {
	  color: #FFFF54;
	}
</style>
<div id="question-container">
    <details>
      <summary>What is Zig SHOWTIME?</summary>
      <p>
        Zig SHOWTIME is a live-streamed show that airs on Twitch where (mostly) 
        members of the Zig community present on a topic and take questions from
        the viewers.     
      </p>
    </details>
    <details>
      <summary>I've never spoken publicly before.</summary>
      Don't worry, we accept first-time speakers and if you point out that you might
      need help, we'll be happy to support you. As of now we've aired more than 30 episodes
      and for a few of the speakers that was the first time they spoke publicly.
    </details>
    <details>
      <summary>What are the prerequisites for speaking?</summary>
      <p>
        To be a speaker first of all you need to have a pair of headphones an a decent 
        microphone. The need for a good mic is self-evident, while the need for headphones
        (earbuds or any non-speaker device) is because during the Q&A part of your talk you
        will need to hear the question being posed to you without producing audio feedback
        and the usual noises that you can find in company meetings.
      </p>
      <p>
        While not strictly mandatory, it's also recommended to have a webcam of some sort (some 
        speakers have already used their phones for that purpose in the past) so that the public
        can see your face, especially during the Q&A. If you don't want to share your face, or
        you don't have a webcam, we can definitely find an alternative solution.
      </p>
      <p>
        Finally, you will probably share slides or some code. For that you will need a connection
        that can support that video stream. As of now, we're using 
        <a href="https://share.zig.show/">https://share.zig.show/</a>.
      </p>
    </details>
    <details>
      <summary>What can I talk about?</summary>
      <p>
        Clearly Zig SHOWTIME focuses on talks around Zig, but we're also open to talks about topics that
        are adjacent to Zig, like {systems, embedded, low-level} programming, WebAssembly, just to name 
        a few. If it's something that's worth knowing for a member of the Zig community, we want to hear about it.
      </p>
      <p>
        As for Zig-specific topics, we are interested in learning about your Zig project, be it a game,
        an application, a library, or even a PR that you sent to the main project. On top of that we also
        don't mind talks that explain some of the basics, like stack vs heap, how manual memory management 
        works, etc.
      </p>
      <p>
        There's also room for other less-conventional topics or formats (e.g. livecoding).
        I only ask that you try to package your talk in a 20-minute sesson (30 at most).
        If you want to tackle a problem that requires more time, please break it down into two
        separate talks. We love returning speakers, while &mdash; as you can imagine &mdash; 
        people's attention spans are farily narrow, especially when watching content on a screen.
      </p>
    </details>
    <details>
      <summary>How does the submission process work?</summary>
      <p>
        Fill the form linked at the bottom of this page. I will get in 
        contact with you to schedule your talk as soon as I can.
      </p>
      <p>
        The show doesn't air always at the same time. We change it depending on the needs of the speakers.
      </p>
    </details>
  </div>
  <div style="margin-top: 25px"></div>
  <a class="cf button" target="_blank" href="https://forms.gle/umLuHc8y2coqjaqAA">SUBMISSION FORM</a>
