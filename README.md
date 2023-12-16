Rockbite test task
Bouncing Ballz
Micro physics simulator in browser

Objective
Develop a web application using html5 canvas, where users can click on the screen to spawn a circle. This circle should realistically obey Earth-like gravity, moving vertically and bouncing upon hitting the bottom of the screen, with a dampening effect on each bounce until it comes to a stop. There can be multiple circle instances on screen at a time.

Requirements
Programming Language: Implement the task using JavaScript or TypeScript, with a preference for TypeScript.
Interaction: Enable the spawning of a circle at the user's click location.
Realistic Physics Simulation: The circle should fall and bounce realistically, with gravity settings resembling Earth's gravity. Bouncing should exhibit a dampening effect, reducing the bounce height progressively until the circle stops.
Code Quality: Write clean, readable, and maintainable code.

Third-Party Libraries and Tools

Minimal Use: Rely primarily on your coding skills, limiting the use of third-party libraries.
Acceptable Libraries: It’s ok to use something minimalistic for small aesthetics, but do not use graphics engines, things like pixi, react e.g. Ask if not sure. Ideally - nothing external.
Use canvas: for anything visual use native stuff like canvas and css

Game-Loop concept:
In game dev it’s important to achieve movement of objects, by updating values a small fraction on each frame, usually in a tick method. A 'tick' method updates game elements each frame, using 'delta time' to ensure smooth motion regardless of frame rate.

function tick(currentTime: number) {
    const deltaTime = currentTime - lastTime;
    // ... update game elements using deltaTime
    lastTime = currentTime;
    requestAnimationFrame(tick);
}

requestAnimationFrame(tick);

Additional Considerations
Pay attention to the aesthetics of the animation, aiming for a visually appealing and realistic representation. Subtle visual enhancements demonstrating an eye for design are encouraged. Don’t know what makes things look aesthetic, modern and minimalistic? Ask the internet!
We will focus on the technical implementation, code quality, realism and creativity of your visual presentation. From start to finish.
If your submission can be improved with additional features - add them!
It is ok to use an LLM during this test, as long as you improved and modified a huge bulk of it, and are prepared to write code and discuss details during the next level on-site interview.
Think about user satisfaction. What else can you do from the small additions to this task that will make users enjoy the process of circle-dropping more. Attention to details matter.
There is a huge list of improvements you can do on top of the main requirements, and for each one we will add a bonus point. Creativity is important for this task. 
Optimization is a bonus, but it’s also ok to have no more than 15 circles on the screen at any time.

Submission

Use GitHub for project submission. Include a README.md with setup and execution instructions, using proper markup.
Your project should be publicly accessible on GitHub or if private please share to us at: azakhary & Tom-Ski
Send the project link as a reply to our email
