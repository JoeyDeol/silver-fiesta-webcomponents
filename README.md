# silver-fiesta-webcomponents
This repo is a collection of different branches containing experiments conducted with Web Components.




## Lessons Learned
- IMPORTANT: While working with slots I found that whatever 'outside' styles applied to an element that you are placing within a slot cannot be overwritten by styles defined within any given component.
  - That being said, you do have the ability to add additional styles to a element being placed into a slot from a given component's style tags by using the `::slotted()` selector.
