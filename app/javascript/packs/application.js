// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const image//= require_tree .s = require.context('../images', true)
// const imagePath = (name) => images(name, true)
//= require rails-ujs
//= require bootstrap-sprockets
//= require bootstrap
//= require jquery
//= require turbolinks
//= require_tree .

// We have to make sure turbolinks is loaded before we work our magic, feel free to experiment without!
document.addEventListener('turbolinks:load', function () {
  // Assign the elements we're intrerested in to variables
  const openProjectButton = document.getElementById('new-project-button')
  const projectPopover = document.getElementById('new-project-popover')
  // debugger;
  const projectForm = document.getElementById('new-project-form')
  const projectName = document.getElementById('project-name-input')

  // Let's check to see if these elements exist before we add our listeners. We'll get warnings in our browser console otherwise.
  if (openProjectButton && projectPopover) {
    // Attach an event listener to our new project button
    openProjectButton.addEventListener('click', function () {
      // If the project popovers class list contains the 'is-hidden' class, remove it, otherwise return null
      return projectPopover.classList.contains('is-hidden') ? projectPopover.classList.remove('is-hidden') : null
    }, false)

    // Attach a click event listener to our cancel button
    const cancelProjectPopover = document.getElementById('cancel-project-popover')
    cancelProjectPopover.addEventListener('click', function () {
      // We can safely assume that if our user can see the Cancel button, then the
      // .is-hidden class is not part of the class list of project pop-over and we can
      // add it.
      return projectPopover.classList.add('is-hidden')
    }, false)
  }

  // Handle errors from the project form submission
  projectForm.addEventListener('ajax:error', function (xhr, status, err) {
    // Have a good look at what's returned with a console.log()
    console.log(xhr)

    // Add an error class to the project name input
    projectName.classList.add('is-invalid')

    // Create and add our error helper
    var errorNode = document.createElement('div')
    var errorTextNode = document.createTextNode('Name must not be blank')
    errorNode.classList.add('invalid-feedback')

    errorNode.appendChild(errorTextNode)
    // Add the error message node using this ugly line of code. Thanks StackOverflow!
    projectName.parentNode.insertBefore(errorNode, projectName.nextSibling)
  })
})
