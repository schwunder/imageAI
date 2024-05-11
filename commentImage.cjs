const { execSync } = require('child_process');
const path = require('path');
const tag = require('osx-tag');

function updateComments(filePath, updatedComment) {
  // Convert to absolute path
  const absoluteFilePath = path.resolve(filePath);

  // Retrieve the current comment using mdls command
  const currentComment = execSync(`mdls -r -nullMarker "" -n kMDItemFinderComment "${absoluteFilePath}"`).toString().trim();
  console.log(`${absoluteFilePath} (current comment): ${currentComment}`);

  // Update the comment using AppleScript
  const script = `
    set filepath to POSIX file "${absoluteFilePath}"
    set the_File to filepath as alias
    tell application "Finder" to set the comment of the_File to "${updatedComment}"
  `;

  try {
    execSync(`osascript -e '${script.replace(/'/g, "'\"'\"'")}'`);
    console.log(`${absoluteFilePath} (updated comment): ${updatedComment}`);
  } catch (error) {
    console.error(`Error updating comment: ${error.message}`);
  }
}
module.exports = { updateComments };
