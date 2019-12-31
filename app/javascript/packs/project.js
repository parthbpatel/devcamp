// We have to make sure turbolinks is loaded before we work our magic, feel free to experiment without!
document.addEventListener('turbolinks:load', function () {
  // Assign the elements we're intrerested in to variables
  const openProjectButton = document.getElementById('new-project-button')
  const projectPopover = document.getElementById('new-project-popover')

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
})
