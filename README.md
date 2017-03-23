## Document It

Your repository must include a `readme.md` that answers the following questions regarding your subject. No need to write a book!

- Why did you choose this subject?
    - We basically chose one of the languages at random.  None of us were familiar with Ember prior to this.

- How were you first made aware of it?
    - this lab

- What problem does it solve?
    - build a website in a heartbeat with much less risk of dumb and/or crazy-making time-consuming syntactical errors

- How does it solve the problem (conceptually)?

    - it puts wrappers around common tasks, like creating routes and models

- Why does one use it?

    - ~instant gratification
    - writes code that writes code, and that improves my qualify of living with less hair-pulling
    - wicked easy fast install
    - does a lot for you:
      - creates development server
      - compiles Template
      - minfies
      - you can use es6 via Babel
      - writes test cases
      - customizes a README file
      - uses handlebars
      - uses reusable components
      - like Node it senses file changes and recompiles, reloads page backgroundedly
    - appears well-documented

- What are the alternatives?

    - rails
    - angular
      - there must be downfalls, but for quick turnaround this is much better easier faster than angular.
      - maybe there's a tradeoff in volume, scaling, complexity, dont know, yet.

- What is it similar to, if anything?
    - Rails in particular, since both are highly opinionated.

- What is the history of this technology?
  - Who built it and why?

    Yehuda Katz was the original developer and it was released on December 8th, 2011.  It was intended for the creation of SPAs using common idioms and best practices.

    - Who is maintaining it?

    The Ember Core Team is maintaining Ember.  The latest stable release came out January 23rd, 2017.

- What is your opinion on the technology after having built something with it?

    - :o) it's a total relief.  it does a lot of stuff under the hood that should be done under the hood and not subject to us missing commas and braces and brackets and losing our minds thereto.  why, it's almost computer-y

- What are the biggest conceptual hurdles (if any) you encountered when researching this?

    - There really weren't any.  The Ember documentation is very detailed, but also easy to understand.

- What resources do you recommend for interested students?

    https://guides.emberjs.com/v2.12.0/getting-started/quick-start/
    http://fromrailstoember.com/

- What article or forum was most helpful to you in learning this?

    - Definitely the Ember Getting Started guide linked above.  We only needed their documentation to build our app.

- What are 3 interview questions one might be asked about this technology?

    - They might ask questions about some of the commands used to build the app or provide a broken sample of code to see how a candidate would fix it.

Also, please include the instructions necessary to...

- Run your example.

  - http://localhost:4200  this worked immediately, even before running the build in:
  `$ ember build --env production`
  - Do I need to run `bower install`?

    - The following should be sufficient for this app:
      npm install
      npm install -g ember-cli@2.12
      bower install

  - Do I need an API key?

    - No.  There's no API.

- Use your subject.
  - Do I need to include it in my HTML with `<script>` tags? Do I need to `brew install` anything?

    - Unless you plan on building the app from scratch, the scripts are already included in app/index.html. The installation commands listed above should be sufficient.

  - Can I deploy it to Heroku?

    - We haven't tried, but believe it would work since it's a SPA without an API.
