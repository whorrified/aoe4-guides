/**
 * Validates a build by checking the title, civilization, and video.
 *
 * @param {Object} build - The build object to be validated.
 * @param {string} build.title - The title of the build.
 * @param {string} build.civ - The civilization of the build.
 * @param {string} build.video - The video of the build.
 * @return {string|null} - An error message if the build is invalid, or null if the build is valid.
 */
export function validateBuild(build) {
  //check title
  if (!build.title) {
    return "Title is required. Please set a build order title.";
  }

  if (!build.civ || !(build.civ != "ANY")) {
    return "Civilization is required. Please set a build order civilization.";
  }

  //check video
  return validateVideo(build.video);
}

/**
 * Validates a video link to ensure it is a valid YouTube video link.
 *
 * @param {string} video - The video link to be validated
 * @return {string|null} Error message if the video link is invalid, otherwise null
 */
export function validateVideo(video) {
  if (video) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
    var match = video.match(regExp);
    if (!match || match[2].length != 11) {
      return "Invalid youtube video link. Please update build order video.";
    }
  }
  return null;
}
