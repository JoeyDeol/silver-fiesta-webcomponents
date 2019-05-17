# Silver Fiesta Web Components
This repository is a collection of different branches containing experiments conducted with Web Components.

## What is Munch King
- This was meant to be a fun POC project I would create a robot king that could be fed different snacks and the robot would animate in response to being fed those snacks.

## Goals to meet with this POC
- Create a dynamic Web Component that will render content based around information passed to attributes.
  - Figure out how to access the attributes of any given Web Component.
  - Find a way to parse a comma separated list that is passed to an attribute and use that data in efficient way.
- Create a Web Component that renders another Web Component.
- Learn how to create custom events, dispatch them, attach custom data to the events, and figure out how to listen for custom events.
- Learn how to style Web Components.
- Figure out how 'outside' styles interact with the styles contained within Web Components.
  - Figure out how events between Web Components can be used to trigger animations.
  - Figure out how events between Web Components can be used to swap classes/change the nodes contained within the shadowRoot of Web Components.

## Lessons Learned
- All of the goals list above were met. There are comments within the code base that outline where certain findings were made.
- General findings on working with Web Components:
  - Creating and listening for customEvents is straight forward and can help to ensure components are communicating with each other.
  - Passing information through attributes/properties is limited to only passing strings.
    - Potentially this is already solved by other Web Component libraries, however I didn't get the time to look into that.
  - Web component life-cycle methods are straight-forward.
  - Styles can be updated easily in response to events within Web Components.

- IMPORTANT: While working with slots I found that whatever 'outside' styles applied to an element that you are placing within a slot cannot be overwritten by styles defined within any given component.
  - That being said, you do have the ability to add additional styles to a element being placed into a slot from a given component's style tags by using the `::slotted()` selector.
